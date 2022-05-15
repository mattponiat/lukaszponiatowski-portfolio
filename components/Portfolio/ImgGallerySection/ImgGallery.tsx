import Image from "next/image";
//Styled-components
import styled from "styled-components";
//SRL
import { SRLWrapper } from "simple-react-lightbox";

const ImgGallery = () => {
  const images = [
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image1.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image2.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image3.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image4.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image5.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image6.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image7.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image8.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image9.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image10.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image11.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image12.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image13.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image14.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image15.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image16.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image17.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/Image18.webp",
  ];

  return (
    <SRLWrapper
      options={{
        buttons: {
          showDownloadButton: false,
          showAutoplayButton: false,
          showFullscreenButton: false,
          showThumbnailsButton: false,
        },
        settings: {
          lightboxTransitionSpeed: 0,
          slideAnimationType: "slide",
        },
      }}
    >
      <Wrapper onContextMenu={(e) => e.preventDefault()}>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <Image
              src={image}
              alt=""
              key={index}
              width={300}
              height={300}
              layout="responsive"
              objectFit="cover"
              priority
            />
          </ImageWrapper>
        ))}
      </Wrapper>
    </SRLWrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(100%/3, max(300px, 100%/8)), 1fr)
  );
  gap: 9px;
  max-width: 100%;
  padding-inline: 10px;
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  cursor: zoom-in;
  transition: transform 0.3s ease-in-out, opacity 0.25s ease-out;
  overflow: hidden;

  :hover {
    opacity: 0.8;
  }
`;

export { ImgGallery };
