//Styled-components
import styled from "styled-components";

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

const StyledLabel = styled.label`
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.semiMedium};
  font-weight: ${({ theme }) => theme.font.weight[800]};
  letter-spacing: 0.4px;
`;

const StyledSpan = styled.span`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.mainRed};
`;

export default ContactFormLabel;
