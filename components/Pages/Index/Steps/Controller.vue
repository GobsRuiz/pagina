<template>
  <div class="py-[20px]">
    <h1 class="text-2xl font-bold mb-4">
        {{ titles[stepIndex - 1] }}
    </h1>
    
    <!-- Steps -->
    <div>
        <PagesIndexStepsStepOne v-if="stepIndex == 1" />
        <PagesIndexStepsStepTwo v-if="stepIndex == 2" />
    </div>

    <!-- Controller -->
    <div class="mt-4">
        <UButton v-if="stepIndex > 1" @click="stepIndex--" :disabled="stepIndex <= 1">
            Voltar
        </UButton>

        <UButton @click="stepIndex++">
            Próximo
        </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Variables
let stepIndex = ref(1);
let titles = [
    'Configurações Iniciais',
    'Configurações de Layout',
    'Configurações de Estilo',
    'Configurações Finais'
];
</script>

<style>

</style>