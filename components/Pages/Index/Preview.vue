<template>
  <div class="page h-full bg-white">
    <div class="bg-gradient-to-br from-pink-400 to-pink-700 py-[30px]">
        <div class="max-w-max rounded-full bg-white/20 p-4 backdrop-blur-sm mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-8 w-8 fill-current"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        </div>

        <h1 class="text-center text-2xl font-bold mb-1">
            {{ pageInfoStore.title }}
        </h1>
        <p class="text-center text-lg">
            {{ pageInfoStore.subtitle }}
        </p>
    </div>

    <div class="page__timeline">
      <div 
        v-for="(image, index) in pageInfoStore.images" 
        :key=index
        class="grid grid-cols-[1fr_20px_1fr] gap-x-[30px]"
        :class="[
          (index + 1) != (pageInfoStore.images?.length ?? 0) ? 'mb-[50px]' : '',
        ]"
      >
        <div 
          :class="[
            index % 2 === 0 ? 'col-start-1' : 'col-start-3',
          ]"
        >
          <img 
            :src="image" 
            class="w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Files
import { usePageInfoStore } from '@/stores/usePageInfoStore'
const pageInfoStore = usePageInfoStore()
</script>

<style>

</style>