<template>
  <div class="pl-20 pt-[120px]">
    <p class="text-2xl font-normal text-black leading-7">Hey there!👋🏻</p>
    <p class="text-sm font-normal text-black leading-4 pt-4">
      To get started lets set you up.
    </p>

    <div class="mt-10 flex items-center gap-10 py-6 relative">
      <span class="w-1 h-10 bg-[#C4C4C4] absolute vertical-bar"></span>
      <div class="bg-[#0052CC] w-[22px] h-[22px] rounded-full"></div>
      <div
        class="md:mr-[200px] md:w-[calc(100%-200px)] rounded-xl overflow-hidden shadow-lg bg-white"
      >
        <div class="px-6 py-6">
          <div class="text-lg font-normal text-black leading-5 mb-2">
            Organisation Details
          </div>
          <div class="flex items-left justify-between">
            <p class="text-sm font-normal leading-5 text-[#828282] w-[490px]">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
            <ReusablesBaseButton
              label="Take me there"
              className="flex justify-center items-center bg-[#0052CC] h-[44px] w-[141px] text-white leading-5 text-base font-normal font-roboto rounded"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-1 flex items-center gap-10 pb-6 relative">
      <span
        class="w-1 h-10 bg-[#C4C4C4] absolute vertical-bar second-bar"
      ></span>
      <div class="bg-[#C4C4C4] w-[22px] h-[22px] rounded-full"></div>
      <div
        class="md:mr-[200px] md:w-[calc(100%-200px)] rounded-xl overflow-hidden shadow-lg bg-white"
      >
        <div class="px-6 py-6">
          <div class="text-lg font-normal text-black leading-5 mb-2">
            Add Doctor
          </div>
          <div class="flex items-left justify-between">
            <p class="text-sm font-normal leading-5 text-[#828282] w-[490px]">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>

            <ReusablesBaseButton
              @click="$router.push('/dashboard/doctor/create')"
              label="Add Doctor"
              className="flex justify-center items-center bg-[#0052CC] h-[44px] w-[141px] text-white leading-5 text-base font-normal font-roboto rounded"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-1 flex items-center gap-10 pb-6">
      <div class="bg-[#C4C4C4] w-[22px] h-[22px] rounded-full"></div>
      <div
        class="md:mr-[200px] md:w-[calc(100%-200px)] rounded-xl overflow-hidden shadow-lg bg-white"
      >
        <div class="px-6 py-6">
          <div class="text-lg font-normal text-black leading-5 mb-2">
            Add Team
          </div>
          <div class="flex items-left justify-between">
            <p class="text-sm font-normal leading-5 text-[#828282] w-[490px]">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
            <ReusablesBaseButton
              @click="$router.push('/dashboard/teams/create')"
              label="Add Team"
              className="flex justify-center items-center bg-[#0052CC] h-[44px] w-[141px] text-white leading-5 text-base font-normal font-roboto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "custom" });
</script>

<style scoped>
.card-radius {
  border-radius: 100%;
}
.vertical-bar {
  top: 105px;
  left: 9px;
  height: 104px;
}
.second-bar {
  top: 82px;
}
</style>
