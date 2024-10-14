<template>
  <div
    class="flex flex-col justify-center items-center gap-5 text-center h-screen"
  >
    <div>
      <p class="text-white font-light text-sm text-[#B5CDF0] leading-4">
        Signup
      </p>
      <p class="text-center font-medium text-[24px] text-white leading-7">
        Organisation Admin Details
      </p>
    </div>
    <div
      class="flex flex-col gap-2 items-center text-center bg-white p-4 mt-2 rounded-xl md:w-[424px]"
    >
      <div class="font-light w-full text-left text-lg">
        <form class="space-y-6 w-full" @submit.prevent="submitForm">
          <ReusablesBaseInput
            label="Full Name"
            v-model="state.full_name"
            type="taxt"
            placeholder="Full Name"
            :error="v$.full_name.$error"
            error-message="Name is required"
            @blur="v$.full_name.$touch()"
            @focus="v$.full_name.$reset()"
          />
          <ReusablesBaseInput
            label="Email ID"
            v-model="state.email"
            type="email"
            placeholder="Email ID"
            :error="v$.email.$error"
            error-message="Email is required"
            @blur="v$.email.$touch()"
            @focus="v$.email.$reset()"
          />
          <ReusablesBaseInput
            label="Landline Number"
            v-model="state.landline_number"
            type="text"
            placeholder="080 - XXXX XXXX"
            :error="v$.landline_number.$error"
            error-message="Landline Number is required"
            @blur="v$.landline_number.$touch()"
            @focus="v$.landline_number.$reset()"
          />
          <ReusablesBaseInput
            label="Date of Birth"
            v-model="state.date_of_birth"
            type="date"
            placeholder="DD/MM/YYYY"
            :error="v$.date_of_birth.$error"
            error-message="Date of birth is required"
            @blur="v$.date_of_birth.$touch()"
            @focus="v$.date_of_birth.$reset()"
          />

          <div>
            <ReusablesBaseInput
              label="Address"
              v-model="state.address1"
              type="text"
              placeholder="Address Line 1"
              inputClass="mb-2"
              :error="v$.address1.$error"
              error-message="Address is required"
              @blur="v$.address1.$touch()"
              @focus="v$.address1.$reset()"
            />
            <ReusablesBaseInput
              v-model="state.address2"
              type="text"
              placeholder="Address Line 2"
              inputClass="mb-2"
              :error="v$.address2.$error"
              error-message="Address is required"
              @blur="v$.address2.$touch()"
              @focus="v$.address2.$reset()"
            />
            <div class="grid grid-cols-2 gap-4">
              <ReusablesBaseInput
                v-model="state.state"
                type="text"
                placeholder="State"
                inputClass="mb-2"
                :error="v$.state.$error"
                error-message="state is required"
                @blur="v$.state.$touch()"
                @focus="v$.state.$reset()"
              />
              <ReusablesBaseInput
                v-model="state.pincode"
                type="text"
                placeholder="Pincode"
                inputClass="mb-2"
                :error="v$.pincode.$error"
                error-message="pincode is required"
                @blur="v$.pincode.$touch()"
                @focus="v$.pincode.$reset()"
              />
            </div>
          </div>
          <div class="inline-flex items-center justify-end w-full mt-3">
            <ReusablesBaseButton
              @click="$router.push('/signup/select-primary-branch1')"
              label="Next Step"
              iconClass="text-white"
              icon-right="arrow-right"
              :right-size="18"
              className="flex justify-center items-center rounded bg-[#0052CC] px-3 py-1 font-inter text-sm font-bold leading-6 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="inline-flex items-center justify-center w-full">
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-white rounded-full mx-2"></div>
    </div>
  </div>
</template>

<script setup  lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

// Form inputs
const state = reactive<{
  full_name: string;
  email: string;
  landline_number: string;
  date_of_birth: string;
  address1: string;
  address2: string;
  state: string;
  pincode: string;
}>({
  full_name: "",
  email: "",
  landline_number: "",
  date_of_birth: "",
  address1: "",
  address2: "",
  state: "",
  pincode: "",
});

// Validation rules
const rules = {
  full_name: { required },
  email: { required },
  landline_number: { required },
  date_of_birth: { required },
  address1: { required },
  address2: { required },
  state: { required },
  pincode: { required },
};
const v$ = useVuelidate(rules, state);

const submitForm = async () => {
  await navigateTo("/signup/select-primary-branch1");
};
</script>

<style scoped></style>
