//Styles
import clsx from "clsx";
//Components
import { FormLabel, Input } from "@components";
//Formik
import { Field } from "formik";
//Types
import { ContactFieldProps } from "types";

const FieldEmail = ({ touched, errors, visibility }: ContactFieldProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-start max-w-full mb-[15px]",
        visibility === "hidden" ? "invisible" : "visible"
      )}
    >
      <FormLabel htmlFor="email">Email</FormLabel>
      <Field type="email" name="email" id="email" as={Input} />
      <span className="h-5 text-mainRed text-xsmall select-none">
        {(touched.email && errors.email) ?? ""}
      </span>
    </div>
  );
};

export { FieldEmail };
