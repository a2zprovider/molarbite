<template>
  <div class="h-full">
    <div
      class="flex flex-col justify-center items-center gap-5 text-center h-full"
    >
      <div>
        <p class="text-center font-medium text-[24px] text-white leading-7">
          Enter OTP
        </p>
      </div>
      <div
        class="flex flex-col gap-2 items-center text-center bg-white p-5 mt-2 rounded-xl md:w-[424px]"
      >
        <form class="space-y-6 w-full" @submit.prevent="handleOtp">
          <ReusablesBaseOtp v-model="otp" :otpLength="7" :showResend="false" />
          <div class="inline-flex items-center justify-end w-full">
            <ReusablesBaseButton
              type="submit"
              label="Enter"
              class="flex justify-center items-center h-[32px] w-[69px] rounded bg-[#0052CC] font-inter text-base font-bold leading-6 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
            />
          </div>
        </form>
      </div>
      <div class="inline-flex items-center justify-center w-full">
        <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
        <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
        <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
        <div class="w-[13px] h-[13px] bg-white rounded-full mx-2"></div>
        <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
        <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const otp = ref("");
const showMessage = ref(false);

const handleOtp = async () => {
  setTimeout(async () => {
    await navigateTo("/signup/features");
  }, 1000);
};
</script>

<style scoped></style>
