import { FormikErrors, FormikTouched } from "formik";

export interface HomeInfoSectionProps {
  title: string;
  quote?: string;
  about: string;
}

export interface HomeDescSectionProps {
  desc1: string;
  desc2: string;
}

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactFieldProps {
  touched: FormikTouched<{
    email: string;
    message: string;
    name: string;
  }>;
  errors: FormikErrors<{
    email: string;
    message: string;
    name: string;
  }>;
  visibility: string;
}

export interface resetFormType {
  resetForm: () => void;
}
