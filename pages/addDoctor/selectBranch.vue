<template>
  <div
    class="flex flex-col justify-normal items-center gap-5 text-center my-[20px] h-screen w-full md:ml-[50px] md:mr-[50px] md:w-[calc(100%-100px)]"
  >
    <div>
      <p
        class="font-light text-[24px] text-[500] text-[#0052CC] leading-4 pt-4 font-roboto"
      >
        Add Doctor
      </p>
    </div>
    <SelectBranch />
    <SelectAvailability />
    <SelectTiming />
    <div class="inline-flex items-center justify-end w-full pb-[60px]">
      <button
        type="submit"
        class="flex justify-center items-center rounded h-[32px] w-[90px] bg-[#0052CC] px-[16px] py-[8px] font-inter text-[14px] font-bold leading-6 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectAvailability from "~/components/doctor/SelectAvailability.vue";
import SelectBranch from "~/components/doctor/SelectBranch.vue";
import SelectTiming from "~/components/doctor/SelectTiming.vue";

definePageMeta({ layout: "custom" });
</script>

<style scoped>
.card-radius {
  border-radius: 100%;
}
.vertical-bar {
  top: 114px;
  left: 9px;
  height: 104px;
}
.second-bar {
  top: 88px;
}
</style>
