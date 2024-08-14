<template>
  <div class="p-9">
    <div class="mb-5 flex items-center justify-between">
      <ReusablesBaseButton
        @click="$router.push('/dashboard/account')"
        label="Back"
        iconClass="text-[#1F3D99]"
        icon-left="arrow-left"
        :left-size="16"
        class="flex justify-center items-center font-inter text-sm font-medium leading-6 text-[#1F3D99]"
      />
    </div>
    <div class="flex justify-center">
      <div
        class="bg-white p-5 border border-[#0052CC] rounded-xl min-w-[500px]"
      >
        <div class="mb-2 flex items-center gap-3">
          <p class="font-bold text-[#637381] text-base">Txn Number</p>
          <p class="font-bold text-[#2E83FF] text-sm">MB0005</p>
        </div>
        <div class="mb-2 grid grid-cols-2 gap-3">
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.patient"
              label="Patient"
              :options="patients"
              placeholder="Patient"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.branch"
              label="Branch"
              :options="branches"
              placeholder="Branch"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.mode_of_payment"
              label="Mode of Payment"
              :options="mode_of_payments"
              placeholder="Mode of Payment"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Amount"
              v-model="state.amount"
              type="taxt"
              placeholder="₹ 0.00"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Reference Number (if UPI or Cheque)"
              v-model="state.reference_number"
              type="taxt"
              placeholder="516484848851"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <ReusablesBaseButton
            label="Add Amount"
            className="flex justify-center items-center rounded  bg-[#0052CC] p-2.5 text-sm font-bold leading-4 text-white"
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

const patients = ["Choose Patient"];
const branches = ["Jayanagar"];
const mode_of_payments = ["Cash", "Card", "Payment Gateway"];

// Form inputs
const state = reactive<{
  patient: string;
  branch: string;
  mode_of_payment: string;
  amount: string;
  reference_number: string;
}>({
  patient: "",
  branch: "",
  mode_of_payment: "",
  amount: "",
  reference_number: "",
});
</script>

<style scoped></style>