import useVuelidate from "@vuelidate/core";
import { maxLength, minLength, required } from "@vuelidate/validators";

export function useFormat() {
    const type = ref<string>('phoneNumber');

    const formatNumber = (value: string): string => {
        let formatted = value.replace(/\s/g, "");
        if (formatted.length > 3) {
          formatted = formatted.slice(0, 3) + " " + formatted.slice(3);
        }
        if (formatted.length > 9) {
          formatted = formatted.slice(0, 9) + " " + formatted.slice(9);
        }
        return formatted;
    };

    const validateNumber = (phoneNumber:any) =>{
        const rules = {
            phoneNumber: {
              required,
              minLength: minLength(10),
              maxLength: maxLength(14),
            },
          };
          const v$ = useVuelidate(rules, phoneNumber);
          return v$;
    }
    return {
      type,
      formatNumber,
      validateNumber
    };
  }