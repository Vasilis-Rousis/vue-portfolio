import type { Updater } from '@tanstack/vue-table'
import type { Ref } from 'vue'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<unknown>, V>(updaterOrValue: T, ref: Ref<V>) {
  ref.value = typeof updaterOrValue === 'function'
    ? updaterOrValue(ref.value) as V
    : updaterOrValue as unknown as V
}