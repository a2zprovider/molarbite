<template>
  <div class="p-9">
    <div
      class="relative overflow-x-auto border-[2px] border-[#0052CC] rounded-xl"
    >
      <table
        class="w-full border-collapse border-spacing-[25px] text-base font-medium leading-6 rounded-xl text-left"
      >
        <thead class="bg-[#0052CC]">
          <tr>
            <th
              scope="col"
              colSpan="3"
              class="px-6 py-3 font-medium text-lg lending-5 text-white"
            >
              Patient Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border-[#0052CC]">
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>First Name</p>
                <p class="text-[#0052CC]">Mr. Doctor Dental</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Middle Name</p>
                <p class="text-[#0052CC]">Mr. Doctor Dental</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4">
              <div class="flex justify-between items-center">
                <p>Last Name</p>
                <p class="text-[#0052CC]">Mr. Doctor Dental</p>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Email</p>
                <p class="text-[#0052CC]">doctor@molarbyte.com</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Mobile Number</p>
                <p class="text-[#0052CC]">+91 99999 99999</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4">
              <div class="flex justify-between items-center">
                <p>Alt Mobile Number</p>
                <p class="text-[#0052CC]">+91 99999 99999</p>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Gender</p>
                <p class="text-[#0052CC]">Male</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Preferred Language</p>
                <p class="text-[#0052CC]">English</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4">
              <div class="flex justify-between items-center">
                <p>Date of Birth</p>
                <p class="text-[#0052CC]">01-01-1990</p>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Pincode</p>
                <p class="text-[#0052CC]">560098</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Employer</p>
                <p class="text-[#0052CC]">Employer</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4">
              <div class="flex justify-between items-center">
                <p>Occupation</p>
                <p class="text-[#0052CC]">Occupation</p>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3"
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>Preferred Mode of Communication</p>
                <div class="flex items-center gap-3">
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="sms"
                      name="sms"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> SMS</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="phone"
                      name="phone"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Phone Call</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="email"
                      name="email"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Email</span>
                  </label>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <thead class="bg-[#0052CC]">
          <tr>
            <th
              scope="col"
              colSpan="3"
              class="px-6 py-3 font-medium text-lg lending-5 text-white"
            >
              Family Member
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border-[#0052CC]">
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Name</p>
                <p class="text-[#0052CC]">Mr. Doctor Dental</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Relationship</p>
                <p class="text-[#0052CC]">Brother</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4">
              <div class="flex justify-between items-center">
                <p>Mobile Number</p>
                <p class="text-[#0052CC]">+91 99999 99999</p>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Email</p>
                <p class="text-[#0052CC]">doctor@molarbyte.com</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Seen by us?</p>
                <p class="text-[#0052CC]">Yes</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4">
              <div class="flex justify-between items-center">
                <p>Referred by?</p>
                <p class="text-[#0052CC]">Mr. Raju Kumar</p>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3"
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>How did you get to know about us?</p>
                <div class="flex items-center gap-3">
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Google"
                      name="Google"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Google</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Facebook"
                      name="Facebook"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Facebook</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Instagram"
                      name="Instagram"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Instagram</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="LinkedIn"
                      name="LinkedIn"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      LinkedIn</span
                    > </label
                  ><label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Corporate Wellness"
                      name="Corporate Wellness"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Corporate Wellness</span
                    >
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Flyer"
                      name="Flyer"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Flyer</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Newspaper"
                      name="Newspaper"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Newspaper</span>
                  </label>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <thead class="bg-[#0052CC]">
          <tr>
            <th
              scope="col"
              colSpan="3"
              class="px-6 py-3 font-medium text-lg lending-5 text-white"
            >
              Dental History
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3"
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>When was your last dental visit?</p>
                <div class="flex items-center gap-3">
                  <div>
                    <ReusablesBaseRadio
                      id="age"
                      label="<6 Months"
                      v-model="state.visit_time"
                      class="peer"
                      type="radio"
                      name="<6 Months"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `<6 Months` }}</label
                    >
                  </div>
                  <div>
                    <ReusablesBaseRadio
                      id="age"
                      label="6-12 Months"
                      v-model="state.visit_time"
                      class="peer"
                      type="radio"
                      name="6-12 Months"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `6-12 Months` }}</label
                    >
                  </div>
                  <div>
                    <ReusablesBaseRadio
                      id="age"
                      label="12+ Months"
                      v-model="state.visit_time"
                      class="peer"
                      type="radio"
                      name="12+ Months"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `12+ Months` }}</label
                    >
                  </div>
                  <div>
                    <ReusablesBaseRadio
                      id="age"
                      label="Never"
                      v-model="state.visit_time"
                      class="peer"
                      type="radio"
                      name="Never"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `Never` }}</label
                    >
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3"
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>Did you experience any of the following?</p>
                <div class="flex items-center gap-3">
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Tooth Pain"
                      name="Tooth Pain"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Tooth Pain</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Bleeding Gums"
                      name="Bleeding Gums"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Bleeding Gums</span
                    >
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Sensitive Teeth"
                      name="Sensitive Teeth"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Sensitive Teeth</span
                    >
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Loose Tooth/ Teeth"
                      name="Loose Tooth/ Teeth"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Loose Tooth/ Teeth</span
                    >
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Crowded Teeth"
                      name="Crowded Teeth"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Crowded Teeth</span
                    >
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Others"
                      name="Others"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Others</span>
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3"
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>Rate your dental fear</p>
                <div class="flex items-center gap-3">
                  <div>
                    <ReusablesBaseRadio
                      id="age"
                      label="Mild"
                      v-model="state.fear"
                      class="peer"
                      type="radio"
                      name="Mild"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `Mild` }}</label
                    >
                  </div>
                  <div>
                    <ReusablesBaseRadio
                      id="age"
                      label="Moderate"
                      v-model="state.fear"
                      class="peer"
                      type="radio"
                      name="Moderate"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `Moderate` }}</label
                    >
                  </div>
                  <div>
                    <ReusablesBaseRadio
                      id="age"
                      label="Severe"
                      v-model="state.fear"
                      class="peer"
                      type="radio"
                      name="Severe"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `Severe` }}</label
                    >
                  </div>
                  <div>
                    <ReusablesBaseRadio
                      id="age"
                      label="None"
                      v-model="state.fear"
                      class="peer"
                      type="radio"
                      name="None"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `None` }}</label
                    >
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3"
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>What is the reason for today’s visit?</p>
                <div class="flex items-center gap-3">
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Emergency Visit"
                      name="Emergency Visit"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Emergency Visit</span
                    >
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Complete Check"
                      name="Complete Check"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Complete Check</span
                    >
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Second Opinion"
                      name="Second Opinion"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Second Opinion</span
                    >
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Dental Implant Consult"
                      name="Dental Implant Consult"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Dental Implant Consult</span
                    >
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Braces Consult"
                      name="Braces Consult"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Braces Consult</span
                    >
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Cosmetic Consult"
                      name="Cosmetic Consult"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Cosmetic Consult</span
                    >
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Others"
                      name="Others"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Others</span>
                  </label>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <thead class="bg-[#0052CC]">
          <tr>
            <th
              scope="col"
              colSpan="3"
              class="px-6 py-3 font-medium text-lg lending-5 text-white"
            >
              Emergency Contact Number
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border-[#0052CC]">
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Name</p>
                <p class="text-[#0052CC]">Mr. Doctor Dental</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4 border-r border-[#0052CC]">
              <div class="flex justify-between items-center">
                <p>Relationship</p>
                <p class="text-[#0052CC]">Brother</p>
              </div>
            </td>
            <td scope="row" class="px-6 py-4">
              <div class="flex justify-between items-center">
                <p>Mobile Number</p>
                <p class="text-[#0052CC]">+91 99999 99999</p>
              </div>
            </td>
          </tr>
        </tbody>
        <thead class="bg-[#0052CC]">
          <tr>
            <th
              scope="col"
              colSpan="3"
              class="px-6 py-3 font-medium text-lg lending-5 text-white"
            >
              Medical History
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3"
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>What is your current health like?</p>
                <div class="flex items-center gap-3">
                  <div>
                    <ReusablesBaseRadio
                      id="health"
                      label="Good"
                      v-model="state.health"
                      class="peer"
                      type="radio"
                      name="Good"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `Good` }}</label
                    >
                  </div>
                  <div>
                    <ReusablesBaseRadio
                      id="health"
                      label="Fair"
                      v-model="state.health"
                      class="peer"
                      type="radio"
                      name="Fair"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `Fair` }}</label
                    >
                  </div>
                  <div>
                    <ReusablesBaseRadio
                      id="health"
                      label="Poor"
                      v-model="state.health"
                      class="peer"
                      type="radio"
                      name="Poor"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `Poor` }}</label
                    >
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3" 
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>What are your current medical conditions?</p>
                <div class="grid grid-cols-6 items-center gap-3">
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="High BP"
                      name="High BP"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> High BP</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Diabetes"
                      name="Diabetes"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Diabetes</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Heart disease"
                      name="Heart disease"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Heart disease</span
                    >
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Blood Disorder"
                      name="Blood Disorder"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Blood Disorder</span
                    >
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Artificial Joints/Valves"
                      name="Artificial Joints/Valves"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Artificial Joints/Valves</span
                    >
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Asthma"
                      name="Asthma"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Asthma</span>
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Hepatitis"
                      name="Hepatitis"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Hepatitis</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Cancer"
                      name="Cancer"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Cancer</span>
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Sinus Problem"
                      name="Sinus Problem"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Sinus Problem</span
                    >
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Thyroid"
                      name="Thyroid"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Thyroid</span>
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Others"
                      name="Others"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Others</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="None"
                      name="None"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> None</span>
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3"
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>List of Current Medication</p>
                <div></div>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3"
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>What allergies do you have?</p>
                <div class="flex items-center gap-3">
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Penicillin"
                      name="Penicillin"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Penicillin</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Sulfa"
                      name="Sulfa"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Sulfa</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Latex"
                      name="Latex"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Latex</span>
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Asprin"
                      name="Asprin"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Asprin</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Others"
                      name="Others"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Others</span>
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3"
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>Do you smoke or consume alcohol?</p>
                <div class="flex items-center gap-3">
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Only Smoke"
                      name="Only Smoke"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Only Smoke</span>
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Only Drink Alcohol"
                      name="Only Drink Alcohol"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]">
                      Only Drink Alcohol</span
                    >
                  </label>
                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Both"
                      name="Both"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Both</span>
                  </label>

                  <label
                    class="flex items-center text-sm font-inter font-normal leading-5 text-[#474D66]"
                  >
                    <input
                      id="Neither"
                      name="Neither"
                      type="checkbox"
                      class="rounded border-[1px] border-[#C1C4D6] w-[16px] h-[16px] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                    />
                    <span class="pl-3 text-sm text-[#474D66]"> Neither</span>
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-[#0052CC]">
            <td
              scope="row"
              colSpan="3"
              class="px-6 py-4 border-r border-[#0052CC]"
            >
              <div class="flex items-center gap-10">
                <p>Are you pregnant?</p>
                <div class="flex items-center gap-3">
                  <div>
                    <ReusablesBaseRadio
                      id="pregnant"
                      label="Yes"
                      v-model="state.pregnant"
                      class="peer"
                      type="radio"
                      name="Yes"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `Yes` }}</label
                    >
                  </div>
                  <div>
                    <ReusablesBaseRadio
                      id="pregnant"
                      label="No"
                      v-model="state.pregnant"
                      class="peer"
                      type="radio"
                      name="No"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `No` }}</label
                    >
                  </div>
                  <div>
                    <ReusablesBaseRadio
                      id="pregnant"
                      label="Not Applicable"
                      v-model="state.pregnant"
                      class="peer"
                      type="radio"
                      name="Not Applicable"
                    />
                    <label
                      for="male"
                      class="ml-2 font-inter text-base font-medium text-[#474D66]"
                      >{{ `Not Applicable` }}</label
                    >
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex justify-center items-center gap-10 mt-4">
      <ReusablesBaseButton
        @click="$router.push('/dashboard/doctor/patient/details')"
        label="Go Back"
        iconClass="text-white"
        icon-left="arrow-left"
        :left-size="12"
        className="flex justify-center items-center rounded bg-[#3366FF] px-4 py-2 text-xs font-medium leading-4 text-white"
      />
      <ReusablesBaseButton
        label="Print"
        iconClass="text-[#696F8C]"
        icon-left="printer"
        :left-size="12"
        className="flex justify-center items-center rounded bg-white px-4 py-2 text-xs font-medium leading-4 text-[#696F8C] border-[1px] border-[#828282]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const closeModal = () => {
  state.isVisible = !state.isVisible;
};

// Form inputs
const state = reactive<{
  isVisible: boolean;
}>({
  isVisible: false,
});
</script>

<style scoped></style>