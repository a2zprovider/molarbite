<template>
  <div class="p-9">
    <div class="mb-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <p class="font-medium text-[#0052CC] text-2xl">Appointments</p>
      </div>
    </div>
    <div>
      <ReusablesBaseTable
        :srNo="false"
        :headers="headers"
        :data="items"
        :row-selector="false"
        :edit_btn="true"
        :onEdit="handleEdit"
        :delete_btn="false"
        :onDelete="handleDelete"
        :view_btn="false"
        :onView="handleView"
      >
        <template #issue_type="item">
          <div v-if="item.issue_type == 'treatment'">
            <span
              class="uppercase text-[#317159] bg-[#DCF2EA] p-1.5 rounded font-inter text-[11px] font-semibold"
            >
              {{ item.issue_type }}
            </span>
          </div>
          <div v-if="item.issue_type == 'cheif_complaint'">
            <span
              class="uppercase text-[#2952CC] bg-[#D6E0FF] p-1.5 rounded font-inter text-[11px] font-semibold"
            >
              Cheif Complaint
            </span>
          </div>
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

const headers = {
  patient_name: "Patient Name",
  issue_type: "",
  issue: "Issue/Treatment",
  date: "Date",
  slot: "Slot",
};
const items = [
  {
    patient_name: "Rajesh Kumar Singh",
    issue_type: "cheif_complaint",
    issue: "Cavity",
    date: "01/01/2024",
    slot: "09:00am - 10:30am",
  },
  {
    patient_name: "Rajesh Kumar Singh",
    issue_type: "treatment",
    issue: "Broken Tooth",
    date: "01/01/2024",
    slot: "11:30pm - 12:45pm",
  },
  {
    patient_name: "Rajesh Kumar Singh",
    issue_type: "cheif_complaint",
    issue: "Broken Tooth",
    date: "01/01/2024",
    slot: "03:20pm - 04:30pm",
  },
  {
    patient_name: "Rajesh Kumar Singh",
    issue_type: "treatment",
    issue: "Broken Tooth",
    date: "01/01/2024",
    slot: "04:30pm - 05:30pm",
  },
  {
    patient_name: "Rajesh Kumar Singh",
    issue_type: "cheif_complaint",
    issue: "Broken Tooth",
    date: "01/01/2024",
    slot: "05:30pm - 07:30pm",
  },
  {
    patient_name: "Rajesh Kumar Singh",
    issue_type: "cheif_complaint",
    issue: "Broken Tooth",
    date: "02/01/2024",
    slot: "09:30am - 11:30am",
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
const state = reactive<{}>({});
</script>

<style scoped></style>