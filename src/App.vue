<template>  
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: style.getPropertyValue('--color-primary'),
        colorInfo: style.getPropertyValue('--color-secondary'),
        fontFamily: 'Avenir Next Cyr'
      },
    }"
  >
    <RouterView />
  </a-config-provider>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores/theme';

const style = getComputedStyle(document.body)
const themeStore = useThemeStore();

onBeforeMount(async () => {
  await themeStore.fetchTheme();
});
</script>
<style lang="scss">
</style>