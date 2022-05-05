//Styled-components
import styled from "styled-components";

const ContactHeading = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <StyledSpan>KONTAKT</StyledSpan>
        <StyledHeading>NAPISZ DO MNIE</StyledHeading>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 333px;
  width: 100%;
  margin-bottom: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-weight: 800;
  line-height: 0;
`;

const StyledSpan = styled.span`
  align-self: center;
  margin-right: 105px;
  font-size: ${({ theme }) => theme.font.size.semiMedium};
  letter-spacing: 4px;

  :before {
    content: "";
    display: block;
    width: 35px;
    height: 3px;
    margin-left: -52px;
    background-color: ${({ theme }) => theme.colors.mainRed};
  }
`;

const StyledHeading = styled.h1`
  max-width: 10ch;
  margin-top: 12px;
  font-size: ${({ theme }) => theme.font.size.xxxlarge};
  line-height: 55px;
`;

export default ContactHeading;
