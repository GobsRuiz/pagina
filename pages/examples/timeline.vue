<template>
  <div>
    <section class="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 py-[30px]">
        <div class="max-w-max rounded-full bg-white/20 p-4 backdrop-blur-sm mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-8 w-8 fill-current"><path fill="#fff" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        </div>

        <h1 class="text-center text-white text-[36px] font-bold mb-1">
            Nossa História de Amor
        </h1>
        <p class="text-center text-white text-[20px]">
            Cada momento especial que vivemos juntos
        </p>
    </section>

    <section class="page__timeline relative my-[48px]">
        <div class="page__timeline__line w-[2px] h-full bg-gradient-to-b from-pink-300 via-rose-300 to-purple-300 absolute top-0 md:left-1/2 md:-translate-x-px"></div>

        <div class="page__timeline__row max-w-[864px] grid grid-cols-2 box-border mx-auto mb-[48px]">
            <div class="page__timeline__row__card rounded-lg bg-card text-card-foreground cursor-pointer transition-all duration-300 hover:shadow-xl ring-2 ring-pink-400 shadow-xl mr-[48px]">
                <div class="relative overflow-hidden rounded-t-lg">
                    <img 
                        src="https://kzmj9u61ol36r0o0nzw5.lite.vusercontent.net/placeholder.svg?height=200&width=300" 
                        alt="Imagem ilustrativa"
                        class="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                    >
                </div>

                <div class="p-6">
                    <div class="mb-3 flex items-center gap-2">
                        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-pink-100 text-pink-700" data-v0-t="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar mr-1 h-3 w-3">
                                <path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>
                            </svg>
                            14 de Fevereiro, 2023
                        </div>

                        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-pink-200 text-pink-600" data-v0-t="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin mr-1 h-3 w-3">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Café Central
                        </div>
                    </div>

                    <h3 class="mb-3 text-xl font-semibold text-gray-800">
                        Nosso Primeiro Encontro
                    </h3>

                    <p class="text-gray-600 transition-all duration-300 line-clamp-3">
                        O dia em que nossos olhares se cruzaram pela primeira vez. Um café simples que mudou nossas vidas para sempre.
                    </p>

                    <button class="mt-3 text-sm text-pink-600 hover:text-pink-700">
                        Ler mais...
                    </button>
                </div>
            </div>
        </div>

        <div class="page__timeline__row max-w-[864px] grid grid-cols-2 box-border mx-auto">
            <div class="page__timeline__row__card col-start-2 rounded-lg bg-card text-card-foreground shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl ml-[48px]">
                <div class="relative overflow-hidden rounded-t-lg">
                    <img 
                        src="https://kzmj9u61ol36r0o0nzw5.lite.vusercontent.net/placeholder.svg?height=200&width=300" 
                        alt="Imagem ilustrativa"
                        class="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                    >
                </div>

                <div class="p-6">
                    <div class="mb-3 flex items-center gap-2">
                        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-pink-100 text-pink-700" data-v0-t="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar mr-1 h-3 w-3">
                                <path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>
                            </svg>
                            14 de Fevereiro, 2023
                        </div>

                        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-pink-200 text-pink-600" data-v0-t="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin mr-1 h-3 w-3">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Café Central
                        </div>
                    </div>

                    <h3 class="mb-3 text-xl font-semibold text-gray-800">
                        Nosso Primeiro Encontro
                    </h3>

                    <p class="text-gray-600 transition-all duration-300 line-clamp-3">
                        O dia em que nossos olhares se cruzaram pela primeira vez. Um café simples que mudou nossas vidas para sempre.
                    </p>

                    <button class="mt-3 text-sm text-pink-600 hover:text-pink-700">
                        Ler mais...
                    </button>
                </div>
            </div>
        </div> 
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>