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
        <div class="h-[28px] w-[28px] rounded-full bg-[#ccc]"></div>
        <!-- <p>Basic Details</p> -->
      </div>
      <div class="w-[100px] border-[1px] border-[#BDBDBD]"></div>
      <div class="flex flex-col justify-center items-center">
        <div class="h-[28px] w-[28px] rounded-full bg-[#ccc]"></div>
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
      <p class="font-inter text-sm font-medium text-[#ccc]">Medical history</p>
      <div class="w-[35px]"></div>
      <p class="font-inter text-sm font-medium text-[#ccc]">Agreement</p>
    </div>
    <div class="bg-[#fff] p-6 border-[1px] border-[#0052CC] rounded-xl mx-10">
      <div>
        <div class="mb-5">
          <label for="" class="text-sm font-inter font-normal text-[#333333]"
            >When was your last dental visit?*</label
          >
          <div class="flex items-center gap-3 mt-2">
            <div>
              <ReusablesBaseRadio
                id="age"
                label="<6 Months"
                v-model="state.visit_time"
                class="peer"
                type="radio"
                name="<6 Months"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `<6 Months` }}</label
              >
            </div>
            <div>
              <ReusablesBaseRadio
                id="age"
                label="6-12 Months"
                v-model="state.visit_time"
                class="peer"
                type="radio"
                name="6-12 Months"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `6-12 Months` }}</label
              >
            </div>
            <div>
              <ReusablesBaseRadio
                id="age"
                label="12+ Months"
                v-model="state.visit_time"
                class="peer"
                type="radio"
                name="12+ Months"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `12+ Months` }}</label
              >
            </div>
            <div>
              <ReusablesBaseRadio
                id="age"
                label="Never"
                v-model="state.visit_time"
                class="peer"
                type="radio"
                name="Never"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `Never` }}</label
              >
            </div>
          </div>
        </div>
        <div class="mb-5">
          <label for="" class="text-sm font-inter font-normal text-[#333333]"
            >Do you experience any of the following?*</label
          >
          <div class="flex items-center gap-3 mt-2">
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Tooth Pain"
                name="Tooth Pain"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Tooth Pain</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Bleeding Gums"
                name="Bleeding Gums"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Bleeding Gums</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Sensitive Teeth"
                name="Sensitive Teeth"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Sensitive Teeth</span>
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Loose Tooth/ Teeth"
                name="Loose Tooth/ Teeth"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]">
                Loose Tooth/ Teeth</span
              >
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Crowded Teeth"
                name="Crowded Teeth"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Crowded Teeth</span>
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Others"
                name="Others"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Others</span>
            </label>
          </div>
        </div>
        <div class="mb-5">
          <label for="" class="text-sm font-inter font-normal text-[#333333]"
            >Rate your dental fear.*</label
          >
          <div class="flex items-center gap-3 mt-2">
            <div>
              <ReusablesBaseRadio
                id="age"
                label="Mild"
                v-model="state.fear"
                class="peer"
                type="radio"
                name="Mild"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `Mild` }}</label
              >
            </div>
            <div>
              <ReusablesBaseRadio
                id="age"
                label="Moderate"
                v-model="state.fear"
                class="peer"
                type="radio"
                name="Moderate"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `Moderate` }}</label
              >
            </div>
            <div>
              <ReusablesBaseRadio
                id="age"
                label="Severe"
                v-model="state.fear"
                class="peer"
                type="radio"
                name="Severe"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `Severe` }}</label
              >
            </div>
            <div>
              <ReusablesBaseRadio
                id="age"
                label="None"
                v-model="state.fear"
                class="peer"
                type="radio"
                name="None"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `None` }}</label
              >
            </div>
          </div>
        </div>
        <div class="mb-5">
          <label for="" class="text-sm font-inter font-normal text-[#333333]"
            >What is the reason for today's visit? (Select all that
            apply.)*</label
          >
          <div class="flex items-center gap-3 mt-2">
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Emergency Visit"
                name="Emergency Visit"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Emergency Visit</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Complete Check"
                name="Complete Check"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Complete Check</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Second Opinion"
                name="Second Opinion"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Second Opinion</span>
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Dental Implant Consult"
                name="Dental Implant Consult"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]">
                Dental Implant Consult</span
              >
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Braces Consult"
                name="Braces Consult"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Braces Consult</span>
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Cosmetic Consult"
                name="Cosmetic Consult"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Cosmetic Consult</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Others"
                name="Others"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Others</span>
            </label>
          </div>
        </div>
        <div class="mb-5">
          <label for="" class="text-sm font-inter font-normal text-[#333333]"
            >Emergency Contacts</label
          >
          <div class="grid grid-cols-3 gap-3 mt-2">
            <div class="mb-2">
              <ReusablesBaseInput
                label="Full Name"
                v-model="state.full_name"
                type="taxt"
                placeholder="Full Name"
              />
            </div>
            <div class="mb-2">
              <ReusablesBaseSelect
                v-model="state.relationship"
                label="Relationship"
                :options="relationships"
                placeholder="Relationship"
              />
            </div>
            <div class="mb-2">
              <ReusablesBaseInput
                label="Phone Number"
                v-model="state.mobile"
                type="taxt"
                placeholder="+91 99999 99999"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <ReusablesBaseButton
            @click="$router.push('/dashboard/doctor/patient/activate2')"
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

const relationships = ["Relationship"];

// Form inputs
const state = reactive<{
  full_name: string;
  relationship: string;
  mobile: string;

  visit_time: string;
  fear: string;
}>({
  full_name: "",
  relationship: "",
  mobile: "",

  visit_time: "",
  fear: "",
});
</script>

<style scoped></style>