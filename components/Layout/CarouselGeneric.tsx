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
  last,
}: any) {
  return (
    <>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{
          backgroundImage: `url(https:${image && (image[0] || image)})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
        className={`h-[300px] sm:h-full w-full sm:w-full flex flex-col justify-between items-start bg-cover bg-center  transition-all duration-100 ease-in ${ptsans.className}`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <Text className="text-white/50  uppercase font-semibold" size="xs">
              {city}
            </Text>
            <Text size={"xs"} className="flex items-center text-xs">
              <Badge
                className="m-auto"
                color={price === "Free" ? "green" : "red"}
                size="xs"
                variant="light"
              >
                {price}
              </Badge>
            </Text>
          </div>
          <Title order={3} className={`${classes.title} sm:text-3xl`}>
            {title}
          </Title>
        </div>
        <div>
          <Link href={`/${type}/${slug}`} className="w-full h-full">
            <Button variant="white" className="bg-white" color="dark">
              View {singleName}
            </Button>
          </Link>
        </div>
      </Paper>
      {last}
    </>
  );
}

function GenericCarousel({
  categories,
  title,
}: {
  categories: any[];
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
    <section className="mb-20 sm:pb-6 mt-20">
      <h2 className="mx-auto text-left w-11/12 text-4xl sm:text-5xl text-black font-semibold sm:pb-6 mt-20 max-w-7xl">
        {title}
      </h2>
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
            slideSize={mobile ? "63.333333%" : "23.333333%"}
            slideGap={mobile ? "md" : "md"}
            slidesToScroll={mobile ? 1 : 1}
            height={300}
            initialSlide={1}
          >
            {slides}
            {title === "Where to eat" ||
              (title === "What to do" && (
                <div className=" w-[310px]  h-full border flex justify-center items-center  rounded-md">
                  <Link className="h-[300px]" href={`${"/adventure"}`}>
                    <div className=" w-[280px] relative  flex justify-center  items-center rounded-md underline h-full overflow-clip   text-white">
                      <img
                        src="/images/wp.webp"
                        alt=""
                        className="object-scale blur-sm  w-full h-full bg-black brightness-50 "
                      />
                      <span className="text-black bg-white absolute top-30 px-5 py-1 rounded-lg">
                        View more...
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
          </Carousel>
        )}
      </section>
    </section>
  );
}
export default GenericCarousel;
