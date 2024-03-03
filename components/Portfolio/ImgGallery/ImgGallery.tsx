import Image from "next/image";
//SRL
import { SRLWrapper } from "simple-react-lightbox";

const ImgGallery = () => {
  const images = [
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p1-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p2-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p3-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p4-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p5-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p6-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p7-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p8-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p9-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p10-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p11-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p12-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p13-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p14-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p15-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p16-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p17-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p18-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p19-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p20-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p21-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p22-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p23-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p24-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p25-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p26-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p27-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p28-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p29-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p30-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p31-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p32-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p33-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p34-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p35-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p36-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p37-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p38-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p39-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p40-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p41-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p42-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p43-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p44-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/p45-min.jpg",
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
