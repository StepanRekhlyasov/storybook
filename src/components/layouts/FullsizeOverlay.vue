<template>
  <div class="FullsizeOverlay">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.FullsizeOverlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    justify-content: center;
    background: white;
    z-index: 1;
    padding: 32px 24px;
    border-radius: 9px;
  }
</style>