<template>
  <div class="p-9">
    <div class="">
      <div class="border border-[#0052CC]">
        <div class="p-3 text-center bg-[#163BAC]">
          <p class="font-inter text-white text-bold text-base">Invoice</p>
        </div>
        <div class="bg-white p-5">
          <div class="mb-3 flex gap-3">
            <div>
              <Icon name="mdi:tooth" size="60" class="text-black" />
            </div>
            <div>
              <p class="font-bold text-black text-xl">MB Clinic Pvt Ltd.</p>
              <p class="font-bold text-black text-sm">
                MG Road, Bengaluru, Karnataka 560001, India.
              </p>
            </div>
          </div>
          <hr class="mb-3 text-[#BDBDBD]" />
          <div class="mb-3 flex justify-between gap-3">
            <div class="">
              <p class="font-semibold text-black text-xl">
                Patient : Mayur Nagaraj
              </p>
              <p class="font-normal text-[#0065FF] text-base">
                +91 78999 31444
              </p>
            </div>
            <div>
              <div class="flex items-center gap-3">
                <p class="font-bold text-[#637381] text-base">Invoice Number</p>
                <p class="font-bold text-[#2E83FF] text-sm">
                  ORGID_2023-24#0001
                </p>
              </div>
              <div class="flex items-center gap-3">
                <p class="font-bold text-[#637381] text-base">Date</p>
                <p class="font-bold text-black text-sm">01/01/2023</p>
              </div>
            </div>
          </div>
          <div class="mb-3">
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
              <template #doctor><p></p></template>
              <template #amount="item">
                <strong class="text-black">{{ item.amount }}</strong>
              </template>
              <template #treatment_name="item">
                <div>
                  <p>{{ item.treatment_name }}</p>
                  <p>-- {{ item.doctor }}</p>
                </div>
              </template>
            </ReusablesBaseTable>
          </div>
          <div class="mb-3 flex justify-between">
            <div></div>
            <div>
              <div
                class="mb-3 bg-[#F7F7F9] font-bold text-xs p-3 w-80 rounded-xl text-[#4F4F4F]"
              >
                <div class="flex items-center justify-between">
                  <p>Sub Total</p>
                  <p class="text-black">20,000.00</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
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
              <template #doctor><p></p></template>
              <template #amount="item">
                <strong class="text-black">{{ item.amount }}</strong>
              </template>
              <template #treatment_name="item">
                <div>
                  <p>{{ item.treatment_name }}</p>
                  <p>-- {{ item.doctor }}</p>
                </div>
              </template>
            </ReusablesBaseTable>
          </div>
          <div class="mb-3 flex justify-between">
            <div>
              <p class="font-bold text-sm text-black">Total In Words</p>
              <p class="font-normal text-xs text-black">
                Indian Rupee twenty thousand Only
              </p>
            </div>
            <div>
              <div
                class="mb-3 bg-[#F7F7F9] font-bold text-xs p-3 w-80 rounded-xl text-[#4F4F4F]"
              >
                <div class="flex items-center justify-between mb-2">
                  <p>Sub Total</p>
                  <p class="text-black">20,000.00</p>
                </div>
              </div>
              <div
                class="mb-3 bg-[#F7F7F9] font-bold text-xs p-3 w-80 rounded-xl text-[#4F4F4F]"
              >
                <div class="flex items-center justify-between mb-2">
                  <p>CGST 9%</p>
                  <p class="text-black">1,800.00</p>
                </div>
                <div class="flex items-center justify-between">
                  <p>SGST 9%</p>
                  <p class="text-black">1,800.00</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3 flex justify-end items-center">
            <div
              class="flex items-center justify-between bg-[#F7F7F9] font-bold text-lg p-3 w-80 rounded-xl"
            >
              <p class="text-[#4F4F4F]">Total</p>
              <p class="text-black">23,600.00</p>
            </div>
          </div>
          <div class="flex justify-center gap-3">
            <ReusablesBaseButton
              label="Send"
              iconClass="text-[#696F8C]"
              icon-left="import"
              :left-size="16"
              className="flex justify-center items-center rounded w-[120px] h-[40px]  border border-[#828282]  font-inter bg-white p-2.5 text-xs font-medium leading-4  text-[#696F8C]"
            />
            <ReusablesBaseButton
              label="Print"
              iconClass="text-[#696F8C]"
              icon-left="printer"
              :left-size="16"
              className="flex justify-center items-center rounded w-[120px] h-[40px]  border border-[#828282]  font-inter bg-white p-2.5 text-xs font-medium leading-4  text-[#696F8C]"
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
  treatment_name: "Treatment Name",
  qty: "Qty",
  rate: "Rate",
  tax: "Tax",
  tax_amount: "Tax Amount",
  amount: "Amount",
};
const items = [
  {
    treatment_name: "Treatment 1",
    doctor: "Dr. Molar Byte",
    qty: "1.0",
    rate: "10,000.00",
    tax: "18%",
    tax_amount: "1,800.00",
    amount: "11,800.00",
  },
  {
    treatment_name: "Treatment 2",
    doctor: "Dr. Molar Byte",
    qty: "1.0",
    rate: "10,000.00",
    tax: "18%",
    tax_amount: "1,800.00",
    amount: "11,800.00",
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