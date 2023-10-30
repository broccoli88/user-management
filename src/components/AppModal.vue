<script setup>
import FormButton from './FormButton.vue'
import { useFormStore } from '../stores/useFormStore'

const formStore = useFormStore()
</script>

<template>
    <div class="modal-container absolute inset-0 grid place-content-center">
        <div class="modal flex flex-col gap-6 w-[550px] px-28 py-12 bg-bg rounded-2xl">
            <p class="text-xl text-center text-white">
                <slot></slot>
            </p>
            <FormButton class="text-white" @click="formStore.closeModal">close</FormButton>
        </div>
    </div>
</template>

<style scoped>
.modal-container {
    background-color: hsl(0, 0%, 100%, 0.2);
}

.modal {
    box-shadow: 0 0 20px hsl(0, 0%, 0%, 0.7);
}
</style>
