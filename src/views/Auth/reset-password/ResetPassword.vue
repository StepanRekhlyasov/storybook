<template>
  <AuthLayout>
    <AuthFormLayout>
      <ResetPasswordForm/>
    </AuthFormLayout>
  </AuthLayout>
</template>
<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import ResetPasswordForm from '@/views/auth/reset-password/ResetPasswordForm.vue';
import AuthFormLayout from '@/components/layouts/AuthFormLayout.vue';

</script>