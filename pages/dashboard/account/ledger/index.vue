<template>
  <div class="p-9">
    <div class="flex justify-start">
      <div
        class="bg-white p-5 border border-[#0052CC] rounded-xl min-w-[312px]"
      >
        <div>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.patient"
              label="Patient Book"
              :options="patients"
              placeholder="Search Patient Name"
            />
          </div>
          <RouterLink
            to="/dashboard/account/patient/profile"
            class="flex items-center justify-between border-b border-black p-2 cursor-pointer"
          >
            <div>
              <p class="font-medium text-base text-black">Mayur Nagaraj</p>
              <p class="font-normal text-base text-[#0065FF]">
                +91 78999 31444
              </p>
            </div>
            <Icon name="mdi:chevron-right" size="16" class="text-[#8F95B2]" />
          </RouterLink>
          <RouterLink
            to="/dashboard/account/patient/profile"
            class="flex items-center justify-between border-b border-black p-2 cursor-pointer"
          >
            <div>
              <p class="font-medium text-base text-black">Mayur N</p>
              <p class="font-normal text-base text-[#0065FF]">
                +91 78999 31422
              </p>
            </div>
            <Icon
              name="mdi:chevron-right"
              size="16"
              class="text-[#8F95B2]"
            /> </RouterLink
          ><RouterLink
            to="/dashboard/account/patient/profile"
            class="flex items-center justify-between p-2 cursor-pointer"
          >
            <div>
              <p class="font-medium text-base text-black">Mayur Naman</p>
              <p class="font-normal text-base text-[#0065FF]">
                +91 78999 31411
              </p>
            </div>
            <Icon name="mdi:chevron-right" size="16" class="text-[#8F95B2]" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const patients = ["Choose Patient"];

// Form inputs
const state = reactive<{
  patient: string;
}>({
  patient: "",
});
</script>

<style scoped></style>