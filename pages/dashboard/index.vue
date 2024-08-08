<template>
  <div class="p-9 pr-0">
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
            <div class="flex items-center gap-3">
              <ReusablesBaseButton
                label="View all"
                class="border-[1px] rounded h-[32px] w-[66px] bg-transparent text-xs font-normal leading-4 border-[#EDF3FB] text-[#0522CC]"
              />

              <ReusablesBaseSelect
                @change="changeRole()"
                v-model="state.role"
                :options="roles"
                placeholder="Select role"
                className="block w-[261px] h-[32px] text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 pr-3 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
              />
            </div>
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
              <div
                class="flex justify-between items-center"
                v-if="state.role == 'Owner'"
              >
                <div class="flex items-center">
                  <div class="mr-2">
                    <Icon name="mdi:account-circle" size="48" />
                  </div>
                  <div>
                    <p class="text-base text-sm font-normal text-black my-2">
                      Dr. Prakash V
                    </p>
                    <div class="grid grid-cols-6 gap-2">
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >10:00</span
                      >
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >10:30</span
                      >
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >11:00</span
                      >
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >11:30</span
                      >
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >12:00</span
                      >
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >12:30</span
                      >
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >14:00</span
                      >
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >14:30</span
                      >
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >15:00</span
                      >
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >15:30</span
                      >
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >16:00</span
                      >
                      <span
                        class="bg-[#EDEFF5] flex justify-center items-center w-[45px] h-[16px] rounded-full font-bold text-[11px] leading-4 font-inter"
                        >18:00</span
                      >
                    </div>
                  </div>
                </div>
                <ReusablesBaseButton
                  label="View"
                  class="border-[1px] rounded w-[70px] p-1.5 px-2 pr-3 my-2 text-xs font-normal bg-transparent h-[32px] leading-4 border-[#EDF3FB] text-[#696F8C]"
                />
              </div>

              <div class="flex justify-between items-center" v-else>
                <div class="flex items-center">
                  <div class="mr-2">
                    <Icon name="mdi:account-circle" size="48" />
                  </div>
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
            @click="$router.push('/')"
          />
          <ReusablesBaseButton
            label="Add Appointment"
            icon-left="plus"
            :left-size="16"
            class="flex justify-center items-center w-full h-[44px] p-3 rounded bg-[#0052CC] font-inter text-base font-normal leading-5 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
            @click="$router.push('/')"
          />
        </div>
        <ReusablesBaseButton
          v-if="state.role == 'Owner'"
          @click="$router.push('/')"
          label="Diagnostic Master"
          iconClass="text-white"
          icon-right="chevron-down"
          :right-size="16"
          class="flex justify-between items-center w-full h-[44px] p-3 mb-3 rounded bg-[#0052CC] font-inter text-base font-normal leading-5 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
        />
        <ReusablesBaseButton
          v-if="state.role == 'Owner'"
          @click="$router.push('/')"
          label="Treatment Master"
          iconClass="text-white"
          icon-right="chevron-down"
          :right-size="16"
          class="flex justify-between items-center w-full h-[44px] p-3 mb-3 rounded bg-[#0052CC] font-inter text-base font-normal leading-5 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
        />
        <div
          class="flex items-center justify-between w-full gap-2"
          v-if="state.role == 'Owner'"
        >
          <div>
            <p class="text-base font-normal">
              Subscription Plan : <span class="font-bold">Professional</span>
            </p>
          </div>
          <ReusablesBaseButton
            @click="$router.push('/')"
            label="Downgrade"
            iconClass="text-[#696F8C]"
            icon-left="arrow-down"
            :left-size="16"
            class="flex justify-center items-center w-[171px] h-[44px] p-3 rounded bg-white font-inter text-base font-normal leading-5 text-[#696F8C] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
          <div class="pl-5">
            <div class="py-5 h-[120px] border-b-[1px] border-[#F2F2F2]">
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
            <div class="py-5 h-[120px] border-b-[1px] border-[#F2F2F2]">
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
function changeRole() {
  if (state.role == "Owner") {
    state.role = "Doctor";
  } else {
    state.role = "Owner";
  }
  console.log("role : ", state.role);
}
</script>

<style scoped></style>
