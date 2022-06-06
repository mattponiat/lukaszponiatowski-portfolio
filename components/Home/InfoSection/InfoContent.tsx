//Styled-components
import styled from "styled-components";
//Types
import { HomeInfoSectionProps } from "types";

const InfoContent = ({
  titleSize,
  title,
  quote,
  about,
}: HomeInfoSectionProps) => {
  return (
    <Wrapper>
      <StyledHeading titleSize={titleSize}>{title}</StyledHeading>
      <TextWrapper>
        {quote ? (
          <StyledQuote>
            <i>{quote}</i>
          </StyledQuote>
        ) : null}
        <StyledAbout>{about}</StyledAbout>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text.homeText};
  font-size: ${({ theme }) => theme.font.size.semiMedium};
  line-height: 25.2px;
`;

const StyledHeading = styled.h1<{ titleSize: number }>`
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ titleSize }) => titleSize}px;
  font-weight: 800;
  letter-spacing: 1.5px;
  line-height: 53px;

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.xxlarge};
    line-height: normal;
  }
`;

const StyledAbout = styled.p`
  max-width: 68ch;
  color: ${({ theme }) => theme.colors.text.homeText};

  @media screen and (max-width: 1024px) {
    max-width: fit-content;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.semiMedium};
  }
`;

const StyledQuote = styled.p`
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.semiMedium};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export { InfoContent };
