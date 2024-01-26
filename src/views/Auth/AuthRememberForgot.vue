<template>
  <div :class="['AuthRememberForgot', { 'AuthRememberForgot_twoButtons': remember_me && forgot_password }]">
    <a-form-item v-if="remember_me && !forgotPasswordForm" required >
      <a-checkbox v-model:checked="checked" style="user-select: none;">Remember me</a-checkbox>
    </a-form-item>
    <MyButton v-if="!forgotPasswordForm && forgot_password" class="forgotPassword" type="link" @click="handleForgotPassword">Forgot password?</MyButton>
    <MyButton v-if="forgotPasswordForm" class="forgotPassword goBack" type="link" @click="handleGoBack">Go back</MyButton>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import MyButton from '@/components/inputs/MyButton.vue';

defineProps({
  remember_me: {
    type: Boolean,
    default: false
  },
  forgot_password: {
    type: Boolean,
    default: false
  },
  forgotPasswordForm: {
    type: Boolean,
    default: false
  },
});

const checked = ref(false);

const emit = defineEmits({
  'update:checked': (value: boolean) => typeof value === 'boolean',
  'forgotPasswordForm': (value: boolean) => typeof value === 'boolean'
});

const handleForgotPassword = () => {
  emit('forgotPasswordForm', true);
};

const handleGoBack = () => {
  emit('forgotPasswordForm', false);
};

const emitChecked = () => {
  emit('update:checked', checked.value);
};

watch(()=>checked.value, emitChecked, { immediate: true });
</script>
<style scoped lang="scss">
.AuthRememberForgot{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 12px 0;
  &_twoButtons{
    justify-content: space-between;
  }
  :deep(.ant-form-item){
    width: auto !important;
    margin-bottom: 0;
  }
  :deep(label){
    color: var(--color-grey-light);
    &:hover{
      color: var(--color-primary-light);
    }
  }
  .forgotPassword {
    color: var(--color-grey-light);
    display: block;
    text-align: center;
    padding: 0;
    width: auto;
    &:hover{
      color: var(--color-primary-light);
    }
  }
}
@media screen and (max-width: 450px) {
  .AuthRememberForgot {
    flex-direction: column;
  }
  .goBack{
    margin-bottom: 32px;
  }
}
</style>