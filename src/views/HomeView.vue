<script setup lang="ts">
import BoxContainer from '@/components/BoxContainer.vue'
import TextHeading from '@/components/TextHeading.vue'
</script>

<template>
  <main class="grid gap-5 w-full overflow-hidden mx-auto p-2">
    <div class="text-primary-50 text-center py-24">
      <TextHeading size="lg" class="font-mono">Audun Hammer Hovda</TextHeading>
      <p class="italic">Full-stack developer based in Oslo, Norway</p>
    </div>

    <div class="grid translate-x-1/2 grid-flow-col gap-20 overflow-x-scroll snap-x snap-mandatory">
      <img
        v-for="i in 4"
        :key="i"
        width="400"
        height="200"
        class="snap-center rounded-xl"
        src="https://picsum.photos/400/200"
        alt="Random picture"
      />
    </div>

    <BoxContainer> Hvem er Audun Hammer Hovda? </BoxContainer>
  </main>
</template>
