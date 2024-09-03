<template>
  <div class="p-9">
    <div class="mb-5 flex items-center justify-between">
      <ReusablesBaseButton
        @click="$router.push('/dashboard/account/ledger')"
        label="Back"
        iconClass="text-[#1F3D99]"
        icon-left="arrow-left"
        :left-size="16"
        class="flex justify-center items-center font-inter text-sm font-medium leading-6 text-[#1F3D99]"
      />
      <div class="flex items-center gap-2">
        <ReusablesBaseButton
          @click="$router.push('/dashboard/account/discount')"
          label="Discount"
          iconClass="text-[#474D66]"
          icon-left="plus"
          :left-size="12"
          className="flex justify-center items-center border border-[#8F95B2] rounded bg-white px-4 py-2 font-inter text-xs font-normal leading-4 text-[#474D66]"
        />
        <ReusablesBaseButton
          @click="$router.push('/dashboard/account/payment')"
          label="Receipt"
          iconClass="text-[#474D66]"
          icon-left="plus"
          :left-size="12"
          className="flex justify-center items-center border border-[#8F95B2] rounded bg-white px-4 py-2 font-inter text-xs font-normal leading-4 text-[#474D66]"
        />
        <ReusablesBaseButton
          @click="$router.push('/dashboard/account/invoice')"
          label="Invoice"
          iconClass="text-[#474D66]"
          icon-left="plus"
          :left-size="12"
          className="flex justify-center items-center border border-[#8F95B2] rounded bg-white px-4 py-2 font-inter text-xs font-normal leading-4 text-[#474D66]"
        />
      </div>
    </div>
    <div class="flex items-center gap-3 mb-5">
      <div class="w-[85%]">
        <div
          class="relative overflow-x-auto border-[2px] border-[#0052CC] rounded-xl"
        >
          <table
            class="w-full border-collapse border-spacing-[25px] text-base font-medium leading-6 rounded-xl text-left"
          >
            <thead class="bg-[#0052CC]">
              <tr>
                <th
                  scope="col"
                  colSpan="3"
                  class="px-6 py-3 font-medium text-lg lending-5 text-white"
                >
                  Patient Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b border-[#0052CC]">
                <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
                  <div class="flex justify-between items-center">
                    <p class="text-xs text-black">Name</p>
                    <p class="text-[#0052CC] font-semibold">Mr. Patient One</p>
                  </div>
                </td>
                <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
                  <div class="flex justify-between items-center">
                    <p class="text-xs text-black">Mobile Number</p>
                    <p class="text-black font-semibold">+91 99999 99999</p>
                  </div>
                </td>
                <td scope="row" class="px-6 py-4">
                  <div class="flex justify-between items-center">
                    <p class="text-xs text-black">Email ID</p>
                    <p class="text-black font-semibold">doctor@molarbyte.com</p>
                  </div>
                </td>
              </tr>
              <tr class="bg-white">
                <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
                  <div class="flex justify-between items-center">
                    <p class="text-xs text-black">Gender</p>
                    <p class="text-black font-semibold">Male</p>
                  </div>
                </td>
                <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
                  <div class="flex justify-between items-center">
                    <p class="text-xs text-black">City</p>
                    <p class="text-black font-semibold">Bengaluru</p>
                  </div>
                </td>
                <td scope="row" class="px-6 py-4">
                  <div class="flex justify-between items-center">
                    <p class="text-xs text-black">Date of Birth</p>
                    <p class="text-black font-semibold">01-01-1900</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="w-[15%]">
        <div
          class="relative overflow-x-auto border-[2px] border-[#0052CC] rounded-xl"
        >
          <table
            class="w-full border-collapse border-spacing-[25px] text-base font-medium leading-6 rounded-xl text-left"
          >
            <thead class="bg-[#0052CC]">
              <tr>
                <th
                  scope="col"
                  colSpan="2"
                  rowSpan="2"
                  class="px-6 py-3 font-medium text-lg lending-5 text-white"
                >
                  Current Balance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td scope="row" class="px-6 py-10 border-r border-[#0052CC]">
                  <div class="flex justify-center items-center">
                    <p
                      class="font-inter text-bold text-black text-[32px] text-center"
                    >
                      ₹ 31,551.00
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="mb-5">
      <div class="flex items-center justify-between bg-white py-3 px-5">
        <div class="flex items-center gap-4">
          <p class="text-black font-bold text-2xl">Ledger</p>
        </div>
        <div class="flex items-center gap-4">
          <p class="text-[#474D66] font-inter text-medium text-sm">Filter By</p>
          <ReusablesBaseInput
            v-model="state.from_date"
            type="text"
            placeholder="From date"
          />
          <p>-</p>
          <ReusablesBaseInput
            v-model="state.to_date"
            type="text"
            placeholder="To date"
          />
          <ReusablesBaseSelect
            v-model="state.branch"
            :options="branches"
            placeholder="Select Branch"
          />
        </div>
      </div>
      <ReusablesBaseTable
        :srNo="false"
        :headers="headers"
        :data="items"
        :row-selector="false"
        :edit_btn="false"
        :delete_btn="false"
        :view_btn="false"
      >
        <template #amount="item">
          <strong class="text-black">{{ item.amount }}</strong>
        </template>
        <template #action>
          <select name="" id="" class="border rounded p-2 outline-none">
            <option value="Manage">Manage</option>
            <option value="Edit">Edit</option>
            <option value="View">View</option>
            <option value="E-Mail">E-Mail</option>
            <option value="Print">Print</option>
            <option value="Delete">Delete</option>
          </select>
        </template>
      </ReusablesBaseTable>
    </div>
    <div class="mb-5">
      <div class="flex items-center justify-between bg-white py-3 px-5">
        <div class="flex items-center gap-4">
          <p class="text-black font-bold text-2xl">Invoice Created</p>
        </div>
        <div class="flex items-center gap-4">
          <p class="text-[#474D66] font-inter text-medium text-sm">Filter By</p>
          <ReusablesBaseInput
            v-model="state.from_date"
            type="text"
            placeholder="From date"
          />
          <p>-</p>
          <ReusablesBaseInput
            v-model="state.to_date"
            type="text"
            placeholder="To date"
          />
          <ReusablesBaseSelect
            v-model="state.branch"
            :options="branches"
            placeholder="Select Branch"
          />
        </div>
      </div>
      <ReusablesBaseTable
        :srNo="false"
        :headers="headers1"
        :data="items1"
        :row-selector="false"
        :edit_btn="false"
        :delete_btn="false"
        :view_btn="false"
      >
        <template #amount="item">
          <strong class="text-black">{{ item.amount }}</strong>
        </template>
        <template #status="item">
          <span
            v-if="item.status == 'PAID'"
            class="text-[#317159] bg-[#DCF2EA] p-1.5 rounded font-inter text-[11px] font-semibold"
          >
            {{ item.status }}
          </span>
          <span
            v-if="item.status == 'CREATED'"
            class="text-[#85462B] bg-[#F8E3DA] p-1.5 rounded font-inter text-[11px] font-semibold"
          >
            {{ item.status }}
          </span>
          <span
            v-if="item.status == 'VOID'"
            class="text-[#474D66] bg-[#EDEFF5] p-1.5 rounded font-inter text-[11px] font-semibold"
          >
            {{ item.status }}
          </span>
        </template>
        <template #action>
          <select name="" id="" class="border rounded p-2 outline-none">
            <option value="Manage">Manage</option>
            <option value="Edit">Edit</option>
            <option value="View">View</option>
            <option value="E-Mail">E-Mail</option>
            <option value="Print">Print</option>
            <option value="Delete">Delete</option>
          </select>
        </template>
      </ReusablesBaseTable>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const patients = ["Choose Patient"];
const branches = ['Kormangala'];

const headers = {
  txn_number: "Txn Number",
  date: "Date",
  branch: "Branch",
  type: "Type",
  amount: "Amount",
  action: "",
};
const items = [
  {
    txn_number: "MB0005",
    date: "01/01/2023",
    branch: "Kormangala",
    type: "Receipt",
    amount: "₹ 10,000.00",
  },
  {
    txn_number: "MB0004",
    date: "01/01/2023",
    branch: "Kormangala",
    type: "Receipt",
    amount: "₹ 10,000.00",
  },
  {
    txn_number: "MB0003",
    date: "01/01/2023",
    branch: "MG Road",
    type: "Discount Voucher",
    amount: "-₹ 10,000.00",
  },
  {
    txn_number: "MB0002",
    date: "01/01/2023",
    branch: "Banashankari",
    type: "Receipt",
    amount: "₹ 10,000.00",
  },
  {
    txn_number: "MB0001",
    date: "01/01/2023",
    branch: "MG Road",
    type: "Receipt",
    amount: "₹ 10,000.00",
  },
];
const headers1 = {
  invoice: "Invoice",
  date: "Date",
  branch: "Branch",
  amount: "Amount",
  status: "Status",
  action: "",
};
const items1 = [
  {
    invoice: "ORGID_2023-24#0005",
    date: "01/01/2023",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    status: "PAID",
  },
  {
    invoice: "ORGID_2023-24#0004",
    date: "01/01/2023",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    status: "PAID",
  },
  {
    invoice: "ORGID_2023-24#0003",
    date: "01/01/2023",
    branch: "MG Road",
    amount: "₹ 10,000.00",
    status: "CREATED",
  },
  {
    invoice: "ORGID_2023-24#0002",
    date: "01/01/2023",
    branch: "Banashankari",
    amount: "₹ 10,000.00",
    status: "PAID",
  },
  {
    invoice: "ORGID_2023-24#0001",
    date: "01/01/2023",
    branch: "MG Road",
    amount: "₹ 10,000.00",
    status: "VOID",
  },
];

// Form inputs
const state = reactive<{
  patient: string;
  branch: string;
  from_date: string;
  to_date: string;
}>({
  patient: "",
  branch:"",
  from_date:"",
  to_date:"",
});
</script>

<style scoped></style>