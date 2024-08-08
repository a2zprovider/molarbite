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
      <p class="font-inter text-sm font-medium text-[#4F4F4F]">
        Medical history
      </p>
      <div class="w-[35px]"></div>
      <p class="font-inter text-sm font-medium text-[#ccc]">Agreement</p>
    </div>
    <div class="bg-[#fff] p-6 border-[1px] border-[#0052CC] rounded-xl mx-10">
      <div>
        <div class="mb-5">
          <label for="" class="text-sm font-inter font-normal text-[#333333]"
            >What is your current health like?*</label
          >
          <div class="flex items-center gap-3 mt-2">
            <div>
              <ReusablesBaseRadio
                id="health"
                label="Good"
                v-model="state.health"
                class="peer"
                type="radio"
                name="Good"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `Good` }}</label
              >
            </div>
            <div>
              <ReusablesBaseRadio
                id="health"
                label="Fair"
                v-model="state.health"
                class="peer"
                type="radio"
                name="Fair"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `Fair` }}</label
              >
            </div>
            <div>
              <ReusablesBaseRadio
                id="health"
                label="Poor"
                v-model="state.health"
                class="peer"
                type="radio"
                name="Poor"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `Poor` }}</label
              >
            </div>
          </div>
        </div>
        <div class="mb-5">
          <label for="" class="text-sm font-inter font-normal text-[#333333]"
            >What are your current medical conditions (Select all that apply.)*
          </label>
          <div class="flex items-center gap-3 mt-2">
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="High BP"
                name="High BP"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> High BP</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Diabetes"
                name="Diabetes"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Diabetes</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Heart disease"
                name="Heart disease"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Heart disease</span>
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Blood Disorder"
                name="Blood Disorder"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Blood Disorder</span>
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Artificial Joints/Valves"
                name="Artificial Joints/Valves"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]">
                Artificial Joints/Valves</span
              >
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Asthma"
                name="Asthma"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Asthma</span>
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Hepatitis"
                name="Hepatitis"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Hepatitis</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Cancer"
                name="Cancer"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Cancer</span>
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Sinus Problem"
                name="Sinus Problem"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Sinus Problem</span>
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Thyroid"
                name="Thyroid"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Thyroid</span>
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
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="None"
                name="None"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> None</span>
            </label>
          </div>
        </div>
        <div class="mb-5">
          <label for="" class="text-sm font-inter font-normal text-[#333333]"
            >List of Current Medication*</label
          >
          <div class="grid grid-cols-3 gap-3 mt-2 items-center">
            <div class="">
              <ReusablesBaseInput
                v-model="state.medication"
                type="taxt"
                placeholder="medication"
              />
            </div>
            <div class="">
              <ReusablesBaseButton
                label="Add More"
                iconClass="text-[#0052CC]"
                icon-left="plus"
                :left-size="14"
                class="flex items-center rounded text-sm font-bold leading-4 text-[#0052CC]"
              />
            </div>
          </div>
        </div>

        <div class="mb-5">
          <label for="" class="text-sm font-inter font-normal text-[#333333]"
            >What allergies do you have? (Select all that apply.)*</label
          >
          <div class="flex items-center gap-3 mt-2">
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Penicillin"
                name="Penicillin"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Penicillin</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Sulfa"
                name="Sulfa"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Sulfa</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Latex"
                name="Latex"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Latex</span>
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Asprin"
                name="Asprin"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Asprin</span>
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
            >Do you smoke or consume alcohol?*</label
          >
          <div class="flex items-center gap-3 mt-2">
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Only Smoke"
                name="Only Smoke"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Only Smoke</span>
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Only Drink Alcohol"
                name="Only Drink Alcohol"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]">
                Only Drink Alcohol</span
              >
            </label>
            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Both"
                name="Both"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Both</span>
            </label>

            <label
              class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
            >
              <input
                id="Neither"
                name="Neither"
                type="checkbox"
                class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
              <span class="pl-3 text-sm text-[#474D66]"> Neither</span>
            </label>
          </div>
        </div>
        <div class="mb-5">
          <label for="" class="text-sm font-inter font-normal text-[#333333]"
            >Are you pregnant?*</label
          >
          <div class="flex items-center gap-3 mt-2">
            <div>
              <ReusablesBaseRadio
                id="pregnant"
                label="Yes"
                v-model="state.pregnant"
                class="peer"
                type="radio"
                name="Yes"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `Yes` }}</label
              >
            </div>
            <div>
              <ReusablesBaseRadio
                id="pregnant"
                label="No"
                v-model="state.pregnant"
                class="peer"
                type="radio"
                name="No"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `No` }}</label
              >
            </div>
            <div>
              <ReusablesBaseRadio
                id="pregnant"
                label="Not Applicable"
                v-model="state.pregnant"
                class="peer"
                type="radio"
                name="Not Applicable"
              />
              <label
                for="male"
                class="ml-2 font-inter text-base font-medium text-[#474D66]"
                >{{ `Not Applicable` }}</label
              >
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end">
          <ReusablesBaseButton
            @click="$router.push('/dashboard/doctor/patient/activate3')"
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

// Form inputs
const state = reactive<{
  health: string;
  medication: string;
  pregnant: string;
}>({
  health: "",
  medication: "",
  pregnant: "",
});
</script>

<style scoped></style>