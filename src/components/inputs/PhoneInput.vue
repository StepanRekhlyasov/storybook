<template>
  <vue-tel-input
    class="myPhoneInput"
    ref="phone_input"
    v-model="value"
    :dropdownOptions="{ showFlags: true, showDialCodeInList: true, width: '100%', disabled: true }"
    :inputOptions="{ showDialCode: true, maxlength: 13 }"
    :defaultCountry="'GB'"
    :onlyCountries="['GB']"
    :validCharactersOnly="false"
    :mode="'international'"
    @validate="onValidatePhone"
  />
</template>
<script setup lang="ts">
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

import { ref, watch } from 'vue'

const value = ref('');
const phone_input = ref();

const emit = defineEmits({
  'update:value': (value: string) => typeof value === 'string',
  'validation': (value?: boolean) => typeof value === 'boolean' || value === undefined
});

const emitValue = () => {
  emit('update:value', value.value);
};

watch(value, emitValue, { immediate: true });

const onValidatePhone = (phoneObject : any) => {
  emit('validation', phoneObject.valid);
}
</script>
<style scoped lang="scss">
  .myPhoneInput{
    height: 32px;
    border-radius: 6px;
    border-color: #d9d9d9;
    :deep(.vti__input), :deep(.vti__dropdown){
      border-radius: 6px;
    }
    :deep(.vti__dropdown-arrow){
      display: none;
    }
  }
  .vue-tel-input:hover{
    border-color: var(--color-primary);
  }
  .vue-tel-input:focus-within {
    box-shadow: none;
    border-color: var(--color-primary);
  }
  .ant-form-item-has-error{
    .vue-tel-input{
      border-color: var(--color-red);
    }
  }
</style>