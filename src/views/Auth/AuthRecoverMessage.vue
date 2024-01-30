<template>
  <FullsizeOverlay>
    <div class="circleWithCheck">
      <span class="checkSymbol"></span>
    </div>
    <b>The link to recover your password has been sent to your inbox</b>
    <p>Don't forget to check your spam folder if you didn't find anything in your inbox</p>
    <MyButton @click="emit('forgotPasswordForm', false)">Go back</MyButton>
  </FullsizeOverlay>
</template>

<script setup lang="ts">
import MyButton from '@/components/inputs/MyButton.vue';
import FullsizeOverlay from '@/components/layouts/FullsizeOverlay.vue';

const emit = defineEmits({
  'forgotPasswordForm': (value: boolean) => typeof value === 'boolean'
});
</script>

<style lang="scss" scoped>
  .circleWithCheck {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid var(--color-primary);
    position: relative;
  }

  .checkSymbol {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-48%, -78%) rotate(-45deg);
      width: 30px;
      height: 16px;
      border: 2px solid var(--color-primary);
      border-top: none;
      border-right: none;
    }
  }

  b {
    color: var(--color-black);
    font-size: 18px;
    font-weight: 600;
  }

  p {
    color: var(--color-black);
    font-size: 14px;
    font-weight: 400;
  }
</style>
    
