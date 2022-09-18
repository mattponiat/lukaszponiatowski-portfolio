import Image from "next/image";
//Styles
import styled from "styled-components";
//SRL
import { SRLWrapper } from "simple-react-lightbox";

const ImgGallery = () => {
  const images = [
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/1.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/2.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/3.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/4.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/5.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/6.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/7.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/8.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/9.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/10.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/11.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/12.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/13.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/14.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/15.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/16.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/17.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/18.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/19.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/20.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/21.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/22.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/23.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/24.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/25.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/26.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/27.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/28.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/29.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/30.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/31.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/32.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/33.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/34.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/35.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/36.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/37.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/38.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/39.webp",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/40.webp",
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
              quality={100}
              sizes="(max-width: 767px) 250px, (max-width: 991px) 260px, 400px"
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
