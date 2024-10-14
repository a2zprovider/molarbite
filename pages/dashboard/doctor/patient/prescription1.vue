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
          <div class="flex justify-between items-center mb-6">
            <div class="flex items-center gap-2">
              <p class="text-[#474D66] font-medium font-inter text-xs">
                Date :
              </p>
              <div class="w-48">
                <input
                  type="date"
                  name="date"
                  value=""
                  class="input-style"
                  placeholder="DD/MM/YYYY"
                />
              </div>
            </div>
            <div
              class="flex items-center gap-2 text-[#474D66] font-inter text-xs"
            >
              <p class="font-medium">Prescription ID :</p>
              <p class="font-bold">123456789</p>
            </div>
          </div>
          <div class="flex items-center gap-3 mb-3">
            <div>
              <ReusablesBaseSelect
                v-model="state.drug"
                label="Drug Name"
                isRequired="true"
                :options="drugs"
                placeholder="Drug Name"
                :error="v$.drug.$error"
              />
            </div>
            <div>
              <ReusablesBaseInput
                label="Dosage"
                v-model="state.dosage"
                type="taxt"
                placeholder="0000"
              />
            </div>
            <div>
              <ReusablesBaseSelect
                v-model="state.day"
                label="Days"
                :options="days"
                placeholder="Days"
              />
            </div>
            <div>
              <ReusablesBaseSelect
                v-model="state.quantity"
                label="Quantity"
                :options="quantities"
                placeholder="Quantity"
              />
            </div>
            <div>
              <div
                class="bg-[#0052CC] w-[40px] h-[40px] rounded mt-6 flex items-center justify-center"
              >
                <Icon
                  name="mdi:weather-sunset-up"
                  size="25"
                  class="text-white"
                />
              </div>
            </div>
            <div>
              <div
                class="bg-[#D6E0FF] w-[40px] h-[40px] rounded mt-6 flex items-center justify-center"
              >
                <Icon name="mdi:weather-sunny" size="25" class="text-white" />
              </div>
            </div>
            <div>
              <div
                class="bg-[#0052CC] w-[40px] h-[40px] rounded mt-6 flex items-center justify-center"
              >
                <Icon name="mdi:weather-night" size="25" class="text-white" />
              </div>
            </div>
            <div class="flex items-center gap-2 mt-4">
              <p class="font-inter text-[#474D66] text-sm font-normal">
                Before Food
              </p>
              <Icon
                name="mdi:toggle-switch-off"
                size="40"
                class="text-[#D8DAE5]"
              />
              <p class="font-inter text-[#474D66] text-sm font-normal">
                After Food
              </p>
            </div>
            <div>
              <p class="text-[#474D66] text-xs font-inter font-medium">
                Substitution Permitted?
              </p>
              <div class="flex items-center gap-2">
                <p class="font-inter text-[#474D66] text-sm font-normal">Yes</p>
                <Icon
                  name="mdi:toggle-switch"
                  size="40"
                  class="text-[#3366FF]"
                />
                <p class="font-inter text-[#474D66] text-sm font-normal">No</p>
              </div>
            </div>
            <div>
              <ReusablesBaseSelect
                v-model="state.refill"
                label="Refill"
                :options="refills"
                placeholder="Refill"
              />
            </div>
          </div>
          <div class="flex items-center gap-3 mb-3">
            <div>
              <ReusablesBaseSelect
                v-model="state.drug"
                label="Drug Name"
                isRequired="true"
                :options="drugs"
                placeholder="Drug Name"
                :error="v$.drug.$error"
              />
            </div>
            <div>
              <ReusablesBaseInput
                label="Dosage"
                v-model="state.dosage"
                type="taxt"
                placeholder="0000"
              />
            </div>
            <div>
              <ReusablesBaseSelect
                v-model="state.day"
                label="Days"
                :options="days"
                placeholder="Days"
              />
            </div>
            <div>
              <ReusablesBaseSelect
                v-model="state.quantity"
                label="Quantity"
                :options="quantities"
                placeholder="Quantity"
              />
            </div>
            <div>
              <div
                class="bg-[#0052CC] w-[40px] h-[40px] rounded mt-6 flex items-center justify-center"
              >
                <Icon
                  name="mdi:weather-sunset-up"
                  size="25"
                  class="text-white"
                />
              </div>
            </div>
            <div>
              <div
                class="bg-[#D6E0FF] w-[40px] h-[40px] rounded mt-6 flex items-center justify-center"
              >
                <Icon name="mdi:weather-sunny" size="25" class="text-white" />
              </div>
            </div>
            <div>
              <div
                class="bg-[#0052CC] w-[40px] h-[40px] rounded mt-6 flex items-center justify-center"
              >
                <Icon name="mdi:weather-night" size="25" class="text-white" />
              </div>
            </div>
            <div class="flex items-center gap-2 mt-4">
              <p class="font-inter text-[#474D66] text-sm font-normal">
                Before Food
              </p>
              <Icon
                name="mdi:toggle-switch-off"
                size="40"
                class="text-[#D8DAE5]"
              />
              <p class="font-inter text-[#474D66] text-sm font-normal">
                After Food
              </p>
            </div>
            <div>
              <p class="text-[#474D66] text-xs font-inter font-medium">
                Substitution Permitted?
              </p>
              <div class="flex items-center gap-2">
                <p class="font-inter text-[#474D66] text-sm font-normal">Yes</p>
                <Icon
                  name="mdi:toggle-switch"
                  size="40"
                  class="text-[#3366FF]"
                />
                <p class="font-inter text-[#474D66] text-sm font-normal">No</p>
              </div>
            </div>
            <div>
              <ReusablesBaseSelect
                v-model="state.refill"
                label="Refill"
                :options="refills"
                placeholder="Refill"
              />
            </div>
          </div>
          <div class="flex items-center gap-3 mb-3">
            <div>
              <ReusablesBaseSelect
                v-model="state.drug"
                label="Drug Name"
                isRequired="true"
                :options="drugs"
                placeholder="Drug Name"
                :error="v$.drug.$error"
              />
            </div>
            <div>
              <ReusablesBaseInput
                label="Dosage"
                v-model="state.dosage"
                type="taxt"
                placeholder="0000"
              />
            </div>
            <div>
              <ReusablesBaseSelect
                v-model="state.day"
                label="Days"
                :options="days"
                placeholder="Days"
              />
            </div>
            <div>
              <ReusablesBaseSelect
                v-model="state.quantity"
                label="Quantity"
                :options="quantities"
                placeholder="Quantity"
              />
            </div>
            <div>
              <div
                class="bg-[#0052CC] w-[40px] h-[40px] rounded mt-6 flex items-center justify-center"
              >
                <Icon
                  name="mdi:weather-sunset-up"
                  size="25"
                  class="text-white"
                />
              </div>
            </div>
            <div>
              <div
                class="bg-[#D6E0FF] w-[40px] h-[40px] rounded mt-6 flex items-center justify-center"
              >
                <Icon name="mdi:weather-sunny" size="25" class="text-white" />
              </div>
            </div>
            <div>
              <div
                class="bg-[#0052CC] w-[40px] h-[40px] rounded mt-6 flex items-center justify-center"
              >
                <Icon name="mdi:weather-night" size="25" class="text-white" />
              </div>
            </div>
            <div class="flex items-center gap-2 mt-4">
              <p class="font-inter text-[#474D66] text-sm font-normal">
                Before Food
              </p>
              <Icon
                name="mdi:toggle-switch-off"
                size="40"
                class="text-[#D8DAE5]"
              />
              <p class="font-inter text-[#474D66] text-sm font-normal">
                After Food
              </p>
            </div>
            <div>
              <p class="text-[#474D66] text-xs font-inter font-medium">
                Substitution Permitted?
              </p>
              <div class="flex items-center gap-2">
                <p class="font-inter text-[#474D66] text-sm font-normal">Yes</p>
                <Icon
                  name="mdi:toggle-switch"
                  size="40"
                  class="text-[#3366FF]"
                />
                <p class="font-inter text-[#474D66] text-sm font-normal">No</p>
              </div>
            </div>
            <div>
              <ReusablesBaseSelect
                v-model="state.refill"
                label="Refill"
                :options="refills"
                placeholder="Refill"
              />
            </div>
          </div>
          <div>
            <ReusablesBaseButton
              label="Add"
              iconClass="text-[#8F95B2]"
              icon-left="plus-circle-outline"
              :left-size="16"
              className="flex justify-center items-center rounded   border border-[#8F95B2]  font-inter bg-white px-4 py-2 text-xs font-medium leading-4  text-[#474D66]"
            />
          </div>
          <div class="flex justify-center gap-3">
            <ReusablesBaseButton
              label="Sign & Send"
              @click="$router.push('/dashboard/doctor/patient/prescription')"
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

const drugs = ["Blood Test"];
const durations = [1];
const days = [1];
const quantities = [1];
const refills = [1];

// Form inputs
const state = reactive<{
  dosage: string;
  drug: string;
  duration: string;
  day: string;
  quantity: string;
  refill: string;
}>({
  dosage: "",
  drug: "",
  duration: "",
  day: "",
  quantity: "",
  refill: "",
});

// Validation rules
const rules = {
  drug: { required },
};
const v$ = useVuelidate(rules, state);
</script>

<style scoped></style>