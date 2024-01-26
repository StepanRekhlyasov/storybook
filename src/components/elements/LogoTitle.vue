<template>
  <div class="logo-wrapper">
    <img src="@/assets/logo.png" alt="Logo" v-if="show_logo" />
    <h1 v-if="title">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  show_logo: {
    type: Boolean,
    default: true
  },
});
</script>
<style scoped lang="scss">
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  img {
    max-width: 45px;
  }
  h1 {
    margin-bottom: 0;
    word-break: break-word;
  }
}
</style>