import * as React from "react";
//Styled-components
import styled from "styled-components";
//React-slideshow-image
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
    {
      url: "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgCarousel6.webp",
    },
  ];

  return (
    <Wrapper onContextMenu={(e) => e.preventDefault()}>
      <Slide {...SlideProps}>
        {images.map((image, index) => {
          return (
            <ImgWrapper key={index + 1}>
              <StyledImage
                draggable={false}
                src={image.url}
                alt="Example images"
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

  @media screen and (max-width: 1024px) {
    padding: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-inline: 30px;
  object-fit: cover;

  @media screen and (max-width: 1024px) {
    padding-inline: 0;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 5/1.75;
`;

const Dot = styled.span`
  display: inline-block;
  height: 7px;
  width: 7px;
  margin: 0 5px;
  background-color: #000000;
  border-radius: 50%;
`;

export { ImgCarousel };
