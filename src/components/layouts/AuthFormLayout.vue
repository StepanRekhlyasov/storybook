<template>
  <div class="form">
    <slot></slot>
  </div>
</template>
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
  :deep(.ant-form-item), :deep(form){
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