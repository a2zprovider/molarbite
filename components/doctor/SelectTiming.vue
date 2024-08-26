<template>
    <div class="font-light w-full text-left text-lg">
      <div class="flex justify-between w-full">
        <div>
          <div class="flex flex-col justify-between gap-2 bg-white p-4 mt-2 rounded-xl w-[325px]">
            <p class="text-center font-medium text-[#559AFF] text-[18px] leading-7 pb-2">
              Select Timing - Branch 1
            </p>
            <div>
              <select
                id="branch_1_timing"
                class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 pr-3 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              >
                <option selected>Monday</option>
              </select>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="mt-2">
                  <ReusablesBaseInput
                    v-model="state.time11"
                    type="taxt"
                    placeholder="00:00"
                  />
                </div>
              </div>
              <div>
                <div class="mt-2">
                  <ReusablesBaseInput
                    v-model="state.time12"
                    type="taxt"
                    placeholder="00:00"
                  />
                </div>
              </div>
            </div>
            <button class="flex justify-left items-center pl-2 mt-1.5 hover:bg-[#0052CC] hover:text-[#ffffff] h-[32px] text-[14px] text-[#0052CC] border-[1px] border-[#0052CC] font-bold rounded">
              <Icon name="mdi:plus-circle-outline" size="14" />
              <span class="pl-2">Add more timings</span>
            </button>
          </div>
        </div>
        <div>
          <div class="flex flex-col justify-between gap-2 bg-white p-4 mt-2 rounded-xl w-[325px]">
            <p class="text-center font-medium text-[#559AFF] text-[18px] leading-7 pb-2">
              Select Timing - Branch 1
            </p>
            <div>
              <select
                id="branch_1_timing"
                class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 pr-3 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              >
                <option selected>Monday</option>
              </select>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="mt-2">
                  <ReusablesBaseInput
                    v-model="state.time11"
                    type="taxt"
                    placeholder="00:00"
                  />
                </div>
              </div>
              <div>
                <div class="mt-2">
                  <ReusablesBaseInput
                    v-model="state.time12"
                    type="taxt"
                    placeholder="00:00"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="mt-2">
                  <ReusablesBaseInput
                    v-model="state.time13"
                    type="taxt"
                    placeholder="00:00"
                  />
                </div>
              </div>
              <div>
                <div class="mt-2">
                  <ReusablesBaseInput
                    v-model="state.time14"
                    type="taxt"
                    placeholder="00:00"
                  />
                </div>
              </div>
            </div>
            <button class="flex justify-left items-center pl-2 mt-1.5 hover:bg-[#0052CC] hover:text-[#ffffff] h-[32px] text-[14px] text-[#0052CC] border-[1px] border-[#0052CC] font-bold rounded">
              <Icon name="mdi:plus-circle-outline" size="14" />
              <span class="pl-2">Add more timings</span>
            </button>
          </div>
        </div>
        <div>
          <div class="flex flex-col justify-between gap-2 bg-white p-4 mt-2 rounded-xl w-[325px]">
            <p class="text-center font-medium text-[#559AFF] text-[18px] leading-7 pb-2">
              Select Timing - Branch 1
            </p>
            <div>
              <div>
                <select
                  id="branch_1_timing"
                  class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 pr-3 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                >
                  <option selected>Monday</option>
                </select>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time11"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time12"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time13"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time14"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
              </div>
              <button class="flex justify-left w-full mt-3 items-center pl-2 mt-1.5 hover:bg-[#0052CC] hover:text-[#ffffff] h-[32px] text-[14px] text-[#0052CC] border-[1px] border-[#0052CC] font-bold rounded"
              >
                <Icon name="mdi:plus-circle-outline" size="14" />
                <span class="pl-2">Add more timings</span>
              </button>
            </div>
            <div class="mt-3">
              <div>
                <select
                  id="branch_1_timing"
                  class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 pr-3 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                >
                  <option selected>Monday</option>
                </select>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time11"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time12"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time13"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time14"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
              </div>
              <button
                class="flex justify-left w-full mt-3 items-center pl-2 mt-1.5 hover:bg-[#0052CC] hover:text-[#ffffff] h-[32px] text-[14px] text-[#0052CC] border-[1px] border-[#0052CC] font-bold rounded"
              >
                <Icon name="mdi:plus-circle-outline" size="14" />
                <span class="pl-2">Add more timings</span>
              </button>
            </div>
            <div class="mt-3">
              <div>
                <select
                  id="branch_1_timing"
                  class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 pr-3 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                >
                  <option selected>Monday</option>
                </select>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time11"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time12"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time13"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
                <div>
                  <div class="mt-2">
                    <ReusablesBaseInput
                      v-model="state.time14"
                      type="taxt"
                      placeholder="00:00"
                    />
                  </div>
                </div>
              </div>
              <button
                class="flex justify-left w-full mt-3 items-center pl-2 mt-1.5 hover:bg-[#0052CC] hover:text-[#ffffff] h-[32px] text-[14px] text-[#0052CC] border-[1px] border-[#0052CC] font-bold rounded"
              >
                <Icon name="mdi:plus-circle-outline" size="14" />
                <span class="pl-2">Add more timings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

// Form inputs
const state = reactive<{
  time11: string;
  time12: string;
  time13: string;
  time14: string;
}>({
  time11: "",
  time12: "",
  time13: "",
  time14: "",
});
</script>