<template>
  <div class="wrapper ant-alert-error" style="background-color: var(--color-primary-background)">
  <div class="left">
    <slot></slot>
  </div>
  <div class="right" :style="`background-image: url(${pictureUrl})`">
  </div>
</div>
</template>
<script setup lang="ts">
  const pictureUrl = new URL(`@/assets/auth-picture.png`, import.meta.url).href
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
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
@media(max-width: 1024px) {
  .right {
    display: none;
  }
  .left {
    width: 100%;
  }
}
</style>