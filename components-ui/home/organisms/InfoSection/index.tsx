//Styled-components
import styled from "styled-components";
//Components
import InfoContent from "components-ui/home/molecules/InfoContent";
import InfoSocialMedia from "components-ui/home/molecules/InfoSocialMedia";
//Types
import { HomeInfoSectionProps } from "types";

const InfoSection = ({ title, quote, about }: HomeInfoSectionProps) => {
  return (
    <Wrapper>
      <InfoContent title={title} quote={quote} about={about} />
      <InfoSocialMedia />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 60vh;
  padding: 30px;
  margin-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  background-image: url("/images/home-info-section.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: color-dodge;
`;

export default InfoSection;
