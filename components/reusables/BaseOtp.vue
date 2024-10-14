<template>
  <div class="mt-2">
    <div class="otp-input w-full">
      <template v-for="(value, index) in otp" :key="index">
        <div
          class="w-[38px] h-[48px] bg-[#C4C4C4] rounded-[12px] flex items-center justify-center"
        >
          <input
            :key="index"
            v-model="otp[index]"
            type="text"
            maxlength="1"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"
            class="w-[25px] h-[30px] p-0 text-center text-2xl lending-9 font-medium text-black bg-[#C4C4C4] border-b-[1px] border-b-[#000] appearance-none placeholder:text-black placeholder:border-[1px] p-0 outline-none"
            @input="moveToNext($event, index)"
            @keydown.backspace="moveToPrevious($event, index)"
            ref="otpInput"
          />
        </div>
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

<script >
export default {
  props: {
    otpLength: {
      type: Number,
      default: 6, // Default to 6-digit OTP
    },
    showResend: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      otp: ["", "", "", "", "", ""], // Adjust the array length based on the OTP length
    };
  },
  methods: {
    // Move to the next input field after entering a digit
    moveToNext(event, index) {
      const input = event.target.value;
      if (input.length === 1 && index < this.otp.length - 1) {
        this.$refs.otpInput[index + 1].focus();
      }
    },
    // Move to the previous input field on backspace
    moveToPrevious(event, index) {
      if (event.key === "Backspace" && !this.otp[index] && index > 0) {
        this.$refs.otpInput[index - 1].focus();
      }
    },
  },
};
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
