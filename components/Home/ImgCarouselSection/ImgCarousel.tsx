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
      url: "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgCarousel1.webp",
    },
    {
      url: "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgCarousel2.webp",
    },
    {
      url: "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgCarousel3.webp",
    },
    {
      url: "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgCarousel4.webp",
    },
    {
      url: "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgCarousel5.webp",
    },
  ];

  return (
    <Wrapper>
      <Slide {...SlideProps}>
        {images.map((image, index) => {
          return (
            <ImgWrapper key={index + 1}>
              <StyledImage
                draggable={false}
                src={image.url}
                alt="example images"
              />
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
  object-fit: cover;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 5/1.75;
`;

const Dot = styled.span`
  height: 7px;
  width: 7px;
  background-color: #000000;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
`;

export { ImgCarousel };
