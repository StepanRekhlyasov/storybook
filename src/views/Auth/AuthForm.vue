<template>
  <a-form novalidate ref="form" :model="payload" :rules="validationRules(phoneValid)" @finish="handleSubmit" >

    <!-- overlays -->
    <AuthRecoverMessage v-if="recoverMessageShow" @forgotPasswordForm="recoverMessageShow= $event; forgotPasswordForm = $event;"/>
    <AuthCodeInput v-if="verification_code && codeInputShow" :show_logo="show_logo" :title="title" :support_email="support_email" @complete="handleVerificationCode" :to="isEmailAuth ? payload.email : payload.phone" :resend_time="resend_time"/>

    <!-- header section -->
    <LogoTitle :show_logo="show_logo" :title="title" style="margin-bottom: 24px;" />

    <!-- main section -->
    <p v-if="forgotPasswordForm" style="margin-top: 29px; margin-bottom: 29px;">Provide the email specified during registration</p>
    <a-form-item name="email" v-if="isEmailAuth || forgotPasswordForm">
      <EmailInput v-model:value="payload.email" @input="form.clearValidate()" />
    </a-form-item>
    <a-form-item name="phone" v-if="isPhoneAuth && !forgotPasswordForm">
      <PhoneInput @validation="phoneValid = $event;" v-model:value="payload.phone" @input="form.clearValidate()" />
    </a-form-item>
    <a-form-item name="password" v-if="password_input && !forgotPasswordForm">
      <PasswordInput v-model:value="payload.password" @input="form.clearValidate()" />
    </a-form-item>

    <!-- remember me and forget password section -->
    <div :style="support_email ? { marginBottom: '24px'} : {}">
      <MyButton block :html_type="'submit'" :disabled="disabled">{{ forgotPasswordForm ? 'Submit' : 'Login'}}</MyButton>
      <AuthRememberForget v-if="remember_me || forgot_password" :remember_me="remember_me" :forgot_password="forgot_password" :forgotPasswordForm="forgotPasswordForm" v-model:checked="payload.remember_me" @forgotPasswordForm="forgotPasswordForm = $event;" />
    </div>

    <!-- footer section -->
    <AuthSupport v-if="support_email" :support_email="support_email" />
  </a-form>
</template>
<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import LogoTitle from '@/components/elements/LogoTitle.vue';
import EmailInput from '@/components/inputs/EmailInput.vue';
import PasswordInput from '@/components/inputs/PasswordInput.vue';
import MyButton from '@/components/inputs/MyButton.vue';
import AuthRememberForget from './AuthRememberForget.vue';
import AuthSupport from './AuthSupport.vue';
import AuthRecoverMessage from './AuthRecoverMessage.vue';
import AuthCodeInput from './AuthCodeInput.vue';
import { validationRules } from './Auth.options';
import PhoneInput from '@/components/inputs/PhoneInput.vue';

const props = defineProps({
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
  verification_code: {
    type: Boolean,
    default: true
  },
  password_input: {
    type: Boolean,
    default: true
  },
  auth_type: {
    interface: ['Email', 'Phone'],
    default: 'Email'
  },
  resend_time: {
    type: Number,
    default: 30
  },
});

const forgotPasswordForm = ref(false);
const recoverMessageShow = ref(false);
const codeInputShow = ref(false);
const phoneValid = ref();
const form = ref()

const payload = ref<{
  email: string;
  password: string;
  remember_me: boolean;
  code: string;
  phone: string;
}>({
  email: '',
  password: '',
  remember_me: false,
  code: '',
  phone: '',
});

const { email, password, phone, code } = toRefs(payload.value);
const { password_input, auth_type } = toRefs(props);

const isEmailAuth = computed(() => auth_type.value === 'Email');
const isPhoneAuth = computed(() => auth_type.value === 'Phone');

const disabled = computed(() => {
  if (forgotPasswordForm.value) {
    return !email.value;
  }

  if (password_input.value) {
    return (isEmailAuth.value && (!email.value || !password.value)) || (isPhoneAuth.value && (!phone.value || !password.value));
  } else {
    return (isEmailAuth.value && !email.value) || (isPhoneAuth.value && !phone.value);
  }
});


const handleSubmit = () => {
  if(forgotPasswordForm.value) {
    handleResetPassword();
    return;
  }

  if(props.verification_code) {
    codeInputShow.value = true;
    return;
  }

  window.alert('Login successful:' + JSON.stringify(payload.value));
  // router.push('/auth/code');

};

const handleResetPassword = () => {
  recoverMessageShow.value = true;
  window.alert('Reset password successful:' + JSON.stringify(payload.value.email));
};

const handleVerificationCode = (code : string) => {
  setTimeout(() => {
    window.alert('Verification code successful:' + JSON.stringify(code));
  }, 100);
};

</script>