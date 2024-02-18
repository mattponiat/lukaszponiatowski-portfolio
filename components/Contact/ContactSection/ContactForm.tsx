import * as React from "react";
//Styles
import theme from "theme/theme";
import { css } from "@emotion/react";
import clsx from "clsx";
//Components
import { FieldName, FieldEmail, FieldTextArea } from "@components";
import Link from "next/link";
//Xstate
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
//Types
import type { FormValues } from "types";
//Formik
import { Form, Formik } from "formik";
//Yup
import * as Yup from "yup";
//Loaders
import BarLoader from "react-spinners/BarLoader";
//Icons
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Imię i nazwisko jest wymagane")
    .min(3, "Wymagane są minimum 3 znaki")
    .max(40, "Może być maksymalnie 40 znaków"),
  email: Yup.string()
    .required("Email jest wymagany")
    .email("Niepoprawny email")
    .min(3, "Wymagane są minimum 3 znaki")
    .max(40, "Może być maksymalnie 40 znaków"),
  message: Yup.string()
    .required("Wiadomość jest wymagana")
    .min(10, "Wymagane jest minimum 10 znaków")
    .max(4000, "Może być maksymalnie 4000 znaków"),
});

const formMachine = createMachine({
  id: "FormMachine",
  initial: "Default",
  states: {
    Default: {
      on: {
        SEND: {
          target: "#FormMachine.Loading",
        },
      },
    },
    Loading: {
      on: {
        ERROR: {
          target: "#FormMachine.Error",
        },
        SUCCESS: {
          target: "#FormMachine.Success",
        },
      },
    },
    Error: {
      on: {
        RESET: {
          target: "#FormMachine.Default",
        },
      },
    },
    Success: {
      on: {
        RESET: {
          target: "#FormMachine.Default",
        },
      },
    },
  },
});

const override = css`
  display: block;
  margin: 23px auto;
`;

type StateType = "Default" | "Loading" | "Error" | "Success";

const ContactForm = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [state, send] = useMachine(formMachine);
  const visibility = ["Success", "Error"].includes(state.value as StateType)
    ? "hidden"
    : "visible";

  const resetForm = () => send("RESET");

  console.log(process.env.NEXT_PUBLIC_CONTACT_FORM_API);
  const handleOnSubmit = async (values: FormValues) => {
    try {
      send("SEND");
      const response = await fetch(
        String(process.env.NEXT_PUBLIC_CONTACT_FORM_API),
        {
          method: "POST",
          body: JSON.stringify(values),
        }
      );
      if (response.status === 200) {
        send("SUCCESS");
      } else {
        send("ERROR");
      }
    } catch (err) {
      send("ERROR");
    }
  };

  React.useEffect(() => {
    if (state.value === "Success" || state.value === "Error") {
      buttonRef.current?.focus();
    }
    if (state.value === "Default") {
      inputRef.current?.focus();
    }
  }, [state.value]);

  return (
    <Formik
      initialValues={{ email: "", message: "", name: "" }}
      onSubmit={handleOnSubmit}
      validationSchema={validationSchema}
    >
      {({ touched, errors, setFieldValue }) => (
        <Form className="relative flex flex-col max-w-[600px] w-full">
          <FieldName
            touched={touched}
            errors={errors}
            visibility={visibility}
          />
          <FieldEmail
            touched={touched}
            errors={errors}
            visibility={visibility}
          />
          <FieldTextArea
            touched={touched}
            errors={errors}
            visibility={visibility}
          />
          <div
            className={clsx(
              "absolute top-[440px] place-self-end flex justify-center items-center gap-[5px]",
              visibility === "hidden" ? "invisible" : "visible"
            )}
          >
            <StyledIcon
              icon={<FiInstagram />}
              href="https://www.instagram.com/lukaszponiatowski.pl/"
              title="Instagram icon"
            />
            <StyledIcon
              icon={<FaFacebook />}
              href="https://www.facebook.com/%C5%81ukasz-Poniatowski-Fotografia-105409568850494"
              title="Facebook icon"
            />
            <StyledIcon
              icon={<FaLinkedinIn />}
              href="https://www.linkedin.com/in/%C5%82ukasz-poniatowski-6a5bb4238/"
              title="LinkedIn icon"
            />
          </div>
          {state.value === "Loading" ? (
            <BarLoader
              css={override}
              color={theme.colors.secondaryBg}
              loading={true}
            />
          ) : (
            <button
              type="submit"
              className={clsx(
                "self-start p-[15px] bg-mainBg border-2 border-solid border-secondaryBg rounded-sm text-secondaryBg text-xxsmall font-extrabold transition-colors tracking-[2px]",
                "hover:bg-secondaryBg hover:text-mainBg",
                "focus:bg-secondaryBg focus:text-mainBg",
                visibility === "hidden" ? "invisible" : "visible"
              )}
            >
              WYŚLIJ
            </button>
          )}
          {state.value === "Success" && (
            <div className="absolute flex flex-col gap-4 items-center place-self-center top-[30%]">
              <p className="w-full text-secondaryBg text-large font-bold">
                Wiadomość została wysłana!
              </p>
              <button
                onClick={() => {
                  resetForm();
                  setFieldValue("name", "", false);
                  setFieldValue("email", "", false);
                  setFieldValue("message", "", false);
                }}
                ref={buttonRef}
                className={clsx(
                  "place-self-center p-[15px] bg-mainBg border-2 border-solid border-secondaryBg rounded-sm text-secondaryBg text-xxsmall font-bold transition-colors",
                  "hover:bg-secondaryBg hover:text-mainBg",
                  "focus:bg-secondaryBg focus:text-mainBg"
                )}
              >
                Wyślij ponownie
              </button>
            </div>
          )}
          {state.value === "Error" && (
            <div className="absolute flex flex-col gap-4 items-center place-self-center top-[30%]">
              <p className="w-full text-secondaryBg text-large font-bold">
                Ups, coś poszło nie tak!
              </p>
              <button
                onClick={resetForm}
                ref={buttonRef}
                className={clsx(
                  "place-self-center p-[15px] bg-mainBg border-2 border-solid border-secondaryBg rounded-sm text-secondaryBg text-xxsmall font-bold transition-colors",
                  "hover:bg-secondaryBg hover:text-mainBg",
                  "focus:bg-secondaryBg focus:text-mainBg"
                )}
              >
                Wyślij ponownie
              </button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

const StyledIcon = ({
  icon,
  href,
  title,
}: {
  icon: React.ReactElement;
  href: string;
  title: string;
}) => {
  return (
    <Link href={href} passHref>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        title={title}
        className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-transparent text-secondaryBg text-xlarge transition-colors hover:text-darkGrey"
      >
        {icon}
      </a>
    </Link>
  );
};

export { ContactForm };
