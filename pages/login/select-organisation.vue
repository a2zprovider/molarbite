<template>
  <div
    class="flex flex-col justify-center items-center gap-5 text-center h-screen"
  >
    <div>
      <p class="text-center font-medium text-[24px] text-white leading-7">
        Select Organisation
      </p>
    </div>
    <div
      class="flex flex-col gap-2 items-center text-center bg-white p-5 mt-2 rounded-xl md:w-[424px]"
    >
      <div class="font-light w-full text-left text-lg">
        <form class="space-y-6 w-full" @submit.prevent="submitForm">
          <div>
            <label
              for="mobile"
              class="block text-base font-inter font-medium leading-6 text-black"
              >Available Organisations</label
            >
            <ul class="grid w-full gap-3 md:grid-cols-1 mt-2">
              <li>
                <ReusablesBaseRadio
                  id="ridgetop-dental"
                  v-model="state.selectBranch"
                  class="hidden peer"
                  type="radio"
                  name="hosting"
                />
                <label
                  for="ridgetop-dental"
                  class="inline-flex items-center justify-between w-full h-[32px] px-3 text-[#0052cc] bg-white border border-[#0052cc] rounded cursor-pointer peer-checked:bg-[#01875A] peer-checked:border-[#01875A] peer-checked:text-white"
                >
                  <div class="inline-flex justify-between items-center w-full">
                    <div
                      class="w-full text-xs font-normal font-inter lending-4"
                    >
                      Ridgetop Dental
                    </div>
                    <Icon name="mdi:check" size="18" class="text-white" />
                  </div>
                </label>
              </li>
              <li>
                <ReusablesBaseRadio
                  id="smile-dental-clinic"
                  v-model="state.selectBranch"
                  class="hidden peer"
                  type="radio"
                  name="hosting"
                />
                <label
                  for="smile-dental-clinic"
                  class="inline-flex items-center justify-between w-full h-[32px] px-3 text-[#0052cc] bg-white border border-[#0052cc] rounded cursor-pointer peer-checked:bg-[#01875A] peer-checked:border-[#01875A] peer-checked:text-white"
                >
                  <div class="inline-flex justify-between items-center w-full">
                    <div
                      class="w-full text-xs font-normal font-inter lending-4"
                    >
                      Smile Dental Clinic
                    </div>
                    <Icon
                      name="mdi:check"
                      size="18"
                      class="text-white font-bold"
                    />
                  </div>
                </label>
              </li>
              <li>
                <ReusablesBaseRadio
                  id="shine-bright-dental"
                  v-model="state.selectBranch"
                  class="hidden peer"
                  type="radio"
                  name="hosting"
                />
                <label
                  for="shine-bright-dental"
                  class="inline-flex items-center justify-between w-full h-[32px] px-3 text-[#0052cc] bg-white border border-[#0052cc] rounded cursor-pointer peer-checked:bg-[#01875A] peer-checked:border-[#01875A] peer-checked:text-white"
                >
                  <div class="inline-flex justify-between items-center w-full">
                    <div
                      class="w-full text-xs font-normal font-inter lending-4"
                    >
                      Shine Bright Dental
                    </div>
                    <Icon name="mdi:check" size="18" class="text-white" />
                  </div>
                </label>
              </li>
            </ul>
          </div>
          <div class="inline-flex items-center justify-end w-full mt-3">
            <ReusablesBaseButton
              type="submit"
              label="Submit"
              class="flex justify-center items-center h-[32px] w-[81px] rounded bg-[#0052CC] font-inter text-sm font-bold leading-4 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC] disabled:bg-[#D6E0FF]"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Form inputs
const state = reactive<{
  selectBranch: string;
}>({
  selectBranch: "",
});

const submitForm = async () => {
  await navigateTo("/login");
};
</script>

<style scoped></style>
