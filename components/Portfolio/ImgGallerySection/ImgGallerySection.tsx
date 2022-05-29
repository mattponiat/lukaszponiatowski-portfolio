//Styled-components
import styled from "styled-components";
//Components
import { ImgGallery } from "@components";

const ImgGallerySection = () => {
  return (
    <Wrapper>
      <ImgGallery />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 100%;
  min-height: 940px;
  margin-bottom: 65px;
  margin-top: 60px;
`;

export { ImgGallerySection };
