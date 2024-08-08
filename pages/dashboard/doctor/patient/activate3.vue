<template>
  <div class="p-9">
    <div class="mb-6 text-center">
      <p class="font-inter text-2xl font-semibold text-[#0052CC]">
        Activation Form
      </p>
      <p class="font-inter text-sm font-medium text-[#4F4F4F]">
        Tell us more about yourself
      </p>
    </div>
    <div class="flex justify-center items-center activate-nav gap-2">
      <div class="flex flex-col justify-center items-center">
        <div class="h-[28px] w-[28px] rounded-full bg-[#C4C4C4]"></div>
      </div>
      <div class="w-[100px] border-[1px] border-[#BDBDBD]"></div>
      <div class="flex flex-col justify-center items-center">
        <div class="h-[28px] w-[28px] rounded-full bg-[#C4C4C4]"></div>
        <!-- <p>Basic Details</p> -->
      </div>
      <div class="w-[100px] border-[1px] border-[#BDBDBD]"></div>
      <div class="flex flex-col justify-center items-center">
        <div class="h-[28px] w-[28px] rounded-full bg-[#C4C4C4]"></div>
        <!-- <p>Basic Details</p> -->
      </div>
      <div class="w-[100px] border-[1px] border-[#BDBDBD]"></div>
      <div class="flex flex-col justify-center items-center">
        <div class="h-[28px] w-[28px] rounded-full bg-[#C4C4C4]"></div>
        <!-- <p>Basic Details</p> -->
      </div>
    </div>
    <div class="mt-2 mb-6 flex justify-center items-center activate-nav gap-2">
      <p class="font-inter text-sm font-medium text-[#4F4F4F]">Basic Details</p>
      <div class="w-[35px]"></div>
      <p class="font-inter text-sm font-medium text-[#4F4F4F]">
        Dental History
      </p>
      <div class="w-[35px]"></div>
      <p class="font-inter text-sm font-medium text-[#4F4F4F]">
        Medical history
      </p>
      <div class="w-[35px]"></div>
      <p class="font-inter text-sm font-medium text-[#4F4F4F]">Agreement</p>
    </div>
    <div class="bg-[#fff] p-6 border-[1px] border-[#0052CC] rounded-xl mx-10">
      <div>
        <div class="mb-5 flex justify-center">
          <div class="gap-3 mt-2 px-9 w-[70%]">
            <div class="mb-3">
              <label
                for="check1"
                class="flex justify-start text-sm font-inter font-normal leading-5 text-[#474D66]"
              >
                <input
                  id="check1"
                  name="check1"
                  type="checkbox"
                  class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                />
                <span class="pl-3 text-sm text-[#474D66]">
                  I understand that this information is correct to the best of
                  my knowledge. I understand that it will be held in the
                  strictest of confidence and I understand that it is my
                  responsibility to inform this office of any changes in my
                  medical status.</span
                >
              </label>
            </div>
            <div class="mb-3">
              <label
                for="check2"
                class="flex justify-start text-sm font-inter font-normal leading-5 text-[#474D66]"
              >
                <input
                  id="check2"
                  name="check2"
                  type="checkbox"
                  class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                />
                <span class="pl-3 text-sm text-[#474D66]">
                  We are committed to supporting you in understanding your
                  dental health, so you will able to always make the best
                  choice. We will always present you with the best dental
                  solution possible to treat your situation.
                </span>
              </label>
            </div>
            <div class="mb-3">
              <label
                for="check3"
                class="flex justify-start text-sm font-inter font-normal leading-5 text-[#474D66]"
              >
                <input
                  id="check3"
                  name="check3"
                  type="checkbox"
                  class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                />
                <span class="pl-3 text-sm text-[#474D66]">
                  We expect payment in full prior rendering dental services. Our
                  financial coordinator will help you with financial
                  arrangements before commencement of treatment. Our financial
                  coordinator will help you with financial arrangements before
                  commencement of treatment.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center">
          <ReusablesBaseButton
            @click="state.isVisible = true"
            label="Send OTP"
            className="flex justify-center items-center rounded bg-[#0052CC] px-3 py-1 font-inter text-sm font-bold leading-6 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
          />
        </div>
      </div>
    </div>

    <ReusablesModal
      className="w-[424px]"
      :isVisible="state.isVisible"
      :onClose="closeModal"
    >
      <div>
        <div class="p-2 px-4 text-center">
          <div class="mb-3">
            <p class="text-2xl font-medium text-[#0052CC] leading-7 mb-1">
              OTP Confirmation
            </p>
            <p class="font-inter text-[#AFB2B7] text-xs font-semibold">
              We have sent the code verification to your Mobile Number
            </p>
          </div>
          <div class="mb-4">
            <p class="font-inter font-bold text-xl lending-6 text-black">
              +91 78999 31444
            </p>
          </div>
          <form class="space-y-6 w-full mb-5" @submit.prevent="handleOtp">
            <ReusablesBaseOtp
              v-model="otp"
              :otpLength="7"
              :showResend="false"
            />
            <div class="inline-flex items-center justify-center w-full">
              <ReusablesBaseButton
                type="submit"
                label="Submit"
                class="flex justify-center items-center h-[32px] rounded bg-[#0052CC] px-4 font-inter text-sm font-bold leading-4 text-white"
              />
            </div>
          </form>
          <div class="flex justify-center items-center">
            <p class="font-inter font-bold text-xs text-black mr-1">
              Did not receive OTP?
            </p>
            <p class="font-inter font-bold text-xs text-[#0052CC]">
              Resend OTP
            </p>
          </div>
        </div>
      </div>
    </ReusablesModal>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const handleOtp = async () => {
  await navigateTo("/dashboard/doctor/patient/success");
};

const closeModal = () => {
  state.isVisible = !state.isVisible;
};

// Form inputs
const state = reactive<{
  otp: string;
  isVisible: boolean;
}>({
  otp: "",
  isVisible: false,
});
</script>

<style scoped></style>