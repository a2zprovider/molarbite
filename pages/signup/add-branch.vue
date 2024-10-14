<template>
  <div
    class="flex flex-col justify-center items-center gap-5 text-center h-screen"
  >
    <div>
      <p class="font-light text-sm text-[#B5CDF0] leading-4">Signup</p>
      <p class="text-center font-medium text-[24px] text-white leading-7">
        Add Branch
      </p>
    </div>
    <div
      class="flex flex-col gap-2 items-center text-center bg-white p-4 mt-2 rounded-xl md:w-[424px]"
    >
      <div class="font-light w-full text-left text-lg">
        <form class="space-y-6 w-full" @submit.prevent>
          <ReusablesBaseInput
            label="Add Branch"
            v-model="state.branch_name"
            type="taxt"
            placeholder="Enter Branch Name"
            isRequired="true"
            :error="v$.branch_name.$error"
            error-message="Branch is required"
            @blur="v$.branch_name.$touch()"
            @focus="v$.branch_name.$reset()"
          />
          <div>
            <ReusablesBaseInput
              label="Branch Address"
              label-class="block text-base font-inter font-medium leading-6 text-black"
              v-model="state.branch_address"
              type="branch_address"
              placeholder="Address Line 1"
              inputClass="mb-2"
              isRequired="true"
              :error="v$.branch_address.$error"
              error-message="Address is required"
              @blur="v$.branch_address.$touch()"
              @focus="v$.branch_address.$reset()"
            />
            <ReusablesBaseInput
              v-model="state.branch_address1"
              type="branch_address1"
              placeholder="Address Line 2"
              inputClass="mb-2"
              :error="v$.branch_address1.$error"
              error-message="Address is required"
              @blur="v$.branch_address1.$touch()"
              @focus="v$.branch_address1.$reset()"
            />
            <div class="grid grid-cols-2 gap-4">
              <ReusablesBaseInput
                v-model="state.state"
                type="text"
                placeholder="State"
                isRequired="true"
                inputClass="mb-2"
                :error="v$.state.$error"
                error-message="State is required"
                @blur="v$.state.$touch()"
                @focus="v$.state.$reset()"
              />
              <ReusablesBaseInput
                v-model="state.pincode"
                type="text"
                placeholder="Pincode"
                isRequired="true"
                inputClass="mb-2"
                :error="v$.pincode.$error"
                error-message="Pincode is required"
                @blur="v$.pincode.$touch()"
                @focus="v$.pincode.$reset()"
              />
            </div>

            <ReusablesBaseInput
              v-model="state.map"
              type="text"
              placeholder="Google Map Link"
              isRequired="true"
              :error="v$.map.$error"
              error-message="Map is required"
              @blur="v$.map.$touch()"
              @focus="v$.map.$reset()"
            />
          </div>
          <hr class="border-[#BDBDBD]" />
          <RouterLink
            to="/signup/add-branch1"
            class="mt-2 inline-flex items-center justify-between w-full p-1.5 px-2 text-[#0052cc] bg-white border border-[#0052cc] rounded cursor-pointer peer-checked:bg-[#01875A] peer-checked:border-[#01875A] peer-checked:text-white"
          >
            <div class="inline-flex justify-start items-center w-full">
              <Icon
                name="mdi:plus-circle-outline"
                size="18"
                class="text-[#0052cc] mr-1 font-medium"
              />
              <div
                class="w-full text-sm font-medium text-[#0052CC] font-inter lending-4"
              >
                Add more branches
              </div>
            </div>
          </RouterLink>
          <hr class="border-[#BDBDBD]" />
          <div class="inline-flex items-center justify-between w-full mt-3">
            <NuxtLink to="#" class="text-[#0052CC] font-normal text-base"
              >Skip this step</NuxtLink
            >
            <ReusablesBaseButton
              @click="$router.push('/signup/select-primary-branch')"
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
      <div class="w-[13px] h-[13px] bg-white rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
    </div>
  </div>
</template>

<script setup  lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

// Form inputs
const state = reactive<{
  branch_name: string;
  branch_address: string;
  branch_address1: string;
  map: string;
  state: string;
  pincode: string;
}>({
  branch_name: "",
  branch_address: "",
  branch_address1: "",
  map: "",
  state: "",
  pincode: "",
});

// Validation rules
const rules = {
  branch_name: { required },
  branch_address: { required },
  branch_address1: { required },
  map: { required },
  state: { required },
  pincode: { required },
};
const v$ = useVuelidate(rules, state);
</script>

<style scoped></style>
