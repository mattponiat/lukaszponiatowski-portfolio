//Styles
import styled from "styled-components";
//Components
import { FormLabel, Input } from "@components";
//Formik
import { Field } from "formik";
//Types
import { ContactFieldProps } from "types";

const FieldName = ({ touched, errors, visibility }: ContactFieldProps) => {
  return (
    <Wrapper visibility={visibility}>
      <FormLabel htmlFor="name">Imię i nazwisko</FormLabel>
      <Field type="text" name="name" id="name" as={Input} />
      <StyledSpan>{(touched.name && errors.name) ?? ""}</StyledSpan>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ visibility: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 100%;
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
