<template>
  <div
    class="flex flex-col justify-center items-center gap-5 text-center mt-[70px] mb-[70px]"
  >
    <div>
      <div class="text-white font-light text-sm">Signup</div>
      <h1 class="text-center font-medium text-2xl text-white">Select Plan</h1>
    </div>
    <div class="flex gap-4 items-center text-center">
      <div
        class="flex justify-center items-center max-w-xs h-[266px] w-[300px] rounded overflow-hidden shadow-lg p-4 rounded-xl bg-white"
      >
        <div>
          <p
            class="text-[#0052CC] font-medium text-[24px] font-[500] leading-7"
          >
            Professional
          </p>
          <p class="text-[#787878] text-sm font-normal text-[14px] leading-4">
            Best for small teams
          </p>
          <div class="my-1 flex items-center justify-center text-[#0052CC]">
            <span class="font-medium text-[32px] font-inter leading-9">₹</span>
            <span class="font-medium text-[64px] leading-[75px]">100</span>
          </div>
          <p
            class="text-[#787878] font-inter font-semibold text-xs text-[12px] leading-4"
          >
            PER MEMBER PER MONTH
          </p>
          <ReusablesBaseButton
            @click="$router.push('/signup/organisation-admin-details')"
            label="GET STARTED"
            className="bg-[#3366FF] text-xl font-medium text-white py-2 mt-3 px-4 rounded-xl w-[256px] h-[57.5px] leading-7"
          />
        </div>
      </div>
      <div
        class="flex justify-center items-center max-w-xs h-[266px] w-[300px] rounded overflow-hidden shadow-lg p-4 rounded-xl bg-white"
      >
        <div class="">
          <p
            class="text-[#7B61FF] font-medium text-[24px] font-[500] leading-7"
          >
            Premium
          </p>
          <p class="text-[#787878] text-sm font-normal text-[14px] leading-4">
            Best for many large teams
          </p>
          <div class="my-1 flex items-center justify-center text-[#7B61FF]">
            <span class="font-medium text-[32px] font-inter leading-9">₹</span>
            <span class="font-medium text-[64px] leading-[75px]">1000</span>
          </div>
          <p
            class="text-[#787878] font-inter font-semibold text-xs text-[12px] leading-4"
          >
            PER MEMBER PER MONTH
          </p>
          <ReusablesBaseButton
            @click="$router.push('/signup/organisation-admin-details')"
            label="GET STARTED"
            className="bg-[#7B61FF] text-xl font-medium text-white py-2 mt-3 px-4 rounded-xl w-[256px] h-[57.5px] leading-7"
          />
        </div>
      </div>
    </div>
    <div class="lg:container mx-auto">
      <div class="w-full">
        <button
          class="relative flex items-center mx-auto w-56 justify-between bg-[#FFFFFF] hover:bg-white-100 text-[#696F8C] text-[15.5px] font-[500] py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="toggleDropdown"
        >
          <span>Complete Feature List</span>
          <svg
            class="fill-current h-4 w-4 ml-2 absolute top-[10px] right-[15px]"
            :class="{ 'rotate-180 top-[14px]': dropdownOpen }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15.5l-5-5h10z" />
          </svg>
        </button>
        <!-- v-if="dropdownOpen" -->
        <div
          :class="dropdownOpen ? 'd-block' : 'd-none'"
          class="mt-2 w-full mx-auto z-10 pb-10"
          @click="closeDropdown"
        >
          <div>
            <div
              class="table w-full border-0 table-auto bg-white mt-5 rounded-xl"
            >
              <thead
                ref="sticky1"
                :class="{ 'fixed lg:container mx-auto table': isSticky1 }"
                class="w-full sticky-element-1"
              >
                <tr class="py-3 b-shadow rounded-xl w-full">
                  <th class="px-10 py-2">
                    <div class="text-left flex justify-normal items-center">
                      <Icon
                        name="mdi:arrow-up-bold-circle"
                        class="w-[51px] h-[51px] text-[#0052CC]"
                      />
                      <h2 class="text-[#0052CC] text-[24px] font-[500] pl-5">
                        CLINIC WEBAPP
                      </h2>
                    </div>
                  </th>
                  <th class="px-4 py-2 w-[20%]">
                    <div class="flex flex-col items-center justify-center my-3">
                      <h2 class="text-[#0052CC] text-[24px] font-[500]">
                        Professional
                      </h2>
                      <button
                        class="bg-[#0052CC] hover:bg-blue-700 text-white font-bold px-4 mt-2 rounded w-[128px] h-[32px] text-[14px] font-[500]"
                      >
                        GET STARTED
                      </button>
                    </div>
                  </th>
                  <th class="px-4 py-2 w-[20%]">
                    <div class="flex flex-col my-3 items-center justify-center">
                      <h2 class="text-[#7B61FF] text-[24px] font-[500]">
                        Premium
                      </h2>
                      <button
                        class="bg-[#7B61FF] hover:bg-purple-700 text-white font-bold mt-2 px-4 rounded w-[128px] h-[32px] text-[14px] font-[500]"
                      >
                        GET STARTED
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="border-b">
                <tr
                  v-for="(clinic_webapp, index) in clinic_webapps"
                  :key="index"
                  class="h-[64px] text-[16px] font-[500] text-[#000000]"
                  :class="index % 2 == 0 ? `bg-[#F3F6FF]` : `bg-white`"
                >
                  <td class="px-10 py-2 text-left">
                    {{ clinic_webapp.title }}
                  </td>
                  <td class="px-4 py-2 w-[20%]">
                    <div class="flex justify-center">
                      <span v-if="!clinic_webapp.professional_text_status">
                        <Icon
                          v-if="clinic_webapp.professional"
                          size="22"
                          name="mdi:check-circle"
                          class="icon-style bg-green-600 mdi mdi-close"
                        />
                        <Icon
                          v-else
                          name="mdi:close-circle"
                          class="icon-style bg-red-600 mdi mdi-close"
                        />
                      </span>
                      <span v-else>
                        {{ clinic_webapp.professional_text }}
                      </span>
                    </div>
                  </td>
                  <td class="px-4 py-2 w-[20%]">
                    <div class="flex justify-center">
                      <span v-if="!clinic_webapp.premium_text_status">
                        <Icon
                          v-if="clinic_webapp.premium"
                          size="22"
                          name="mdi:check-circle"
                          class="icon-style bg-green-600 mdi mdi-close"
                        />
                        <Icon
                          v-else
                          name="mdi:close-circle"
                          class="icon-style bg-red-600 mdi mdi-close"
                        />
                      </span>
                      <span v-else>
                        {{ clinic_webapp.premium_text }}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
          <div>
            <div
              class="table w-full border-0 table-auto bg-white mt-5 rounded-xl"
            >
              <thead
                ref="sticky2"
                :class="{ 'fixed lg:container mx-auto table': isSticky2 }"
                class="w-full sticky-element-2"
              >
                <tr class="py-3 b-shadow rounded-xl w-full">
                  <th class="px-10 py-2">
                    <div class="text-left flex justify-normal items-center">
                      <Icon
                        name="mdi:arrow-up-bold-circle"
                        class="w-[51px] h-[51px] text-[#0052CC]"
                      />
                      <h2 class="text-[#0052CC] text-[24px] font-[500] pl-5">
                        PATIENT WEBAPP
                      </h2>
                    </div>
                  </th>
                  <th class="px-4 py-2 w-[20%]">
                    <div class="flex flex-col items-center justify-center my-3">
                      <h2 class="text-[#0052CC] text-[24px] font-[500]">
                        Professional
                      </h2>
                      <button
                        class="bg-[#0052CC] hover:bg-blue-700 text-white font-bold px-4 mt-2 rounded w-[128px] h-[32px] text-[14px] font-[500]"
                      >
                        GET STARTED
                      </button>
                    </div>
                  </th>
                  <th class="px-4 py-2 w-[20%]">
                    <div class="flex flex-col my-3 items-center justify-center">
                      <h2 class="text-[#7B61FF] text-[24px] font-[500]">
                        Premium
                      </h2>
                      <button
                        class="bg-[#7B61FF] hover:bg-purple-700 text-white font-bold mt-2 px-4 rounded w-[128px] h-[32px] text-[14px] font-[500]"
                      >
                        GET STARTED
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="border-b">
                <tr
                  v-for="(patient_webapp, index) in patient_webapps"
                  :key="index"
                  class="h-[64px] text-[16px] font-[500] text-[#000000]"
                  :class="index % 2 == 0 ? `bg-[#F3F6FF]` : `bg-white`"
                >
                  <td class="px-10 py-2 text-left">
                    {{ patient_webapp.title }}
                  </td>
                  <td class="px-4 py-2 w-[20%]">
                    <div class="flex justify-center">
                      <span v-if="!patient_webapp.professional_text_status">
                        <Icon
                          v-if="patient_webapp.professional"
                          size="22"
                          name="mdi:check-circle"
                          class="icon-style bg-green-600 mdi mdi-close"
                        />
                        <Icon
                          v-else
                          name="mdi:close-circle"
                          class="icon-style bg-red-600 mdi mdi-close"
                        />
                      </span>
                      <span v-else>
                        {{ patient_webapp.professional_text }}
                      </span>
                    </div>
                  </td>
                  <td class="px-4 py-2 w-[20%]">
                    <div class="flex justify-center">
                      <span v-if="!patient_webapp.premium_text_status">
                        <Icon
                          v-if="patient_webapp.premium"
                          size="22"
                          name="mdi:check-circle"
                          class="icon-style bg-green-600 mdi mdi-close"
                        />
                        <Icon
                          v-else
                          name="mdi:close-circle"
                          class="icon-style bg-red-600 mdi mdi-close"
                        />
                      </span>
                      <span v-else>
                        {{ patient_webapp.premium_text }}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
          <div>
            <div
              class="table w-full border-0 table-auto bg-white mt-5 rounded-xl"
            >
              <thead
                ref="sticky3"
                :class="{ 'fixed lg:container mx-auto table': isSticky3 }"
                class="w-full sticky-element-3"
              >
                <tr class="py-3 b-shadow rounded-xl w-full">
                  <th class="px-10 py-2">
                    <div class="text-left flex justify-normal items-center">
                      <Icon
                        name="mdi:arrow-up-bold-circle"
                        class="w-[51px] h-[51px] text-[#0052CC]"
                      />
                      <h2 class="text-[#0052CC] text-[24px] font-[500] pl-5">
                        CONSULTANT WEBAPP
                      </h2>
                    </div>
                  </th>
                  <th class="px-4 py-2 w-[20%]">
                    <div class="flex flex-col items-center justify-center my-3">
                      <h2 class="text-[#0052CC] text-[24px] font-[500]">
                        Professional
                      </h2>
                      <button
                        class="bg-[#0052CC] hover:bg-blue-700 text-white font-bold px-4 mt-2 rounded w-[128px] h-[32px] text-[14px] font-[500]"
                      >
                        GET STARTED
                      </button>
                    </div>
                  </th>
                  <th class="px-4 py-2 w-[20%]">
                    <div class="flex flex-col my-3 items-center justify-center">
                      <h2 class="text-[#7B61FF] text-[24px] font-[500]">
                        Premium
                      </h2>
                      <button
                        class="bg-[#7B61FF] hover:bg-purple-700 text-white font-bold mt-2 px-4 rounded w-[128px] h-[32px] text-[14px] font-[500]"
                      >
                        GET STARTED
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(consultant_webapp, index) in consultant_webapps"
                  :key="index"
                  class="h-[64px] text-[16px] font-[500] text-[#000000]"
                  :class="index % 2 == 0 ? `bg-[#F3F6FF]` : `bg-white`"
                >
                  <td class="px-10 py-2 text-left">
                    {{ consultant_webapp.title }}
                  </td>
                  <td class="px-4 py-2 w-[20%]">
                    <div class="flex justify-center">
                      <span v-if="!consultant_webapp.professional_text_status">
                        <Icon
                          v-if="consultant_webapp.professional"
                          size="22"
                          name="mdi:check-circle"
                          class="icon-style bg-green-600 mdi mdi-close"
                        />
                        <Icon
                          v-else
                          name="mdi:close-circle"
                          class="icon-style bg-red-600 mdi mdi-close"
                        />
                      </span>
                      <span v-else>
                        {{ consultant_webapp.professional_text }}
                      </span>
                    </div>
                  </td>
                  <td class="px-4 py-2 w-[20%]">
                    <div class="flex justify-center">
                      <span v-if="!consultant_webapp.premium_text_status">
                        <Icon
                          v-if="consultant_webapp.premium"
                          size="22"
                          name="mdi:check-circle"
                          class="icon-style bg-green-600 mdi mdi-close"
                        />
                        <Icon
                          v-else
                          name="mdi:close-circle"
                          class="icon-style bg-red-600 mdi mdi-close"
                        />
                      </span>
                      <span v-else>
                        {{ consultant_webapp.premium_text }}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="inline-flex items-center justify-center w-full mb-5">
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-white rounded-full mx-2"></div>
      <div class="w-[13px] h-[13px] bg-[#8BBAFF] rounded-full mx-2"></div>
    </div>
  </div>
</template>

<script setup>
const dropdownOpen = ref(false);

import { ref, onMounted, onBeforeUnmount } from "vue";
// State variables to manage sticky status
const isSticky1 = ref(false);
const isSticky2 = ref(false);
const isSticky3 = ref(false);
const stickyElements = ref([]);

// Function to handle scroll event
const handleScroll = () => {
  const scrollY = window.scrollY;

  // Get the offset of each sticky element
  const stickyOffsets = stickyElements.value.map((el) => el.offsetTop);
  console.log("stickyOffsets : ", stickyOffsets);
  console.log("scrollY : ", scrollY);

  // Check if the scroll position has reached each sticky element's offset
  if (scrollY > stickyOffsets[0] && scrollY < stickyOffsets[1]) {
    isSticky1.value = true;
    isSticky2.value = false;
    isSticky3.value = false;
  } else if (scrollY > stickyOffsets[1] && scrollY < stickyOffsets[2]) {
    isSticky1.value = false;
    isSticky2.value = true;
    isSticky3.value = false;
  } else if (scrollY > stickyOffsets[2]) {
    isSticky1.value = false;
    isSticky2.value = false;
    isSticky3.value = true;
  } else {
    isSticky1.value = false;
    isSticky2.value = false;
    isSticky3.value = false;
  }
  if (scrollY < stickyOffsets[0]) {
    isSticky1.value = false;
    isSticky2.value = false;
    isSticky3.value = false;
  }
};

// Lifecycle hooks to add/remove the scroll event listener
onMounted(() => {
  // Get references to the sticky elements
  stickyElements.value = [
    document.querySelector(".sticky-element-1"),
    document.querySelector(".sticky-element-2"),
    document.querySelector(".sticky-element-3"),
  ];

  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
const closeDropdown = () => {
  dropdownOpen.value = false;
};
const clinic_webapps = [
  {
    title: "Dashboard Practice Level (Basic Reporting)",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Dashboard Position level (Advanced Analytics based insights)",
    professional: false,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Digital Health History Form",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Advanced Practice Management System with Indepth Diagnosis,...",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Dental Charting",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Prescription",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Appointment scheduling, Calendar view",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Appointment Pre-Payment controls",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Appointment scheduling based on Doctor & Chair availability",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "X-rays and Photos storage",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "EMR Storage & Access",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Storage & Access",
    professional: false,
    premium: false,
    professional_text_status: true,
    professional_text: "Upto 1TB",
    premium_text_status: true,
    premium_text: "Upto 1TB",
  },
  {
    title: "Dynamic Pricing options for doctors based on seniority",
    professional: false,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Stock Management",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Lab Tracking",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Treatment History Tracking",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Organized Billing with Freedom Dental codes",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Number of Clinics",
    professional: false,
    premium: false,
    professional_text_status: true,
    professional_text: "1",
    premium_text_status: true,
    premium_text: "<5",
  },
  {
    title: "Clinic Visibility on MB portal",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title:
      "Virtual Group Practice (Case Reviews by Specialists) No of specialists allowed",
    professional: false,
    premium: false,
    professional_text_status: true,
    professional_text: "1+6",
    premium_text_status: true,
    premium_text: "Unlimited",
  },
  {
    title: "Expert Opinion with Mentoring (No of Mentors allowed)",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Welleness Module",
    professional: false,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Basic Reporting",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Advanced Reporting with Analytics",
    professional: false,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Payment Gateway (Razorpay) to accept patient payments",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Razorpay Payment Gateway Integration for payout to vendors",
    professional: false,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Doctor / Conultant Login via Mobile",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "SMS & Email Notifications",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Finance Modules for Easy EMIs (Finzy / Zest Money)",
    professional: false,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Tele - Consultation",
    professional: false,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Video Consultation",
    professional: false,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "HIPPA Level Security",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Basic Accounting & Monthly MIS",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "HR Management Module Integration",
    professional: false,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Accouting Module Integration",
    professional: false,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
];
const patient_webapps = [
  {
    title: "Access for patients to Tx proposal & Billing",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Schedule appoitnments",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Severity / Priority based listing of treatments",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Payments via Patient App",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Self Scan feature for immediate diagnosis",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Schedule Appointment for Family & Friends",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "EMR Storage & Access",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "SMS & Email Notifications",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
];
const consultant_webapps = [
  {
    title: "Daily / Weekly Appointment Schedule Viewer",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "View Patient EMR (X Rays and intra oral photos)",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Tx Planner & Proposal",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Case Reviews",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "SMS & Email Notifications",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Multi Clinic View",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Integration with Google - Distance & Time to travel indicator",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Track patients at each clinic separately",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Revenue tracking with ability to raise invoices",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Procurement of consumables - (Raise PO to vendor)",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Stock Management",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Expert Opinion from Mentors",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
  {
    title: "Stock Management",
    professional: false,
    premium: false,
    professional_text_status: true,
    professional_text: "3",
    premium_text_status: true,
    premium_text: "3",
  },
  {
    title: "EMR Storage & Access",
    professional: true,
    premium: true,
    professional_text_status: false,
    professional_text: "",
    premium_text_status: false,
    premium_text: "",
  },
];
</script>

<style scoped>
.hr-color {
  background-color: #0052cc;
}
.l-min-width {
  min-width: 376px;
}
.l-f-s {
  font-size: 16px;
}
.t-f-s {
  font-size: 14px;
}
.lmy-30 {
  margin: 30px 0px 30px 0px;
}
.b-next {
  min-width: 120px;
}
.b-shadow {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.sticky-element {
  width: 90%;
}

.fixed {
  position: fixed;
  top: 0;
  right: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: white; /* Change background color when sticky */
}

.d-none {
  display: none;
}
.d-block {
  display: block;
}
</style>
