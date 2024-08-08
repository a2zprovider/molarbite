<template>
  <div class="h-full">
    <div
      class="flex flex-col justify-center items-center gap-5 text-center h-full"
    >
      <div>
        <p class="font-light text-sm text-[#B5CDF0] leading-4">Sign-In</p>
        <p class="text-center font-medium text-[24px] text-white leading-7">
          Hello Again!
        </p>
      </div>
      <div
        class="flex flex-col gap-2 items-center text-center bg-white p-5 mt-2 rounded-xl md:w-[424px]"
      >
        <div class="font-light w-full text-left text-lg">
          <form class="space-y-6 w-full" @submit.prevent="submitForm">
            <ReusablesBaseInput
              v-model="state.phoneNumber"
              type="text"
              label="Mobile Number"
              :placeholder="'+91 00000 00000'"
              :error="v$.phoneNumber.$error"
              @blur="v$.phoneNumber.$touch()"
              @focus="v$.phoneNumber.$reset()"
            />
            <ReusablesBaseButton
              type="submit"
              label="Login"
              className="flex justify-center items-center w-full h-[32px] rounded bg-[#0052CC] px-3 py-1 font-inter text-sm font-bold leading-6 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
            />
          </form>
        </div>
        <div
          class="inline-flex items-center justify-center w-full pl-[.5px] pr-[.5px]"
        >
          <hr class="w-full h-px my-6 border-[0.1px] border-[#0052CC]" />
          <span
            class="absolute px-3 font-normal font-roboto text-black-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-black-900"
            >or</span
          >
        </div>
        <div class="grid grid-cols-2 gap-0 items-center w-full">
          <div class="font-sm text-sm pr-2">Don't have an account yet?</div>
          <ReusablesBaseButton
            @click="$router.push('/signup/create-organization')"
            label="Signup"
            class="flex justify-center items-center border-[1px] w-full h-[32px] rounded text-base font-bold leading-6 border-[#0052cc] text-[#0052cc] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { formatNumber, validateNumber } = useFormat(); // Custom composable for mobile number
const state = ref<{ phoneNumber: string }>({
  phoneNumber: "",
});

const v$ = validateNumber(state);
const submitForm = async (event: Event) => {
  event.preventDefault();
  if (v$.value.$invalid) {
    v$.value.$validate();
  } else {
    console.log("Form Input:", state);
    await navigateTo("/login/otp");
  }
};

watch(
  () => state.value.phoneNumber,
  (newValue) => {
    state.value.phoneNumber = formatNumber(newValue);
  }
);
</script>

<style scoped>
.hr-color {
  background-color: #0052cc;
}
</style>
