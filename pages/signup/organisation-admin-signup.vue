<template>
  <div class="h-full">
    <div
      class="flex flex-col justify-center items-center gap-5 text-center h-full"
    >
      <div>
        <p class="font-light text-sm text-[#B5CDF0] leading-4">Signup</p>
        <p class="text-center font-medium text-[24px] text-white leading-7">
          Organisation Admin SignUp
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
              oninput="this.value = this.value.replace(/[^0-9+]/g, '');"
              label="Enter Mobile Number"
              maxlength="15"
              :placeholder="'+91 00000 00000'"
              :error="v$.phoneNumber.$error"
              @blur="v$.phoneNumber.$touch()"
              @focus="v$.phoneNumber.$reset()"
            />
            <div class="inline-flex items-center justify-end w-full">
              <ReusablesBaseButton
                @click="$router.push('/signup/otp')"
                label="Next Step"
                iconClass="text-white"
                icon-right="arrow-right"
                :right-size="18"
                className="flex justify-center items-center h-[32px] rounded bg-[#0052CC] px-3 py-1 font-inter text-sm font-bold leading-6 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
              />
            </div>
          </form>
        </div>
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
    // await navigateTo("/otp");
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
