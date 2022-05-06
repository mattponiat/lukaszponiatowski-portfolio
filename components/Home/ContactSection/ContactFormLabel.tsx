//Styled-components
import styled from "styled-components";
//Radix-ui
import * as LabelPrimitive from "@radix-ui/react-label";

const ContactFormLabel = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {children}
      <StyledSpan>*</StyledSpan>
    </StyledLabel>
  );
};

const StyledLabel = styled(LabelPrimitive.Root)`
  font-size: ${({ theme }) => theme.font.size.semiMedium};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  user-select: none;
  margin-bottom: 2px;
  letter-spacing: 0.4px;
`;

const StyledSpan = styled.span`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.mainRed};
`;

export { ContactFormLabel };
