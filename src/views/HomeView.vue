<script setup>
import SigninForm from '../components/SigninForm.vue'
import SignupForm from '../components/SignupForm.vue'
import { useFormStore } from '../stores/useFormStore'
import { storeToRefs } from 'pinia'
import { defineAsyncComponent } from 'vue'

const AppModal = defineAsyncComponent(() => import('../components/AppModal.vue'))
const formStore = useFormStore()
const { currentForm, isModalOpen, modalErrorMessage } = storeToRefs(formStore)
const forms = { SigninForm, SignupForm }
</script>

<template>
    <div>
        <Transition name="slide" mode="out-in">
            <component :is="forms[currentForm]" />
        </Transition>

        <Teleport to="body">
            <AppModal v-if="isModalOpen"> {{ modalErrorMessage[0].message }} </AppModal>
        </Teleport>
    </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: 0.4s all ease-out;
}

.slide-leave-to {
    transform: translateX(-100px);
    opacity: 0;
}

.slide-enter-from {
    transform: translateX(100px);
    opacity: 0;
}
</style>
