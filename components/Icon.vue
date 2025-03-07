<script setup>
import { computed } from 'vue';
import * as LucideIcons from 'lucide-vue-next';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  class: {
    type: String,
    default: ''
  }
});

const iconComponent = computed(() => {
  const iconName = props.name.startsWith('lucide:') 
    ? props.name.split('lucide:')[1]
    : props.name;
    
  // Convert kebab-case to PascalCase for Lucide icons
  const pascalCase = iconName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  return LucideIcons[pascalCase] || null;
});
</script>

<template>
  <component 
    :is="iconComponent" 
    v-if="iconComponent" 
    :size="size" 
    :color="color" 
    :class="class"
  />
  <span v-else class="icon-fallback">{{ name }}</span>
</template>

<style scoped>
.icon-fallback {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  font-size: 0.75em;
  color: currentColor;
}
</style>