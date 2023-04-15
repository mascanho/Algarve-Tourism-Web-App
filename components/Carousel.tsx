"use client";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
// import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

function CarouselHero() {
  return (
    <>
      <section className="w-full sm:w-10/12 m-auto px-4 sm:px-0 mt-20 font-semibold">
        <div className="space-y-4 mb-8 text-center">
          <h3 className=" text-black text-3xl text-center">Image Gallery</h3>
          <h4>
            A collection of some of the most beautiful places in the world
          </h4>
        </div>
        <Carousel
          withIndicators
          height={300}
          slideSize="33.333333%"
          slideGap="sm"
          loop
          align="end"
          breakpoints={[
            { maxWidth: "md", slideSize: "100%", slideGap: 0 },
            { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
          ]}
          slidesToScroll={1}
        >
          <Carousel.Slide>
            <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
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
            <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
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
            <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
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
            <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
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
            <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
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
      </section>
    </>
  );
}

export default CarouselHero;
