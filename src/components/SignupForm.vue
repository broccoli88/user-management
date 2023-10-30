<script setup>
import FormForm from './FormForm.vue'
import FormInput from './FormInput..vue'
import FormButton from './FormButton.vue'
import { useFormStore } from '../stores/useFormStore'
import { storeToRefs } from 'pinia'

const formStore = useFormStore()
const { inputData, signupData } = storeToRefs(formStore)

const goTo = () => formStore.goTo('SigninForm')
</script>

<template>
    <FormForm @submit-form="formStore.signUp">
        <template #header> Sign Up</template>

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
        <div class="grid grid-flow-col gap-5">
            <FormButton>Sign up</FormButton>
            <FormButton @click.prevent="goTo">Sign in</FormButton>
        </div>
    </FormForm>
</template>

<style scoped></style>
