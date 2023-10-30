<script setup>
defineEmits(['submit-form'])
</script>

<template>
    <section>
        <header class="py-10">
            <h1 class="text-center text-5xl font-bold">
                <slot name="header"></slot>
            </h1>
        </header>
        <form class="grid gap-5" @submit.prevent="$emit('submit-form')">
            <slot />
        </form>
    </section>
</template>

<style scoped></style>
