"use client";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
// import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

function CarouselHero() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      ]}
    >
      <Carousel.Slide>
        <div className="w-full h-40 flex flex-col rounded-t-md overflow-hidden relative">
          <Image
            src="https://th.bing.com/th/id/OIG.XUrUyoz7q_uPku3p7E.0?pid=ImgGn"
            fill
            alt="image"
            className="block"
          />
          <span className="absolute left-0 top-4 pr-2 py-1 rounded-r-full text-xs text-black bg-white  ">
            {/* 📍 {data.city} */}
          </span>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="w-full h-40 flex flex-col rounded-t-md overflow-hidden relative">
          <Image
            src="https://th.bing.com/th/id/OIG.XUrUyoz7q_uPku3p7E.0?pid=ImgGn"
            fill
            alt="image"
            className="block"
          />
          <span className="absolute left-0 top-4 pr-2 py-1 rounded-r-full text-xs text-black bg-white  ">
            {/* 📍 {data.city} */}
          </span>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="w-full h-40 flex flex-col rounded-t-md overflow-hidden relative">
          <Image
            src="https://th.bing.com/th/id/OIG.XUrUyoz7q_uPku3p7E.0?pid=ImgGn"
            fill
            alt="image"
            className="block"
          />
          <span className="absolute left-0 top-4 pr-2 py-1 rounded-r-full text-xs text-black bg-white  ">
            {/* 📍 {data.city} */}
          </span>
        </div>
      </Carousel.Slide>

      {/* ...other slides */}
    </Carousel>
  );
}

export default CarouselHero;
