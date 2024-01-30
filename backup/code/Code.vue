<template>
  <AuthLayout>
    <AuthFormLayout>
      <CodeForm/>
    </AuthFormLayout>
  </AuthLayout>
</template>
<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import AuthFormLayout from '@/components/layouts/AuthFormLayout.vue';
import CodeForm from '@/views/auth/code/CodeForm.vue';
</script>