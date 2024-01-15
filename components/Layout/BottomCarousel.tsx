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
  type,
}: any) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url(https:${
          image[Math.floor(Math.random()) * image.length]
        })`,
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      className="car h-[300px] sm:h-full w-full flex flex-col justify-between items-start bg-cover bg-center  transition-all duration-100 ease-in"
    >
      <div className="">
        <div className="flex items-center justify-between">
          <Text
            className="text-white/50 sm:mb-1 uppercase font-semibold"
            size="xs"
          >
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
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className="text-white/50 mt-2 text-xs line-clamp-3">
          {description}
        </Text>
        <Rating value={rating} size="xs" readOnly className="mt-2" />
      </div>
      <div>
        <Link href={`/${type}/${slug}`} className="w-full h-full">
          <Button variant="white" className="bg-white" color="dark">
            Read more
          </Button>
        </Link>
      </div>
    </Paper>
  );
}

function BottomCarousel({ categories }: { categories: string[] }) {
  console.log(categories);

  const items = categories.map((cat: any) => {
    const titleWithoutEmoji = cat?.fields?.title.replace(/\p{Emoji}/gu, "");

    return {
      title: titleWithoutEmoji,
      image: cat?.fields?.images.map((img: any) => img?.fields?.file?.url),
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
  const slides = items.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      // slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
      // className={classes}
      slideSize={mobile ? "63.333333%" : "23.333333%"}
      slideGap={"md"}
      align="start"
      slidesToScroll={mobile ? 1 : 1}
      height={300}
      withControls={mobile ? false : true}
      // loop
      initialSlide={1}
    >
      {slides}
    </Carousel>
  );
}
export default BottomCarousel;
