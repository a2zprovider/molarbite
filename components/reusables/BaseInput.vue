<template>
  <!-- Base Input (text, email, password) -->
  <div :class="inputClass">
    <label
      v-if="label"
      class="block text-base font-inter font-medium leading-6 text-black mb-2"
      :for="label"
      >{{ label }} <span v-if="isRequired" class="red-asterisk">*</span>
    </label>
    <div>
      <input
        :id="label"
        :class="[
          'block w-full h-[32px] text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]',
          { 'err': error }
        ]"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        v-bind="$attrs"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
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
  isRequired?: boolean;
  inputClass?: string;
}

const _props = defineProps<Props>();
const _emit = defineEmits(["changeType", "update:modelValue"]);
</script>

<style scoped>
.label-style {
  @apply block text-base font-inter font-medium leading-6 text-black mb-2;
}
.input-style {
  @apply block w-full h-[32px] text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2] !important;
}
.red-asterisk {
  color: #FF0000;
}
</style>
