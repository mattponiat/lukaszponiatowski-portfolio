//Styled-components
import styled from "styled-components";
//Components
import { FormLabel } from "./FormLabel";
import { Input } from "./Input";
//Formik
import { Field } from "formik";
//Types
import { ContactFieldProps } from "types";

const FieldEmail = ({ touched, errors, visibility }: ContactFieldProps) => {
  return (
    <Wrapper visibility={visibility}>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Field type="email" name="email" as={Input} />
      <StyledSpan>{(touched.email && errors.email) ?? ""}</StyledSpan>
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

export { FieldEmail };
