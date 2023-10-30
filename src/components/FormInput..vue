<script setup>
defineEmits(['update:modelValue'])
defineProps({
    id: {
        type: String,
        default: 'id'
    },
    placeholder: {
        type: String,
        default: 'Your input'
    },
    label: {
        type: String,
        default: 'Label'
    },
    modelValue: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div class="flex flex-col gap-2">
        <label :for="id" class="opacity-75 pl-5">{{ label }}:</label>
        <input
            type="text"
            :id="id"
            :name="id"
            :placeholder="placeholder"
            :value="modelValue"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            class="px-5 py-3 rounded-md bg-bg-lighter outline-none focus:outline-main"
        />
    </div>
</template>

<style scoped></style>
