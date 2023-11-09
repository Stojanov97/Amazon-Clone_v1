import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useImages from "../Hooks/useImages";

const CarouselComp = () => {
  const { images } = useImages();
  return (
    <>
      <Carousel
        axis="horizontal"
        autoPlay
        interval={4000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {images?.map((image) => {
          return (
            <div key={image}>
              <img src={image} />
            </div>
          );
        })}
      </Carousel>
      <div className="h-[20px] w-full bg-gradient-to-t from-transparent to-gray-400 opacity-50"></div>
    </>
  );
};

export default CarouselComp;
