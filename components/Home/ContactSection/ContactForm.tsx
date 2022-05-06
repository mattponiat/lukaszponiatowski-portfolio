import * as React from "react";
//Styled-components
import styled from "styled-components";
//Emotion
import { css } from "@emotion/react";
//Components
import { FieldName } from "./FieldName";
import { FieldEmail } from "./FieldEmail";
import { FieldTextArea } from "./FieldTextArea";
import { FormResetButton } from "./FormResetButton";
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
        "https://qd553leofc.execute-api.eu-west-3.amazonaws.com/default/endEmailFromContactForm",
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
            <SuccessWrapper>
              <StyledText>Wiadomość została wysłana!</StyledText>
              <FormResetButton type="reset" onClick={resetForm}>
                Wyślij ponownie
              </FormResetButton>
            </SuccessWrapper>
          )}
          {state.value === "Error" && (
            <ErrorWrapper>
              <StyledText>Ups, coś poszło nie tak!</StyledText>
              <FormResetButton onClick={resetForm}>
                Wyślij ponownie
              </FormResetButton>
            </ErrorWrapper>
          )}
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
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  visibility: ${(props) => props.visibility};
`;

const override = css`
  display: block;
  margin: 31px auto;
`;

const SuccessWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-self: center;
  top: 30%;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-self: center;
  top: 30%;
`;

const StyledText = styled.p`
  max-width: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: 700;
  letter-spacing: 2px;
`;

export { ContactForm };
