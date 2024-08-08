<template>
    <div
      class="flex flex-col justify-normal items-center gap-5 text-center h-screen w-full"
    >
      <div>
        <p class="font-light text-[24px] text-[500] text-[#0052CC] leading-4 pt-4 font-roboto">
            Add Team Member
        </p>
      </div>
      <div
        class="flex flex-col gap-2 items-center text-center bg-white p-4 mt-2 rounded-xl w-[663px]"
      >
        <p class="text-center font-medium text-[#559AFF] text-[18px] leading-7 py-4">
          Details
        </p>
        <div class="font-light w-full text-left text-lg">
          <form class="space-y-6 w-full">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  for="first_name"
                  class="block text-base font-inter font-medium leading-6 text-black"
                  >First Name<span class="text-[#ff0000]">*</span></label
                >
                <div class="mt-2">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    autocomplete="first_name"
                    required
                    placeholder="First Name"
                    class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                  />
                </div>
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-base font-inter font-medium leading-6 text-black"
                  >Last Name<span class="text-[#ff0000]">*</span></label
                >
                <div class="mt-2">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autocomplete="last_name"
                    required
                    placeholder="Last Name"
                    class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  for="first_name"
                  class="block text-base font-inter font-medium leading-6 text-black"
                  >Email ID<span class="text-[#ff0000]">*</span></label
                >
                <div class="mt-2">
                  <input
                    id="email_id"
                    name="email_id"
                    type="text"
                    autocomplete="email_id"
                    required
                    placeholder="Email ID"
                    class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                  >
                </div>
              </div>
              <div>
                <label
                  for="mobile_number"
                  class="block text-base font-inter font-medium leading-6 text-black"
                  >Mobile Number<span class="text-[#ff0000]">*</span></label
                >
                <div class="mt-2">
                  <input
                    id="mobile_number"
                    name="mobile_number"
                    type="text"
                    autocomplete="mobile_number"
                    required
                    placeholder="+91 00000 00000"
                    class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                  >
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  for="dateOfBirth"
                  class="block text-base font-inter font-medium leading-6 text-black"
                  >Date of Birth<span class="text-[#ff0000]">*</span></label
                >
                <div class="mt-2">
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    autocomplete="date"
                    placeholder="DD/MM/YYYY"
                    class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] appearance-none p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                  >
                </div>
              </div>
              <div>
                <label
                  for="gender"
                  class="block text-base font-inter font-medium leading-6 text-black"
                  >Gender<span class="text-[#ff0000]">*</span></label
                >
                <div class="mt-2">
                  <select
                    id="gender"
                    class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 pr-3 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                  >
                    <option selected>Select Gender</option>
                  </select>
                </div>
              </div>
            </div>
  
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  for="reason"
                  class="block text-base font-inter font-medium leading-6 text-black"
                  >Role<span class="text-[#ff0000]">*</span></label
                >
                <div class="mt-2">
                  <select
                    id="role"
                    class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 pr-3 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                  >
                    <option selected>Role</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  for="branch"
                  class="block text-base font-inter font-medium leading-6 text-black"
                  >Branch<span class="text-[#ff0000]">*</span></label
                >
                <div class="mt-2">
                  <select
                    id="branch"
                    class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 pr-3 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                  >
                    <option selected>Branch</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="inline-flex items-center justify-end w-full my-5">
          <button
            type="submit"
            class="flex justify-center items-center rounded bg-[#0052CC] px-3 py-1 font-inter text-sm font-bold leading-6 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
          >
          Submit
          </button>
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
    top: 114px;
    left: 9px;
    height: 104px;
  }
  .second-bar {
    top: 88px;
  }
  </style>
  