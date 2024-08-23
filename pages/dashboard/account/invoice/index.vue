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
    <div class="">
      <div class="bg-white p-5 border border-[#0052CC] rounded-xl">
        <div class="mb-2 flex items-center gap-3">
          <p class="font-bold text-[#637381] text-base">Invoice Number</p>
          <p class="font-bold text-[#2E83FF] text-sm">ORGID_2023-24#0001</p>
        </div>
        <div class="mb-2 grid grid-cols-6 gap-3">
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
              v-model="state.patient"
              label="Patient"
              :options="patients"
              placeholder="Patient"
            />
          </div>
        </div>
        <div class="mb-4">
          <ReusablesBaseTable
            :srNo="false"
            :headers="headers"
            :data="items"
            :row-selector="false"
            :edit_btn="false"
            :onEdit="handleEdit"
            :delete_btn="false"
            :onDelete="handleDelete"
            :view_btn="false"
            :onView="handleView"
          >
          </ReusablesBaseTable>
        </div>
        <div class="mb-4 flex justify-between items-center">
          <ReusablesBaseButton
            label="Add Line"
            iconClass="text-[#474D66]"
            icon-left="plus"
            :left-size="12"
            className="flex justify-center items-center rounded border border-[#8F95B2] font-inter bg-white py-2 px-4 text-xs font-medium leading-4 text-[#474D66]"
          />
          <div
            class="flex items-center justify-between bg-[#F7F7F9] font-bold text-lg p-3 w-80 rounded-xl"
          >
            <p>Sub Total</p>
            <p>0.00</p>
          </div>
        </div>
        <div class="mb-4">
          <ReusablesBaseTable
            :srNo="false"
            :headers="headers"
            :data="items"
            :row-selector="false"
            :edit_btn="false"
            :onEdit="handleEdit"
            :delete_btn="false"
            :onDelete="handleDelete"
            :view_btn="false"
            :onView="handleView"
          >
          </ReusablesBaseTable>
        </div>
        <div class="mb-4 flex justify-between items-center">
          <ReusablesBaseButton
            label="Add Line"
            iconClass="text-[#474D66]"
            icon-left="plus"
            :left-size="12"
            className="flex justify-center items-center rounded border border-[#8F95B2] font-inter bg-white py-2 px-4 text-xs font-medium leading-4 text-[#474D66]"
          />
          <div
            class="flex items-center justify-between bg-[#F7F7F9] font-bold text-lg p-3 w-80 rounded-xl"
          >
            <p>Sub Total</p>
            <p>0.00</p>
          </div>
        </div>
        <div class="mb-4 flex justify-end items-center">
          <div
            class="flex items-center justify-between bg-[#F7F7F9] font-bold text-[28px] p-3 w-80 rounded-xl"
          >
            <p class="text-[#4F4F4F]">Total</p>
            <p>0.00</p>
          </div>
        </div>
        <div class="flex justify-center">
          <ReusablesBaseButton
            @click="$router.push('/dashboard/account/invoice/view')"
            label="Create"
            className="flex justify-center items-center rounded w-[120px] h-[40px]  bg-[#0052CC] p-2.5 text-sm font-bold leading-4 text-white"
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

const headers = {
  treatment_name: "Treatment Name",
  qty: "Qty",
  rate: "Rate",
  tax: "Tax",
  tax_amount: "Tax Amount",
  amount: "Amount",
};
const items = [
  {
    treatment_name: "Type or click to select items",
    qty: "1.0",
    rate: "0.00",
    tax: "0%",
    tax_amount: "0.00",
    amount: "0.00",
  },
];

const patients = ["Choose Patient"];
const branches = ["Jayanagar"];
const mode_of_payments = ["Cash", "Card", "Payment Gateway"];

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