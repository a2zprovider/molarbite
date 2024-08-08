<template>
  <div class="p-9">
    <div class="mb-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <ReusablesBaseButton
          @click="$router.push('/')"
          label="Registered"
          iconClass="text-[#696F8C]"
          class="flex justify-center items-center w-[94px] h-[32px] rounded p-3 bg-white font-inter text-xs font-medium leading-4 text-[#696F8C] border-[1px] border-[#D8DAE5]"
        />
        <ReusablesBaseButton
          @click="$router.push('/')"
          label="Activated"
          iconClass="text-[#696F8C]"
          class="flex justify-center items-center w-[94px] h-[32px] rounded p-3 bg-white font-inter text-xs font-medium leading-4 text-[#696F8C] border-[1px] border-[#D8DAE5]"
        />
      </div>
      <ReusablesBaseButton
        @click="state.isVisible1 = true"
        label="Add New Patient"
        iconClass="text-white"
        icon-left="plus"
        :left-size="16"
        className="flex justify-center items-center h-[44px] rounded bg-[#0052CC] px-3 py-1 text-base font-normal leading-5 text-white shadow-sm"
      />
    </div>

    <ReusablesBaseTable
      :srNo="true"
      :headers="headers"
      :data="items"
      :row-selector="false"
      :edit_btn="true"
      :onEdit="handleEdit"
      :delete_btn="true"
      :onDelete="handleDelete"
      :view_btn="true"
      :onView="handleView"
    >
    </ReusablesBaseTable>

    <ReusablesModal
      className="w-[424px]"
      :isVisible="state.isVisible"
      :onClose="closeModal"
    >
      <div>
        <div class="p-2 pt-1">
          <p
            class="text-lg font-medium text-[#559AFF] leading-5 text-center mb-4"
          >
            Patient Details
          </p>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Full Name*"
              v-model="state.full_name"
              type="taxt"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Email ID*"
              v-model="state.email"
              type="email"
              placeholder="Email ID"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Mobile Number*"
              v-model="state.mobile"
              type="taxt"
              placeholder="+91 99999 99999"
            />
          </div>
          <div class="mb-5 flex items-center gap-2">
            <ReusablesBaseInput
              label="Date of Birth*"
              v-model="state.date_of_birth"
              type="date"
              placeholder="DD/MM/YYYY"
              class="w-full"
            />
            <ReusablesBaseInput
              label="Age*"
              v-model="state.age"
              type="taxt"
              placeholder="00"
              class="w-full"
            />
          </div>
          <div class="flex justify-end items-center gap-2">
            <ReusablesBaseButton
              @click="state.isVisible = false"
              label="Close"
              iconClass="text-[#696F8C]"
              class="flex justify-center items-center w-[90px] h-[32px] rounded p-3 bg-white font-inter text-xs font-medium leading-5 text-[#696F8C] border-[1px] border-[#D8DAE5]"
            />
            <ReusablesBaseButton
              @click="$router.push('/dashboard/doctor/patient/activate')"
              label="Activate Patient"
              className="flex justify-center items-center min-w-[90px] h-[32px] rounded bg-[#0052CC] px-3 py-1 text-xs font-medium leading-5 text-white shadow-sm"
            />
          </div>
        </div>
      </div>
    </ReusablesModal>

    <ReusablesModal
      className="w-[424px]"
      :isVisible="state.isVisible1"
      :onClose="closeModal1"
    >
      <div>
        <div class="p-2 pt-1">
          <p
            class="text-lg font-medium text-[#559AFF] leading-5 text-center mb-4"
          >
            Add New Patient
          </p>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Full Name*"
              v-model="state.full_name"
              type="taxt"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Email ID*"
              v-model="state.email"
              type="email"
              placeholder="Email ID"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Mobile Number*"
              v-model="state.mobile"
              type="taxt"
              placeholder="+91 99999 99999"
            />
          </div>
          <div class="mb-5 flex items-center gap-2">
            <ReusablesBaseInput
              label="Date of Birth*"
              v-model="state.date_of_birth"
              type="date"
              placeholder="DD/MM/YYYY"
              class="w-full"
            />
            <ReusablesBaseInput
              label="Age*"
              v-model="state.age"
              type="taxt"
              placeholder="00"
              class="w-full"
            />
          </div>
          <div class="flex justify-end items-center gap-2">
            <ReusablesBaseButton
              @click="state.isVisible1 = false"
              label="Close"
              iconClass="text-[#696F8C]"
              class="flex justify-center items-center w-[90px] h-[32px] rounded p-3 bg-white font-inter text-xs font-medium leading-5 text-[#696F8C] border-[1px] border-[#D8DAE5]"
            />
            <ReusablesBaseButton
              label="Save"
              className="flex justify-center items-center w-[90px] h-[32px] rounded bg-[#0052CC] px-3 py-1 text-xs font-medium leading-5 text-white shadow-sm"
            />
          </div>
        </div>
      </div>
    </ReusablesModal>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const headers = {
  patient_id: "Patient ID",
  patient_name: "Patient Name",
  mobile_number: "Mobile Number",
  gender: "Gender",
  marketing: "Marketing",
  transaction: "Transaction",
};
const items = [
  {
    patient_id: "#1111",
    patient_name: "Ram Murthy Swani Narayan raja Pallai",
    mobile_number: "+91 78999 31444",
    gender: "Male",
    marketing: false,
    transaction: false,
  },
  {
    patient_id: "#2222",
    patient_name: "Ram Murthy Swani Narayan raja Pallai",
    mobile_number: "+91 78999 31444",
    gender: "Male",
    marketing: false,
    transaction: false,
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
  closeModal();
};
const closeModal = () => {
  state.isVisible = !state.isVisible;
};
const closeModal1 = () => {
  state.isVisible1 = !state.isVisible1;
};

// Form inputs
const state = reactive<{
  full_name: string;
  email: string;
  mobile: string;
  date_of_birth: string;
  age: string;

  isVisible: boolean;
  isVisible1: boolean;
}>({
  full_name: "",
  email: "",
  mobile: "",
  date_of_birth: "",
  age: "",

  isVisible: false,
  isVisible1: false,
});
</script>

<style scoped></style>