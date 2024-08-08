<template>
  <div
    class="flex items-center main sticky top-0 w-full h-[60px] z-50 shadow-sm bg-white dark:bg-darkBgSec"
  >
    <div class="p-4 px-9 w-full">
      <div class="flex justify-end items-center w-full">
        <!-- <div class="flex items-center gap-2">
          <Icon
            name="mdi:menu"
            class="text-3xl font-bold cursor-pointer"
            @click="$emit('toggleSidebar')"
          ></Icon>
          <p>Welcome, Blade!</p>
        </div> -->
        <div class="flex items-center gap-2">
          <ReusablesBaseSelect
            v-model="state.role"
            :options="roles"
            placeholder="Select role"
            className="block w-[261px] h-[32px] text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 pr-3 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
          />
          <ReusablesBaseSelect
            v-model="state.branch"
            :options="branches"
            placeholder="Select branch"
            className="block  w-[164px] h-[32px] text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 pr-3 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
          />
          <div
            class="w-[32px] h-[34px] rounded-full bg-[#DDEBFF] flex items-center justify-center"
          >
            <Icon name="mdi:bell-outline" size="15" class="text-[#525252]" />
          </div>
        </div>
        <div class="flex items-center justify-center gap-4">
          <span class="mdi mdi-magnify text-2xl cursor-pointer"></span>
          <span class="mdi mdi-bell-outline text-2xl cursor-pointer"></span>
          <div class="flex gap-2 items-center justify-center cursor-pointer">
            <p class="hidden md:flex text-[#2F80ED] text-base font-normal">
              Kiran M B
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";
defineEmits(["toggleSidebar"]);

const branches = ["Kormangala", "MG Road", "Rajarajeshwari Nagar"];
const roles = ["Owner", "Doctor"];
// Form inputs
const state = reactive<{
  branch: string;
  role: string;
}>({
  branch: "Kormangala",
  role: "Owner",
});
</script>

<style scoped></style>
