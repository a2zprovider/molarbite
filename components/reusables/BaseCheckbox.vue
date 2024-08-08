<template>
  <div class="flex justify-center">
    <label
      for="branch_7"
      class="flex items-center text-base font-inter font-medium leading-6 text-black"
    >
      <input
        :id="props.id"
        :name="props.name"
        type="checkbox"
        class="w-[24.8px] h-[24.8px] rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
      >
      <span class="pl-4 text-[18px] text-[#474D66]">{{ props.label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: string;
  modelValue: string | number;
  label?: string;
  id: string;
  name: string;
}

const props = defineProps<Props>();
</script>
