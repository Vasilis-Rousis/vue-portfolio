<script setup lang="ts">
import { AspectRatio, type AspectRatioProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<
  AspectRatioProps & {
    class?: string
    ratio?: number
  }
>()

const ratio = computed(() => props.ratio ?? 1)
</script>

<template>
  <AspectRatio :ratio="ratio" :class="props.class">
    <slot />
  </AspectRatio>
</template>
