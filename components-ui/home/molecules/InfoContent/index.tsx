//Styled-components
import styled from "styled-components";
//Types
import { HomeInfoSectionProps } from "types";

const InfoContent = ({ title, quote, about }: HomeInfoSectionProps) => {
  return (
    <Wrapper>
      <StyledHeading>{title}</StyledHeading>
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
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text.homeText};
  font-size: ${({ theme }) => theme.font.size.small};
  line-height: 25.2px;
`;

const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.xxxlarge};
  font-weight: 800;
  letter-spacing: 1.5px;
  line-height: 53px;
`;

const StyledAbout = styled.p`
  max-width: 68ch;
`;

const StyledQuote = styled.p`
  font-weight: 600;
`;

export default InfoContent;
