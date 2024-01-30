<template>
  <a-form novalidate ref="form" :model="payload"  @finish="handleSubmit">
    <LogoTitle :show_logo="show_logo" :title="title" style="margin-bottom: 21px;" />
    <p>Please enter verification code sent to +447441908194</p>
    <a-form-item name="code">
      <CodeInpt v-model:value="payload.code" />
    </a-form-item>
    <AuthSupport :support_email="support_email" />
  </a-form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LogoTitle from '@/components/elements/LogoTitle.vue';
import CodeInpt from '@/components/inputs/CodeInput.vue';
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
    default: 'support@rocketdoc.co.uk',
  }
});

const payload = ref({
  code: ''
});

const form = ref();

const handleSubmit = () => {
  window.alert('Submitted!');
}
</script>
<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>