import * as React from "react";
//Styled-components
import styled from "styled-components";
//Components
import ContactFieldName from "components/home/molecules/ContactFieldName";
import ContactFieldEmail from "components/home/molecules/ContactFieldEmail";
import ContactFieldTextArea from "components/home/molecules/ContactFieldTextArea";
import ContactSuccess from "components-ui/home/molecules/ContactSuccess";
import ContactError from "components-ui/home/molecules/ContactError";
//Xstate
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
//Types
import { FormValues } from "types";
//Formik
import { Form, Formik } from "formik";
//Yup
import * as Yup from "yup";
//Loaders
import BarLoader from "react-spinners/BarLoader";
//Emotion
import { css } from "@emotion/react";
//Theme
import theme from "theme/theme";

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

type StateType = "Default" | "Loading" | "Error" | "Success";

const ContactForm = () => {
  const [state, send] = useMachine(formMachine);
  const visibility = ["Success", "Error"].includes(state.value as StateType)
    ? "hidden"
    : "visible";

  const resetForm = () => send("RESET");

  const handleOnSubmit = async (values: FormValues) => {
    try {
      send("SEND");
      const response = await fetch(
        "https://qd553leofc.execute-api.eu-west-3.amazonaws.com/default/sendEmailFromContactForm",
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

  return (
    <Formik
      initialValues={{ email: "", message: "", name: "" }}
      onSubmit={handleOnSubmit}
      validationSchema={validationSchema}
    >
      {({ touched, errors }) => (
        <StyledForm>
          <ContactFieldName
            touched={touched}
            errors={errors}
            visibility={visibility}
          />
          <ContactFieldEmail
            touched={touched}
            errors={errors}
            visibility={visibility}
          />
          <ContactFieldTextArea
            touched={touched}
            errors={errors}
            visibility={visibility}
          />
          {state.value === "Loading" ? (
            <BarLoader
              css={override}
              color={theme.colors.text.homeHeading}
              loading={true}
            />
          ) : (
            <StyledSubmit visibility={visibility} type="submit">
              WYŚLIJ
            </StyledSubmit>
          )}
          {state.value === "Success" && (
            <ContactSuccess resetForm={resetForm} />
          )}
          {state.value === "Error" && <ContactError resetForm={resetForm} />}
        </StyledForm>
      )}
    </Formik>
  );
};

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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 488px;
  width: 100%;
  min-height: 100%;
  position: relative;
`;

const StyledSubmit = styled.button<{ visibility: string }>`
  align-self: center;
  padding: 15px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.mainRed};
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.xxsmall};
  font-family: ${({ theme }) => theme.font.family[700]};
  letter-spacing: 2px;
  cursor: pointer;
  visibility: ${(props) => props.visibility};
`;

const override = css`
  display: block;
  margin: 31px auto;
`;

export default ContactForm;
