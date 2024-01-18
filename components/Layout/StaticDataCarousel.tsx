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

import { ImNewTab } from "react-icons/im";

interface CardProps {
  image: string;
  category: string;
  categories: any;
}

function Card({ image, url, city, rating, price, type }: any) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url(${image})`,
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      className="h-[300px] sm:h-full w-full  flex flex-col justify-between items-start bg-cover bg-center  transition-all duration-100 ease-in"
    >
      <div className="w-full group">
        <div className="flex items-center justify-between w-full">
          {city && (
            <Text className="text-white/50  uppercase font-semibold" size="xs">
              {type}
            </Text>
          )}
          <Text size={"xs"} className="flex items-center text-xs">
            {price && (
              <Badge
                className="m-auto"
                color={price === "Free" ? "green" : "red"}
                size="xs"
                variant="light"
              >
                {price}
              </Badge>
            )}
          </Text>
        </div>
        <Title
          order={3}
          className={classes.title}
          style={type === "city" ? { fontSize: "3rem" } : { fontSize: "" }}
        >
          {city}
        </Title>
        {rating && (
          <Rating value={rating} size="xs" readOnly className="mt-2" />
        )}
      </div>

      {type === "city" ? (
        <Link href={`${url}`}>
          <Button variant="white" className="bg-white" color="dark">
            View {city}
          </Button>
        </Link>
      ) : (
        <div>
          <a href={url} className="w-full h-full">
            <ImNewTab className="w-8 h-8 text-white" />
          </a>
        </div>
      )}
    </Paper>
  );
}

function StaticDataCarousel({ categories }: { categories: any[] }) {
  const items = categories.map((cat: any) => {
    return {
      title: cat?.fields?.title,
      image: cat?.image,
      city: cat?.name,
      rating: cat?.fields?.rating,
      type: cat?.type,
      slug: cat?.fields?.slug,
      paid: cat?.fields?.paid,
      url: cat?.url,
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
      className="bottomCarousel mt-10"
      slideSize={mobile ? "63.333333%" : "21.333333%"}
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
    </Carousel>
  );
}
export default StaticDataCarousel;
