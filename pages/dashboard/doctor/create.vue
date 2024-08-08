<template>
  <div
    class="flex flex-col justify-normal items-center gap-5 text-center h-screen w-full"
  >
    <div>
      <p
        class="text-[24px] font-medium text-[#0052CC] leading-7 pt-4 font-roboto"
      >
        Add Doctor
      </p>
    </div>
    <div
      class="flex flex-col gap-2 items-center text-center bg-white p-4 mt-2 rounded-xl w-[663px]"
    >
      <p class="text-center font-medium text-[#559AFF] text-lg leading-5 py-4">
        Details
      </p>
      <div class="w-full text-left text-lg">
        <form class="space-y-6 w-full">
          <div class="grid grid-cols-2 gap-4">
            <ReusablesBaseInput
              label="First Name*"
              v-model="state.first_name"
              type="taxt"
              placeholder="First Name"
              className=""
              :error="v$.first_name.$error"
              error-message="First name is required"
              @blur="v$.first_name.$touch()"
              @focus="v$.first_name.$reset()"
            />
            <ReusablesBaseInput
              label="Last Name*"
              v-model="state.last_name"
              type="taxt"
              placeholder="Last Name"
              className=""
              :error="v$.last_name.$error"
              error-message="Last name is required"
              @blur="v$.last_name.$touch()"
              @focus="v$.last_name.$reset()"
            />
            <ReusablesBaseInput
              label="Email*"
              v-model="state.email"
              type="email"
              placeholder="Email"
              className=""
              :error="v$.email.$error"
              error-message="Email is required"
              @blur="v$.email.$touch()"
              @focus="v$.email.$reset()"
            />
            <ReusablesBaseInput
              label="Mobile Number*"
              v-model="state.mobile"
              type="mobile"
              placeholder="+91 00000 00000"
              className=""
              :error="v$.mobile.$error"
              error-message="Mobile number is required"
              @blur="v$.mobile.$touch()"
              @focus="v$.mobile.$reset()"
            />
            <ReusablesBaseInput
              label="Date of Birth*"
              v-model="state.date_of_birth"
              type="date"
              placeholder="dd/mm/yyyy"
              className=""
              :error="v$.date_of_birth.$error"
              error-message="Date of birth is required"
              @blur="v$.date_of_birth.$touch()"
              @focus="v$.date_of_birth.$reset()"
            />

            <ReusablesBaseSelect
              v-model="state.gender"
              label="Gender*"
              :options="genders"
              placeholder="Select Gender"
              :error="v$.gender.$error"
              @blur="v$.gender.$touch()"
              @focus="v$.gender.$reset()"
            />
            <ReusablesBaseSelect
              v-model="state.specialization"
              label="Specialization*"
              :options="specializations"
              placeholder="Select Specialization"
              :error="v$.specialization.$error"
              @blur="v$.specialization.$touch()"
              @focus="v$.specialization.$reset()"
            />
            <ReusablesBaseSelect
              v-model="state.branch"
              label="Branch*"
              :options="branches"
              placeholder="Select Branch"
              :error="v$.branch.$error"
              @blur="v$.branch.$touch()"
              @focus="v$.branch.$reset()"
            />

            <ReusablesBaseInput
              label="State Dental Reg No.*"
              v-model="state.reg_no"
              type="text"
              placeholder="000000000000000"
              className=""
              :error="v$.reg_no.$error"
              error-message="State Dental Reg No. is required"
              @blur="v$.reg_no.$touch()"
              @focus="v$.reg_no.$reset()"
            />

            <ReusablesBaseFile
              v-model="state.upload_certificate"
              label="Upload Certificate*"
              file-type="image/*"
              placeholder="Registration Number"
              className="flex relative justify-center w-full text-xs rounded border-[1px] border-[#C1C4D6] p-1.5 px-2 text-[#8F95B2] ring-0 ring-inset ring-[#8F95B2] placeholder:text-[#8F95B2] outline-0 focus:outline-0 focus:ring-0 focus:ring-inset focus:ring-[#8F95B2] file:text-[#8F95B2] file:border-0 file:border-l-[1px] file:border-[#C1C4D6] file:px-2 file:rounded file:bg-transparent file:absolute file:right-0 file:top-0 file:bottom-0 file:text-foreground file:text-xs file:font-medium"
              :error="v$.upload_certificate.$error"
              @blur="v$.upload_certificate.$touch()"
              @focus="v$.upload_certificate.$reset()"
            />
          </div>
        </form>
      </div>
      <div class="inline-flex items-center justify-end w-full my-5">
        <ReusablesBaseButton
          @click="$router.push('/dashboard/doctor/timings/create')"
          label="Choose Branches & Timings"
          iconClass="text-white"
          icon-right="arrow-right"
          :right-size="18"
          className="flex justify-center items-center rounded bg-[#0052CC] px-3 py-1 font-inter text-sm font-bold leading-6 text-white shadow-sm hover:bg-[#0052CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
        />
      </div>
    </div>
  </div>
</template>

<script setup  lang="ts">
definePageMeta({ layout: "custom" });
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const genders = ["Male", "Female"];
const specializations = ["1", "2"];
const branches = ["A", "B"];
// Form inputs
const state = reactive<{
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  date_of_birth: string;
  gender: string;
  specialization: string;
  branch: string;
  reg_no: string;
  upload_certificate: string;
}>({
  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
  date_of_birth: "",
  gender: "Male",
  specialization: "1",
  branch: "A",
  reg_no: "",
  upload_certificate: "",
});

// Validation rules
const rules = {
  first_name: { required },
  last_name: { required },
  email: { required },
  mobile: { required },
  date_of_birth: { required },
  gender: { required },
  specialization: { required },
  branch: { required },
  reg_no: { required },
  upload_certificate: { required },
};
const v$ = useVuelidate(rules, state);
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
