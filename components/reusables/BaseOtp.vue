<template>
  <div class="mt-2">
    <div class="otp-input w-full">
      <template v-for="n in otpLength" :key="n">
        <div
          class="w-[38px] h-[48px] bg-[#C4C4C4] rounded-[12px] flex items-center justify-center"
        >
          <input
            v-model="otp[n - 1]"
            class="w-[25px] h-[30px] p-0 text-center text-2xl lending-9 font-medium text-black bg-[#C4C4C4] border-b-[1px] border-b-[#000] appearance-none placeholder:text-black placeholder:border-[1px] p-0 outline-none"
            type="mobile"
            :maxlength="1"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"
            placeholder=""
            @keyup.enter="$emit('submitOtp')"
            @input="$emit('input', otp.join(''))"
            @keydown.backspace="$emit('backspace')"
          />
        </div>
        <!-- placeholder="__" -->
      </template>
    </div>
    <div v-if="showResend" class="text-center mb-2">
      <button
        class="text-sky-500 hover:text-sky-700"
        @click="$emit('resendOtp')"
      >
        Resend OTP
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface OtpProps {
  otpLength?: number;
  showResend?: boolean;
}
const props: OtpProps = defineProps<OtpProps>();

const otp = ref<string[]>(Array(props.otpLength || 7).fill(""));

watch(
  () => props.otpLength,
  (newVal) => {
    otp.value = Array(newVal).fill("");
  },
  { immediate: true }
);
</script>

<style scoped>
.otp-input {
  display: flex;
  justify-content: space-between;
}

.otp-field {
  margin: 0 5px;
  width: 38px;
  height: 48px;
  background-color: #c4c4c4;
}
</style>
