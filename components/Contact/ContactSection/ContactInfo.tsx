//Styled-components
import styled from "styled-components";
//Components
import { ListElement } from "./ListElement";
//Icons
import { IoMdMail } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";

const ContactInfo = () => {
  return (
    <Wrapper>
      <StyledHeading>NAPISZ DO MNIE</StyledHeading>
      <StyledText>
        Jeśli podobają się Państwu moje zdjęcia, zapytajcie proszę o termin,
        ofertę oraz warunki współpracy.
        <br />
        Na wszystkie maile staram się odpowiedzieć jak najszybciej.
      </StyledText>
      <ListElement icon={<AiFillPhone />} text="+48 724 241 144" />
      <ListElement icon={<IoMdMail />} text="kontakt@lukaszponiatowski.pl" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  max-width: 600px;
  width: 100%;
  padding: 0 10px;

  @media screen and (max-width: 1024px) {
    align-self: center;
  }
`;

const StyledText = styled.p`
  margin: 0;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: ${({ theme }) => theme.font.size.xlarge};
  letter-spacing: 0.4px;

  @media screen and (max-width: 1024px) {
    text-align: justify;
    font-size: ${({ theme }) => theme.font.size.large};
    margin-bottom: 25px;
  }
`;

const StyledHeading = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: ${({ theme }) => theme.font.size.xxxlarge};
  font-weight: 800;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export { ContactInfo };
