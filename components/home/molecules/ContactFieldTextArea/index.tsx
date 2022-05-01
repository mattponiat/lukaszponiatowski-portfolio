//Styled-components
import styled from "styled-components";
//Components
import ContactFormLabel from "components-ui/home/atoms/ContactFormLabel";
//Formik
import { Field } from "formik";
//Types
import { ContactFieldProps } from "types";

const ContactFieldTextArea = ({
  touched,
  errors,
  visibility,
}: ContactFieldProps) => {
  return (
    <Wrapper visibility={visibility}>
      <ContactFormLabel htmlFor="message">Wiadomość</ContactFormLabel>
      <Field type="text" name="message" as={StyledTextArea} />
      <StyledSpan>{(touched.message && errors.message) ?? ""}</StyledSpan>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ visibility: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 100%;
  width: 100%;
  visibility: ${(props) => props.visibility};
`;

const StyledTextArea = styled.textarea`
  max-width: 100%;
  width: 100%;
  min-height: 150px;
  padding: 10px;
  margin-bottom: 3px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  box-shadow: 0 0 10px hsl(0, 0%, 0%);
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  resize: none;

  :focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.text.homeText};
  }
`;

const StyledSpan = styled.span`
  height: 20px;
  color: ${({ theme }) => theme.colors.mainRed};
  font-size: ${({ theme }) => theme.font.size.xsmall};
  letter-spacing: 0.4px;
`;

export default ContactFieldTextArea;
