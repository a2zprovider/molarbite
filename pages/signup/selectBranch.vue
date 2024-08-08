<template>
    <div
      class="flex flex-col justify-center items-center gap-5 text-center h-screen"
    >
      <div>
        <p class="text-white font-light text-sm text-[#B5CDF0] leading-4">
          Signup
        </p>
        <p class="text-center font-medium text-[24px] text-white leading-7">
          Add Branch
        </p>
      </div>
      <div
        class="flex flex-col gap-2 items-center text-center bg-white p-4 mt-2 rounded-xl md:w-[424px]"
      >
        <div class="font-light w-full text-left text-lg">
          <form class="space-y-6 w-full" action="#" method="POST">
            <div>
              <label
                for="branch_name"
                class="block text-base font-inter font-medium leading-6 text-black"
                >Existing Branch</label
              >
              <div class="mt-2 inline-flex items-center justify-between w-full">
                <div
                  class="inline-flex items-center justify-between w-full p-1.5 px-2 mr-3 text-[#0052cc] bg-white border border-[#0052cc] rounded bg-[#0052cc] border-[#0052cc] text-white"
                >
                  <div class="w-full text-xs font-normal font-inter text-white">
                    Ridgetop Dental - MG Road
                  </div>
                </div>
                <div
                  class="inline-flex justify-start items-center rounded border-[1px] border-[#0052CC] p-1.5 px-2"
                >
                  <Icon
                    name="mdi:pencil"
                    size="14"
                    class="text-[#0052cc] mr-1 font-medium"
                  />
                  <div
                    class="w-full text-xs font-medium text-[#0052CC] font-inter lending-4"
                  >
                    Edit
                  </div>
                </div>
              </div>
            </div>
            <hr class="border-[#BDBDBD]">
            <div>
              <p class="text-sm font-medium text-[#0052CC]">New Branch</p>
              <label
                for="branch_name"
                class="block text-base font-inter font-medium leading-6 text-black"
                >Add Branch<span class="text-[#ff0000]">*</span></label
              >
              <div class="mt-2">
                <input
                  id="branch_name"
                  name="branch_name"
                  type="text"
                  autocomplete="branch_name"
                  required
                  placeholder="Enter Branch Name"
                  class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                >
              </div>
            </div>
            <div>
              <label
                for="branch_address"
                class="block text-base font-inter font-medium leading-6 text-black"
                >Branch Address<span class="text-[#ff0000]">*</span></label
              >
              <div class="mt-2">
                <input
                  id="branch_address"
                  name="branch_address"
                  type="text"
                  autocomplete="branch_address"
                  required
                  placeholder="Address Line 1*"
                  class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                >
              </div>
              <div class="mt-2">
                <input
                  id="branch_address1"
                  name="branch_address1"
                  type="text"
                  autocomplete="branch_address1"
                  placeholder="Address Line 2*"
                  class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                >
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="mt-2">
                  <input
                    id="state"
                    name="state"
                    type="text"
                    autocomplete="state"
                    placeholder="State*"
                    class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                  >
                </div>
                <div class="mt-2">
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    autocomplete="pincode"
                    placeholder="Pincode*"
                    class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                  >
                </div>
              </div>
              <div class="mt-2">
                <input
                  id="map"
                  name="map"
                  type="text"
                  autocomplete="map"
                  placeholder="Google Map Link*"
                  class="block w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2]"
                >
              </div>
            </div>
            <hr class="border-[#BDBDBD]">
            <div
              class="mt-2 inline-flex items-center justify-between w-full p-1.5 px-2 text-[#0052cc] bg-white border border-[#0052cc] rounded cursor-pointer peer-checked:bg-[#01875A] peer-checked:border-[#01875A] peer-checked:text-white"
            >
              <div class="inline-flex justify-start items-center w-full">
                <Icon
                  name="mdi:plus-circle-outline"
                  size="18"
                  class="text-[#0052cc] mr-1 font-medium"
                />
                <div
                  class="w-full text-sm font-medium text-[#0052CC] font-inter lending-4"
                >
                  Add more branches
                </div>
              </div>
            </div>
            <hr class="border-[#BDBDBD]">
          </form>
        </div>
  
        <div class="inline-flex items-center justify-between w-full mt-3">
          <a href="#" class="text-[#0052CC] font-normal text-base"
            >Skip this step</a
          >
          <button
            type="submit"
            class="flex justify-center items-center rounded bg-[#0052CC] px-3 py-1 font-inter text-sm font-bold leading-6 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
          >
            Next Step &nbsp;
            <Icon name="mdi:arrow-right" size="18" class="text-white" />
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped></style>
  