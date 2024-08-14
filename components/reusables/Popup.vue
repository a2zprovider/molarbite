<template>
  <div>
    <div class="dropdown-section">
      <button
        @click="!isPopup"
        class=""
      >
        <Icon name="mdi:chevron-down" size="16" />
      </button>
      <ul
        v-if="isPopup"
        role="menu"
        class="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
      >
        <slot></slot>
        <li
          role="menuitem"
          class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Menu Item 1
        </li>
        <li
          role="menuitem"
          class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Menu Item 2
        </li>
        <li
          role="menuitem"
          class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Nested Menu
        </li>
        <li
          role="menuitem"
          class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Menu Item 3
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup  lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";
const isPopup = ref(false);
// const props = defineProps({
//   isPopup: {
//     type: Boolean,
//     required: true,
//   },
//   className: {
//     type: String,
//     required: false,
//   },
//   onPop: {
//     type: Function,
//     required: true,
//   },
// });

// const closePopup = () => {
//   // props.onPop();
//   // isPopup = !isPopup;
// };
</script>

<style scoped></style>
