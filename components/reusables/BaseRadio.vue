<template>
  <input
    :id="id"
    :type="type"
    :value="modelValue" 
    :name="name"
    v-bind="$attrs"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  >
</template>

<script setup lang="ts">
interface Props {
  type: string;
  modelValue: boolean;
  id?: string;
  name: string;
}

const _props = defineProps<Props>();
const _emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped></style>
