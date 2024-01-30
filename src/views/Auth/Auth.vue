<template>
  <AuthLayout>
    <AuthFormLayout>
      <AuthForm/>
    </AuthFormLayout>
  </AuthLayout>
</template>
<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import AuthForm from './AuthForm.vue';
import AuthFormLayout from '@/components/layouts/AuthFormLayout.vue';
</script>