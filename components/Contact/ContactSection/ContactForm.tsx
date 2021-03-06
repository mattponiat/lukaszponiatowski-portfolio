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
import { StyledIcon } from "./StyledIcon";
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
//Icons
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

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
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
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
          <IconWrapper visibility={visibility}>
            <StyledIcon
              icon={<FiInstagram />}
              href="https://www.instagram.com/poniatowskipl/"
            />
            <StyledIcon
              icon={<FaFacebook />}
              href="https://www.facebook.com/%C5%81ukasz-Poniatowski-Fotografia-105409568850494"
            />
            <StyledIcon
              icon={<FaLinkedinIn />}
              href="https://www.linkedin.com/in/%C5%82ukasz-poniatowski-6a5bb4238/"
            />
          </IconWrapper>
          {state.value === "Loading" ? (
            <BarLoader
              css={override}
              color={theme.colors.secondaryBg}
              loading={true}
            />
          ) : (
            <StyledSubmit visibility={visibility} type="submit">
              WY??LIJ
            </StyledSubmit>
          )}
          {state.value === "Success" && (
            <AfterSubmitWrapper>
              <StyledText>Wiadomo???? zosta??a wys??ana!</StyledText>
              <FormResetButton
                onClick={() => {
                  resetForm();
                  setFieldValue("name", "", false);
                  setFieldValue("email", "", false);
                  setFieldValue("message", "", false);
                }}
                ref={buttonRef}
              >
                Wy??lij ponownie
              </FormResetButton>
            </AfterSubmitWrapper>
          )}
          {state.value === "Error" && (
            <AfterSubmitWrapper>
              <StyledText>Ups, co?? posz??o nie tak!</StyledText>
              <FormResetButton onClick={resetForm} ref={buttonRef}>
                Wy??lij ponownie
              </FormResetButton>
            </AfterSubmitWrapper>
          )}
        </StyledForm>
      )}
    </Formik>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Imi?? i nazwisko jest wymagane")
    .min(3, "Wymagane s?? minimum 3 znaki")
    .max(40, "Mo??e by?? maksymalnie 40 znak??w"),
  email: Yup.string()
    .required("Email jest wymagany")
    .email("Niepoprawny email")
    .min(3, "Wymagane s?? minimum 3 znaki")
    .max(40, "Mo??e by?? maksymalnie 40 znak??w"),
  message: Yup.string()
    .required("Wiadomo???? jest wymagana")
    .min(10, "Wymagane jest minimum 10 znak??w")
    .max(4000, "Mo??e by?? maksymalnie 4000 znak??w"),
});

const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
`;

const StyledSubmit = styled.button<{ visibility: string }>`
  align-self: start;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 2px solid ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: ${({ theme }) => theme.font.size.xxsmall};
  font-weight: 800;
  letter-spacing: 2px;
  cursor: pointer;
  visibility: ${(props) => props.visibility};
  transition: background-color 0.3s, color 0.3s;

  :hover,
  :focus-visible {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    color: ${({ theme }) => theme.colors.mainBg};
  }
`;

const override = css`
  display: block;
  margin: 23px auto;
`;

const AfterSubmitWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-self: center;
  top: 30%;
`;

const StyledText = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: 700;
  letter-spacing: 2px;
`;

const IconWrapper = styled.div<{ visibility: string }>`
  position: absolute;
  top: 427px;
  place-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  visibility: ${(props) => props.visibility};
`;

export { ContactForm };
