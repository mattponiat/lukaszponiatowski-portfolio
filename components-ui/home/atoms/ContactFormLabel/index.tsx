//Styled-components
import styled from "styled-components";

const ContactFormLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledLabel>
      {children}
      <StyledSpan>*</StyledSpan>
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  margin-bottom: 1px;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.semiMedium};
  font-family: ${({ theme }) => theme.font.family[800]};
  letter-spacing: 0.4px;
`;

const StyledSpan = styled.span`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.mainRed};
`;

export default ContactFormLabel;
