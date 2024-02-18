//Styles
import clsx from "clsx";
//Components
import { FormLabel, Input } from "@components";
//Formik
import { Field } from "formik";
//Types
import { ContactFieldProps } from "types";

const FieldName = ({ touched, errors, visibility }: ContactFieldProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-start max-w-full mb-[15px]",
        visibility === "hidden" ? "invisible" : "visible"
      )}
    >
      <FormLabel htmlFor="name">Imię i nazwisko</FormLabel>
      <Field type="text" name="name" id="name" as={Input} />
      <span className="h-5 text-mainRed text-xsmall select-none">
        {(touched.name && errors.name) ?? ""}
      </span>
    </div>
  );
};

export { FieldName };
