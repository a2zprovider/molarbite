<template>
  <div class="p-9">
    <div class="mb-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <p class="font-medium text-[#0052CC] text-2xl">Leave Requests</p>
      </div>
      <ReusablesBaseButton
        @click="$router.push('/dashboard/leave/request')"
        label="Request Leave"
        iconClass="text-white"
        icon-left="plus"
        :left-size="16"
        className="flex justify-center items-center border border-[#8F95B2] rounded bg-[#0052CC] px-4 py-3 font-inter text-base font-normal leading-4 text-white"
      />
    </div>
    <div>
      <ReusablesBaseTable
        :srNo="false"
        :headers="headers"
        :data="items"
        :row-selector="false"
        :edit_btn="false"
        :delete_btn="false"
        :view_btn="false"
      >
        <template #reson><p></p></template>
        <template #reson_type="item">
          <div v-if="item.reson_type == 'Others'">
            <span
              class="uppercase text-[#317159] bg-[#DCF2EA] p-1.5 rounded font-inter text-[11px] font-semibold"
            >
              {{ item.reson_type }}
            </span>
            <p class="mt-2">{{ item.reson }}</p>
          </div>
          <div v-if="item.reson_type == 'casual_leave'">
            <span
              class="uppercase text-[#2952CC] bg-[#D6E0FF] p-1.5 rounded font-inter text-[11px] font-semibold"
            >
              Casual Leave
            </span>
            <p class="mt-2">{{ item.reson }}</p>
          </div>
        </template>
        <template #status="item">
          <span
            v-if="item.status == 'Approved'"
            class="uppercase text-[#317159] bg-[#DCF2EA] p-1.5 rounded font-inter text-[11px] font-semibold"
          >
            {{ item.status }}
          </span>
          <span
            v-if="item.status == 'Rejected'"
            class="uppercase text-[#85462B] bg-[#F8E3DA] p-1.5 rounded font-inter text-[11px] font-semibold"
          >
            {{ item.status }}
          </span>
          <span
            v-if="item.status == 'Pending'"
            class="uppercase text-[#474D66] bg-[#EDEFF5] p-1.5 rounded font-inter text-[11px] font-semibold"
          >
            {{ item.status }}
          </span>
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
  doctor_name: "Doctor Name",
  leave_days: "Leave days",
  reson_type: "",
  reson: "",
  from_date: "From Date",
  to_date: "To Date",
  status: "",
};
const items = [
  {
    doctor_name: "Dr. Rajesh Kumar Singh",
    leave_days: "7 Days",
    reson_type: "casual_leave",
    reson: "",
    from_date: "29/03/2024",
    to_date: "05/04/2024",
    status: "Pending",
  },
  {
    doctor_name: "Dr. Rajesh Kumar Singh",
    leave_days: "2 Days",
    reson_type: "Others",
    reson:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    from_date: "26/03/2024",
    to_date: "29/03/2024",
    status: "Approved",
  },
  {
    doctor_name: "Dr. Rajesh Kumar Singh",
    leave_days: "2 Days",
    reson_type: "Others",
    reson:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    from_date: "26/03/2024",
    to_date: "29/03/2024",
    status: "Rejected",
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