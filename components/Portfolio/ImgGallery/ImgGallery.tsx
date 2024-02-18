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
      <div
        onContextMenu={(e) => e.preventDefault()}
        className="grid grid-cols-portfolioGrid gap-[9px] max-w-full px-2.5"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="max-w-full cursor-zoom-in transition-all overflow-hidden hover:opacity-80"
          >
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
          </div>
        ))}
      </div>
    </SRLWrapper>
  );
};

export { ImgGallery };
