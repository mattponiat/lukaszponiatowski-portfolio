//Styles
import clsx from "clsx";
//Components
import { FormLabel } from "@components";
//Formik
import { Field } from "formik";
//Types
import { ContactFieldProps } from "types";

const FieldTextArea = ({ touched, errors, visibility }: ContactFieldProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-start max-w-full mb-[15px]",
        visibility === "hidden" ? "invisible" : "visible"
      )}
    >
      <FormLabel htmlFor="message">Wiadomość</FormLabel>
      <Field
        type="text"
        name="message"
        id="message"
        component={TextArea}
        as={TextArea}
      />
      <span className="h-5 text-mainRed text-xsmall select-none">
        {(touched.message && errors.message) ?? ""}
      </span>
    </div>
  );
};

const TextArea = ({ field }: { field: any }) => {
  return (
    <textarea
      {...field}
      className={clsx(
        "w-full min-h-[150px] p-2.5 mb-[5px] bg-mainBg border-2 border-solid border-secondaryBg text-secondaryBg text-medium font-bold resize-none transition-shadow",
        "focus-visible:outline-none focus-visible:shadow-[0px_0px_4px_0px_rgb(44,62,80)_inset]",
        "focus:outline-none focus:shadow-[0px_0px_4px_0px_rgb(44,62,80)_inset]"
      )}
    />
  );
};

export { FieldTextArea };
