<template>
  <div
    class="flex flex-col justify-center items-center gap-5 text-center h-screen"
  >
    <div>
      <div class="text-white font-light text-sm">Signup</div>
      <h1 class="text-center font-medium text-2xl text-white">
        Organisation Admin SignUp
      </h1>
    </div>
    <div
      class="flex flex-col gap-2 items-center text-center bg-white p-4 rounded-xl"
    >
      <div class="font-light w-full text-left text-lg l-min-width">
        <form class="space-y-6 w-full" @submit.prevent="submitForm">         
          <ReusablesBaseInput
            v-model="state.phoneNumber"
            class="block w-full rounded-md border-0 p-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            label="Enter Mobile Number"
            :placeholder="'+91 xxxxx xxxxx'"
            :error="v$.phoneNumber.$error"
            @blur="v$.phoneNumber.$touch()"
            @focus="v$.phoneNumber.$reset()"
          />
          <div>
            <button
              type="submit"
              class="float-right b-next rounded-md bg-blue-600 py-1 font-medium leading-6 l-f-s text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { formatNumber, validateNumber } = useFormat(); // Custom composable for mobile number
const state = ref<{ phoneNumber: string }>({
  phoneNumber: "",
});

const v$ = validateNumber(state);

const submitForm = (event: Event) => {
  event.preventDefault();
  if (v$.value.$invalid) {
    v$.value.$validate();
  } else {
    console.log("Form Input:", state);
  }
};

watch(
  () => state.value.phoneNumber,
  (newValue) => {
    state.value.phoneNumber = formatNumber(newValue);
  }
);
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
</style>
