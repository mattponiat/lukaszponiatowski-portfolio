//Styled-components
import styled from "styled-components";
//Components
import { FormLabel } from "./FormLabel";
//Formik
import { Field } from "formik";
//Types
import { ContactFieldProps } from "types";

const FieldTextArea = ({ touched, errors, visibility }: ContactFieldProps) => {
  return (
    <Wrapper visibility={visibility}>
      <FormLabel htmlFor="message">Wiadomość</FormLabel>
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
  visibility: ${(props) => props.visibility};
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 2px solid ${({ theme }) => theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: 700;
  resize: none;
  transition: box-shadow 0.3s;

  :focus-visible,
  :focus {
    outline: none;
    box-shadow: rgb(44, 62, 80) 0px 0px 4px 0px inset;
  }
`;

const StyledSpan = styled.span`
  height: 20px;
  color: ${({ theme }) => theme.colors.mainRed};
  font-size: ${({ theme }) => theme.font.size.xsmall};
  letter-spacing: 0.4px;
  user-select: none;
`;

export { FieldTextArea };
