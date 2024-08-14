<template>
  <div class="p-9">
    <div class="mb-5 flex items-center justify-between">
      <ReusablesBaseButton
        @click="$router.push('/dashboard/account/patient/profile')"
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
          <p class="font-bold text-[#637381] text-base">Voucher Number</p>
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
              v-model="state.type"
              label="Type"
              :options="types"
              placeholder="Discount Voucher"
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

const patients = ["Mr. Patient One"];
const types = ["Receipt", "Payment", "Discount Voucher"];
const mode_of_payments = ["Cash", "Card", "Payment Gateway"];

// Form inputs
const state = reactive<{
  patient: string;
  type: string;
  mode_of_payment: string;
  amount: string;
}>({
  patient: "",
  type: "",
  mode_of_payment: "",
  amount: "",
});
</script>

<style scoped></style>