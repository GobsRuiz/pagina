<template>
  <div>
    <UForm :state="form">
        <UFormField label="Suba suas fotos" name="file" class="mb-4">
            <UInput 
                type="file" 
                accept="image/*"
                multiple
                @change="onFileChange"
            />
        </UFormField>
    </UForm>

    <!-- Preview das imagens -->
    <div v-if="imageUrls.length > 0" class="mt-6">
        <h3 class="text-lg font-semibold mb-4">Imagens selecionadas:</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div 
            v-for="(url, index) in imageUrls" 
            :key="index"
            class="relative group"
            >
            <img 
                :src="url" 
                :alt="`Imagem ${index + 1}`"
                class="w-full h-32 object-cover rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            />
            <button
                @click="removeImage(index)"
                class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
            >
                ×
            </button>
            <div class="mt-2 text-sm text-gray-600 truncate">
                {{ form.images[index]?.name }}
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// images
import { usePageInfoStore } from '@/stores/usePageInfoStore'
const pageInfoStore = usePageInfoStore()



// Variavbles
const imageUrls = ref<string[]>([]);

interface FormType {
    images: File[];
}

let form = reactive<FormType>({
    images: [],
});




// Functions
// Functions
function onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const images = target.files;
    
    if (images) {
        // Converte FileList para Array
        form.images.push(...Array.from(images));
        
        // Limpa URLs antigas para evitar memory leaks
        imageUrls.value.forEach(url => URL.revokeObjectURL(url));
        
        // Cria URLs para preview das imagens
        imageUrls.value = form.images.map(file => URL.createObjectURL(file));

        console.log(imageUrls.value)
        
        resetFileInput()
        updateInput('images');
    }
}

function resetFileInput() {
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    console.log(input.value)

    if(input){
        input.value = ''
    }
}

function removeImage(index: number) {
    // Remove a URL da memória
    URL.revokeObjectURL(imageUrls.value[index]);
    
    // Remove do array de arquivos e URLs
    form.images.splice(index, 1);
    imageUrls.value.splice(index, 1);
    
    updateInput('images');
}

function updateInput(field: keyof FormType) {
    pageInfoStore.setUpdateField(field, imageUrls.value)
    pageInfoStore.setUpdateField('files', form[field])

    console.log(`Updated ${field}:`, form[field]);
}
</script>

<style>

</style>