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
  singleName,
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
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
      className="h-[300px] sm:h-full w-full flex flex-col justify-between items-start bg-cover bg-center  transition-all duration-100 ease-in"
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
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        {/* <Text className="text-white/50 mt-2 text-xs line-clamp-3"> */}
        {/*   {description} */}
        {/* </Text> */}
        <Rating value={rating} size="xs" readOnly className="mt-2" />
      </div>
      <div>
        <Link href={`/${type}/${slug}`} className="w-full h-full">
          <Button variant="white" className="bg-white" color="dark">
            View {singleName}
          </Button>
        </Link>
      </div>
    </Paper>
  );
}

function BottomCarousel({ categories }: { categories: string[] }) {
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
    <Carousel
      // slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
      className="bottomCarousel mt-10"
      slideSize={mobile ? "63.333333%" : "23.333333%"}
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
export default BottomCarousel;
