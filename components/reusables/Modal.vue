<template>
  <div>
    <div
      v-if="isVisible"
      class="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50"
      @click.stop=""
    >
      <div
        class="relative bg-white p-6 rounded-lg shadow-lg border-[2px] border-[#0052CC]"
        :class="className"
      >
        <div>
          <button
            @click="closeModal"
            class="absolute top-2 right-2 text-black hover:text-gray-900"
          >
            &times;
          </button>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup  lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  className: {
    type: String,
    required: false,
  },
  onClose: {
    type: Function,
    required: true,
  },
});

const closeModal = () => {
  props.onClose();
};
</script>

<style scoped></style>
