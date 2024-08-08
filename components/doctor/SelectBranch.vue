<template>
  <div class="flex flex-col gap-2 items-center text-center bg-white p-4 mt-2 rounded-xl w-full">
    <p class="text-center font-medium text-[#559AFF] text-[18px] leading-7 py-4">
      Select Branch
    </p>
    <div class="font-light w-full text-left text-lg">
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="(item, key) in branches"
          :key="key"
          class="flex justify-center">
          <label
            :for="item.name+key"
            class="flex items-center text-base font-inter font-medium leading-6 text-black"
          >
            <input
              :id="item.name+key"
              name="branch"
              type="checkbox"
              class="w-[24.8px] h-[24.8px] rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
            >
            <span class="pl-4 text-[18px] text-[#474D66]">{{ item.name }}</span>
          </label>
        </div>    
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const branches = [
  {
    name: "Branch 1",
  },
  {
    name: "Branch 2",
  },
  {
    name: "Branch 3",
  },
  {
    name: "Branch 4",
  },
  {
    name: "Branch 5",
  },
  {
    name: "Branch 6",
  },
  {
    name: "Branch 7",
  },
  {
    name: "Branch 8"
  }
];
</script>
