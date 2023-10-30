<script setup>
import { storeToRefs } from 'pinia'
import FormButton from '../components/FormButton.vue'
import FormForm from '../components/FormForm.vue'
import FormInput from '../components/FormInput..vue'
import { useFormStore } from '../stores/useFormStore'
import { computed, watch } from 'vue'

const formStore = useFormStore()
const { authUser, isUpdateFormVisible, inputData, signupData } = storeToRefs(formStore)

const showUpdateFormBtnText = computed(() =>
    isUpdateFormVisible.value ? 'Cancel' : 'Update profile'
)

const showUpdateForm = () => (isUpdateFormVisible.value = !isUpdateFormVisible.value)
</script>

<template>
    <div class="py-10 self-start">
        <header class="grid gap-5">
            <h1 class="text-5xl font-bold">Users dashboard</h1>
            <h2 class="text-2xl font-normal mt-6">Welcome</h2>
            <h3>Email: {{ authUser.email }}</h3>
        </header>

        <section>
            <div class="grid grid-cols-2 gap-5">
                <FormButton @click="showUpdateForm">{{ showUpdateFormBtnText }}</FormButton>
                <FormButton> Sign Out</FormButton>
            </div>
            <FormForm v-if="isUpdateFormVisible">
                <FormInput
                    :id="inputData.username.id"
                    :placeholder="inputData.username.placeholder"
                    :label="inputData.username.label"
                    v-model="signupData.username"
                />
                <FormInput
                    :id="inputData.fullName.id"
                    :placeholder="inputData.fullName.placeholder"
                    :label="inputData.fullName.label"
                    v-model="signupData.full_name"
                />
                <FormInput
                    type="email"
                    :id="inputData.email.id"
                    :placeholder="inputData.email.placeholder"
                    :label="inputData.email.label"
                    v-model="signupData.email"
                />
                <FormInput
                    type="password"
                    :id="inputData.password.id"
                    :placeholder="inputData.password.placeholder"
                    :label="inputData.password.label"
                    v-model="signupData.pwd"
                />

                <FormButton> Update</FormButton>
            </FormForm>
        </section>
    </div>
</template>

<style scoped></style>
