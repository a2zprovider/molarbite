<template>
  <button class="btn flex justify-center items-center">
    <div
      v-if="isLoading"
      class="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full"
    />
    <span v-else class="space-x-3">
      <span>{{ label }}</span>
      <span
        v-if="label === 'load more'"
        class="mdi mdi-chevron-down text-base font-bold"
      />
    </span>
  </button>
</template>

<script setup lang="ts">
const isLoading = ref(false);
interface Props {
  label: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped></style>
