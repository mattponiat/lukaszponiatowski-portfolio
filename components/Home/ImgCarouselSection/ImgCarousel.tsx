import * as React from "react";
//Styled-components
import styled from "styled-components";
//React-image-gallery
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImgCarousel = () => {
  const SlideProps = {
    transitionDuration: 500,
    easing: "cubic",
    indicators: () => (
      <div className="each-slideshow-indicator">
        <Dot />
      </div>
    ),
    scale: 1.2,
  };

  const images = [
    {
      url: "/images/IMG_0862.webp",
    },
    {
      url: "/images/IMG_8721-Edit.webp",
    },
    {
      url: "/images/IMG_3209.webp",
    },
    {
      url: "/images/IMG_9380.webp",
    },
    {
      url: "/images/IMG_0686-Edit-Edit.webp",
    },
  ];

  return (
    <Wrapper>
      <Slide {...SlideProps}>
        {images.map((image, index) => {
          return (
            <ImgWrapper key={index + 1}>
              <StyledImage draggable={false} src={image.url} alt="img" />
            </ImgWrapper>
          );
        })}
      </Slide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;

  ul {
    padding: 0;
    margin: 0;
    margin-right: 10px;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-inline: 30px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 5/1.75;
  object-fit: cover;
`;

const Dot = styled.span`
  height: 8px;
  width: 8px;
  background-color: #000000;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
`;

export { ImgCarousel };
