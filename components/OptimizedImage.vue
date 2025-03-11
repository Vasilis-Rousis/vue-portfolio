<template>
  <div :class="wrapperClass" :style="aspectRatioStyle">
    <NuxtImg
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :placeholder="placeholder ? true : undefined"
      :format="format"
      :loading="loading"
      :class="imgClass"
      :fetchpriority="fetchpriority"
      :sizes="sizes"
      :preload="preload"
    />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: [Number, String],
    default: 800,
  },
  height: {
    type: [Number, String],
    default: 600,
  },
  wrapperClass: {
    type: String,
    default: 'relative w-full h-full overflow-hidden',
  },
  imgClass: {
    type: String,
    default: 'object-cover w-full h-full',
  },
  format: {
    type: String,
    default: 'webp',
  },
  placeholder: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: String,
    default: 'lazy',
    validator: (value) => ['lazy', 'eager', 'auto'].includes(value),
  },
  fetchpriority: {
    type: String,
    default: 'auto',
    validator: (value) => ['high', 'low', 'auto'].includes(value),
  },
  maintainAspectRatio: {
    type: Boolean,
    default: false,
  },
  aspectRatio: {
    type: [Number, String],
    default: null,
  },
  sizes: {
    type: String,
    default: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  },
  preload: {
    type: Boolean,
    default: false,
  },
})

const aspectRatioStyle = computed(() => {
  if (!props.maintainAspectRatio || !props.aspectRatio) {
    return {}
  }

  return {
    aspectRatio: props.aspectRatio,
    position: 'relative',
  }
})
</script>
