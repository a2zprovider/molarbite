<template>
  <Teleport to="body">
    <Transition name="zoom">
      <div
        v-if="isActive"
        class="fixed top-0 left-0 w-screen h-screen bg-[rgb(0,0,0,0.3)] flex justify-center z-50 bg-blur pt-5"
        @click.self="$emit('openModal', false)"
      
      >
        <div>
          <slot/>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ isActive: boolean }>();
defineEmits(["openModal"]);
</script>

<style scoped>
.zoom-enter-active,
.zoom-leave-active {
  transition: transform ease-in-out 0.2s;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0);
}
.bg-blur {
  backdrop-filter: blur(3px);
}
</style>
