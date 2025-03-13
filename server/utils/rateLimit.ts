// server/utils/rateLimit.ts
import type { H3Event } from 'h3'
import { createError, getRequestIP } from 'h3'

interface RateLimitOptions {
  maxRequests: number
  windowMs: number
  message?: string
  includeHeaders?: boolean
}

interface RateLimitInfo {
  count: number
  resetTime: number
}

// In-memory store for rate limiting
// For production, consider using Redis or another distributed store
const ipRequests = new Map<string, RateLimitInfo>()

/**
 * Creates a rate limiter middleware for H3 (Nuxt server)
 *
 * @param options Rate limit configuration options
 * @returns A middleware handler function
 */
export function rateLimit(
  options: RateLimitOptions = {
    maxRequests: 5,
    windowMs: 60000,
    message: 'Too many requests, please try again later',
    includeHeaders: true,
  }
): (event: H3Event) => boolean | Promise<boolean> {
  return (event: H3Event): boolean => {
    const clientIp = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
    const now = Date.now()

    // Clean up old entries periodically
    if (Math.random() < 0.01) {
      // 1% chance to clean up on each request
      cleanupExpiredEntries(now)
    }

    // Get or create rate limit data for this IP
    const ipData = ipRequests.get(clientIp) || {
      count: 0,
      resetTime: now + options.windowMs,
    }

    // Reset count if window has passed
    if (now > ipData.resetTime) {
      ipData.count = 1
      ipData.resetTime = now + options.windowMs
    } else {
      ipData.count++
    }

    // Update the store
    ipRequests.set(clientIp, ipData)

    // Add rate limit headers if enabled
    if (options.includeHeaders) {
      event.node.res.setHeader('X-RateLimit-Limit', options.maxRequests.toString())
      event.node.res.setHeader(
        'X-RateLimit-Remaining',
        Math.max(0, options.maxRequests - ipData.count).toString()
      )
      event.node.res.setHeader('X-RateLimit-Reset', Math.ceil(ipData.resetTime / 1000).toString())
    }

    // Check if rate limit exceeded
    if (ipData.count > options.maxRequests) {
      if (options.includeHeaders) {
        event.node.res.setHeader(
          'Retry-After',
          Math.ceil((ipData.resetTime - now) / 1000).toString()
        )
      }

      throw createError({
        statusCode: 429,
        statusMessage: 'Too Many Requests',
        message: options.message,
      })
    }

    return true
  }
}

/**
 * Helper function to clean up expired rate limit entries
 *
 * @param now Current timestamp
 */
function cleanupExpiredEntries(now: number): void {
  for (const [ip, data] of ipRequests.entries()) {
    if (now > data.resetTime) {
      ipRequests.delete(ip)
    }
  }
}

/**
 * Middleware factory that creates a reusable rate limiter for routes
 *
 * @param options Rate limit configuration options
 * @returns A middleware that can be used with eventHandler
 */
export function createRateLimiter(options: RateLimitOptions) {
  const rateLimiter = rateLimit(options)

  return eventHandler((event) => {
    rateLimiter(event)
    // Continue to the next handler if rate limit not exceeded
  })
}
