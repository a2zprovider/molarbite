<template>
  <div class="p-9">
    <div class="">
      <div class="border border-[#0052CC]">
        <div class="p-3 text-center bg-[#163BAC]">
          <p class="font-inter text-white text-bold text-base">
            New Prescription
          </p>
        </div>
        <div class="bg-white p-5">
          <div class="mb-3 flex gap-3">
            <div>
              <Icon name="mdi:tooth" size="60" class="text-black" />
            </div>
            <div>
              <p class="font-bold text-black text-xl">Dr. Naveena D</p>
              <p class="font-bold text-black text-sm">
                MG Road, Bengaluru, Karnataka 560001, India.
              </p>
            </div>
          </div>
          <hr class="mb-3 text-[#BDBDBD]" />
          <div class="mb-4 flex justify-between gap-3">
            <div class="">
              <p class="font-semibold text-black text-xl">
                Patient Name : Mayur N
              </p>
              <p class="font-normal text-black text-xl">24, M</p>
              <p class="font-normal text-black text-xl">Diagnosis: ---</p>
            </div>
            <div class="text-right">
              <p class="font-bold text-black text-xl">2020/08/03</p>
              <p class="font-normal text-black text-xl">
                Prescription ID: 123456789
              </p>
            </div>
          </div>
          <div class="mb-3">
            <ReusablesBaseTable
              :srNo="true"
              :headers="headers"
              :data="items"
              :row-selector="false"
              :edit_btn="false"
              :delete_btn="false"
              :view_btn="false"
            >
              <template #frequency="item">
                <div class="flex gap-3">
                  <div class="text-center">
                    <p>{{ item.frequency.morning }}</p>
                    <p>Morning</p>
                  </div>
                  <div class="text-center">
                    <p>{{ item.frequency.afternoon }}</p>
                    <p>Afternoon</p>
                    <p>{{ item.frequency.note }}</p>
                  </div>
                  <div class="text-center">
                    <p>{{ item.frequency.evening }}</p>
                    <p>Evening</p>
                  </div>
                </div>
              </template>
              <template #treatment_name="item">
                <div>
                  <p>{{ item.treatment_name }}</p>
                  <p>{{ item.rate }}</p>
                  <p>Substitution Permitted</p>
                </div>
              </template>
            </ReusablesBaseTable>
          </div>
          <div class="flex justify-center gap-3">
            <ReusablesBaseButton
              label="Close"
              className="flex justify-center items-center rounded font-inter w-[120px] bg-[#0052CC] px-4 py-2 text-xs font-semibold leading-4 text-white"
            />
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

const headers = {
  treatment_name: "",
  frequency: "Frequency",
  duration: "Duration",
  qty: "Quantity",
  refills: "Refills",
};
const items = [
  {
    treatment_name: "Capsule Novamox LB",
    rate: "100 mg",
    frequency: { morning: 1, afternoon: 0, evening: 1, note: "Before Food" },
    duration: "5 Days",
    qty: "10",
    refills: "1",
  },
  {
    treatment_name: "Capsule Novamox LB",
    rate: "100 mg",
    frequency: { morning: 1, afternoon: 0, evening: 1, note: "Before Food" },
    duration: "5 Days",
    qty: "10",
    refills: "1",
  },
  {
    treatment_name: "Capsule Novamox LB",
    rate: "100 mg",
    frequency: { morning: 1, afternoon: 0, evening: 1, note: "Before Food" },
    duration: "5 Days",
    qty: "10",
    refills: "1",
  },
];

// Form inputs
const state = reactive<{
  branch: string;
  patient: string;
}>({
  branch: "",
  patient: "",
});
</script>

<style scoped></style>