
<template>
  <div class="p-9">
    <div class="mb-3 flex items-center justify-end">
      <ReusablesBaseButton
        @click="state.isVisible = true"
        label="Add Doctor"
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
      className="w-[663px]"
      :isVisible="state.isVisible"
      :onClose="closeModal"
    >
      <div>
        <div class="p-3 pt-1">
          <p
            class="text-lg font-medium text-[#559AFF] leading-5 text-center mb-4"
          >
            Doctor Details
          </p>
          <div class="flex justify-between items-center my-3">
            <p class="text-sm font-medium text-black leading-6">Name</p>
            <p class="text-sm font-medium text-[#0052CC] leading-6">
              Mr. Doctor Dental
            </p>
          </div>
          <div class="flex justify-between items-center my-3">
            <p class="text-sm font-medium text-black leading-6">Email ID</p>
            <p class="text-sm font-medium text-[#0052CC] leading-6">
              doctor@molarbyte.com
            </p>
          </div>
          <div class="flex justify-between items-center my-3">
            <p class="text-sm font-medium text-black leading-6">
              Mobile Number
            </p>
            <p class="text-sm font-medium text-[#0052CC] leading-6">
              +91 99999 99999
            </p>
          </div>
          <div class="flex justify-between items-center my-3">
            <p class="text-sm font-medium text-black leading-6">Gender</p>
            <p class="text-sm font-medium text-[#0052CC] leading-6">Male</p>
          </div>
          <div class="flex justify-between items-center my-3">
            <p class="text-sm font-medium text-black leading-6">
              Date of Birth
            </p>
            <p class="text-sm font-medium text-[#0052CC] leading-6">
              01-01-1900
            </p>
          </div>
          <div class="flex justify-between items-center my-3">
            <p class="text-sm font-medium text-black leading-6">Branch</p>
            <p class="text-sm font-medium text-[#0052CC] leading-6">
              Kormangala
            </p>
          </div>
          <div class="flex justify-between items-center my-3">
            <p class="text-sm font-medium text-black leading-6">
              Specialization
            </p>
            <p class="text-sm font-medium text-[#0052CC] leading-6">Dental</p>
          </div>
          <div class="flex justify-between items-center my-3">
            <p class="text-sm font-medium text-black leading-6">
              State Dental Reg No.
            </p>
            <p class="text-sm font-medium text-[#0052CC] leading-6">
              51511616166161616
            </p>
          </div>
          <div class="flex justify-between items-center my-3">
            <p class="text-sm font-medium text-black leading-6">
              Upload Certificate
            </p>
            <p class="text-sm font-medium text-[#0052CC] leading-6">View</p>
          </div>
        </div>
        <div class="w-full border-b-[1px] border-[#0052CC]"></div>
        <div class="p-3 pt-1">
          <div class="flex justify-start items-center my-3">
            <p class="text-sm font-medium text-black leading-6 mr-1">
              Branch :
            </p>
            <p class="text-sm font-medium text-[#0052CC] leading-6">Branch 1</p>
          </div>
          <div class="flex justify-start items-center my-3">
            <p class="text-sm font-medium text-black leading-6 mr-1">Time :</p>
            <p></p>
          </div>
          <div class="flex justify-start items-center my-3">
            <p
              class="text-sm font-medium text-black leading-6 text-[#0052CC] mr-1"
            >
              Monday :
            </p>
            <div class="text-sm font-medium text-[#0052CC] leading-6">
              <div
                class="h-[32px] px-2 py-1 rounded border-[1px] border-[#0052CC]"
              >
                09:00 - 12:00
              </div>
            </div>
          </div>
          <div class="flex justify-start items-center my-3">
            <p
              class="text-sm font-medium text-black leading-6 text-[#0052CC] mr-1"
            >
              Tuesday :
            </p>
            <div class="text-sm font-medium text-[#0052CC] leading-6">
              <div
                class="h-[32px] px-2 py-1 rounded border-[1px] border-[#0052CC]"
              >
                09:00 - 12:00
              </div>
            </div>
          </div>
          <div class="flex justify-start items-center my-3">
            <p
              class="text-sm font-medium text-black leading-6 text-[#0052CC] mr-1"
            >
              Weadnesday :
            </p>
            <div class="text-sm font-medium text-[#0052CC] leading-6">
              <div
                class="h-[32px] px-2 py-1 rounded border-[1px] border-[#0052CC]"
              >
                09:00 - 12:00
              </div>
            </div>
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
  doctor_number: "Doctor Name",
  specialization: "Specialization",
  mobile_number: "Mobile Number",
  branch: "Branch",
};
const items = [
  {
    doctor_number: "Ram Murthy Swani Narayan raja Pallai",
    specialization: "Specialization",
    mobile_number: "+91 78999 31444",
    branch: "Kormangala",
  },
  {
    doctor_number: "Ram Murthy Swani Narayan raja Pallai",
    specialization: "Specialization",
    mobile_number: "+91 78999 31444",
    branch: "JP Nagar",
  },
];

const handleEdit = (index: any) => {
  // this.editIndex = index;
  // this.editItem = { ...this.items[index] }; // Copy item data for editing
};
const handleDelete = (index: any) => {
  if (confirm("Are you sure you want to delete this item?")) {
    // items.slice(index, 1);
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

// Form inputs
const state = reactive<{
  isVisible: boolean;
}>({
  isVisible: false,
});
</script>

<style scoped></style>