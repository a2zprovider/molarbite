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
        <template #reason><p></p></template>
        <template #reason_type="item">
          <div v-if="item.reason_type == 'Others'">
            <span
              class="uppercase text-[#317159] bg-[#DCF2EA] p-1.5 rounded font-inter text-[11px] font-semibold"
            >
              {{ item.reason_type }}
            </span>
            <p class="mt-2">{{ item.reason }}</p>
          </div>
          <div v-if="item.reason_type == 'casual_leave'">
            <span
              class="uppercase text-[#2952CC] bg-[#D6E0FF] p-1.5 rounded font-inter text-[11px] font-semibold"
            >
              Casual Leave
            </span>
            <p class="mt-2">{{ item.reason }}</p>
          </div>
        </template>
        <template #status="item">
          <div class="flex items-center gap-1" v-if="item.status == 'Approved'">
            <Icon
              name="mdi:checkbox-marked-circle"
              size="15"
              class="text-[#31C48D]"
            />
            <span class="text-[#31C48D] font-inter text-sm font-normal">
              {{ item.status }}
            </span>
          </div>
          <div class="flex items-center gap-1" v-if="item.status == 'Rejected'">
            <Icon
              name="mdi:checkbox-marked-circle"
              size="15"
              class="text-[#EB5757]"
            />
            <span class="text-[#EB5757] font-inter text-sm font-normal">
              {{ item.status }}
            </span>
          </div>
          <div class="flex items-center gap-1" v-if="item.status == 'Pending'">
            <ReusablesBaseButton
              @click="Reject()"
              label="Reject"
              className="flex justify-center items-center rounded bg-[#FF7171] px-5 py-4 text-base font-normal leading-4 text-white"
            />
            <ReusablesBaseButton
              @click="Approve()"
              label="Approve"
              className="flex justify-center items-center rounded bg-[#01875A] px-5 py-4 text-base font-normal leading-4 text-white"
            />
          </div>
        </template>
      </ReusablesBaseTable>
    </div>

    <ReusablesModal
      className="w-[424px]"
      :isVisible="state.isVisible"
      :onClose="closeModal"
    >
      <div>
        <div class="p-2 px-4 text-center">
          <div class="mb-6">
            <p class="text-2xl font-medium text-[#0052CC] leading-7 mb-1">
              Are You Sure?
            </p>
            <p class="font-inter text-[#AFB2B7] text-xs font-semibold">
              Are you sure to reject the leave approval of Dr. Rajesh Kumar
              Singh
            </p>
          </div>
          <div class="inline-flex items-center gap-2 justify-center w-full">
            <ReusablesBaseButton
              label="No"
              class="flex justify-center items-center border border-[#D8DAE5] h-[32px] w-full rounded py-2 px-4 font-inter text-sm font-semibold leading-4 text-[#696F8C]"
            />
            <ReusablesBaseButton
              label="Yes"
              class="flex justify-center items-center h-[32px] w-full rounded bg-[#0052CC] py-2 px-4 font-inter text-sm font-semibold leading-4 text-white"
            />
          </div>
        </div>
      </div>
    </ReusablesModal>
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
  reason_type: "",
  reason: "",
  from_date: "From Date",
  to_date: "To Date",
  status: "",
};
const items = [
  {
    doctor_name: "Dr. Rajesh Kumar Singh",
    leave_days: "7 Days",
    reason_type: "casual_leave",
    reason: "",
    from_date: "29/03/2024",
    to_date: "05/04/2024",
    status: "Approved",
  },
  {
    doctor_name: "Dr. Rajesh Kumar Singh",
    leave_days: "2 Days",
    reason_type: "Others",
    reason:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    from_date: "26/03/2024",
    to_date: "29/03/2024",
    status: "Pending",
  },
  {
    doctor_name: "Dr. Rajesh Kumar Singh",
    leave_days: "7 Days",
    reason_type: "casual_leave",
    reason: "",
    from_date: "29/03/2024",
    to_date: "05/04/2024",
    status: "Pending",
  },
  {
    doctor_name: "Dr. Rajesh Kumar Singh",
    leave_days: "7 Days",
    reason_type: "casual_leave",
    reason: "",
    from_date: "29/03/2024",
    to_date: "05/04/2024",
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

const closeModal = () => {
  state.isVisible = !state.isVisible;
};

const Reject = () => {
  state.isVisible = !state.isVisible;
};

const Approve = () => {
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