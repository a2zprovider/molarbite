<template>
  <div>
    <label class="label-style" :for="label" v-if="label">
      {{ label }}
    </label>
    <!-- Using Default HTML select -->

    <div class="">
      <!-- <select
        class="input-style mb-3"
        :id="label"
        :value="modelValue"
        v-bind="{
          ...$attrs,
          onInput: ($event) => {
            $emit('update:modelValue', $event.target.value);
          },
        }"
      >
        <option
          :value="option"
          v-for="option in options"
          :key="option"
          :selected="option === modelValue"
          class="opt"
        >
          {{ option }}
        </option>
      </select> -->
      <!-- Using vSelect -->
      <div>
        <v-select
          class="custom-v-select v-style text-xs text-[#8F95B2] placeholder:text-xs placeholder:text-[#8F95B2]"
          :options="options"
          :value="modelValue"
          :placeholder="placeholder"
          :searchable="false"
          :clearable="false"
        >
          <template #open-indicator>
            <Icon name="mdi:chevron-down" size="16" />
          </template>
          <template #close-indicator>
            <Icon name="mdi:chevron-up" size="16" />
          </template>
          <template #clear-indicator>
            <Icon name="mdi:close" size="16" />
          </template>
          clearable
        </v-select>
      </div>

      <small :class="{ 'err-message': error }" v-if="error"
        >{{ label }} is required</small
      >
    </div>
  </div>
</template>


<script setup lang="ts">
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
interface Props {
  label?: string;
  placeholder?: string;
  modelValue: string | number;
  labelClass?: string;
  className?: string;
  error?: string | boolean;
  options: (string | number)[];
}

const emit = defineEmits(["changeType", "update:modelValue"]);
defineProps<Props>();
</script>
<style  scoped>
.vs__search {
  font-size: 16px !important;
}
.vs--unsearchable:not(.vs--disabled) .vs__search {
  font-size: 16px !important;
}
.vs--single .vs__selected {
  color: #8f95b2;
}
</style>
