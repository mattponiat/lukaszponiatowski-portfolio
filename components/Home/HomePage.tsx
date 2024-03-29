import clsx from "clsx";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useWindowSize } from "usehooks-ts";

const HomePage = () => {
  const images = [
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/HomePage/h1.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/HomePage/h2.jpg",
  ];

  const mobileImages = [
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/HomePage/h1-min.jpg",
    "https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/HomePage/h2-min.jpg",
  ];

  const { width } = useWindowSize();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (width <= 768) {
      const randomIndex = Math.floor(Math.random() * mobileImages.length);
      setCurrentImageIndex(randomIndex);
    } else {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImageIndex(randomIndex);
    }
  }, []);

  return (
    <main
      className={clsx(
        "max-w-full w-full",
        width <= 768
          ? "min-h-[calc(100vh-70px)] h-full"
          : "min-h-[calc(100vh-70px)] h-full"
      )}
    >
      <div className="max-w-full w-full h-fit">
        <Image
          width={0}
          height={0}
          layout="fill"
          objectFit="cover"
          src={
            width <= 768
              ? mobileImages[currentImageIndex]
              : images[currentImageIndex]
          }
          alt={`Home banner ${currentImageIndex + 1}`}
        />
      </div>
    </main>
  );
};

export { HomePage };
