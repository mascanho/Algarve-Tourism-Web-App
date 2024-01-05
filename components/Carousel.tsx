"use client";
import Link from "next/link";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
// import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

function CarouselHero({
  categories,
  title,
  subTitle,
  cities,
  restaurants,
  carRentals,
}: any) {
  return (
    <>
      <section className="w-full max-w-7xl sm:w-11/12 m-auto px-4 sm:px-0 mt-20   font-semibold">
        <div className="space-y-4 mb-8 text-center">
          <h3 className=" text-black text-4xl text-center">{title}</h3>
          <h4 className="pb-9">{subTitle}</h4>
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
          {categories &&
            categories?.map((cat: any, index: string) => (
              <Carousel.Slide key={index}>
                <Link href={`/${cat?.fields?.type}/${cat?.fields?.slug}`}>
                  <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
                    <img
                      src={`https:${cat?.fields?.mainImage.fields?.file?.url}`}
                      alt={cat?.fields?.title}
                      className="block h-full"
                    />
                    <span className="absolute left-0 top-4 pr-2 py-1 pl-1 rounded-r-full text-xs text-black bg-white  ">
                      📍 {cat?.fields?.title}
                    </span>
                  </div>
                </Link>
              </Carousel.Slide>
            ))}

          {cities &&
            cities?.map((city: any, index: string) => (
              <Carousel.Slide key={index}>
                <Link href={`/algarve/${city?.route}`}>
                  <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
                    <img
                      src={city?.image}
                      alt="image"
                      className="block h-full"
                    />
                    <span className="absolute left-0 top-4 pr-2 py-1 pl-1 rounded-r-full text-xs text-black bg-white  ">
                      📍 {city?.name}
                    </span>
                  </div>
                </Link>
              </Carousel.Slide>
            ))}

          {restaurants &&
            restaurants?.map((rest: any, index: string) => (
              <Carousel.Slide key={index}>
                <Link href={`/restaurants/${rest?.fields.slug}`}>
                  <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
                    <img
                      src={rest?.fields.mainImage.fields?.file?.url}
                      alt={rest?.fields.title}
                      className="block h-full"
                    />
                    <span className="absolute left-0 top-4 pr-2 py-1 pl-1 rounded-r-full text-xs text-black bg-white  ">
                      📍 {rest?.fields.title}
                    </span>
                  </div>
                </Link>
              </Carousel.Slide>
            ))}

          {carRentals &&
            carRentals?.map((car: any, index: string) => (
              <Carousel.Slide key={index}>
                <Link target="_blank" href={car?.url}>
                  <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
                    <img
                      src={car?.image}
                      alt={car?.name}
                      className="block h-full"
                    />
                    <span className="absolute left-0 top-4 pr-2 py-1 pl-1 rounded-r-full text-xs text-black bg-white flex items-center  ">
                      🚙 {car?.name}
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
