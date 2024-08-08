<template>
  <ReusablesBaseModal :is-active="isActive" @open-modal="openModal">
    <div
      class="flex justify-between w-full bg-white p-3 rounded-xl align-top min-w-80"
    >
      <p
        class="text-[#317159] px-1 pt-1 flex justify-start items-center min-w-[620px] gap-x-4"
      >
        <Icon
          name="mdi:check-circle"
          class="icon-style bg-green-600 mdi mdi-close"
        />
        {{ props.message }}
      </p>
      <Icon
        name="mdi:close"
        class="icon-style text-[#317159] hover:bg-green-200 mdi mdi-close"
        @click="closeModal"
      />
    </div>
  </ReusablesBaseModal>
</template>
<script setup lang="ts">
interface Props {
  message: string;
  show: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(["update"]);
const { isActive, openModal } = useModal();
if (props.show) openModal(true);

const closeModal = () => {
  openModal(false);
  emit("update", false);
};
</script>
