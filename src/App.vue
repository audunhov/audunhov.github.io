<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col h-full justify-between">
    <RouterView />
    <footer class="grid p-2">
      <a
        class="bg-primary-700 text-center shadow text-primary-50 rounded-2xl p-3 hover:bg-primary-800"
        href="mailto://hammerhovda@gmail.com"
        >Hire me!</a
      >
    </footer>
  </div>
</template>
