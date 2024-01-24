<template>
  <div class="wrapper ant-alert-error" style="background-color: var(--color-primary-background)">
    <div class="left">
      <a-form @submit="handleSubmit" class="form">
        <div class="logoWrapper">
          <img :src="logoUrl" alt="logo" />
          <h1>{{ title }}</h1>
        </div>
        <a-form-item required>
          <p v-if="forgotPassword" style="margin-top: 10px;margin-bottom: 16px;">Provide the email specified during registration</p>
          <a-input v-model:value="email" placeholder="E-mail" />
        </a-form-item>
        <a-form-item required v-if="!forgotPassword">
          <a-input-password v-model:value="password" placeholder="Password" />
        </a-form-item>
        <a-form-item>
          <MyButton block v-if="forgotPassword" :disabled="!email" @click="handleResetPassword">{{ 'Reset password' }}</MyButton>
          <MyButton block v-else :disabled="!password || !email" @click="handleSubmit">{{ 'Login' }}</MyButton>
          <MyButton block class="forgotPassword" v-if="!forgotPassword && forgot_password" :type="'link'" @click="forgotPassword = true">Forgot password?</MyButton>
          <MyButton block class="forgotPassword" v-if="forgotPassword" :type="'link'" @click="forgotPassword = false">Go back</MyButton>
        </a-form-item>
        <div class="techSupport" v-if="support_email">
          <p style="color: var(--color-grey-light)">Tech suppport</p>
          <MyButton :href="'mailto:' + support_email" target="_blank" :type="'link'">{{ support_email }}</MyButton>
        </div>
      </a-form>
    </div>
    <div class="right" :style="`background-image: url(${pictureUrl})`">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MyButton from '../components/buttons/button.vue';

defineProps({
  title: {
    type: String,
    default: 'RocketDoc',
  },
  forgot_password: {
    type: Boolean,
    default: true,
  },
  support_email: {
    type: String,
    default: 'support@rocketdoc.co.uk'
  },
});

const email = ref('');
const password = ref('');
const forgotPassword = ref(false);

const logoUrl = new URL(`../assets/logo.png`, import.meta.url).href
const pictureUrl = new URL(`../assets/auth-picture.png`, import.meta.url).href

const handleSubmit = () => {
  console.log('submit');
};
const handleResetPassword = () => {
  console.log('forgot password');
};

</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}
.forgotPassword {
  color: var(--color-grey-light);
  display: block;
  text-align: center;
  margin-top: 12px;
  &:hover{
    text-decoration: underline;
  }
}
.logoWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  img {
    max-width: 45px;
  }
  h1 {
    margin-bottom: 0;
  }
}
.left {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right {
  width: 50%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.form {
  display: flex;
  width: 478px;
  max-width: calc(100% - 64px);
  padding: 32px 64px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 9px;
  background: var(--color-white, #FFF);
  box-shadow: 0px 16px 45px 0px rgba(44, 62, 70, 0.09); 
  .ant-form-item {
    margin-bottom: 0;
    width: 100%;
  }
}
.techSupport {
  text-align: center;
  p {
    margin-bottom: 0;
  }
}
@media(max-width: 1024px) {
  .right {
    display: none;
  }
  .left {
    width: 100%;
  }
}
</style>