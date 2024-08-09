<template>
  <div class="flex flex-col justify-center items-center gap-5 text-center">
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
          class="flex items-center mx-auto w-56 justify-between bg-[#FFFFFF] hover:bg-white-100 text-[#696F8C] text-[15.5px] font-[500] py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="toggleDropdown"
        >
          <span>Complete Feature List</span>
          <svg
            class="fill-current h-4 w-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              :class="{ 'rotate-180': dropdownOpen }"
              d="M10 15.5l-5-5h10z"
            />
          </svg>
        </button>
        <div
          v-if="dropdownOpen"
          class="mt-2 w-full mx-auto overflow-hidden z-10 pb-10"
          @click="closeDropdown"
        >
          <table class="w-full border-0 table-auto bg-white mt-5 rounded-xl">
            <thead>
              <tr class="py-3 b-shadow rounded-xl">
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
                <th class="px-4 py-2">
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
                <th class="px-4 py-2">
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
                <td class="px-4 py-2">
                  <div class="flex justify-center">
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
                  </div>
                </td>
                <td class="px-4 py-2">
                  <div class="flex justify-center">
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
                  </div>
                </td>
              </tr>
            </tbody>
            <thead>
              <tr class="py-3 b-shadow rounded-xl">
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
                <th class="px-4 py-2">
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
                <th class="px-4 py-2">
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
                <td class="px-4 py-2">
                  <div class="flex justify-center">
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
                  </div>
                </td>
                <td class="px-4 py-2">
                  <div class="flex justify-center">
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
                  </div>
                </td>
              </tr>
            </tbody>
            <thead>
              <tr class="py-3 b-shadow rounded-xl">
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
                <th class="px-4 py-2">
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
                <th class="px-4 py-2">
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
                <td class="px-4 py-2">
                  <div class="flex justify-center">
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
                  </div>
                </td>
                <td class="px-4 py-2">
                  <div class="flex justify-center">
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
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const dropdownOpen = ref(false);
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
  },
  {
    title: "Dashboard Position level (Advanced Analytics based insights)",
    professional: false,
    premium: true,
  },
  {
    title: "Digital Health History Form",
    professional: true,
    premium: true,
  },
  {
    title: "Advanced Practice Management System with Indepth Diagnosis,...",
    professional: true,
    premium: true,
  },
  {
    title: "Dental Charting",
    professional: true,
    premium: true,
  },
  {
    title: "Prescription",
    professional: true,
    premium: true,
  },
  {
    title: "Appointment scheduling, Calendar view",
    professional: true,
    premium: true,
  },
  {
    title: "Appointment Pre-Payment controls",
    professional: true,
    premium: true,
  },
  {
    title: "Appointment scheduling based on Doctor & Chair availability",
    professional: true,
    premium: true,
  },
  {
    title: "X-rays and Photos storage",
    professional: true,
    premium: true,
  },
  {
    title: "EMR Storage & Access",
    professional: true,
    premium: true,
  },
  {
    title: "Storage & Access",
    professional: true,
    premium: true,
  },
  {
    title: "Dynamic Pricing options for doctors based on seniority",
    professional: false,
    premium: true,
  },
  {
    title: "Stock Management",
    professional: true,
    premium: true,
  },
  {
    title: "Lab Tracking",
    professional: true,
    premium: true,
  },
  {
    title: "Treatment History Tracking",
    professional: true,
    premium: true,
  },
  {
    title: "Organized Billing with Freedom Dental codes",
    professional: true,
    premium: true,
  },
  {
    title: "Number of Clinics",
    professional: true,
    premium: true,
  },
  {
    title: "Clinic Visibility on MB portal",
    professional: true,
    premium: true,
  },
  {
    title:
      "Virtual Group Practice (Case Reviews by Specialists) No of specialists allowed",
    professional: true,
    premium: true,
  },
  {
    title: "Expert Opinion with Mentoring (No of Mentors allowed)",
    professional: true,
    premium: true,
  },
  {
    title: "Welleness Module",
    professional: false,
    premium: true,
  },
  {
    title: "Basic Reporting",
    professional: true,
    premium: true,
  },
  {
    title: "Advanced Reporting with Analytics",
    professional: false,
    premium: true,
  },
  {
    title: "Payment Gateway (Razorpay) to accept patient payments",
    professional: true,
    premium: true,
  },
  {
    title: "Razorpay Payment Gateway Integration for payout to vendors",
    professional: false,
    premium: true,
  },
  {
    title: "Doctor / Conultant Login via Mobile",
    professional: true,
    premium: true,
  },
  {
    title: "SMS & Email Notifications",
    professional: true,
    premium: true,
  },
  {
    title: "Finance Modules for Easy EMIs (Finzy / Zest Money)",
    professional: false,
    premium: true,
  },
  {
    title: "Tele - Consultation",
    professional: false,
    premium: true,
  },
  {
    title: "Video Consultation",
    professional: false,
    premium: true,
  },
  {
    title: "HIPPA Level Security",
    professional: true,
    premium: true,
  },
  {
    title: "Basic Accounting & Monthly MIS",
    professional: true,
    premium: true,
  },
  {
    title: "HR Management Module Integration",
    professional: false,
    premium: true,
  },
  {
    title: "Accouting Module Integration",
    professional: false,
    premium: true,
  },
];
const patient_webapps = [
  {
    title: "Access for patients to Tx proposal & Billing",
    professional: true,
    premium: true,
  },
  {
    title: "Schedule appoitnments",
    professional: true,
    premium: true,
  },
  {
    title: "Severity / Priority based listing of treatments",
    professional: true,
    premium: true,
  },
  {
    title: "Payments via Patient App",
    professional: true,
    premium: true,
  },
  {
    title: "Self Scan feature for immediate diagnosis",
    professional: true,
    premium: true,
  },
  {
    title: "Schedule Appointment for Family & Friends",
    professional: true,
    premium: true,
  },
  {
    title: "EMR Storage & Access",
    professional: true,
    premium: true,
  },
  {
    title: "SMS & Email Notifications",
    professional: true,
    premium: true,
  },
];
const consultant_webapps = [
  {
    title: "Daily / Weekly Appointment Schedule Viewer",
    professional: true,
    premium: true,
  },
  {
    title: "View Patient EMR (X Rays and intra oral photos)",
    professional: true,
    premium: true,
  },
  {
    title: "Tx Planner & Proposal",
    professional: true,
    premium: true,
  },
  {
    title: "Case Reviews",
    professional: true,
    premium: true,
  },
  {
    title: "SMS & Email Notifications",
    professional: true,
    premium: true,
  },
  {
    title: "Multi Clinic View",
    professional: true,
    premium: true,
  },
  {
    title: "Integration with Google - Distance & Time to travel indicator",
    professional: true,
    premium: true,
  },
  {
    title: "Track patients at each clinic separately",
    professional: true,
    premium: true,
  },
  {
    title: "Revenue tracking with ability to raise invoices",
    professional: true,
    premium: true,
  },
  {
    title: "Procurement of consumables - (Raise PO to vendor)",
    professional: true,
    premium: true,
  },
  {
    title: "Stock Management",
    professional: true,
    premium: true,
  },
  {
    title: "Expert Opinion from Mentors",
    professional: true,
    premium: true,
  },
  {
    title: "Stock Management",
    professional: true,
    premium: true,
  },
  {
    title: "EMR Storage & Access",
    professional: true,
    premium: true,
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
</style>
