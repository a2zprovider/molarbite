<template>
  <div class="p-9">
    <div class="mb-5 flex items-center justify-between">
      <ReusablesBaseButton @click="$router.push('/dashboard/account/patient/profile')" label="Back"
        iconClass="text-[#1F3D99]" icon-left="arrow-left" :left-size="16"
        class="flex justify-center items-center font-inter text-sm font-medium leading-6 text-[#1F3D99]" />
    </div>
    <div>
      <div>
        <p class="text-[#0065FF] font-inter text-medium text-xl">26th Jan 2024, Monday</p>
      </div>
      <div class="flex gap-3 mt-4">
        <div class="border-[1px] border-[#0052CC] rounded p-2 cursor-pointer" @click="state.tab = 'tab1'"
          :class="state.tab == 'tab1' ? 'tab-active' : 'tab-deactive'">
          <p class="text-[#333333] font-inter font-semibold text-xs">09:00 - 10:00</p>
        </div>
        <div class="border-[1px] border-[#0052CC] rounded p-2 cursor-pointer" @click="state.tab = 'tab2'"
          :class="state.tab == 'tab2' ? 'tab-active' : 'tab-deactive'">
          <p class="text-[#333333] font-inter font-semibold text-xs">10:00 - 11:00</p>
        </div>
        <div class="border-[1px] border-[#0052CC] rounded p-2 cursor-pointer" @click="state.tab = 'tab3'"
          :class="state.tab == 'tab3' ? 'tab-active' : 'tab-deactive'">
          <p class="text-[#333333] font-inter font-semibold text-xs">13:00 - 14:00</p>
        </div>
        <div class="border-[1px] border-[#0052CC] rounded p-2 cursor-pointer" @click="state.tab = 'tab4'"
          :class="state.tab == 'tab4' ? 'tab-active' : 'tab-deactive'">
          <p class="text-[#333333] font-inter font-semibold text-xs">16:00 - 17:00</p>
        </div>
        <div class="border-[1px] border-[#0052CC] rounded p-2 cursor-pointer" @click="state.tab = 'tab5'"
          :class="state.tab == 'tab5' ? 'tab-active' : 'tab-deactive'">
          <p class="text-[#333333] font-inter font-semibold text-xs">17:00 - 18:00</p>
        </div>
      </div>
      <div v-if="state.tab">
        <div class="w-[390px] bg-white mb-2 mt-4 border border-[#AFB2B7] rounded font-inter font-medium text-sm p-3">
          <div class="flex justify-between mb-2">
            <p class="text-[#474D66] w-[50%] text-left">Patient Name</p>
            <p class="text-[#202020] w-[50%] text-right">
              Raj Kumar Singh
            </p>
          </div>
          <div class="flex justify-between mb-2">
            <p class="text-[#474D66] w-[50%] text-left">
              Chief Complaint
            </p>
            <p class="text-[#202020] w-[50%] text-right">
              Vikash Kumar Singh
            </p>
          </div>
          <div class="flex justify-between mb-2">
            <p class="text-[#474D66] w-[50%] text-left">Doctor Name</p>
            <p class="text-[#202020] w-[50%] text-right">
              Dr. Ramkumar Rastogi
            </p>
          </div>
          <div class="flex justify-between mb-2">
            <p class="text-[#474D66] w-[50%] text-left">Date</p>
            <p class="text-[#202020] w-[50%] text-right">01/12/2023</p>
          </div>
          <div class="flex justify-between mb-2">
            <p class="text-[#474D66] w-[50%] text-left">Slots</p>
            <p class="text-[#202020] w-[50%] text-right">09:00am</p>
          </div>
          <div class="flex justify-between mb-2">
            <p class="text-[#474D66] w-[50%] text-left">Notes</p>
            <p class="text-[#202020] w-[50%] text-right">
              Industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when
            </p>
          </div>
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
  tab: string;
}>({
  tab: '',
});
</script>

<style scoped>
.tab-active {
  @apply bg-[#0052CC];
}
.tab-active p {
  @apply text-white;
}
.tab-deactive {
  @apply bg-white;
}
.tab-deactive p {
  @apply text-[#333333];
}
</style>