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
          tab == 'treatment-plan-proposal' ? 'tab-active' : 'tab-inactive'
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
          <div class="flex justify-between h-[70px]">
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
          <div class="flex justify-between h-[70px]">
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
          <div class="flex justify-between h-[70px]">
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
          <div class="flex justify-between h-[70px]">
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
          <div class="flex justify-between h-[70px]">
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
          <div class="border rounded p-3">
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
              label="Upload Files"
              iconClass="text-white"
              icon-left="cloud-upload"
              :left-size="16"
              className="flex justify-center items-center rounded bg-[#0052CC] px-4 py-2 text-sm font-normal leading-4 text-white"
            />
          </div>
          <div class="flex gap-3 mb-3">
            <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
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

          <div class="flex gap-3 mb-3">
            <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
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
          <div class="flex gap-3 mb-3">
            <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
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
          <div class="flex gap-3 mb-3">
            <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
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
          <div class="flex gap-3 mb-3">
            <div class="h-[15px] w-[15px] rounded-full bg-[#2F80ED]"></div>
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
          :onView="handleView"
        >
        </ReusablesBaseTable>
        <div class="flex items-center justify-center mt-10">
          <ReusablesBaseButton
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
          :onView="handleView"
        >
        </ReusablesBaseTable>
        <div class="flex items-center justify-center mt-10">
          <ReusablesBaseButton
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
          :edit_btn="true"
          :onEdit="handleEdit"
          :delete_btn="true"
          :onDelete="handleDelete"
          :view_btn="false"
          :onView="handleView"
        >
        </ReusablesBaseTable>
        <div class="flex items-center justify-center mt-10">
          <ReusablesBaseButton
            label="Save"
            className="flex justify-center items-center rounded w-[120px] bg-[#0052CC] p-2.5 text-sm font-normal leading-4 text-white"
          />
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
          :onView="handleView"
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
          :onView="handleView"
        >
        </ReusablesBaseTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "owner" });

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

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
};
const treatment_items = [
  {
    tooth_number: "13",
    tooth_surface: "O, D, B, F, L",
    diagnosis: "Cavity",
    severity: "1",
    others: "₹ 10,000.00",
  },
  {
    tooth_number: "13",
    tooth_surface: "O, B",
    diagnosis: "Broken Tooth",
    severity: "2",
    others: "₹ 10,000.00",
  },
  {
    tooth_number: "22",
    tooth_surface: "F, L",
    diagnosis: "Broken Tooth",
    severity: "3",
    others: "₹ 10,000.00",
  },
];

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

// Form inputs
const state = reactive<{
  tab: string;
}>({
  tab: "patient-history",
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