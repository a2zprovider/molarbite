<template>
  <div class="p-9">
    <div class="mb-3 flex items-center justify-between">
      <div
        class="bg-white p-3 rounded-xl border border-[#0052CC] flex items-center gap-2 mb-3"
      >
        <div class="">
          <Icon name="mdi:account-circle" size="48" />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex items-center gap-2">
            <p class="font-inter font-bold text-base text-[#4F4F4F]">
              Patient Name :
            </p>
            <p class="font-inter font-normal text-base text-[#4F4F4F]">
              Ram Murthy Swani Narayan raja Pallai
            </p>
          </div>
          <div class="flex items-center gap-2">
            <p class="font-inter font-bold text-base text-[#4F4F4F]">
              Email ID :
            </p>
            <p class="font-inter font-normal text-base text-[#4F4F4F]">
              dental@google.comi
            </p>
          </div>
          <div class="flex items-center gap-2">
            <p class="font-inter font-bold text-base text-[#4F4F4F]">
              Mobile Number :
            </p>
            <p class="font-inter font-normal text-base text-[#4F4F4F]">
              +91 99999 99999
            </p>
          </div>
          <div class="flex items-center gap-2">
            <p class="font-inter font-bold text-base text-[#4F4F4F]">
              Gender :
            </p>
            <p class="font-inter font-normal text-base text-[#4F4F4F]">Male</p>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <ReusablesBaseButton
          @click="$router.push('/dashboard/doctor/patient/summary')"
          label="Go to File"
          iconClass="text-[#696F8C]"
          icon-left="files"
          :left-size="16"
          class="flex justify-center items-center h-[40px] rounded p-5 bg-white font-inter text-sm font-medium leading-5 text-[#696F8C] border-[1px] border-[#D8DAE5]"
        />
        <ReusablesBaseButton
          label="Create Appointment"
          iconClass="text-white"
          icon-left="plus"
          :left-size="16"
          className="flex justify-center items-center h-[40px] rounded  px-3 py-1 bg-[#0052CC] text-sm font-normal leading-5 text-white shadow-sm"
        />
      </div>
    </div>

    <ReusablesBaseTable
      :srNo="true"
      :headers="headers"
      :data="items"
      :row-selector="false"
      :edit_btn="false"
      :delete_btn="false"
      :view_btn="false"
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
              label="Full Name"
              v-model="state.full_name"
              isRequired="true"
              type="taxt"
              placeholder="Full Name"
              :error="v$.full_name.$error"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Email ID"
              v-model="state.email"
              isRequired="true"
              type="email"
              placeholder="Email ID"
              :error="v$.email.$error"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Mobile Number"
              v-model="state.mobile"
              isRequired="true"
              type="taxt"
              placeholder="+91 99999 99999"
              :error="v$.mobile.$error"
            />
          </div>
          <div class="mb-5 flex items-center gap-2">
            <ReusablesBaseInput
              label="Date of Birth"
              v-model="state.date_of_birth"
              isRequired="true"
              type="date"
              placeholder="DD/MM/YYYY"
              class="w-full"
              :error="v$.date_of_birth.$error"
            />
            <ReusablesBaseInput
              label="Age"
              v-model="state.age"
              isRequired="true"
              type="taxt"
              placeholder="00"
              class="w-full"
              :error="v$.age.$error"
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
              label="Full Name"
              v-model="state.full_name"
              isRequired="true"
              type="taxt"
              placeholder="Full Name"
              :error="v$.full_name.$error"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Email ID"
              v-model="state.email"
              isRequired="true"
              type="email"
              placeholder="Email ID"
              :error="v$.email.$error"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Mobile Number"
              v-model="state.mobile"
              isRequired="true"
              type="taxt"
              placeholder="+91 99999 99999"
              :error="v$.mobile.$error"
            />
          </div>
          <div class="mb-5 flex items-center gap-2">
            <ReusablesBaseInput
              label="Date of Birth"
              v-model="state.date_of_birth"
              isRequired="true"
              type="date"
              placeholder="DD/MM/YYYY"
              class="w-full"
              :error="v$.date_of_birth.$error"
            />
            <ReusablesBaseInput
              label="Age"
              v-model="state.age"
              isRequired="true"
              type="taxt"
              placeholder="00"
              class="w-full"
              :error="v$.age.$error"
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
  purpose_of_visit: "Purpose of Visit",
  treatment_plan: "Treatment Plan",
  branch: "Branch",
  date: "Date",
};
const items = [
  {
    purpose_of_visit: "Braces",
    treatment_plan: "Normal",
    branch: "Kormangala",
    date: "22/10/2022",
  },
  {
    purpose_of_visit: "Filling",
    treatment_plan: "Normal",
    branch: "Kormangala",
    date: "22/09/2022",
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

// Validation rules
const rules = {
  full_name: { required },
  email: { required },
  mobile: { required },
  date_of_birth: { required },
  age: { required },
};
const v$ = useVuelidate(rules, state);
</script>

<style scoped></style>