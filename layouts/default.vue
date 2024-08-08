<template>
  <div class="flex flex-col text-center px-4 bg-main h-screen conatiner">
    <div class="mt-2">
      <NuxtLink to="/">
        <img src="/assets/img/logo.png" height="80px" width="233px" />
      </NuxtLink>
    </div>
    <NuxtLoadingIndicator />
    <slot />
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
</style>
  