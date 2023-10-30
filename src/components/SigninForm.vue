<script setup>
import FormForm from './FormForm.vue'
import FormInput from './FormInput..vue'
import FormButton from './FormButton.vue'
import { useFormStore } from '../stores/useFormStore'
import { storeToRefs } from 'pinia'

const formStore = useFormStore()
const { inputData, signinData } = storeToRefs(formStore)

const goTo = () => formStore.goTo('SignupForm')
</script>

<template>
    <FormForm @submit-form="formStore.signIn">
        <template #header> Sign In</template>
        <FormInput
            type="email"
            :id="inputData.email.id"
            :placeholder="inputData.email.placeholder"
            :label="inputData.email.label"
            v-model="signinData.email"
        />
        <FormInput
            type="password"
            :id="inputData.password.id"
            :placeholder="inputData.password.placeholder"
            :label="inputData.password.label"
            v-model="signinData.password"
        />
        <div class="grid grid-flow-col gap-5">
            <FormButton>Sign in</FormButton>
            <FormButton @click.prevent="goTo">Sign up</FormButton>
        </div>
    </FormForm>
</template>

<style scoped></style>
