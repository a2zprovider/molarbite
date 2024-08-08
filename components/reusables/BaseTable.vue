<template>
  <div class="mx-auto">
    <!-- <UTable v-model="selected" :rows="items" /> -->
    <div class="overflow-x-auto overflow-y-visible scroll">
      <table class="w-full bg-white shadow-sm">
        <thead class="bg-[#E5ECF5]">
          <tr>
            <th
              v-if="rowSelector"
              class="h-[48px] text-[#637381] text-base font-medium px-6 py-2.5 whitespace-nowrap text-left"
            >
              <div>
                <input
                  id="table-selectAll"
                  type="checkbox"
                  value=""
                  @change="selectAll"
                />
              </div>
            </th>
            <th
              class="h-[48px] text-[#637381] text-base font-medium px-6 py-2.5 whitespace-nowrap text-left"
              v-if="srNo"
            >
              Sr. No.
            </th>
            <th
              v-for="(header, index) in Object.values(headers)"
              :key="index"
              scope="col"
              class="h-[48px] text-[#637381] text-base font-medium px-6 py-2.5 whitespace-nowrap text-left"
            >
              {{ header }}
            </th>
            <th
              class="h-[48px] text-[#637381] text-base font-medium px-6 py-2.5 whitespace-nowrap text-left"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in data" :key="i" class="align-center">
            <td
              v-if="rowSelector"
              class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
            >
              <div>
                <input
                  :id="`table-${i}`"
                  v-model="item.selected"
                  type="checkbox"
                />
              </div>
            </td>
            <td
              v-if="srNo"
              class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
            >
              {{ i + 1 }}
            </td>
            <td
              v-for="key in Object.keys(headers)"
              :key="key"
              @click="rowSelected(item)"
              class="h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
            >
              <slot :name="key" v-bind="item">
                {{ item[key] }}
              </slot>
            </td>
            <td
              class="flex items-center gap-2 h-[64px] text-[#637381] text-sm font-normal px-6 py-2.5 whitespace-nowrap border-b-[1px] border-[#E6E8F0]"
            >
              <ReusablesBaseButton
                v-if="view_btn"
                @click="viewItem(i)"
                label="View"
                iconClass="text-white"
                icon-left="eye"
                :left-size="16"
                class="flex justify-center items-center border-[1px] rounded h-[32px] min-w-[32px] px-2 text-xs font-medium bg-[#3366FF] leading-4 border-[#3366FF] text-white"
              />
              <ReusablesBaseButton
                v-if="edit_btn"
                @click="editItem(i)"
                label="Edit"
                iconClass="text-[#696F8C]"
                icon-left="lead-pencil"
                :left-size="16"
                class="flex justify-center items-center border-[1px] rounded h-[32px] min-w-[32px] px-2 text-xs font-medium bg-transparent leading-4 border-[#EDF3FB] text-[#696F8C]"
              />
              <ReusablesBaseButton
                v-if="delete_btn"
                @click="deleteItem(i)"
                label="Delete"
                iconClass="text-[#696F8C]"
                icon-left="trash"
                :left-size="16"
                class="flex justify-center items-center border-[1px] rounded h-[32px] min-w-[32px] px-2 text-xs font-medium bg-transparent leading-4 border-[#EDF3FB] text-[#696F8C]"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup  lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
  headers: {
    type: Object,
    required: false,
    default: () => null,
  },
  rowSelector: {
    type: Boolean,
    required: false,
    default: false,
  },
  srNo: {
    type: Boolean,
    required: false,
  },
  edit_btn: {
    type: Boolean,
    required: false,
  },
  delete_btn: {
    type: Boolean,
    required: false,
  },
  view_btn: {
    type: Boolean,
    required: false,
  },
  onEdit: {
    type: Function,
    required: true,
  },
  onDelete: {
    type: Function,
    required: true,
  },
  onView: {
    type: Function,
    required: true,
  },
});

// const rowSelected = (item: any) => {
//   emit("rowSelected", item);
// };
// const selectAll = (e: any) => {
//   const checked = e.target.checked;
//   this.data.forEach((item: any) => {
//     item.selected = checked;
//   });
//   forceUpdate();
// };
const editItem = (index: any) => {
  props.onEdit(index);
};
const deleteItem = (index: any) => {
  props.onDelete(index);
};
const viewItem = (index: any) => {
  props.onView(index);
};
</script>

<style scoped></style>