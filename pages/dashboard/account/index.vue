<template>
  <div class="p-9">
    <div class="mb-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <ReusablesBaseButton
          @click="state.tab = 'payment'"
          label="Payment Received"
          iconClass="text-[#696F8C]"
          class="flex justify-center items-center h-[32px] rounded p-3 bg-white font-inter text-xs font-medium leading-4 text-[#696F8C] border-[1px] border-[#D8DAE5]"
          :class="state.tab == 'payment' ? 'tab-active' : 'tab-inactive'"
        />
        <ReusablesBaseButton
          @click="state.tab = 'invoice'"
          label="Invoice"
          iconClass="text-[#696F8C]"
          class="flex justify-center items-center h-[32px] rounded p-3 bg-white font-inter text-xs font-medium leading-4 text-[#696F8C] border-[1px] border-[#D8DAE5]"
          :class="state.tab == 'invoice' ? 'tab-active' : 'tab-inactive'"
        />
      </div>
      <ReusablesBaseButton
        v-if="state.tab == 'payment'"
        @click="$router.push('/dashboard/account/payment')"
        label="Receipt"
        iconClass="text-[#474D66]"
        icon-left="plus"
        :left-size="12"
        className="flex justify-center items-center border border-[#8F95B2] rounded bg-white px-4 py-2 font-inter text-xs font-normal leading-4 text-[#474D66]"
      />
      <ReusablesBaseButton
        v-if="state.tab == 'invoice'"
        @click="$router.push('/dashboard/account/invoice')"
        label="Invoice"
        iconClass="text-[#474D66]"
        icon-left="plus"
        :left-size="12"
        className="flex justify-center items-center border border-[#8F95B2] rounded bg-white px-4 py-2 font-inter text-xs font-normal leading-4 text-[#474D66]"
      />
    </div>
    <div v-if="state.tab == 'payment'">
      <div class="flex items-center justify-between bg-white py-3 px-5">
        <div class="flex items-center gap-4">
          <p class="text-black font-bold text-2xl">Payments</p>
          <ReusablesBaseButton
            label="Payment"
            iconClass="text-[#474D66]"
            icon-left="plus"
            :left-size="12"
            className="flex justify-center items-center border border-[#8F95B2] rounded bg-white px-4 py-2 font-inter text-xs font-normal leading-4 text-[#474D66]"
          />
        </div>
        <div class="flex items-center gap-4">
          <ReusablesBaseSelect
            v-model="state.patient"
            :options="patients"
            placeholder="Select Patient"
          />
          <ReusablesBaseSelect
            v-model="state.branch"
            :options="branches"
            placeholder="Select Branch"
          />
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

    <div
      v-if="state.tab == 'invoice'"
      :class="state.tab == 'invoice' ? 'tab-active' : 'tab-inactive'"
    >
      <div class="flex items-center justify-between bg-white py-3 px-5">
        <div class="flex items-center gap-4">
          <p class="text-black font-bold text-2xl">Invoices</p>
        </div>
        <div class="flex items-center gap-4">
          <ReusablesBaseSelect
            v-model="state.patient"
            :options="patients"
            placeholder="Select Patient"
          />
          <ReusablesBaseSelect
            v-model="state.branch"
            :options="branches"
            placeholder="Select Branch"
          />
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
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
            <option value="Cheque">Cheque</option>
          </select>
        </template>
      </ReusablesBaseTable>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });

const { truncateText } = useTruncate();

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const patients = ['Mr. Patient One'];
const branches = ['Kormangala'];

const headers = {
  patient_id: "Patient ID",
  patient_name: "Patient Name",
  branch: "Branch",
  amount: "Amount",
  txn_number: "Txn Number",
  user: "User",
  date: "",
  action: "",
};
const items = [
  {
    patient_id: "MB0005",
    patient_name: "Mr. Patient One",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    txn_number: "151561515858151",
    user: "UserName",
    date: "01/01/2023, 11:23AM",
  },
  {
    patient_id: "MB0004",
    patient_name: "Mr. Patient One",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    txn_number: "151561515858151",
    user: "UserName",
    date: "01/01/2023, 11:23AM",
  },
  {
    patient_id: "MB0003",
    patient_name: "Mr. Patient One",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    txn_number: "151561515858151",
    user: "UserName",
    date: "01/01/2023, 11:23AM",
  },
  {
    patient_id: "MB0002",
    patient_name: "Mr. Patient One",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    txn_number: "151561515858151",
    user: "UserName",
    date: "01/01/2023, 11:23AM",
  },
  {
    patient_id: "MB0001",
    patient_name: "Mr. Patient One",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    txn_number: "151561515858151",
    user: "UserName",
    date: "01/01/2023, 11:23AM",
  },
];

const headers1 = {
  invoice: "Invoice",
  date: "Date",
  patient_name: "Patient Name",
  branch: "Branch",
  amount: "Amount",
  status: "Status",
  action: "",
};
const items1 = [
  {
    invoice: "ORGID_2023-24#0005",
    date: "01/01/2023",
    patient_name: "Mr. Patient One",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    status: "PAID",
  },
  {
    invoice: "ORGID_2023-24#0004",
    date: "01/01/2023",
    patient_name: "Mr. Patient One",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    status: "PAID",
  },
  {
    invoice: "ORGID_2023-24#0003",
    date: "01/01/2023",
    patient_name: "Mr. Patient One",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    status: "CREATED",
  },
  {
    invoice: "ORGID_2023-24#0002",
    date: "01/01/2023",
    patient_name: "Mr. Patient One",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    status: "PAID",
  },
  {
    invoice: "ORGID_2023-24#0001",
    date: "01/01/2023",
    patient_name: "Mr. Patient One",
    branch: "Kormangala",
    amount: "₹ 10,000.00",
    status: "VOID",
  },
];

const handleEdit = (index: any) => {
  // this.editIndex = index;
  // this.editItem = { ...this.items[index] }; // Copy item data for editing
};
const handleDelete = (index: any) => {
  if (confirm("Are you sure you want to delete this item?")) {
    console.log("items : ", items);

    items.splice(index, 1);
  }
};
const handleDeleteAll = () => {
  if (confirm("Are you sure you want to delete all items?")) {
    // items = []; // Clear all items
  }
};
const handleView = (index: any) => {
  console.log("index : ", index);
};

// Form inputs
const state = reactive<{
  full_name: string;
  email: string;
  mobile: string;
  date_of_birth: string;
  age: string;

  patient: string;
  branch: string;
  from_date: string;
  to_date: string;

  tab: string;
}>({
  full_name: "",
  email: "",
  mobile: "",
  date_of_birth: "",
  age: "",

  patient: "",
  branch:"",
  from_date:"",
  to_date:"",

  tab: "payment",
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