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
        <div class="h-[28px] w-[28px] rounded-full activate"></div>
      </div>
      <div class="w-[100px] border-[1px] border-[#BDBDBD]"></div>
      <div class="flex flex-col justify-center items-center">
        <div class="h-[28px] w-[28px] rounded-full deactivate"></div>
        <!-- <p>Basic Details</p> -->
      </div>
      <div class="w-[100px] border-[1px] border-[#BDBDBD]"></div>
      <div class="flex flex-col justify-center items-center">
        <div class="h-[28px] w-[28px] rounded-full deactivate"></div>
        <!-- <p>Basic Details</p> -->
      </div>
      <div class="w-[100px] border-[1px] border-[#BDBDBD]"></div>
      <div class="flex flex-col justify-center items-center">
        <div class="h-[28px] w-[28px] rounded-full deactivate"></div>
        <!-- <p>Basic Details</p> -->
      </div>
    </div>
    <div class="mt-2 mb-6 flex justify-center items-center activate-nav gap-2">
      <p class="font-inter text-sm font-medium activate-title">Basic Details</p>
      <div class="w-[35px]"></div>
      <p class="font-inter text-sm font-medium deactivate-title">
        Dental History
      </p>
      <div class="w-[35px]"></div>
      <p class="font-inter text-sm font-medium deactivate-title">
        Medical history
      </p>
      <div class="w-[35px]"></div>
      <p class="font-inter text-sm font-medium deactivate-title">Agreement</p>
    </div>
    <div class="bg-[#fff] p-6 border-[1px] border-[#0052CC] rounded-xl mx-10">
      <div class="grid grid-cols-3 gap-3">
        <div class="mb-2">
          <ReusablesBaseInput
            label="Full Name*"
            v-model="state.full_name"
            type="taxt"
            placeholder="Full Name"
          />
        </div>
        <div class="mb-2">
          <ReusablesBaseInput
            label="Mobile Number*"
            v-model="state.mobile"
            type="taxt"
            placeholder="+91 99999 99999"
          />
        </div>
        <div class="mb-2">
          <ReusablesBaseInput
            label="Alternate Mobile Number"
            v-model="state.a_mobile"
            type="taxt"
            placeholder="+91 99999 99999"
          />
        </div>
        <div class="mb-2">
          <ReusablesBaseInput
            label="Email ID*"
            v-model="state.email"
            type="email"
            placeholder="Email ID"
          />
        </div>
        <div class="mb-2">
          <ReusablesBaseInput
            label="Date of Birth"
            v-model="state.date_of_birth"
            type="date"
            placeholder="DD/MM/YYYY"
          />
        </div>
        <div class="mb-2">
          <ReusablesBaseSelect
            v-model="state.language"
            label="Language*"
            :options="languages"
            placeholder="Select Language"
          />
        </div>
        <div class="mb-2">
          <ReusablesBaseInput
            label="Address*"
            v-model="state.address"
            type="taxt"
            placeholder="Address"
          />
        </div>
        <div class="mb-2">
          <ReusablesBaseInput
            label="Pincode*"
            v-model="state.pincode"
            type="taxt"
            placeholder="000000"
          />
        </div>
        <div class="mb-2">
          <label for="gender" class="label-style">Gender*</label>
          <div class="flex items-center gap-3">
            <div>
              <ReusablesBaseRadio
                id="male"
                label="gender*"
                v-model="state.gender"
                class="peer"
                type="radio"
                name="gender"
              />
              <label for="male" class="ml-2">Male</label>
            </div>
            <div>
              <ReusablesBaseRadio
                id="female"
                label="gender*"
                v-model="state.gender"
                class="peer"
                type="radio"
                name="gender"
              />
              <label for="female" class="ml-2">Female</label>
            </div>
            <div>
              <ReusablesBaseRadio
                id="others"
                label="gender*"
                v-model="state.gender"
                class="peer"
                type="radio"
                name="gender"
              />
              <label for="others" class="ml-2">Others</label>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <ReusablesBaseInput
            label="City*"
            v-model="state.city"
            type="taxt"
            placeholder="City"
          />
        </div>
        <div class="mb-2">
          <ReusablesBaseInput
            label="Employer*"
            v-model="state.employer"
            type="taxt"
            placeholder="Employer"
          />
        </div>
        <div class="mb-2">
          <ReusablesBaseSelect
            v-model="state.occupation"
            label="Occupation*"
            :options="occupations"
            placeholder="Select Occupation"
          />
        </div>
        <div class="mb-2">
          <ReusablesBaseFile
            v-model="state.profle_picture"
            label="Upload Profile Picture*"
            file-type="image/*"
            placeholder="Upload Profile Picture"
            className="flex relative justify-center w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2] file:text-[#8F95B2] file:border-0 file:border-l-[1px] file:border-[#C1C4D6] file:px-2 file:rounded file:bg-transparent file:absolute file:right-0 file:top-0 file:bottom-0 file:text-foreground file:text-xs file:font-medium"
          />
        </div>
      </div>
      <div>
        <div class="mb-5 mt-3">
          <div class="flex items-center gap-3">
            <label for="" class="text-sm font-inter font-normal text-[#333333]"
              >Preferred mode of communication?*</label
            >

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="sms"
                name="sms"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> SMS</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="phone"
                name="phone"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Phone Call</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="email"
                name="email"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Email</span>
            </label>
          </div>
        </div>
        <div class="mb-5">
          <ReusablesBaseButton
            label="Add Family Members"
            iconClass="text-[#0052CC]"
            icon-left="plus"
            :left-size="14"
            class="flex items-center rounded text-sm font-bold leading-4 text-[#0052CC]"
          />
        </div>
        <div class="mb-5">
          <label for="" class="text-sm font-inter font-normal text-[#333333]"
            >How did you get to know about us?*</label
          >
          <div class="flex items-center gap-3 mt-2">
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Google"
                name="Google"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Google</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Facebook"
                name="Facebook"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Facebook</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Instagram"
                name="Instagram"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Instagram</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="LinkedIn"
                name="LinkedIn"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> LinkedIn</span> </label
            ><label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Corporate Wellness"
                name="Corporate Wellness"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]">
                Corporate Wellness</span
              >
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Flyer"
                name="Flyer"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Flyer</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Newspaper"
                name="Newspaper"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Newspaper</span>
            </label>
          </div>
        </div>
        <div class="mb-5">
          <div class="flex items-center gap-3">
            <label
              for="Refered By"
              class="text-sm font-inter font-normal text-[#474D66]"
              >Refered By</label
            >
            <ReusablesBaseInput
              v-model="state.refered_by"
              type="taxt"
              placeholder="Refered By"
            />
          </div>
        </div>
        <div class="flex items-center justify-end">
          <ReusablesBaseButton
            @click="$router.push('/dashboard/doctor/patient/activate1')"
            label="Next Step"
            iconClass="text-white"
            icon-right="arrow-right"
            :right-size="18"
            className="flex justify-center items-center rounded bg-[#0052CC] px-3 py-1 font-inter text-sm font-bold leading-6 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const languages = ["Language"];
const occupations = ["Occupation"];

// Form inputs
const state = reactive<{
  full_name: string;
  mobile: string;
  a_mobile: string;
  email: string;
  date_of_birth: string;
  language: string;
  address: string;
  pincode: string;
  gender: string;
  city: string;
  employer: string;
  occupation: string;
  profle_picture: string;
  refered_by: string;
}>({
  full_name: "",
  mobile: "",
  a_mobile: "",
  email: "",
  date_of_birth: "",
  language: "",
  address: "",
  pincode: "",
  gender: "",
  city: "",
  employer: "",
  occupation: "",
  profle_picture: "",
  refered_by: "",
});
</script>

<style scoped>
.activate {
  border: 7px solid;
  border-color: #0052cc;
  background: transparent;
}
.deactivate {
  @apply bg-[#ccc];
}
.activate-title {
  @apply text-[#4F4F4F];
}
.deactivate-title {
  @apply text-[#ccc];
}
</style>