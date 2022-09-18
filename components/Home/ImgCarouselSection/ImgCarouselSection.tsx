//Styles
import styled from "styled-components";
//Components
import { ImgCarousel } from "@components";

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

  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export { ImgCarouselSection };
