"use client";

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

interface CardProps {
  image: string;
  title: string;
  category: string;
  categories: string[];
}

function Card({
  image,
  title,
  city,
  category,
  description,
  rating,
  price,
  slug,
  singleName,
  type,
}: any) {
  return (
    <Link href={`/${type}/${slug}`} className="w-full h-full">
      <Paper
        shadow="md"
        p="xl"
        radius="lg"
        style={{
          backgroundImage: `url(https:${
            image[Math.floor(Math.random()) * image.length]
          })`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
        className="h-56 sm:h-full w-56 sm:w-full flex flex-col justify-between items-start bg-cover bg-center  transition-all duration-100 ease-in"
      >
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <Text className="text-white/50  uppercase font-semibold" size="xs">
              {city}
            </Text>
          </div>
          <span className="text-3xl font-bold text-white">{title}</span>
        </div>
        <div className="sm:flex hidden">
          <Button variant="white" className="bg-white" color="dark">
            View {singleName}
          </Button>
        </div>
      </Paper>
    </Link>
  );
}

function BottomCarousel({
  categories,
  title,
}: {
  categories: string[];
  title: string;
}) {
  const { inView, ref } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "40px 0px",
  });
  const items = categories.map((cat: any) => {
    const titleWithoutEmoji = cat?.fields?.title.replace(/\p{Emoji}/gu, "");

    // Ensure originalText is a string before using replace
    let newType;
    if (
      cat?.fields?.type[0] === "beaches" ||
      cat?.fields?.type[0] === "events" ||
      cat?.fields?.type[0] === "adventures" ||
      cat?.fields?.type[0] === "sports" ||
      cat?.fields?.type[0] === "events"
    ) {
      newType = cat?.fields?.type[0].replace(/s$/, "");

      if (cat?.fields?.type[0] === "beaches") {
        newType = "beach";
      }
    } else {
      newType = cat?.fields?.type[0].replace(/s$/, "");
    }
    if (cat?.fields?.type[0] === "sports") {
      newType = cat?.fields?.type[0].replace(/s$/, "");
    }

    return {
      title: titleWithoutEmoji,
      image: cat?.fields?.images.map((img: any) => img?.fields?.file?.url),
      city: cat?.fields?.city,
      description: cat?.fields?.shortDescription,
      rating: cat?.fields?.rating,
      price: cat?.fields?.price,
      type: cat?.fields?.type,
      slug: cat?.fields?.slug,
      singleName: newType,
    };
  });

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = items.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <section className="sm:mt-20 ">
      <h2 className="max-w-7xl text-left sm:pb-6 mx-auto text-3xl sm:text-5xl w-11/12  font-semibold text-black">
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
            // slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
            className="bottomCarousel mt-10 w-full"
            slideSize={mobile ? "43.333333%" : "23.333333%"}
            slideGap={"md"}
            // align="start"
            slidesToScroll={mobile ? 1 : 1}
            height={300}
            // withControls={mobile ? false : true}
            // withControls={false}
            // loop
            initialSlide={1}
          >
            {slides}
            <div className="flex items-center text-center">
              <Link href="/beaches/" className="w-40 m-auto text-black">
                <div className="w-40 text-xl underline m-auto text-black">
                  view all
                </div>
              </Link>
            </div>
          </Carousel>
        )}
      </section>
    </section>
  );
}
export default BottomCarousel;
