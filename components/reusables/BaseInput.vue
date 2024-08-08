<template>
  <!-- Base Input (text, email, password) -->
  <div>
    <label v-if="label" class="label-style" :for="label">{{ label }}</label>
    <div>
      <input
        :id="label"
        class="input-style" 
        :class="{ err: error }"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        v-bind="$attrs"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
      <span
        v-if="password"
        class="mdi absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
        @click="$emit('changeType')"
      >
        <Icon v-if="type === 'password'" name="mdi:eye" />
        <Icon v-else name="mdi:eye-off" />
      </span>
    </div>
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
  type: string;
  modelValue: string | number;
  label?: string;
  placeholder?: string;
  password?: boolean;
  error?: string | boolean;
  errorMessage?: string | boolean;
}

const _props = defineProps<Props>();
const _emit = defineEmits(["changeType", "update:modelValue"]);
</script>

<style lang="scss" scoped></style>
