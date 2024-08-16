<template>
  <div class="p-9">
    <div class="flex gap-4">
      <div
        class="bg-white p-5 px-[50px] border border-[#0052CC] rounded-xl min-w-[500px] text-center"
      >
        <p class="font-medium text-2xl text-[#0052CC] mb-3">Leave Request</p>

        <div class="mb-2 grid grid-cols-1 gap-3">
          <div class="mb-2 flex justify-center gap-2 items-center">
            <div class="text-right w-[30%]">
              <p class="font-inter font-medium text-[#474D66] text-[13px]">
                Reason for Leave
              </p>
            </div>
            <div class="text-left w-[70%]">
              <ReusablesBaseSelect
                v-model="state.reason_type"
                :options="reasons"
                placeholder="reason"
              />
            </div>
          </div>
          <div
            class="mb-2 flex justify-center gap-2 items-center"
            v-if="state.reason_type == 'Others'"
          >
            <div class="text-right w-[30%]">
              <p class="font-inter font-medium text-[#474D66] text-[13px]">
                Reason
              </p>
            </div>
            <div class="text-left w-[70%]">
              <ReusablesBaseTextarea
                v-model="state.reason"
                type="text"
                placeholder="Reason"
              />
            </div>
          </div>
          <div class="mb-2 flex justify-center gap-2 items-center">
            <div class="text-right w-[30%]">
              <p class="font-inter font-medium text-[#474D66] text-[13px]">
                Dates
              </p>
            </div>
            <div class="text-left w-[70%]">
              <ReusablesBaseInput
                v-model="state.date"
                type="date"
                placeholder="DD/MM/YYYY"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <ReusablesBaseButton
            label="Submit"
            className="flex justify-center items-center rounded  bg-[#0052CC] px-4 py-2 text-xs font-medium leading-4 text-white"
          />
        </div>
      </div>
      <div class="bg-white p-5 border border-[#0052CC] rounded-xl text-center">
        <div class="mb-3">
          <p class="font-medium text-2xl text-[#0052CC]">Appointments</p>
          <p class="font-medium text-xs text-[#0052CC]">
            Please reschedule your appointments to avoid conflicts before
            proceeding with your application.
          </p>
        </div>

        <div class="border rounded p-3 mb-2">
          <div class="flex justify-between items-center mb-4">
            <span
              class="uppercase text-[#2952CC] bg-[#D6E0FF] px-1.5 rounded font-inter text-[11px] font-semibold"
            >
              Cheif complaint
            </span>
            <ReusablesBaseButton
              iconClass="text-[#8F95B2]"
              icon-left="pencil"
              :left-size="16"
              className="flex justify-center items-center border border-[#D8DAE5] rounded bg-white px-3 py-1.5 font-inter text-base font-normal leading-4"
            />
          </div>
          <div>
            <table class="w-full">
              <tbody>
                <tr>
                  <td>
                    <div class="flex justify-start gap-2 items-center">
                      <Icon name="mdi:user-circle" size="30" />
                      <p class="text-sm font-normal text-black">
                        Rajesh Kumar Singh
                      </p>
                    </div>
                  </td>
                  <td class="text-sm font-normal text-[#4F4F4F]">Cavity</td>
                  <td class="text-right text-sm font-normal">
                    <p class="text-[#4F4F4F]">27/01/2024</p>
                    <p class="text-[#163BAC]">09:00am - 10:30am</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="border rounded p-3">
          <div class="flex justify-between items-center mb-4">
            <span
              class="uppercase text-[#317159] bg-[#DCF2EA] px-1.5 rounded font-inter text-[11px] font-semibold"
            >
              treatment
            </span>
            <ReusablesBaseButton
              iconClass="text-[#8F95B2]"
              icon-left="pencil"
              :left-size="16"
              className="flex justify-center items-center border border-[#D8DAE5] rounded bg-white px-3 py-1.5 font-inter text-base font-normal leading-4"
            />
          </div>
          <div>
            <table class="w-full">
              <tbody>
                <tr>
                  <td>
                    <div class="flex justify-start gap-2 items-center">
                      <Icon name="mdi:user-circle" size="30" />
                      <p class="text-sm font-normal text-black">
                        Rajesh Kumar Singh
                      </p>
                    </div>
                  </td>
                  <td class="text-sm font-normal text-[#4F4F4F]">
                    Broken Tooth
                  </td>
                  <td class="text-right text-sm font-normal">
                    <p class="text-[#4F4F4F]">28/01/2024</p>
                    <p class="text-[#163BAC]">09:00am - 10:30am</p>
                  </td>
                </tr>
              </tbody>
            </table>
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

const reasons = [
  "Casual",
  "Medical",
  "Vacation",
  "Maternity ",
  "Travel",
  "Others",
];

// Form inputs
const state = reactive<{
  reason_type: string;
  reason: string;
  date: string;
}>({
  reason_type: "",
  reason: "",
  date: "",
});
</script>

<style scoped></style>