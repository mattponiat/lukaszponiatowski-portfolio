//Styled-components
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <StyledTopText>SKONTAKTUJMY SIĘ</StyledTopText>
        <StyledBottomText>NAPISZ A PRZEDSTAWIĘ CI OFERTĘ</StyledBottomText>
      </TextWrapper>
      <ContactInfoWrapper>
        <span>+48 724241144</span>
        <span>kontakt@lukaszponiatowski.pl</span>
      </ContactInfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 230px;
  min-height: 204px;
  max-width: 100%;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.text.homeHeading};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 416px;
`;

const StyledTopText = styled.span`
  font-size: ${({ theme }) => theme.font.size.xxlarge};
  font-weight: 900;
  line-height: 35px;
  letter-spacing: 0.5px;
`;

const StyledBottomText = styled.span`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: 200;
  letter-spacing: 0.3px;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 450px;
  width: 100%;
  font-weight: 100;
  letter-spacing: 1px;
`;

export { Footer };
