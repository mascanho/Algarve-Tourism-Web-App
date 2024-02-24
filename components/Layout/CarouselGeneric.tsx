"use client";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Button,
  Paper,
  Title,
  useMantineTheme,
  Text,
  Rating,
  Badge,
} from "@mantine/core";
import classes from "./BottomCarousel.module.css";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { PT_Sans } from "next/font/google";

interface CardProps {
  image: string;
  category: string;
  categories: any;
}

const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

function Card({
  image,
  title,
  city,

  price,
  slug,
  singleName,
  type,
}: any) {
  return (
    <>
      <Link href={`/${type}/${slug}`} className="w-full h-full">
        <Paper
          // shadow="sm"
          p="xl"
          radius="lg"
          style={{
            backgroundImage: `url(https:${image && (image[1] || image)})`,
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
          className="h-56 sm:h-full w-60 sm:w-full lg:w-72 xl:w-full  sm:max-w-lg flex flex-col justify-between items-start bg-cover bg-center  transition-all duration-100 ease-in"
        >
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <Text
                className="text-white/50  uppercase font-semibold"
                size="xs"
              >
                {city}
              </Text>
            </div>
            <span className={`text-2xl sm:text-3xl text-white font-bold`}>
              {title}
            </span>
          </div>
          <div>
            <Button
              variant="white"
              className="bg-white sm:inline hidden"
              color="dark"
            >
              View {singleName}
            </Button>
          </div>
        </Paper>
      </Link>
    </>
  );
}

function GenericCarousel({
  categories,
  title,
}: {
  categories: any;
  title: string;
}) {
  const { inView, ref } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "40px 0px",
  });
  const items = categories.map((cat: any, index: any) => {
    return {
      title: cat?.fields?.title,
      image: Array.isArray(cat?.fields?.images)
        ? cat?.fields?.images?.map((img: any) => img?.fields?.file?.url)
        : cat?.fields?.image,
      city: cat?.fields?.city,
      description: cat?.fields?.shortDescription,
      rating: cat?.fields?.rating,
      price: cat?.fields?.price,
      type: cat?.fields?.type,
      slug: cat?.fields?.slug,
    };
  });

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = items.map((item, index) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} last="last" />
    </Carousel.Slide>
  ));

  return (
    <section className="sm:mb-20 sm:pb-6 sm:mt-20 mt-14 mb-10">
      <div>
        <h2 className="mx-auto text-left w-11/12 text-3xl sm:text-5xl text-black font-semibold sm:pb-6 sm:mt-20 max-w-7xl">
          {title}
        </h2>
      </div>
      <section
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 1ms ease-in-out", // Adjust the duration as needed (e.g., 2s)
        }}
      >
        {inView && (
          <Carousel
            className={`bottomCarousel mt-10 ${ptsans.className}`}
            slideSize={mobile ? "43.333333%" : "21.333333%"}
            slideGap={mobile ? "md" : "md"}
            slidesToScroll={mobile ? 1 : 1}
            height={!mobile ? 300 : 230}
            initialSlide={1}
          >
            {slides}
            <Link
              className="h-56 rounded-xl sm:h-[300px] w-full flex justify-center items-center"
              href={`${title === "Where to eat" ? "/restaurants" : "/adventure"}`}
            >
              <div className="w-40 text-xl underline flex justify-center m-auto text-black">
                view all
              </div>
            </Link>
          </Carousel>
        )}
      </section>
    </section>
  );
}
export default GenericCarousel;
