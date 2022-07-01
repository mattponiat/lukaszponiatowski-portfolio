import Image from "next/image";
//Styled-components
import styled from "styled-components";
//SRL
import { SRLWrapper } from "simple-react-lightbox";

const ImgGallery = () => {
  const images = [
    "http://data.lukaszponiatowski.pl/ImgGallery/1.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/2.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/3.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/4.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/5.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/6.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/7.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/8.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/9.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/10.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/11.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/12.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/13.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/14.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/15.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/16.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/17.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/18.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/19.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/20.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/21.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/22.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/23.webp",
    "http://data.lukaszponiatowski.pl/ImgGallery/24.webp",
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
