<template>
  <div class="p-9">
    <div class="w-full text-center">
      <div>
        <Icon
          name="mdi:checkbox-marked-circle"
          size="79"
          class="text-[#27AE60]"
        />
      </div>
      <p class="font-inter font-semibold text-2xl text-[#0052CC]">
        Patient Created Successfully
      </p>
    </div>
    <div class="flex justify-center items-center gap-5 mt-4">
      <ReusablesBaseButton
        @click="$router.push('/dashboard/doctor/patient/view')"
        label="View"
        iconClass="text-white"
        icon-left="eye"
        :left-size="12"
        className="flex justify-center items-center rounded bg-[#3366FF] px-4 py-2 text-xs font-medium leading-4 text-white"
      />
      <ReusablesBaseButton
        label="Print"
        iconClass="text-[#696F8C]"
        icon-left="printer"
        :left-size="12"
        className="flex justify-center items-center rounded bg-white px-4 py-2 text-xs font-medium leading-4 text-[#696F8C] border-[1px] border-[#828282]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

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