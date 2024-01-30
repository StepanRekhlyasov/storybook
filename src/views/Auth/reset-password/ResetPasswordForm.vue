<template>
  <a-form novalidate ref="form" class="form" :model="payload" :rules="validationRules(payload.password)" @finish="handleSubmit">
    <LogoTitle :show_logo="show_logo" :title="title" style="margin-bottom: 21px;" />
    <p style="margin-bottom: 24px;">Set a new password for {{ user_email }}</p>
    <a-form-item name="password">
      <PasswordInput v-model:value="payload.password" @input="form.clearValidate()" />
    </a-form-item>
    <a-form-item name="password_confirmation">
      <PasswordInput v-model:value="payload.password_confirmation" @input="form.clearValidate()" :placeholder="'Confirm Password'" />
    </a-form-item>
    <MyButton block :html_type="'submit'" :style="support_email ? { marginBottom: '24px'} : {}">Submit</MyButton>
    <AuthSupport :support_email="support_email" />
  </a-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { validationRules } from './ResetPassword.options';
import PasswordInput from '@/components/inputs/PasswordInput.vue';
import LogoTitle from '@/components/elements/LogoTitle.vue';
import MyButton from '@/components/inputs/MyButton.vue';
import AuthSupport from '@/views/auth/AuthSupport.vue';

defineProps({
  title: {
    type: String,
    default: 'RocketDoc',
  },
  show_logo: {
    type: Boolean,
    default: true,
  },
  support_email: {
    type: String,
    default: 'support@rocketdoc.co.uk'
  },
});

const payload = ref({
  password: '',
  password_confirmation: '',
});

const form = ref();
const user_email = ref('');
const handleSubmit = () => {
  window.alert('Submitted!');
}
</script>

<style scoped lang="scss">
</style>
