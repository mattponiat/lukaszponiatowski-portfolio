//Styled-components
import styled from "styled-components";
//Components
import { ImgCarousel } from "./ImgCarousel";

const ImgCarouselSection = () => {
  return (
    <Wrapper>
      <ImgCarousel />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 100%;
  min-height: fit-content;
  margin-bottom: 34px;
  margin-top: 70px;
`;

export { ImgCarouselSection };
