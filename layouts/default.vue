<template>
  <div class="relative" style="z-index: 1">
    <div
      class="flex flex-col text-center px-4 h-screen conatiner relative"
      style="z-index: 10"
    >
      <div class="mt-2 logo">
        <NuxtLink to="/">
          <img src="/assets/img/logo.png" height="80px" width="233px" />
        </NuxtLink>
      </div>
      <NuxtLoadingIndicator />
      <slot />
    </div>
    <div class="bg-main fixed top-0 bottom-0 left-0 right-0" style="z-index: 1">
      <div class="left-vector">
        <img
          src="assets/img/left-vector-bg.png"
          alt=""
          srcset=""
          height="100"
          width="200"
        />
      </div>
      <div class="right-vector">
        <img
          src="assets/img/right-vector-bg.png"
          alt=""
          srcset=""
          height="100"
          width="200"
        />
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
.bg-main {
  background-color: #0052cc;
}
.left-vector {
  position: absolute;
  left: 0;
  bottom: 0;
}
.right-vector {
  position: absolute;
  right: 0;
  top: 0;
}
.logo {
  position: absolute;
}
</style>
  