"use client";
import Link from "next/link";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
// import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

function CarouselHero({ categories }: any) {
  return (
    <>
      <section className="w-full max-w-7xl sm:w-11/12 m-auto px-4 sm:px-0   font-semibold">
        <div className="space-y-4 mb-8 text-center">
          <h3 className=" text-black text-4xl text-center">Image Gallery</h3>
          <h4 className="pb-9">
            A collection of some of the most beautiful places in the world
          </h4>
        </div>
        <Carousel
          height={280}
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
          {categories?.map((cat: any) => (
            <Carousel.Slide key={cat.id}>
              <Link href={`/${cat?.fields?.type}/${cat?.fields?.slug}`}>
                <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
                  <img
                    src={`https:${cat?.fields?.mainImage.fields?.file?.url}`}
                    alt="image"
                    className="block h-full"
                  />
                  <span className="absolute left-0 top-4 pr-2 py-1 pl-1 rounded-r-full text-xs text-black bg-white  ">
                    📍 {cat?.fields?.title}
                  </span>
                </div>
              </Link>
            </Carousel.Slide>
          ))}

          {/* ...other slides */}
        </Carousel>
      </section>
    </>
  );
}

export default CarouselHero;
