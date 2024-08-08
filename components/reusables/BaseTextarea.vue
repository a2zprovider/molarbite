<template>
  <!-- Base Textarea -->
  <div>
    <label v-if="label" class="label-style" :for="label">{{ label }}</label>
    <textarea
      :id="label"
      name="textarea"
      class="input-style textarea-style"
      :class="{ err: error }"
      cols="30"
      rows="10"
      v-bind="$attrs"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <small
      v-if="error && errorMessage"
      :id="`${label}-error`"
      :class="{ 'err-message': error }"
      aria-live="assertive"
      >{{ errorMessage }}</small
    >
    <small
      v-else-if="error && !errorMessage"
      :id="`${label}-error`"
      :class="{ 'err-message': error }"
      aria-live="assertive"
      >{{ label }} is required</small
    >
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number;
  label?: string;
  placeholder?: string;
  error?: string | boolean;
  errorMessage?: string | boolean;
}

const _props = defineProps<Props>();
const _emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped></style>
