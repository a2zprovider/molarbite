<template>
  <div class="p-9">
    <div class="mb-5 flex items-center justify-between">
      <ReusablesBaseButton
        @click="$router.push('/dashboard/doctor/patient/details')"
        label="Back"
        iconClass="text-[#1F3D99]"
        icon-left="arrow-left"
        :left-size="16"
        class="flex justify-center items-center font-inter text-sm font-medium leading-6 text-[#1F3D99]"
      />
      <div>
        <ReusablesBaseButton
          v-if="state.tab == 'prescribe'"
          @click="$router.push('/dashboard/doctor/patient/prescription1')"
          label="Add"
          className="flex justify-center items-center w-[120px] h-[40px] rounded bg-[#0052CC] px-3 py-1 text-xs font-medium leading-5 text-white shadow-sm"
        />
      </div>
    </div>

    <div class="mb-5 flex items-center text-center">
      <div
        @click="changeTab('patient-history')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer rounded-l"
        :class="state.tab == 'patient-history' ? 'tab-active' : 'tab-inactive'"
      >
        Patient History
      </div>
      <div
        @click="changeTab('recent-files')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'recent-files' ? 'tab-active' : 'tab-inactive'"
      >
        Recent Files
      </div>
      <div
        @click="changeTab('notes')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'notes' ? 'tab-active' : 'tab-inactive'"
      >
        Notes
      </div>
      <div
        @click="changeTab('diagnostic-test')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'diagnostic-test' ? 'tab-active' : 'tab-inactive'"
      >
        Diagnostic Test
      </div>
      <div
        @click="changeTab('diagnosis')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'diagnosis' ? 'tab-active' : 'tab-inactive'"
      >
        Diagnosis
      </div>
      <div
        @click="changeTab('treatment')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'treatment' ? 'tab-active' : 'tab-inactive'"
      >
        Treatment
      </div>
      <div
        @click="changeTab('treatment-plan-proposal')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="
          state.tab == 'treatment-plan-proposal' ? 'tab-active' : 'tab-inactive'
        "
      >
        Treatment Plan & Proposal
      </div>
      <div
        @click="changeTab('prescribe')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
        :class="state.tab == 'prescribe' ? 'tab-active' : 'tab-inactive'"
      >
        Prescribe
      </div>
      <div
        @click="changeTab('communication')"
        class="px-4 py-2 min-w-[130px] font-medium text-sm lending-4 border border-[#D8DAE5] cursor-pointer rounded-r"
        :class="state.tab == 'communication' ? 'tab-active' : 'tab-inactive'"
      >
        Communication
      </div>
    </div>
    <div v-if="state.tab == 'patient-history'">
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white p-5">
          <p class="font-bold text-2xl text-black mb-5">Summary</p>
          <div class="flex justify-between h-[70px] relative">
            <div
              class="absolute border-l border-[#828282] top-[25%] bottom-[5%] left-[6px]"
            ></div>
            <div class="flex gap-2">
              <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
              <div>
                <p class="font-medium text-sm text-black">Naveena registered</p>
              </div>
            </div>
            <p class="font-normal text-[10px] text-[#4F4F4F]">
              3:56 PM 2020-07-28
            </p>
          </div>

          <div class="flex justify-between h-[70px] relative">
            <div
              class="absolute border-l border-[#828282] top-[25%] bottom-[5%] left-[6px]"
            ></div>
            <div class="flex gap-2">
              <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
              <div>
                <p class="font-medium text-sm text-black">
                  Naveena is activated
                </p>
                <p class="font-normal text-[11px] text-black leading-[15px]">
                  View Health History Form
                </p>
              </div>
            </div>
            <p class="font-normal text-[10px] text-[#4F4F4F]">
              4:10 PM 2020-07-28
            </p>
          </div>
          <div class="flex justify-between h-[70px] relative">
            <div
              class="absolute border-l border-[#828282] top-[25%] bottom-[5%] left-[6px]"
            ></div>
            <div class="flex gap-2">
              <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
              <div>
                <p class="font-medium text-sm text-black">
                  Naveena checked in for RCT
                </p>
              </div>
            </div>
            <p class="font-normal text-[10px] text-[#4F4F4F]">
              4:20 PM 2020-07-28
            </p>
          </div>
          <div class="flex justify-between h-[70px] relative">
            <div
              class="absolute border-l border-[#828282] top-[25%] bottom-[5%] left-[6px]"
            ></div>
            <div class="flex gap-2">
              <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
              <div>
                <p class="font-medium text-sm text-black">
                  Dr. Aparna diagnosed Naveena
                </p>
                <p class="font-normal text-[11px] text-black leading-[15px]">
                  Gaps between 11 and 12
                </p>
                <p class="font-normal text-[11px] text-black leading-[15px]">
                  Alignment needed across front row
                </p>
              </div>
            </div>
            <p class="font-normal text-[10px] text-[#4F4F4F]">
              4:30 PM 2020-07-28
            </p>
          </div>
          <div class="flex justify-between h-[70px] relative">
            <div class="flex gap-2">
              <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
              <div>
                <p class="font-medium text-sm text-black">
                  Dr. Aparna assigned prescription
                </p>
                <p class="font-normal text-[11px] text-black leading-[15px]">
                  Paracetamol for 3 days (1-0-1)
                </p>
              </div>
            </div>
            <p class="font-normal text-[10px] text-[#4F4F4F]">
              4:40 PM 2020-07-28
            </p>
          </div>
        </div>
        <div class="bg-white p-5">
          <p class="font-bold text-2xl text-black mb-5">
            Treatment Plan Summary
          </p>
          <div class="mb-5 flex items-center text-center">
            <div
              class="px-3 py-2 font-inter font-medium text-xs lending-4 text-[#3366FF] bg-[#F3F6FF] rounded-l border border-r-[0] border-[#D8DAE5] cursor-pointer"
            >
              All
              <span
                class="font-bold text-[11px] ml-1 text-[#2952CC] bg-[#D6E0FF] py-1 px-2 rounded-full"
                >6</span
              >
            </div>
            <div
              class="px-3 py-2 font-inter font-medium text-xs lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
            >
              In-Progress
              <span
                class="font-bold text-[11px] ml-1 text-[#2952CC] bg-[#D6E0FF] py-1 px-2 rounded-full"
                >6</span
              >
            </div>
            <div
              class="px-3 py-2 font-inter font-medium text-xs lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
            >
              Scheduled
              <span
                class="font-bold text-[11px] ml-1 text-[#BA4F00] bg-[#FFE1CA] py-1 px-2 rounded-full"
                >6</span
              >
            </div>
            <div
              class="px-3 py-2 font-inter font-medium text-xs lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer"
            >
              Pending
              <span
                class="font-bold text-[11px] ml-1 text-[#7D2828] bg-[#F9DADA] py-1 px-2 rounded-full"
                >6</span
              >
            </div>
            <div
              class="px-3 py-2 font-inter font-medium text-xs lending-4 rounded-r border border-[#D8DAE5] cursor-pointer"
            >
              Completed
              <span
                class="font-bold text-[11px] ml-1 text-[#7D2828] bg-[#F9DADA] py-1 px-2 rounded-full"
                >6</span
              >
            </div>
          </div>
          <div class="border rounded p-3 mb-4">
            <div class="flex justify-between items-center mb-3">
              <div class="flex items-center gap-2">
                <p
                  class="bg-[#D6E0FF] leading-4 py-0.5 px-1.5 rounded text-[#0065FF] font-semibold text-[11px]"
                >
                  04052023 - 1
                </p>
                <p
                  class="bg-[#D6E0FF] leading-4 py-0.5 px-1.5 font-inter rounded text-[#6E62B6] font-semibold text-[11px]"
                >
                  2
                </p>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="mdi:alarm" size="12" class="text-[#8F95B2]" />
                <p class="text-[#637381] font-bold text-xs">30 Min</p>
              </div>
            </div>
            <div class="">
              <table class="w-full">
                <thead class="pb-3">
                  <tr class="text-[#637381] font-bold text-xs">
                    <td>Tooth #</td>
                    <td>Tooth Surface</td>
                    <td>Diagnosis</td>
                    <td>Treatment</td>
                    <td>Cost</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-[#637381] font-normal text-sm">
                    <td class="py-2">13</td>
                    <td class="py-2">O, D, B, F, L</td>
                    <td class="py-2">Cavity</td>
                    <td class="py-2">Paste</td>
                    <td class="py-2">₹ 2,000.00</td>
                    <td class="py-2"></td>
                  </tr>
                  <tr class="text-[#637381] font-normal text-sm">
                    <td class="py-2">13</td>
                    <td class="py-2">O, D, B, F, L</td>
                    <td class="py-2">Cavity</td>
                    <td class="py-2">Paste</td>
                    <td class="py-2">₹ 2,000.00</td>
                    <td class="py-2"></td>
                  </tr>
                  <tr class="text-[#637381] font-normal text-sm">
                    <td class="py-2">13</td>
                    <td class="py-2">O, D, B, F, L</td>
                    <td class="py-2">Cavity</td>
                    <td class="py-2">Paste</td>
                    <td class="py-2">₹ 2,000.00</td>
                    <td class="py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="border rounded p-3">
            <div class="flex justify-between items-center mb-3">
              <div class="flex items-center gap-2">
                <p
                  class="bg-[#D6E0FF] leading-4 py-0.5 px-1.5 rounded text-[#0065FF] font-semibold text-[11px]"
                >
                  04052023 - 2
                </p>
                <p
                  class="bg-[#D6E0FF] leading-4 py-0.5 px-1.5 font-inter rounded text-[#6E62B6] font-semibold text-[11px]"
                >
                  1
                </p>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="mdi:alarm" size="12" class="text-[#8F95B2]" />
                <p class="text-[#637381] font-bold text-xs">30 Min</p>
              </div>
            </div>
            <div class="">
              <table class="w-full">
                <thead class="pb-3">
                  <tr class="text-[#637381] font-bold text-xs">
                    <td>Tooth #</td>
                    <td>Tooth Surface</td>
                    <td>Diagnosis</td>
                    <td>Treatment</td>
                    <td>Cost</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-[#637381] font-normal text-sm">
                    <td class="py-2">13</td>
                    <td class="py-2">O, D, B, F, L</td>
                    <td class="py-2">Cavity</td>
                    <td class="py-2">Paste</td>
                    <td class="py-2">₹ 2,000.00</td>
                    <td class="py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="state.tab == 'recent-files'">
      <div class="">
        <div class="bg-white p-5">
          <div class="flex justify-between items-center">
            <p class="font-bold text-2xl text-black mb-5">
              Recent Xrays/Images
            </p>
            <ReusablesBaseButton
              @click="state.isVisible = true"
              label="Upload Files"
              iconClass="text-white"
              icon-left="cloud-upload"
              :left-size="16"
              className="flex justify-center items-center rounded bg-[#0052CC] px-4 py-2 text-sm font-normal leading-4 text-white"
            />
          </div>
          <div class="flex gap-3 mb-3 relative">
            <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
            <div
              class="absolute border-l border-[#828282] top-[25px] bottom-[0px] left-[6px]"
            ></div>
            <div class="flex gap-3 bg-[#E3EEFF] w-full rounded p-2.5">
              <div>
                <img
                  class="w-[340px] h-[340px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/99df/7132/395b12a523993d4447673dec345f122e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kPPDMkTnCNxIfZdytIDIeB9zaxem0fM~8YvMeRWzv93TnEe5HkfgZQkga-wBVg5xkVXwrKDP68bjFSWhqLht-14raP3o3AV~3Ay~MPO70M~qLRSdD4eZFSyo1aRO5-zclrGkWsrRu0vKU47Q7B7pSvFitaVKJ1009~-u2JBTX-b88fK6iV0wn8LPQyoXUUM8wAcTfkBFPvduNFMmfE8FR5EOviSExPTgPu8Mm5-y8Daw48Tkui~jAT5fYp2r0Ntr6BMuXJvX8be0nOczjsWmsuhzE6U3ADag9gJuQ93ioRjf-fZaEdunWdV7bxUFDi2Cv3xywsgzx8J58-O0Mt8-Rw__"
                />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div>
                  <p class="font-bold text-base text-normal text-black">
                    Types :
                  </p>
                  <p class="font-medium text-base text-normal text-[#0052CC]">
                    OPG
                  </p>
                  <p class="font-bold text-base text-normal text-black">
                    Age Group :
                  </p>
                  <p class="font-medium text-base text-normal text-[#0052CC]">
                    Adult
                  </p>
                  <p class="font-bold text-base text-normal text-black">
                    Tooth Number
                  </p>
                  <p class="font-medium text-base text-normal text-[#0052CC]">
                    11, 12, 13, 14, 15, 16
                  </p>
                </div>
                <div>
                  <div class="flex justify-between items-center">
                    <div>
                      <p class="font-normal text-[10px] text-[#4F4F4F]">
                        Uploaded by Dr. Dental Molar Byte
                      </p>
                    </div>
                    <div>
                      <p class="font-normal text-[10px] text-[#4F4F4F]">
                        3:56 PM 2020-07-28
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-3 mb-3 relative">
            <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
            <div
              class="absolute border-l border-[#828282] top-[25px] bottom-[0px] left-[6px]"
            ></div>
            <div class="flex gap-3 bg-[#E3EEFF] w-full rounded p-2.5">
              <div>
                <img
                  class="w-[340px] h-[340px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/99df/7132/395b12a523993d4447673dec345f122e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kPPDMkTnCNxIfZdytIDIeB9zaxem0fM~8YvMeRWzv93TnEe5HkfgZQkga-wBVg5xkVXwrKDP68bjFSWhqLht-14raP3o3AV~3Ay~MPO70M~qLRSdD4eZFSyo1aRO5-zclrGkWsrRu0vKU47Q7B7pSvFitaVKJ1009~-u2JBTX-b88fK6iV0wn8LPQyoXUUM8wAcTfkBFPvduNFMmfE8FR5EOviSExPTgPu8Mm5-y8Daw48Tkui~jAT5fYp2r0Ntr6BMuXJvX8be0nOczjsWmsuhzE6U3ADag9gJuQ93ioRjf-fZaEdunWdV7bxUFDi2Cv3xywsgzx8J58-O0Mt8-Rw__"
                />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div>
                  <p class="font-bold text-base text-normal text-black">
                    Types :
                  </p>
                  <p class="font-medium text-base text-normal text-[#0052CC]">
                    OPG
                  </p>
                  <p class="font-bold text-base text-normal text-black">
                    Age Group :
                  </p>
                  <p class="font-medium text-base text-normal text-[#0052CC]">
                    Adult
                  </p>
                  <p class="font-bold text-base text-normal text-black">
                    Tooth Number
                  </p>
                  <p class="font-medium text-base text-normal text-[#0052CC]">
                    11, 12, 13, 14, 15, 16
                  </p>
                </div>
                <div>
                  <div class="flex justify-between items-center">
                    <div>
                      <p class="font-normal text-[10px] text-[#4F4F4F]">
                        Uploaded by Dr. Dental Molar Byte
                      </p>
                    </div>
                    <div>
                      <p class="font-normal text-[10px] text-[#4F4F4F]">
                        3:56 PM 2020-07-28
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="state.tab == 'notes'">
      <div>
        <div class="bg-white p-5">
          <div class="flex justify-between items-center">
            <p class="font-bold text-2xl text-black mb-5">Notes</p>
          </div>
          <div class="flex gap-3 mb-3 relative">
            <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
            <div
              class="absolute border-l border-[#828282] top-[25px] bottom-[0px] left-[6px]"
            ></div>
            <div class="flex flex-col gap-3 bg-[#E3EEFF] w-full rounded p-2.5">
              <p class="font-normal text-sm text-black leading-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem
              </p>
              <div class="flex justify-between items-center">
                <div>
                  <p class="font-normal text-[10px] text-[#4F4F4F]">
                    Uploaded by Dr. Dental Molar Byte
                  </p>
                </div>
                <div>
                  <p class="font-normal text-[10px] text-[#4F4F4F]">
                    3:56 PM 2020-07-28
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-3 mb-3 relative">
            <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
            <div
              class="absolute border-l border-[#828282] top-[25px] bottom-[0px] left-[6px]"
            ></div>
            <div class="flex flex-col gap-3 bg-[#E3EEFF] w-full rounded p-2.5">
              <p class="font-normal text-sm text-black leading-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an
              </p>
              <div class="flex justify-between items-center">
                <div>
                  <p class="font-normal text-[10px] text-[#4F4F4F]">
                    Uploaded by Dr. Dental Molar Byte
                  </p>
                </div>
                <div>
                  <p class="font-normal text-[10px] text-[#4F4F4F]">
                    3:56 PM 2020-07-28
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-3 mb-3 relative">
            <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
            <div
              class="absolute border-l border-[#828282] top-[25px] bottom-[0px] left-[6px]"
            ></div>
            <div class="flex flex-col gap-3 bg-[#E3EEFF] w-full rounded p-2.5">
              <p class="font-normal text-sm text-black leading-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an
              </p>
              <div class="flex justify-between items-center">
                <div>
                  <p class="font-normal text-[10px] text-[#4F4F4F]">
                    Uploaded by Dr. Dental Molar Byte
                  </p>
                </div>
                <div>
                  <p class="font-normal text-[10px] text-[#4F4F4F]">
                    3:56 PM 2020-07-28
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[#E3E3E3] p-5">
          <div class="flex items-center gap-3">
            <ReusablesBaseInput
              v-model="state.notes"
              type="taxt"
              placeholder="Notes"
              class="w-full"
            />
            <ReusablesBaseButton
              label="Save"
              className="flex justify-center items-center rounded w-[120px] bg-[#0052CC] p-2.5 text-sm font-normal leading-4 text-white"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="state.tab == 'diagnostic-test'">
      <div>
        <ReusablesBaseTable
          :srNo="true"
          :headers="diagnostic_headers"
          :data="diagnostic_items"
          :row-selector="false"
          :edit_btn="true"
          :onEdit="handleEdit"
          :delete_btn="true"
          :onDelete="handleDelete"
          :view_btn="false"
        >
          <template #file="item">
            <p class="text-[#3366FF] font-inter font-semibold text-sm">
              {{ item.file }}
            </p>
          </template>
        </ReusablesBaseTable>
        <div class="flex items-center justify-center mt-10">
          <ReusablesBaseButton
            @click="state.isVisible1 = true"
            label="Add"
            className="flex justify-center items-center rounded w-[120px] bg-[#0052CC] p-2.5 text-sm font-normal leading-4 text-white"
          />
        </div>
      </div>
    </div>
    <div v-if="state.tab == 'diagnosis'">
      <div>
        <ReusablesBaseTable
          :srNo="true"
          :headers="diagnosis_headers"
          :data="diagnosis_items"
          :row-selector="false"
          :edit_btn="true"
          :onEdit="handleEdit"
          :delete_btn="true"
          :onDelete="handleDelete"
          :view_btn="false"
        >
          <template #severity="item">
            <span
              class="bg-[#D6E0FF] text-[#2952CC] w-[20px] h-[20px] p-2 py-1 rounded-full"
            >
              {{ item.severity }}
            </span>
          </template>
        </ReusablesBaseTable>
        <div class="flex items-center justify-center mt-10">
          <ReusablesBaseButton
            @click="state.isVisible2 = true"
            label="Add"
            className="flex justify-center items-center rounded w-[120px] bg-[#0052CC] p-2.5 text-sm font-normal leading-4 text-white"
          />
        </div>
      </div>
    </div>
    <div v-if="state.tab == 'treatment'">
      <div>
        <ReusablesBaseTable
          :srNo="true"
          :headers="treatment_headers"
          :data="treatment_items"
          :row-selector="false"
          :edit_btn="false"
          :delete_btn="false"
          :view_btn="false"
        >
          <template #diagnosis="item">
            <p class="mb-2">{{ item.diagnosis }}</p>
            <ul
              class="list-disc ml-4 mb-2"
              v-if="state.treatment_edit == false"
            >
              <li>
                <div class="flex items-center gap-4">
                  <p>Treatment 1</p>
                  <p>30 Minutes</p>
                </div>
              </li>
            </ul>
            <div
              class="flex items-center gap-4 mb-2"
              v-if="state.treatment_edit == true"
            >
              <ReusablesBaseSelect
                v-model="state.treatment"
                :options="treatments"
                placeholder="Select Treatment"
              />
              <p>30 Minutes</p>
            </div>
            <div class="mb-2" v-if="state.treatment_edit == true">
              <ReusablesBaseButton
                iconClass="text-white"
                icon-left="plus-circle-outline"
                :left-size="16"
                className="flex justify-center items-center rounded bg-[#0052CC] p-2 text-sm font-normal leading-4 text-white"
              />
            </div>
          </template>
          <template #severity="item">
            <span
              class="bg-[#D6E0FF] text-[#2952CC] w-[20px] h-[20px] p-2 py-1 rounded-full"
            >
              {{ item.severity }}
            </span>
          </template>
          <template #others="item">
            <div class="">
              <div class="pb-2"></div>
              <p class="text-[#163BAC]">{{ item.others }}</p>
              <div class="flex items-center gap-4 mt-2">
                <p>Sub Total</p>
                <strong class="text-black">{{ item.others }}</strong>
              </div>
            </div>
          </template>
          <template #action>
            <div class="flex items-center gap-3">
              <ReusablesBaseButton
                v-if="state.treatment_edit == false"
                @click="state.treatment_edit = true"
                iconClass="text-[#8F95B2]"
                icon-left="lead-pencil"
                :left-size="16"
                className="flex justify-center items-center rounded border border-[#D8DAE5] bg-white p-2 text-sm font-normal leading-4 text-[#0052CC]"
              />
              <ReusablesBaseButton
                iconClass="text-[#D14343]"
                icon-left="delete"
                :left-size="16"
                className="flex justify-center items-center rounded border border-[#D14343] bg-white p-2 text-sm font-normal leading-4 text-[#0052CC]"
              />
            </div>
          </template>
        </ReusablesBaseTable>
        <div class="flex items-center justify-center mt-10">
          <ReusablesBaseButton
            v-if="state.treatment_edit == true"
            @click="state.treatment_edit = false"
            label="Save"
            className="flex justify-center items-center rounded w-[120px] bg-[#0052CC] p-2.5 text-sm font-normal leading-4 text-white"
          />
        </div>
      </div>
    </div>
    <div v-if="state.tab == 'treatment-plan-proposal'">
      <div>
        <div class="mb-6">
          <div class="bg-white p-5">
            <div class="flex items-center text-center">
              <div
                class="px-4 py-2 min-w-[130px] font-medium tab-active text-sm lending-4 border border-r-[0] border-[#D8DAE5] cursor-pointer rounded-l"
              >
                Current
              </div>
              <div
                class="px-4 py-2 min-w-[130px] font-medium text-sm tab-inactive lending-4 border border-[#D8DAE5] cursor-pointer rounded-r"
              >
                Historic
              </div>
            </div>
          </div>
          <table class="w-full bg-white">
            <thead class="bg-[#E5ECF5]">
              <tr>
                <th class="w-[1px]"></th>
                <th
                  v-for="(header, i) in treatment_proposal_headers"
                  :key="i"
                  class="h-[48px] text-[#637381] text-base font-medium px-6 py-2.5 whitespace-nowrap text-left"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <draggable
              :list="treatment_proposal_items"
              class=""
              :group="{ name: 'people', pull: 'clone', put: false }"
              @change="log"
              itemKey="name"
              tag="tbody"
            >
              <template #item="{ element, index }">
                <tr :key="index">
                  <td
                    class="h-[64px] w-[1px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    <Icon name="mdi:drag-vertical" size="23" />
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    {{ element.tooth_number }}.
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    {{ element.tooth_surface }}
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    {{ element.diagnosis }}
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    {{ element.treatment }}
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    {{ element.time }}
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    <span
                      class="bg-[#D6E0FF] text-[#2952CC] w-[20px] h-[20px] p-2 py-1 rounded-full"
                    >
                      {{ element.severity }}
                    </span>
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    <span class="text-[#163BAC]">
                      {{ element.cost }}
                    </span>
                  </td>
                </tr>
              </template>
            </draggable>
          </table>
        </div>
        <div class="mb-6 bg-white">
          <div class="bg-white p-5">
            <p class="font-bold text-black text-2xl">04052023 - 1</p>
          </div>
          <table class="w-full bg-white">
            <thead class="bg-[#E5ECF5]">
              <tr>
                <th class="w-[1px]"></th>
                <th
                  v-for="(header, i) in treatment_proposal_headers1"
                  :key="i"
                  class="h-[48px] text-[#637381] text-base font-medium px-6 py-2.5 whitespace-nowrap text-left"
                >
                  {{ header }}
                </th>
                <th></th>
              </tr>
            </thead>
            <draggable
              :list="treatment_proposal_items1"
              class=""
              group="people"
              @change="log"
              itemKey="name"
              tag="tbody"
            >
              <template #item="{ element, index }">
                <tr :key="index">
                  <td
                    class="h-[64px] w-[1px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    <Icon name="mdi:drag-vertical" size="23" />
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    {{ element.tooth_number }}.
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    {{ element.tooth_surface }}
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    {{ element.diagnosis }}
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    {{ element.treatment }}
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    {{ element.time }}
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    <span
                      class="bg-[#D6E0FF] text-[#2952CC] w-[20px] h-[20px] p-2 py-1 rounded-full"
                    >
                      {{ element.severity }}
                    </span>
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    <span class="text-[#163BAC]">
                      {{ element.cost }}
                    </span>
                  </td>
                  <td
                    class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
                  >
                    <ReusablesBaseButton
                      iconClass="text-[#D14343]"
                      icon-left="delete"
                      :left-size="16"
                      className="flex justify-center items-center rounded border border-[#D14343] bg-white p-2 text-sm font-normal leading-4 text-[#0052CC]"
                    />
                  </td>
                </tr>
              </template>
            </draggable>
          </table>
          <div class="flex justify-between items-center gap-3 p-5 pb-0">
            <div></div>
            <div class="flex items-center gap-6 font-bold text-[32px]">
              <p class="text-[#4F4F4F]">Total</p>
              <p class="text-black">₹ 2,000.00</p>
            </div>
          </div>
          <div class="flex justify-between items-center p-5">
            <ReusablesBaseButton
              label="Add Plan"
              className="flex justify-center items-center rounded border border-[#0052CC] w-[120px] bg-white p-2.5 text-sm font-normal leading-4 text-[#0052CC]"
            />
            <ReusablesBaseButton
              label="Save Plans"
              className="flex justify-center items-center rounded w-[120px] bg-[#0052CC] p-2.5 text-sm font-normal leading-4 text-white"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="state.tab == 'prescribe'">
      <div>
        <ReusablesBaseTable
          :srNo="true"
          :headers="prescribe_headers"
          :data="prescribe_items"
          :row-selector="false"
          :edit_btn="true"
          :onEdit="handleEdit"
          :delete_btn="true"
          :onDelete="handleDelete"
          :view_btn="false"
        >
        </ReusablesBaseTable>
      </div>
    </div>
    <div v-if="state.tab == 'communication'">
      <div>
        <ReusablesBaseTable
          :srNo="true"
          :headers="communication_headers"
          :data="communication_items"
          :row-selector="false"
          :edit_btn="true"
          :onEdit="handleEdit"
          :delete_btn="true"
          :onDelete="handleDelete"
          :view_btn="false"
        >
        </ReusablesBaseTable>
      </div>
    </div>

    <ReusablesModal
      className="w-[424px]"
      :isVisible="state.isVisible"
      :onClose="closeModal"
    >
      <div>
        <div class="p-2 pt-1">
          <p
            class="text-lg font-medium text-[#559AFF] leading-5 text-center mb-4"
          >
            Upload Files
          </p>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.type_name"
              label="Type*"
              :options="types"
              placeholder="Type"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.age"
              label="Age Group*"
              :options="ages"
              placeholder="Age"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseFile
              v-model="state.file"
              label="File*"
              file-type="image/*"
              placeholder="File"
              className="flex relative justify-center w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2] file:text-[#8F95B2] file:border-0 file:border-l-[1px] file:border-[#C1C4D6] file:px-2 file:rounded file:bg-transparent file:absolute file:right-0 file:top-0 file:bottom-0 file:text-foreground file:text-xs file:font-medium"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Tooth Number*"
              v-model="state.tooth_number"
              type="taxt"
              placeholder="Tooth Number"
            />
          </div>
          <div class="flex justify-center items-center gap-2">
            <ReusablesBaseButton
              @click="state.isVisible = false"
              label="Save"
              className="flex justify-center items-center min-w-[90px] h-[32px] rounded bg-[#0052CC] px-3 py-1 text-xs font-medium leading-5 text-white shadow-sm"
            />
          </div>
        </div>
      </div>
    </ReusablesModal>

    <ReusablesModal
      className="w-[424px]"
      :isVisible="state.isVisible1"
      :onClose="closeModal1"
    >
      <div>
        <div class="p-2 pt-1">
          <p
            class="text-lg font-medium text-[#559AFF] leading-5 text-center mb-4"
          >
            Add Diagnostics
          </p>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.type_name1"
              label="Type*"
              :options="types1"
              placeholder="Type"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.location"
              label="Location*"
              :options="locations"
              placeholder="Location"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Price*"
              v-model="state.price"
              type="taxt"
              placeholder="₹ 0.00"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Date*"
              v-model="state.date"
              type="date"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseInput
              label="Observations*"
              v-model="state.observations"
              type="taxt"
              placeholder="Observations"
            />
          </div>
          <div class="mb-5">
            <ReusablesBaseFile
              v-model="state.file1"
              label="File*"
              file-type="image/*"
              placeholder="File"
              className="flex relative justify-center w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2] file:text-[#8F95B2] file:border-0 file:border-l-[1px] file:border-[#C1C4D6] file:px-2 file:rounded file:bg-transparent file:absolute file:right-0 file:top-0 file:bottom-0 file:text-foreground file:text-xs file:font-medium"
            />
          </div>
          <div class="flex justify-center items-center gap-2">
            <ReusablesBaseButton
              @click="state.isVisible1 = false"
              label="Save"
              className="flex justify-center items-center min-w-[90px] h-[32px] rounded bg-[#0052CC] px-3 py-1 text-xs font-medium leading-5 text-white shadow-sm"
            />
          </div>
        </div>
      </div>
    </ReusablesModal>

    <ReusablesModal
      className="w-[424px]"
      :isVisible="state.isVisible2"
      :onClose="closeModal2"
    >
      <div>
        <div class="p-2 pt-1">
          <p
            class="text-lg font-medium text-[#559AFF] leading-5 text-center mb-4"
          >
            Add Diagnosis
          </p>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.tooth_number1"
              label="Tooth Number*"
              :options="tooth_numbers"
              placeholder="Tooth Number"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.tooth_surface"
              label="Tooth Surface*"
              :options="tooth_surfaces"
              placeholder="Tooth Surface"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.diagnosis"
              label="Diagnosis*"
              :options="diagnosiss"
              placeholder="Diagnosis"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.severity"
              label="Severity*"
              :options="severities"
              placeholder="Severity"
            />
          </div>
          <div class="mb-2">
            <ReusablesBaseSelect
              v-model="state.treating_doctor"
              label="Treating Doctor*"
              :options="treating_doctors"
              placeholder="Treating Doctor"
            />
          </div>
          <div class="flex justify-center items-center gap-2 mt-5">
            <ReusablesBaseButton
              @click="state.isVisible2 = false"
              label="Save"
              className="flex justify-center items-center min-w-[90px] h-[32px] rounded bg-[#0052CC] px-3 py-1 text-xs font-medium leading-5 text-white shadow-sm"
            />
          </div>
        </div>
      </div>
    </ReusablesModal>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });

import draggable from "vuedraggable";

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const name = "two-lists1";
const display = "Two Lists11";
const order = 1;
const list1 = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
]);
const list2 = ref([
  { name: "Juan", id: 5 },
  { name: "Edgard", id: 6 },
  { name: "Johnson", id: 7 },
]);

const types = ["OPG", "Bitewing", "IOPA", "CBCT"];
const ages = ["Adult", "Paedo"];

const types1 = ["Blood Test"];
const locations = ["In-house", "External"];

const tooth_numbers = ["01", "02"];
const tooth_surfaces = ["M", "O", "D", "B", "F", "L"];
const diagnosiss = ["Cavity", "Broken Tooth"];
const severities = ["01", "02"];
const treating_doctors = ["01", "02"];
const treatments = ["Treatment 1", "Treatment 2"];

const changeTab = (val: string) => {
  state.tab = val;
};

const diagnostic_headers = {
  type: "Type",
  location: "Location",
  date: "Date",
  observation: "Observation",
  file: "File",
};
const diagnostic_items = [
  {
    type: "Biopsy",
    location: "External",
    date: "01/01/2023",
    observation: "Dr. Molar Byte Kumar",
    file: "View",
  },
  {
    type: "Blood Report",
    location: "External",
    date: "01/01/2023",
    observation: "Dr. Molar Byte Kumar",
    file: "View",
  },
  {
    type: "Fitness Certificate",
    location: "In-house",
    date: "01/01/2023",
    observation: "Self",
    file: "View",
  },
];

const diagnosis_headers = {
  tooth_number: "Tooth Number",
  tooth_surface: "Tooth Surface",
  diagnosis: "Diagnosis",
  severity: "Severity",
  treating_doctor: "Treating Doctor",
};
const diagnosis_items = [
  {
    tooth_number: "1",
    tooth_surface: "O, D, B, F, L",
    diagnosis: "Cavity",
    severity: "1",
    treating_doctor: "Dr. Molar Byte",
  },
  {
    tooth_number: "13",
    tooth_surface: "O, B",
    diagnosis: "Broken Tooth",
    severity: "2",
    treating_doctor: "Dr. Ramesh Kumar",
  },
  {
    tooth_number: "22",
    tooth_surface: "F, L",
    diagnosis: "Broken Tooth",
    severity: "3",
    treating_doctor: "Dr. Ramesh Kumar",
  },
  {
    tooth_number: "40",
    tooth_surface: "O, L",
    diagnosis: "Broken Tooth",
    severity: "4",
    treating_doctor: "Dr. Ramesh Kumar",
  },
];

const treatment_headers = {
  tooth_number: "Tooth Number",
  tooth_surface: "Tooth Surface",
  diagnosis: "Diagnosis",
  severity: "Severity",
  others: "Others",
  action: "Action",
};
const treatment_items = [
  {
    tooth_number: "13",
    tooth_surface: "O, D, B, F, L",
    diagnosis: "Cavity",
    severity: "1",
    others: "₹ 10,000.00",
    action: "",
  },
  {
    tooth_number: "13",
    tooth_surface: "O, B",
    diagnosis: "Broken Tooth",
    severity: "2",
    others: "₹ 10,000.00",
    action: "",
  },
  {
    tooth_number: "22",
    tooth_surface: "F, L",
    diagnosis: "Broken Tooth",
    severity: "3",
    others: "₹ 10,000.00",
    action: "",
  },
];

const treatment_proposal_headers = {
  tooth_number: "Tooth Number",
  tooth_surface: "Tooth Surface",
  diagnosis: "Diagnosis",
  treatment: "Treatment",
  time: "Time",
  severity: "Severity",
  cost: "Cost",
};
const treatment_proposal_items = ref([
  {
    tooth_number: "13",
    tooth_surface: "O, D, B, F, L",
    diagnosis: "Cavity",
    treatment: "UV Paste",
    time: "10 Minutes",
    severity: "1",
    cost: "₹ 10,000.00",
  },
  {
    tooth_number: "13",
    tooth_surface: "O, B",
    diagnosis: "Broken Tooth",
    treatment: "Artificial Tooth",
    time: "10 Minutes",
    severity: "2",
    cost: "₹ 10,000.00",
  },
  {
    tooth_number: "22",
    tooth_surface: "F, L",
    diagnosis: "Broken Tooth",
    treatment: "Root Canal",
    time: "10 Minutes",
    severity: "3",
    cost: "₹ 10,000.00",
  },
]);
const treatment_proposal_headers1 = {
  tooth_number: "Tooth Number",
  tooth_surface: "Tooth Surface",
  diagnosis: "Diagnosis",
  treatment: "Treatment",
  time: "Time",
  severity: "Severity",
  cost: "Cost",
};
const treatment_proposal_items1 = ref([
  {
    tooth_number: "13",
    tooth_surface: "O, D, B, F, L",
    diagnosis: "Cavity",
    treatment: "UV Paste",
    time: "10 Minutes",
    severity: "1",
    cost: "₹ 10,000.00",
  },
  {
    tooth_number: "13",
    tooth_surface: "O, B",
    diagnosis: "Broken Tooth",
    treatment: "Artificial Tooth",
    time: "10 Minutes",
    severity: "2",
    cost: "₹ 10,000.00",
  },
  {
    tooth_number: "22",
    tooth_surface: "F, L",
    diagnosis: "Broken Tooth",
    treatment: "Root Canal",
    time: "10 Minutes",
    severity: "3",
    cost: "₹ 10,000.00",
  },
]);

const prescribe_headers = {
  date: "Date",
  number: "Number",
  doctor: "Doctor",
};
const prescribe_items = [
  {
    date: "01/01/2023",
    number: "015161818",
    doctor: "Dr. Molar Byte Suresh",
  },
  {
    date: "01/01/2023",
    number: "015161818",
    doctor: "Dr. Molar Byte Suresh",
  },
  {
    date: "01/01/2023",
    number: "015161818",
    doctor: "Dr. Molar Byte Suresh",
  },
  {
    date: "01/01/2023",
    number: "015161818",
    doctor: "Dr. Molar Byte Suresh",
  },
];

const communication_headers = {
  date_time: "Date time stamp",
  mobile_number: "Mobile Number",
  email_id: "Email ID",
  type: "Type",
};
const communication_items = [
  {
    date_time: "01/01/2024, 11:00am",
    mobile_number: "+91900999999",
    email_id: "doctor@molarbyte.com",
    type: "Appointment",
  },
  {
    date_time: "01/01/2024, 10:00am",
    mobile_number: "+91900999999",
    email_id: "doctor@molarbyte.com",
    type: "Payment",
  },
  {
    date_time: "01/01/2024, 09:00am",
    mobile_number: "+91900999999",
    email_id: "doctor@molarbyte.com",
    type: "Invoice",
  },
];

const handleEdit = (index: any) => {
  // this.editIndex = index;
  // this.editItem = { ...this.items[index] }; // Copy item data for editing
};
const handleDelete = (index: any) => {
  if (confirm("Are you sure you want to delete this item?")) {
    // console.log("items : ", items);
    // items.splice(index, 1);
  }
};
const handleDeleteAll = () => {
  if (confirm("Are you sure you want to delete all items?")) {
    // items = []; // Clear all items
  }
};
const handleView = (index: any) => {
  console.log("index : ", index);
};
const closeModal = () => {
  state.isVisible = !state.isVisible;
};
const closeModal1 = () => {
  state.isVisible1 = !state.isVisible1;
};
const closeModal2 = () => {
  state.isVisible2 = !state.isVisible2;
};
const closePopup = () => {
  state.isPopup = !state.isPopup;
};

// Form inputs
const state = reactive<{
  tab: string;
  type_name: string;
  age: string;
  tooth_number: string;
  file: string;

  type_name1: string;
  location: string;
  price: string;
  date: string;
  observations: string;
  file1: string;

  tooth_number1: string;
  tooth_surface: string;
  diagnosis: string;
  severity: string;
  treating_doctor: string;

  notes: string;
  treatment_edit: boolean;
  treatment: string;

  isVisible: boolean;
  isVisible1: boolean;
  isVisible2: boolean;
  isPopup: boolean;
}>({
  tab: "patient-history",
  type_name: "OPG",
  age: "Adult",
  tooth_number: "",
  file: "",

  type_name1: "",
  location: "",
  price: "",
  date: "",
  observations: "",
  file1: "",

  tooth_number1: "",
  tooth_surface: "",
  diagnosis: "",
  severity: "",
  treating_doctor: "",

  notes: "",
  treatment_edit: true,
  treatment: "",

  isVisible: false,
  isVisible1: false,
  isVisible2: false,
  isPopup: true,
});
</script>

<style scoped>
.tab-active {
  @apply bg-[#F3F6FF] text-[#3366FF];
}
.tab-inactive {
  @apply bg-white text-[#696F8C];
}
</style>