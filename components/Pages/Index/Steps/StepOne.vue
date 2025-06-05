<template>
  <div>
    <UForm :state="form">
        <UFormField label="Título" name="title" class="mb-4">
            <UInput v-model="form.title" placeholder="Nossa História de Amor" @input="updateInput('title')" />
        </UFormField>
        
        <UFormField label="Subtítulo" name="subtitle" class="mb-4">
            <UInput v-model="form.subtitle" placeholder="Cada momento especial que vivemos juntos" @input="updateInput('subtitle')" />
        </UFormField>

        <UFormField label="Ícone inicial?" name="homeIcon">
            <UCheckbox v-model="form.homeIcon" @input="updateInput('homeIcon')" />
        </UFormField>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
// Files
import { usePageInfoStore } from '@/stores/usePageInfoStore'
const pageInfoStore = usePageInfoStore()



// Variavbles
interface FormType {
    title: string;
    subtitle: string;
    homeIcon: boolean;
}

let form = reactive<FormType>({
    title: pageInfoStore.title,
    subtitle: pageInfoStore.subtitle,
    homeIcon: pageInfoStore.homeIcon,
});



// Functions
function updateInput(field: keyof FormType) {
    pageInfoStore.setUpdateField(field, form[field])
    console.log(`Updated ${field}:`, form[field]);
}
</script>

<style>

</style>