<template>
  <div class="p-9">
    <div class="mb-5 flex items-center justify-between">
      <ReusablesBaseButton
        @click="$router.push('/dashboard/doctor/patient/details')"
        label="Back"
        iconClass="text-[#1F3D99]"
        icon-left="arrow-left"
        :left-size="16"
        class="flex justify-center items-center font-inter text-sm font-medium leading-6 text-[#1F3D99]"
      />
    </div>

    <div class="mb-5 flex items-center text-center">
      <div
        @click="changeTab('patient-history')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'patient-history' ? 'tab-active' : 'tab-inactive'"
      >
        Patient History
      </div>
      <div
        @click="changeTab('recent-files')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'recent-files' ? 'tab-active' : 'tab-inactive'"
      >
        Recent Files
      </div>
      <div
        @click="changeTab('notes')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'notes' ? 'tab-active' : 'tab-inactive'"
      >
        Notes
      </div>
      <div
        @click="changeTab('diagnostic-test')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'diagnostic-test' ? 'tab-active' : 'tab-inactive'"
      >
        Diagnostic Test
      </div>
      <div
        @click="changeTab('diagnosis')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'diagnosis' ? 'tab-active' : 'tab-inactive'"
      >
        Diagnosis
      </div>
      <div
        @click="changeTab('treatment')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'treatment' ? 'tab-active' : 'tab-inactive'"
      >
        Treatment
      </div>
      <div
        @click="changeTab('treatment-plan-proposal')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="
          tab == 'treatment-plan-proposal' ? 'tab-active' : 'tab-inactive'
        "
      >
        Treatment Plan & Proposal
      </div>
      <div
        @click="changeTab('prescribe')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'prescribe' ? 'tab-active' : 'tab-inactive'"
      >
        Prescribe
      </div>
      <div
        @click="changeTab('communication')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'communication' ? 'tab-active' : 'tab-inactive'"
      >
        Communication
      </div>
    </div>
    <div class="bg-white p-5">
      <p class="font-bold text-2xl text-black mb-5">Summary</p>
      <div class="flex justify-between h-[70px]">
        <div class="flex gap-2">
          <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
          <div>
            <p class="font-medium text-sm text-black">Naveena registered</p>
          </div>
        </div>
        <p class="font-normal text-[10px] text-[#4F4F4F]">3:56 PM 2020-07-28</p>
      </div>
      <div class="flex justify-between h-[70px]">
        <div class="flex gap-2">
          <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
          <div>
            <p class="font-medium text-sm text-black">Naveena is activated</p>
            <p class="font-normal text-[11px] text-black leading-[15px]">
              View Health History Form
            </p>
          </div>
        </div>
        <p class="font-normal text-[10px] text-[#4F4F4F]">4:10 PM 2020-07-28</p>
      </div>
      <div class="flex justify-between h-[70px]">
        <div class="flex gap-2">
          <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
          <div>
            <p class="font-medium text-sm text-black">
              Naveena checked in for RCT
            </p>
          </div>
        </div>
        <p class="font-normal text-[10px] text-[#4F4F4F]">4:20 PM 2020-07-28</p>
      </div>
      <div class="flex justify-between h-[70px]">
        <div class="flex gap-2">
          <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
          <div>
            <p class="font-medium text-sm text-black">
              Dr. Aparna diagnosed Naveena
            </p>
            <p class="font-normal text-[11px] text-black leading-[15px]">
              Gaps between 11 and 12
            </p>
            <p class="font-normal text-[11px] text-black leading-[15px]">
              Alignment needed across front row
            </p>
          </div>
        </div>
        <p class="font-normal text-[10px] text-[#4F4F4F]">4:30 PM 2020-07-28</p>
      </div>
      <div class="flex justify-between h-[70px]">
        <div class="flex gap-2">
          <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
          <div>
            <p class="font-medium text-sm text-black">
              Dr. Aparna assigned prescription
            </p>
            <p class="font-normal text-[11px] text-black leading-[15px]">
              Paracetamol for 3 days (1-0-1)
            </p>
          </div>
        </div>
        <p class="font-normal text-[10px] text-[#4F4F4F]">4:40 PM 2020-07-28</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const changeTab = (val: string) => {
  state.tab = val;
};

// Form inputs
const state = reactive<{
  tab: string;
}>({
  tab: "patient-history",
});
</script>

<style scoped>
.tab-active {
  @apply bg-[#F3F6FF] text-[#3366FF];
}
.tab-inactive {
  @apply bg-white text-[#696F8C];
}
</style>