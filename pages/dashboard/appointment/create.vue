<template>
  <div class="p-9">
    <div class="flex gap-4">
      <div
        class="bg-white p-5 px-[50px] border border-[#0052CC] rounded-xl w-full text-center"
      >
        <p class="font-medium text-2xl text-[#0052CC] mb-3">Appointment</p>
        <div></div>

        <div class="mb-5 flex items-center justify-center text-center gap-4">
          <div
            @click="changeTab('chief-complaint')"
            class="px-2 py-2 font-inter font-medium text-xs lending-4 border-b cursor-pointer"
            :class="
              state.tab == 'chief-complaint' ? 'tab-active' : 'tab-inactive'
            "
          >
            Chief Complaint
          </div>
          <div
            @click="changeTab('treatment')"
            class="px-2 py-2 font-inter font-medium text-xs lending-4 border-b cursor-pointer"
            :class="state.tab == 'treatment' ? 'tab-active' : 'tab-inactive'"
          >
            Treatment
          </div>
        </div>
        <div v-if="state.tab == 'chief-complaint'">
          <div v-if="state.status != 'tab1'">
            <div class="mb-2 grid grid-cols-1 gap-3">
              <div class="mb-2 flex justify-center gap-2 items-center">
                <div class="text-right w-[200px]">
                  <p class="font-inter font-medium text-[#474D66] text-[13px]">
                    Patient
                  </p>
                </div>
                <div class="text-left w-[300px]">
                  <ReusablesBaseSelect
                    v-model="state.patient"
                    :options="patients"
                    placeholder="Select Patient"
                  />
                </div>
              </div>
              <div class="mb-2 flex justify-center gap-2 items-center">
                <div class="text-right w-[200px]">
                  <p class="font-inter font-medium text-[#474D66] text-[13px]">
                    Complaint Issue
                  </p>
                </div>
                <div class="text-left w-[300px]">
                  <ReusablesBaseSelect
                    v-model="state.complaint_issue"
                    :options="complaint_issues"
                    placeholder="Complaint Issue"
                  />
                </div>
              </div>
              <div class="mb-2 flex justify-center gap-2 items-center">
                <div class="text-right w-[200px]">
                  <p class="font-inter font-medium text-[#474D66] text-[13px]">
                    Date
                  </p>
                </div>
                <div class="text-left w-[300px]">
                  <ReusablesBaseInput
                    v-model="state.date"
                    type="date"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
              </div>
              <div class="mb-2 flex justify-center gap-2 items-center">
                <div class="text-right w-[200px]">
                  <p class="font-inter font-medium text-[#474D66] text-[13px]">
                    Speciality Doctor
                  </p>
                </div>
                <div class="text-left w-[300px]">
                  <ReusablesBaseSelect
                    v-model="state.doctor"
                    :options="doctors"
                    placeholder="Select Doctor"
                  />
                </div>
              </div>
              <div class="mb-2 flex justify-center gap-2 items-center">
                <div class="text-right w-[200px]">
                  <p class="font-inter font-medium text-[#474D66] text-[13px]">
                    Notes
                  </p>
                </div>
                <div class="text-left w-[300px]">
                  <ReusablesBaseTextarea
                    v-model="state.notes"
                    type="text"
                    placeholder="Notes"
                  />
                </div>
              </div>
            </div>
            <div class="px-10">
              <p class="text-lg font-medium text-[#559AFF] mb-5">
                Available Slots
              </p>

              <div class="mb-5">
                <div class="grid grid-cols-4 items-center gap-3 mt-2">
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Google"
                      name="Google"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      09:00am</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Facebook"
                      name="Facebook"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      09:30am</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Instagram"
                      name="Instagram"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      10:00am</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="LinkedIn"
                      name="LinkedIn"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                      >11:30am</span
                    > </label
                  ><label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Corporate Wellness"
                      name="Corporate Wellness"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      04:00pm</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Flyer"
                      name="Flyer"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      06:00pm</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Newspaper"
                      name="Newspaper"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      06:30pm</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Newspaper"
                      name="Newspaper"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      07:30pm</span
                    >
                  </label>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <ReusablesBaseButton
                @click="state.status = 'tab1'"
                label="Submit"
                className="flex justify-center items-center rounded  w-[120px] bg-[#0052CC] px-4 py-2 text-xs font-medium leading-4 text-white"
              />
            </div>
          </div>
          <div v-else class="flex justify-center text-center w-full">
            <div class="">
              <div>
                <Icon
                  name="mdi:checkbox-marked-circle"
                  size="80"
                  class="text-[#1138f7]"
                />
                <p class="font-medium text-lg text-black mb-2">
                  Appointment Booked Successfully!
                </p>
              </div>
              <div
                class="w-[390px] mb-2 border rounded font-inter font-medium text-sm p-3"
              >
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[#474D66] w-[50%] text-left">Patient Name</p>
                  <p class="text-[#202020] w-[50%] text-right">
                    Raj Kumar Singh
                  </p>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[#474D66] w-[50%] text-left">
                    Chief Complaint
                  </p>
                  <p class="text-[#202020] w-[50%] text-right">
                    Vikash Kumar Singh
                  </p>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[#474D66] w-[50%] text-left">Doctor Name</p>
                  <p class="text-[#202020] w-[50%] text-right">
                    Dr. Ramkumar Rastogi
                  </p>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[#474D66] w-[50%] text-left">Date</p>
                  <p class="text-[#202020] w-[50%] text-right">01/12/2023</p>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[#474D66] w-[50%] text-left">Slots</p>
                  <p class="text-[#202020] w-[50%] text-right">09:00am</p>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[#474D66] w-[50%] text-left">Notes</p>
                  <p class="text-[#202020] w-[50%] text-right">
                    Industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when
                  </p>
                </div>
              </div>
              <div class="flex justify-center">
                <ReusablesBaseButton
                  @click="state.status = ''"
                  label="Close"
                  className="flex justify-center items-center rounded  w-[120px] bg-[#0052CC] px-4 py-2 text-xs font-medium leading-4 text-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="state.tab == 'treatment'">
          <div v-if="state.status != 'tab2'">
            <div class="mb-2 grid grid-cols-1 gap-3">
              <div class="mb-2 flex justify-center gap-2 items-center">
                <div class="text-right w-[200px]">
                  <p class="font-inter font-medium text-[#474D66] text-[13px]">
                    Patient
                  </p>
                </div>
                <div class="text-left w-[300px]">
                  <ReusablesBaseSelect
                    v-model="state.patient"
                    :options="patients"
                    placeholder="Select Patient"
                  />
                </div>
              </div>
              <div class="mb-2 flex justify-center gap-2 items-center">
                <div class="text-right w-[200px]">
                  <p class="font-inter font-medium text-[#474D66] text-[13px]">
                    Treatment
                  </p>
                </div>
                <div class="text-left w-[300px]">
                  <ReusablesBaseSelect
                    v-model="state.treatment"
                    :options="treatments"
                    placeholder="Treatment"
                  />
                </div>
              </div>
              <div class="mb-2 flex justify-center gap-2 items-center">
                <div class="text-right w-[200px]">
                  <p class="font-inter font-medium text-[#474D66] text-[13px]">
                    Speciality Doctor
                  </p>
                </div>
                <div class="text-left w-[300px]">
                  <ReusablesBaseSelect
                    v-model="state.doctor"
                    :options="doctors"
                    placeholder="Select Doctor"
                  />
                </div>
              </div>
              <div class="mb-2 flex justify-center gap-2 items-center">
                <div class="text-right w-[200px]">
                  <p class="font-inter font-medium text-[#474D66] text-[13px]">
                    Date
                  </p>
                </div>
                <div class="text-left w-[300px]">
                  <ReusablesBaseInput
                    v-model="state.date"
                    type="date"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
              </div>
            </div>
            <div class="px-10">
              <p class="text-lg font-medium text-[#559AFF] mb-5">
                Available Slots
              </p>

              <div class="mb-5">
                <div class="grid grid-cols-4 items-center gap-3 mt-2">
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Google"
                      name="Google"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      09:00am</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Facebook"
                      name="Facebook"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      09:30am</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Instagram"
                      name="Instagram"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      10:00am</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="LinkedIn"
                      name="LinkedIn"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                      >11:30am</span
                    > </label
                  ><label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Corporate Wellness"
                      name="Corporate Wellness"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      04:00pm</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Flyer"
                      name="Flyer"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      06:00pm</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Newspaper"
                      name="Newspaper"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      06:30pm</span
                    >
                  </label>
                  <label
                    class="flex items-center justify-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Newspaper"
                      name="Newspaper"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[24px] h-[24px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span
                      class="pl-3 font-inter font-medium text-lg text-[#474D66]"
                    >
                      07:30pm</span
                    >
                  </label>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <ReusablesBaseButton
                @click="state.status = 'tab2'"
                label="Submit"
                className="flex justify-center items-center rounded  w-[120px] bg-[#0052CC] px-4 py-2 text-xs font-medium leading-4 text-white"
              />
            </div>
          </div>
          <div v-else class="flex justify-center text-center w-full">
            <div class="text-center">
              <div>
                <Icon
                  name="mdi:checkbox-marked-circle"
                  size="80"
                  class="text-[#1138f7]"
                />
                <p class="font-medium text-lg text-black mb-2">
                  Appointment Booked Successfully!
                </p>
              </div>
              <div
                class="w-[390px] mb-2 border rounded font-inter font-medium text-sm p-3"
              >
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[#474D66] w-[50%] text-left">Patient Name</p>
                  <p class="text-[#202020] w-[50%] text-right">
                    Raj Kumar Singh
                  </p>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[#474D66] w-[50%] text-left">
                    Chief Complaint
                  </p>
                  <p class="text-[#202020] w-[50%] text-right">
                    Vikash Kumar Singh
                  </p>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[#474D66] w-[50%] text-left">Doctor Name</p>
                  <p class="text-[#202020] w-[50%] text-right">
                    Dr. Ramkumar Rastogi
                  </p>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[#474D66] w-[50%] text-left">Date</p>
                  <p class="text-[#202020] w-[50%] text-right">01/12/2023</p>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <p class="text-[#474D66] w-[50%] text-left">Slots</p>
                  <p class="text-[#202020] w-[50%] text-right">06:30pm</p>
                </div>
              </div>
              <div class="flex justify-center items-center">
                <ReusablesBaseButton
                  @click="state.status = ''"
                  label="Close"
                  className="flex justify-center items-center rounded  w-[120px] bg-[#0052CC] px-4 py-2 text-xs font-medium leading-4 text-white"
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

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const patients = ["Ramesh Kumar"];
const complaint_issues = ["Tooth Removal"];
const doctors = ["Dr. Molar Byte"];
const treatment = ["Dr. Molar Byte"];

const changeTab = (val: string) => {
  state.tab = val;
};

// Form inputs
const state = reactive<{
  tab: string;
  patient: string;
  complaint_issue: string;
  doctor: string;
  date: string;
  notes: string;
  treatment: string;
  status: string;
}>({
  tab: "chief-complaint",
  patient: "",
  complaint_issue: "",
  doctor: "",
  date: "",
  notes: "",
  treatment: "",
  status: "",
});
</script>

<style scoped>
.tab-active {
  @apply border-[#3366FF] text-[#3366FF];
}
.tab-inactive {
  @apply border-white text-[#696F8C];
}
</style>