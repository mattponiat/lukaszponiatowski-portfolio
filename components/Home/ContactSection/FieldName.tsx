//Styled-components
import styled from "styled-components";
//Components
import { ContactFormLabel } from "./ContactFormLabel";
import { Input } from "./Input";
//Formik
import { Field } from "formik";
//Types
import { ContactFieldProps } from "types";

const FieldName = ({ touched, errors, visibility }: ContactFieldProps) => {
  return (
    <Wrapper visibility={visibility}>
      <ContactFormLabel htmlFor="name">Imię i nazwisko</ContactFormLabel>
      <Field type="text" name="name" as={Input} />
      <StyledSpan>{(touched.name && errors.name) ?? ""}</StyledSpan>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ visibility: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 100%;
  width: 100%;
  margin-bottom: 15px;
  visibility: ${(props) => props.visibility};
`;

const StyledSpan = styled.span`
  height: 20px;
  color: ${({ theme }) => theme.colors.mainRed};
  font-size: ${({ theme }) => theme.font.size.xsmall};
  letter-spacing: 0.4px;
  user-select: none;
`;

export { FieldName };
