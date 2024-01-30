<template>
  <v-otp-input
    ref="otpInput"
    v-model:value="value"
    input-classes="otp-input"
    class="otp-input-wrapper"
    separator=""
    :num-inputs="num_inputs"
    :should-auto-focus="true"
    input-type="number"
    @on-complete="handleOnComplete"
  />
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import VOtpInput from "vue3-otp-input";

defineProps({
  num_inputs: {
    type: Number,
    default: 6,
  },
});

const value = ref('');

function handleOnComplete(value : string) {
  emit('complete', value);
}

const emit = defineEmits({
  'update:value': (value: string) => typeof value === 'string',
  'complete': (value: string) => typeof value === 'string',
});

const emitValue = () => {
  emit('update:value', value.value);
};

watch(value, emitValue, { immediate: true });
</script>
<style>
.otp-input {
  width: 65px;
  height: 56px;
  padding: 5px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
.otp-input-wrapper{
  gap: 8px;
}
.otp-input.is-complete{
  background-color: var(--color-primary-lines-light);
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
.ant-form-item-has-error{
  .otp-input{
    border-color: var(--color-red);
  }
}

.otp-input:focus {
  outline: none;
  border-color: var(--color-primary);
}
.FullsizeOverlay {
  padding: 32px 24px;
}
@media (max-width: 600px){
  .otp-input{
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 500px){
  .otp-input{
    width: 40px;
    height: 40px;
  }
}
@media (max-width: 400px){
  .otp-input{
    width: 30px;
    height: 30px;
  }
}
</style>