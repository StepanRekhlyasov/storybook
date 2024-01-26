<template>
<!-- <div class="wrapper ant-alert-error" style="background-color: var(--color-primary-background)">
  <div class="left"> -->
    <a-form novalidate ref="form" class="form" :model="payload" :rules="validationRules" @finish="handleSubmit">
      <AuthRecoverMessage v-if="recoverMessageShow" @forgotPasswordForm="recoverMessageShow= $event; forgotPasswordForm = $event;"/>
      <LogoTitle :show_logo="show_logo" :title="title" style="margin-bottom: 21px;" />
      <p v-if="forgotPasswordForm" style="margin-top: 10px; margin-bottom: 24px;">Enter your email to reset your password</p>
      <EmailInput v-model:value="payload.email" @input="form.clearValidate()" />
      <PasswordInput v-model:value="payload.password" v-if="!forgotPasswordForm" @input="form.clearValidate()" />
      <a-form-item>
        <MyButton block v-if="!forgotPasswordForm" :html_type="'submit'" :disabled="!payload.email || !payload.password">Login</MyButton>
        <MyButton block v-else :disabled="!payload.email" :html_type="'submit'">Submit</MyButton>
        <AuthRememberForgot style="margin-bottom: 0;" v-if="remember_me || forgot_password" :remember_me="remember_me" :forgot_password="forgot_password" :forgotPasswordForm="forgotPasswordForm" v-model:checked="payload.remember_me" @forgotPasswordForm="forgotPasswordForm = $event;" />
      </a-form-item>
      <AuthSupport v-if="support_email" :support_email="support_email" />
    </a-form>
  <!-- </div>
  <div class="right" :style="`background-image: url(${pictureUrl})`">
  </div>
</div> -->
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LogoTitle from '@/components/elements/LogoTitle.vue';
import EmailInput from '@/components/inputs/EmailInput.vue';
import PasswordInput from '@/components/inputs/PasswordInput.vue';
import MyButton from '@/components/inputs/MyButton.vue';
import AuthRememberForgot from './AuthRememberForgot.vue';
import AuthSupport from './AuthSupport.vue';
import AuthRecoverMessage from './AuthRecoverMessage.vue';
import { validationRules } from './Auth.options';

defineProps({
  title: {
    type: String,
    default: 'RocketDoc',
  },
  forgot_password: {
    type: Boolean,
    default: true,
  },
  remember_me: {
    type: Boolean,
    default: true,
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


const pictureUrl = new URL(`@/assets/auth-picture.png`, import.meta.url).href
const forgotPasswordForm = ref(false);
const recoverMessageShow = ref(false);
const form = ref()
const payload = ref({
  email: '',
  password: '',
  remember_me: false,
});

const handleSubmit = () => {
  if(forgotPasswordForm.value) {
    handleResetPassword();
    return;
  }
  console.log(payload.value);
  window.alert('Login successful:' + JSON.stringify(payload.value));
};

const handleResetPassword = () => {
  recoverMessageShow.value = true;
  window.alert('Reset password successful:' + JSON.stringify(payload.value.email));
};

</script>
<style scoped lang="scss">
.form {
  display: flex;
  position: relative;
  width: 478px;
  max-width: calc(100% - 64px);
  padding: 32px 64px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 9px;
  background: var(--color-white, #FFF);
  box-shadow: 0px 16px 45px 0px rgba(44, 62, 70, 0.09); 
  .ant-form-item {
    width: 100%;
  }
}
@media screen and (max-width: 450px) {
  .form {
    padding: 32px 24px;
    max-width: calc(100% - 32px);
  }
}
</style>