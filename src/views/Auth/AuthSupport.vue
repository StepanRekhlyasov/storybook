<template>
  <div class="AuthSupport" v-if="support_email">
    <p style="color: var(--color-grey-light)">Tech suppport</p>
    <MyButton :href="'mailto:' + support_email" target="_blank" :type="'link'">{{ support_email }}</MyButton>
  </div>
</template>

<script setup lang="ts">
import MyButton from '@/components/inputs/MyButton.vue';

defineProps({
  support_email: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.AuthSupport {
  text-align: center;
  p {
    margin-bottom: 0;
  }
}

</style>