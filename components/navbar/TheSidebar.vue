<template>
  <div class="sidebar" :class="{ 'active-sidebar': nav }">
    <div>
      <div
        class="sticky-top bg-[#0052cc] dark:bg-darkBgSec w-full h-[60px] shadow-sm p-1 flex justify-between items-center"
      >
        <NuxtLink to="/">
          <img src="/assets/img/logo.png" height="80px" width="233px" />
        </NuxtLink>
      </div>
      <div
        class="h-screen md:h-[calc(100vh-60px)] py-0 px-0 overflow-y-auto bg-[#0052cc]"
      >
        <div class="w-full border-b-[1px] border-[#5F9FFF]"></div>
        <div class="p-3 px-4">
          <p class="text-sm leading-4 font-normal text-white">
            Ridgetop dental
          </p>
          <span class="text-[9px] font-normal leading-4 text-white"
            >MG Road</span
          >
        </div>
        <div class="w-full border-b-[1px] border-[#5F9FFF]"></div>
        <ul class="flex flex-col mt-5">
          <li v-for="(link, index) in links" :key="index">
            <span v-for="(list, index) in link.list" :key="index">
              <span v-if="!list.sub" class="block">
                <RouterLink
                  :to="`${list.route}`"
                  active-class="sidebar-active"
                  class="flex items-center gap-3 sidebar-hover"
                >
                  <Icon
                    v-if="list.icon"
                    :name="`mdi:${list.icon}`"
                    width="16"
                  />
                  {{ list.name }}
                </RouterLink>
              </span>
              <div v-else>
                <div
                  class="flex items-center justify-between sidebar-hover"
                  @click="toggleDropdown(list)"
                >
                  <span class="flex items-center gap-3">
                    <Icon
                      v-if="list.icon"
                      :name="`mdi:${list.icon}`"
                      width="16"
                    />
                    <span class="">{{ list.name }}</span>
                  </span>
                  <Icon
                    name="mdi:menu-down-outline"
                    width="18"
                    :class="
                      list.show
                        ? 'transition-all ease-in duration-300 transform rotate-180'
                        : 'transition-all ease-out duration-300 transform rotate-40'
                    "
                  ></Icon>
                </div>
                <div
                  class="flex flex-col"
                  :class="[
                    list.show
                      ? 'transition-[max-height] max-h-[5000px] duration-200 ease-in'
                      : 'transition-[max-height] max-h-0 duration-300 ease-out overflow-hidden',
                  ]"
                >
                  <div v-for="(sub, index) in list.sub" :key="index">
                    <p class="pl-[37px]">
                      <RouterLink
                        :to="`${sub.route}`"
                        active-class="inner-sidebar-active"
                        class="flex items-center gap-3 inner-sidebar-hover"
                      >
                        <Icon
                          v-if="sub.icon"
                          :name="`mdi:${sub.icon}`"
                          width="16"
                        />
                        {{ sub.name }}
                      </RouterLink>
                    </p>
                  </div>
                </div>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { links, toggleDropdown } = useSidebarUtils();
defineProps<{ nav: boolean }>();
</script>

<style scoped>
.sidebar {
  @apply text-white text-[#99BAEB] font-normal leading-4 text-sm shadow-sm z-40 w-[183px] fixed top-0 md:left-0  -left-full transition-[left];
}

.active-sidebar {
  @apply left-0 w-[183px] md:-left-full;
}
.sidebar-active {
  @apply rounded-md font-semibold text-white !important;
}

.inner-sidebar-active {
  @apply rounded-md text-white font-semibold !important;
}

.sidebar-hover {
  @apply p-3 transition-all ease-in-out duration-300 cursor-pointer;
}

.inner-sidebar-hover {
  @apply p-3 transition-all ease-in-out duration-300 cursor-pointer;
  /* @apply p-3 transition-all ease-in-out duration-300 hover:text-priText cursor-pointer; */
}
</style>

