<template>
  <div class="p-9 pl-9 pr-0">
    <div class="flex justify-center gap-5">
      <div class="w-[39.74%]">
        <div class="w-full flex justify-start items-center mt-5">
          <p
            class="font-black text-4xl mr-1 font-bold font-roboto text-[#000000] text-[36px]"
          >
            GOOD MORNING
          </p>
          <!-- <p class="h-[36px] w-[36px]">☀️</p> -->
          <Icon name="mdi:weather-sunny" size="36" color="#FDB813" />
        </div>
        <p class="font-medium text-lg pt-2 leading-5 text-[#000000]">
          Supportive text for the above greeting.
        </p>
        <!-- Card -->
        <div
          class="block rounded bg-white shadow-secondary-1 mt-5 overflow-hidden"
        >
          <div
            class="border-b-2 border-neutral-100 h-[51px] px-5 py-1 flex items-center justify-between"
          >
            <p class="text-sm font-normal text-black">Appointments</p>
          </div>
          <div class="border-b-2 border-neutral-100 p-5">
            <div class="w-full">
              <p class="font-normal text-base leading-4 mb-2">March</p>
              <div class="inline-flex items-center justify-between w-full">
                <div class="text-center">
                  <p
                    class="text-[#97C1FF] font-normal text-base lending-4 mb-1"
                  >
                    M
                  </p>
                  <p
                    class="h-[50px] w-[50px] flex justify-center items-center rounded-full font-normal text-lg lending-5"
                  >
                    21
                  </p>
                </div>
                <div class="text-center">
                  <p
                    class="text-[#97C1FF] font-normal text-base lending-4 mb-1"
                  >
                    T
                  </p>
                  <p
                    class="h-[50px] w-[50px] flex justify-center items-center rounded-full bg-[#D0E3FF] font-normal text-lg lending-5"
                  >
                    22
                  </p>
                </div>
                <div class="text-center">
                  <p
                    class="text-[#97C1FF] font-normal text-base lending-4 mb-1"
                  >
                    W
                  </p>
                  <p
                    class="h-[50px] w-[50px] flex justify-center items-center rounded-full font-normal text-lg lending-5"
                  >
                    23
                  </p>
                </div>
                <div class="text-center">
                  <p
                    class="text-[#97C1FF] font-normal text-base lending-4 mb-1"
                  >
                    T
                  </p>
                  <p
                    class="h-[50px] w-[50px] flex justify-center items-center rounded-full font-normal text-lg lending-5"
                  >
                    24
                  </p>
                </div>
                <div class="text-center">
                  <p
                    class="text-[#97C1FF] font-normal text-base lending-4 mb-1"
                  >
                    F
                  </p>
                  <p
                    class="h-[50px] w-[50px] flex justify-center items-center rounded-full font-normal text-lg lending-5"
                  >
                    25
                  </p>
                </div>
                <div class="text-center">
                  <p
                    class="text-[#97C1FF] font-normal text-base lending-4 mb-1"
                  >
                    M
                  </p>
                  <p
                    class="h-[50px] w-[50px] flex justify-center items-center rounded-full font-normal text-lg lending-5"
                  >
                    26
                  </p>
                </div>
                <div class="text-center">
                  <p
                    class="text-[#97C1FF] font-normal text-base lending-4 mb-1"
                  >
                    T
                  </p>
                  <p
                    class="h-[50px] w-[50px] flex justify-center items-center rounded-full font-normal text-lg lending-5"
                  >
                    27
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="p-5">
            <div class="mb-3">
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-base text-sm font-normal text-black">
                    Prakash V
                  </p>
                  <p class="text-base text-sm font-normal text-[#637381]">
                    Dr. Rajesh Krishna
                  </p>
                  <p class="text-base text-sm font-normal text-[#BDBDBD]">
                    10:30AM-10:45AM
                  </p>
                </div>
                <div class="flex items-center gap-3">
                  <ReusablesBaseButton
                    iconClass="text-[#696F8C]"
                    icon-right="lead-pencil"
                    :right-size="16"
                    class="flex justify-center items-center border-[1px] rounded h-[32px] w-[32px] text-xs font-normal bg-transparent leading-4 border-[#EDF3FB] text-[#696F8C]"
                  />
                  <ReusablesBaseButton
                    label="Cancel"
                    class="flex justify-center items-center border-[1px] rounded h-[32px] w-[70px] text-xs text-center font-normal bg-transparent leading-4 border-[#EDF3FB] text-[#696F8C]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[35.47%]">
        <div class="grid grid-cols-2 gap-2 mb-2">
          <ReusablesBaseButton
            label="Patient Management"
            icon-left="user"
            :left-size="16"
            class="flex justify-center items-center w-full h-[44px] p-3 rounded bg-[#0052CC] font-inter text-base font-normal leading-5 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
            @click="$router.push('/dashboard/doctor/patient')"
          />
          <ReusablesBaseButton
            label="Add Appointment"
            icon-left="plus"
            :left-size="16"
            class="flex justify-center items-center w-full h-[44px] p-3 rounded bg-[#0052CC] font-inter text-base font-normal leading-5 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
            @click="$router.push('/dashboard/appointment/create')"
          />
        </div>
        <!-- Card -->
        <div
          class="block rounded bg-white shadow-secondary-1 mt-3 overflow-hidden"
        >
          <div
            class="border-b-2 border-neutral-100 h-[51px] px-5 py-1 flex items-center justify-between"
          >
            <p class="text-sm font-normal text-black">Case Review</p>
            <div class="flex items-center gap-3">
              <ReusablesBaseButton
                label="View all"
                class="border-[1px] bg-transparent h-[32px] rounded p-1.5 px-2 pr-3 text-xs font-normal leading-4 border-[#EDF3FB] text-[#0522CC]"
              />
            </div>
          </div>
          <div class="p-5">
            <div class="mb-3 flex items-center justify-between">
              <div class="flex items-center">
                <div class="mr-2">
                  <Icon name="mdi:account-circle" size="48" />
                </div>
                <p class="text-base text-sm font-normal text-black">
                  Prakash V
                </p>
              </div>
              <p class="text-[#0052CC] font-normal text-xs">Review</p>
            </div>
            <div class="mb-3 flex items-center justify-between">
              <div class="flex items-center">
                <div class="mr-2">
                  <Icon name="mdi:account-circle" size="48" />
                </div>
                <p class="text-base text-sm font-normal text-black">
                  Prakash V
                </p>
              </div>
              <p class="text-[#0052CC] font-normal text-xs">Review</p>
            </div>
            <div class="mb-3 flex items-center justify-between">
              <div class="flex items-center">
                <div class="mr-2">
                  <Icon name="mdi:account-circle" size="48" />
                </div>
                <p class="text-base text-sm font-normal text-black">
                  Prakash V
                </p>
              </div>
              <p class="text-[#0052CC] font-normal text-xs">Review</p>
            </div>
            <div class="mb-3 flex items-center justify-between">
              <div class="flex items-center">
                <div class="mr-2">
                  <Icon name="mdi:account-circle" size="48" />
                </div>
                <p class="text-base text-sm font-normal text-black">
                  Prakash V
                </p>
              </div>
              <p class="text-[#0052CC] font-normal text-xs">Review</p>
            </div>
            <div class="mb-3 flex items-center justify-between">
              <div class="flex items-center">
                <div class="mr-2">
                  <Icon name="mdi:account-circle" size="48" />
                </div>
                <p class="text-base text-sm font-normal text-black">
                  Prakash V
                </p>
              </div>
              <p class="text-[#0052CC] font-normal text-xs">Review</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[24.79%]">
        <!-- Card -->
        <div class="block rounded bg-white shadow-secondary-1 overflow-hidden">
          <div
            class="border-b-2 border-neutral-100 h-[51px] px-5 py-1 flex items-center justify-between"
          >
            <p class="text-sm font-normal text-black">Action Center</p>
          </div>
          <div class="pl-5 divide-y divide-[#F2F2F2]">
            <div class="py-5 h-[120px]">
              <div class="flex justify-start">
                <div
                  class="bg-[#C4C4C4] rounded-full h-[20px] w-[20px] mr-2"
                ></div>
                <div>
                  <div class="flex items-center">
                    <p class="text-black font-normal text-base leading-4 mr-2">
                      Kiran XYZ
                    </p>
                    <span
                      class="bg-[#6FCF97] text-white text-[9px] font-normal leading-3 px-2 py-1 rounded-sm"
                      >Checked In</span
                    >
                  </div>
                  <p class="text-[#828282] font-normal text-sm">
                    Resin restoration & Crown
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-end mt-3 mr-3">
                <ReusablesBaseButton
                  @click="$router.push('/')"
                  label="Start Treatment"
                  iconClass="text-[#0052CC]"
                  icon-right="arrow-right"
                  :right-size="16"
                  className="flex justify-end items-center rounded mt-2 text-xs font-normal leading-4 text-[#0522CC]"
                />
              </div>
            </div>
            <div class="py-5 h-[120px]">
              <div class="flex justify-start">
                <div
                  class="bg-[#C4C4C4] rounded-full h-[20px] w-[20px] mr-2"
                ></div>
                <div>
                  <div class="flex items-center">
                    <p class="text-black font-normal text-base leading-4 mr-2">
                      Kiran XYZ
                    </p>
                    <span
                      class="bg-[#6FCF97] text-white text-[9px] font-normal leading-3 px-2 py-1 rounded-sm"
                      >Checked In</span
                    >
                  </div>
                  <p class="text-[#828282] font-normal text-sm">
                    Resin restoration & Crown
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-end mt-3 mr-3">
                <ReusablesBaseButton
                  @click="$router.push('/')"
                  label="Start Treatment"
                  iconClass="text-[#0052CC]"
                  icon-right="arrow-right"
                  :right-size="16"
                  class="flex justify-end items-center rounded mt-2 text-xs font-normal leading-4 text-[#0522CC]"
                />
              </div>
            </div>
            <div class="py-5 h-[120px]">
              <div class="flex justify-start">
                <div
                  class="bg-[#C4C4C4] rounded-full h-[20px] w-[20px] mr-2"
                ></div>
                <div>
                  <div class="flex items-center">
                    <p class="text-black font-normal text-base leading-4 mr-2">
                      Kiran XYZ
                    </p>
                    <span
                      class="bg-[#6FCF97] text-white text-[9px] font-normal leading-3 px-2 py-1 rounded-sm"
                      >Checked In</span
                    >
                  </div>
                  <p class="text-[#828282] font-normal text-sm">
                    Resin restoration & Crown
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-end mt-3 mr-3">
                <ReusablesBaseButton
                  @click="$router.push('/')"
                  label="Start Treatment"
                  iconClass="text-[#0052CC]"
                  icon-right="arrow-right"
                  :right-size="16"
                  className="flex justify-end items-center rounded mt-2 text-xs font-normal leading-4 text-[#0522CC]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });
const roles = ["Owner", "Doctor"];
// Form inputs
const state = reactive<{
  role: string;
}>({
  role: "Doctor",
});
</script>

<style scoped></style>
