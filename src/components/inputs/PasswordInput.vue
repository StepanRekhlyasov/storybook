<template>
    <a-input-password v-model:value="value" :placeholder="placeholder" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

defineProps({
  placeholder: {
    type: String,
    default: 'Password',
  },
});

const value = ref('');

const emit = defineEmits({
  'update:value': (value: string) => typeof value === 'string'
});

const emitValue = () => {
  emit('update:value', value.value);
};

watch(value, emitValue, { immediate: true });
</script>