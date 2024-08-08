<template>
  <div class="relative overflow-x-clip">
    <NavbarTheSidebar :nav="nav" />
    <main class="sidebar-wrapper" :class="{ 'active-mainbar': nav }">
      <div class="relative">
        <div class="p-6">
          <NuxtLoadingIndicator />
          <NuxtPage />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const nav = ref<boolean>(false);

const toggleSidebar = () => {
  nav.value = !nav.value;
};
</script>

<style scoped>
.sidebar-wrapper {
  @apply bg-[#F5F6F9] h-screen  w-full md:ml-[183px] md:w-[calc(100%-183px)] transition-[margin-left];
}
.active-mainbar {
  @apply ml-[260px] md:ml-0 md:w-full;
}
</style>