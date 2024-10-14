<template>
  <div
    class="flex flex-col justify-center items-center gap-5 text-center h-screen"
  >
    <div>
      <p class="font-light text-sm text-[#B5CDF0] leading-4">Signup</p>
      <p class="text-center font-medium text-[24px] text-white leading-7">
        Create Organisation
      </p>
    </div>
    <div
      class="flex flex-col gap-2 items-center text-center bg-white p-4 mt-2 rounded-xl md:w-[424px]"
    >
      <div class="font-light w-full text-left text-lg">
        <form class="space-y-6 w-full" @submit.prevent>
          <ReusablesBaseInput
            label="Registration Number (Provided by Council)"
            v-model="state.registration_number"
            isRequired="true"
            type="registration_number"
            placeholder="Registration Number"
            :error="v$.registration_number.$error"
            error-message="Registration number is required"
            @blur="v$.registration_number.$touch()"
            @focus="v$.registration_number.$reset()"
          />

          <ReusablesBaseFile
            v-model="state.upload_certificate"
            label="Registration Certificate"
            isRequired="true"
            file-type="image/*"
            placeholder="Registration Certificate"
            className="flex relative justify-center w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2] file:text-[#8F95B2] file:border-0 file:border-l-[1px] file:border-[#C1C4D6] file:px-2 file:rounded file:bg-transparent file:absolute file:right-0 file:top-0 file:bottom-0 file:text-foreground file:text-xs file:font-medium"
            :error="v$.upload_certificate.$error"
            error-message="Registration certificate is required"
            @blur="v$.upload_certificate.$touch()"
            @focus="v$.upload_certificate.$reset()"
          />
          <ReusablesBaseInput
            label="Renewal Date"
            v-model="state.date"
            type="date"
            placeholder="Renewal Date"
            isRequired="true"
            :error="v$.date.$error"
            error-message="Renewal date is required"
            @blur="v$.date.$touch()"
            @focus="v$.date.$reset()"
          />

          <ReusablesBaseSelect
            v-model="state.gender"
            label="Reason for Choosing MolarByte"
            :options="genders"
            placeholder="Select your reason"
            :error="v$.gender.$error"
            @blur="v$.gender.$touch()"
            @focus="v$.gender.$reset()"
          />
          <div>
            <label
              for="condition"
              class="block text-sm font-inter font-medium leading-3 text-black"
              >Terms and conditions</label
            >
            <div class="mt-2 inline-flex">
              <input
                id="condition"
                name="condition"
                type="checkbox"
                class="mr-2"
              />
              <p class="text-xs text-black font-normal">
                I consent to the terms & conditions and I am owner/director of
                the organisation.
              </p>
            </div>
          </div>
          <div class="inline-flex items-center justify-end w-full mt-3">
            <ReusablesBaseButton
              @click="$router.push('/signup/add-branch')"
              label="Next Step"
              iconClass="text-white"
              icon-right="arrow-right"
              :right-size="18"
              className="flex justify-center items-center h-[32px] rounded bg-[#0052CC] px-3 font-inter text-sm font-bold leading-6 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="inline-flex items-center justify-center w-full">
      <div class="w-[13px] h-[13px] bg-white rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const genders = ["Male", "Female"];
// Form inputs
const state = reactive<{
  registration_number: string;
  date: string;
  gender: string;
  upload_certificate: string;
}>({
  registration_number: "",
  date: "",
  gender: "",
  upload_certificate: "",
});

// Validation rules
const rules = {
  registration_number: { required },
  date: { required },
  gender: { required },
  upload_certificate: { required },
};
const v$ = useVuelidate(rules, state);
</script>

<style scoped></style>
