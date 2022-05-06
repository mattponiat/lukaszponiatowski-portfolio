//Styled-components
import styled from "styled-components";
//Components
import { ListItem } from "./ListItem";
//Icons
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <StyledSpan>KONTAKT</StyledSpan>
        <StyledHeading>NAPISZ DO MNIE</StyledHeading>
      </HeadingWrapper>
      <ListWrapper>
        <ListItem icon={<FaEnvelope />} text="kontakt@lukaszponiatowski.pl" />
        <ListItem icon={<FaPhone />} text="+48 724241144" />
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 488px;
  width: 100%;
  min-height: inherit;
  padding: 0 30px;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 333px;
  width: 100%;
  margin-bottom: 20px;
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

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 333px;
  width: 100%;
  margin-bottom: 50px;
`;

export { ContactDetails };
