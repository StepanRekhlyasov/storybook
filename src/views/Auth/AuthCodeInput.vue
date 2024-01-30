<template>
  <FullsizeOverlay>
    <LogoTitle :show_logo="show_logo" :title="title" style="margin-bottom: 0;" />
    <div style="margin:auto;">
      <p>Please enter verification code sent to {{ to.replace(/\s/g, '&nbsp;') }}</p>
      <a-form-item name="code" style="margin-bottom: -24px;">
        <CodeInput @complete="emit('complete', value)" v-model:value="value"/>
        <MyButton v-if="resend_time" type="link" class="resendTimer" :class="{'resendTimer_active' : !disable_time}" :disabled="!!disable_time" @click="sendCodeHandler">{{ disable_time ? disable_time_formatted : 'Send code again'}}</MyButton>
      </a-form-item>
    </div>
    <AuthSupport v-if="support_email" :support_email="support_email" style="margin-top: 0;" />
  </FullsizeOverlay>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import FullsizeOverlay from '@/components/layouts/FullsizeOverlay.vue';
import CodeInput from '@/components/inputs/CodeInput.vue';
import LogoTitle from '@/components/elements/LogoTitle.vue';
import AuthSupport from '@/views/auth/AuthSupport.vue';
import MyButton from '@/components/inputs/MyButton.vue';

const props = defineProps({
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
    default: 'support@rocketdoc.co.uk'
  },
  to: {
    type: String,
    default: ''
  },
  resend_time: {
    type: Number,
    default: 30
  }
});

const value = ref('');
const disable_time = ref(props.resend_time);
const disable_time_formatted = computed(()=>{
  const minutes = Math.floor(disable_time.value / 60).toString().padStart(2, '0');
  const seconds = (disable_time.value % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
})

const sendCodeHandler = () => {
  disable_time.value = props.resend_time;
  emit('sendCode');
}

watch(()=>props.resend_time, (newVal)=>{
  disable_time.value = newVal;
})

onMounted(()=>{
  setInterval(()=>{
    if(disable_time.value > 0){
      disable_time.value--;
    }
  }, 1000)
})

const emit = defineEmits({
  'update:value': (value: string) => typeof value === 'string',
  'complete': (value: string) => typeof value === 'string',
  'sendCode': () => true
});

const emitValue = () => {
  emit('update:value', value.value);
};

watch(value, emitValue, { immediate: true });
</script>
<style scoped lang="scss">
.otp-input-wrapper{
  justify-content: center ;
}
.resendTimer{
  margin-left: auto;
  display: block;
  padding: 0;
  color: var(--color-grey-light);
  &.resendTimer_active{
    :deep(span) {
      text-decoration: underline;
    }
  }
}
</style>
