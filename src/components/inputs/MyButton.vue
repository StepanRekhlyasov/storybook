<template>
  <a-button :type="type" :disabled="disabled" :html-type="html_type">
    <slot>{{ text }}</slot>
  </a-button>
</template>
<script setup lang="ts">
  import { defineProps } from 'vue';

  defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: 'Click Me',
    },
    html_type: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: 'primary',
    },
  });
</script>