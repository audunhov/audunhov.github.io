<script setup lang="ts">
defineProps<{
  size: 'sm' | 'md' | 'lg'
}>()

const sizeClasses = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-7xl leading-loose'
}

const sizeComponents = {
  sm: 'h3',
  md: 'h2',
  lg: 'h1'
}
</script>

<template>
  <component :is="sizeComponents[size]" :class="sizeClasses[size]">
    <slot />
  </component>
</template>
