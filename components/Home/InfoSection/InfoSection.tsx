//Styled-components
import styled from "styled-components";
//Components
import { InfoContent } from "components/Home/InfoSection/InfoContent";
import { InfoSocialMedia } from "components/Home/InfoSection/InfoSocialMedia";
//Types
import { HomeInfoSectionProps } from "types";

const InfoSection = ({
  titleSize,
  title,
  quote,
  about,
}: HomeInfoSectionProps) => {
  return (
    <Wrapper>
      <InfoContent
        titleSize={titleSize}
        title={title}
        quote={quote}
        about={about}
      />
      <InfoSocialMedia />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 562px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  background-image: url("https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/HomeBackgroundImg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: color-dodge;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export { InfoSection };
