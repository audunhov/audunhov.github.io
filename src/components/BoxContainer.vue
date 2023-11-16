<script setup lang="ts">
withDefaults(
  defineProps<{
    variant: 'primary' | 'secondary' | 'regular'
  }>(),
  {
    variant: 'regular'
  }
)

const classes = {
  primary: 'bg-primary-900 text-primary-100',
  secondary: 'bg-primary-200 text-primary-900',
  regular: 'bg-neutral-variant-200 text-neutral-variant-950'
}
</script>

<template>
  <div :class="[classes[variant], 'smol-responsive-padding rounded-2xl']">
    <slot />
  </div>
</template>

<style scoped>
.smol-responsive-padding {
  padding: 1.5rem clamp(1rem, 5%, 3rem);
}
</style>
