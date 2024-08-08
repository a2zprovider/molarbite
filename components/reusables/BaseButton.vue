<template>
  <button :class="className" class="gap-2" :disabled="disabled">
    <Icon
      :icon="`mdi:${iconLeft}`"
      :class="iconClass"
      :width="leftSize"
      v-if="iconLeft"
    />
    <span v-if="label">{{ label }}</span>
    <Icon
      :icon="`mdi:${iconRight}`"
      :class="iconClass"
      :width="rightSize"
      v-if="iconRight"
    />
  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
defineProps<{
  label?: string;
  disabled?: string;
  className?: string;
  iconClass?: string;
  iconLeft?: boolean | string | "emoticon-sad";
  iconRight?: boolean | string | "emoticon-sad";
  leftSize?: number;
  rightSize?: number;
}>();
</script>

<style lang="scss" scoped></style>
