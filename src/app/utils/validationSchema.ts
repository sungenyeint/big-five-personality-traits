// validationSchema.ts
import * as yup from "yup";

export const getLoginValidationSchema = (t: (en: string, my: string) => string) =>
  yup.object({
    email: yup
      .string()
      .required(t("Email is required", "အီးမေးလ်လိုအပ်သည်"))
      .email(t("Invalid email address", "အီးမေးလ်မမှန်ကန်ပါ")),
    password: yup
      .string()
      .required(t("Password is required", "စကားဝှက်လိုအပ်သည်"))
      .min(6, t("Password must be at least 6 characters", "စကားဝှက်သည် အနည်းဆုံး ၆ လုံးရှိရမည်")),
  });

export const getSignUpValidationSchema = (t: (en: string, my: string) => string) =>
  yup.object({
    email: yup
      .string()
      .required(t("Email is required", "အီးမေးလ်လိုအပ်သည်"))
      .email(t("Invalid email address", "အီးမေးလ်မမှန်ကန်ပါ")),
    password: yup
      .string()
      .required(t("Password is required", "စကားဝှက်လိုအပ်သည်"))
      .min(6, t("Password must be at least 6 characters", "စကားဝှက်သည် အနည်းဆုံး ၆ လုံးရှိရမည်")),
    confirmPassword: yup
      .string()
      .required(t("Please confirm your password", "စကားဝှက်အတည်ပြုရန်လိုအပ်သည်"))
      .oneOf([yup.ref('password')], t("Passwords do not match.", "စကားဝှက်များ မတူညီပါ။")),
  });
