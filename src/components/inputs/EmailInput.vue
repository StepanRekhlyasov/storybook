<template>
  <a-input v-model:value="value" type="email" :placeholder="placeholder"/>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

defineProps({
  placeholder: {
    type: String,
    default: 'E-mail',
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