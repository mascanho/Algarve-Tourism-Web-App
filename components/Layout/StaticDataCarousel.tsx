"use client";

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Button, Paper, Title, useMantineTheme, Text } from "@mantine/core";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { ImNewTab } from "react-icons/im";

function Card({ image, url, city, type, route }: any) {
  return (
    <Link href={type === "category" ? route : "/algarve/" + route}>
      <Paper
        // shadow="md"
        p="xl"
        radius="lg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
        className="h-56 sm:h-full w-56 sm:w-[300px]  flex flex-col justify-between items-start bg-cover bg-center  transition-all duration-100 ease-in"
      >
        <div className="group">
          <div className="flex items-center justify-between w-fit">
            {city && (
              <Text
                className="text-white/50  uppercase font-semibold m-0"
                size="xs"
              >
                {type === "city" ? "Algarve" : type}
              </Text>
            )}
          </div>
          <Title
            order={3}
            className={
              type === "city" ? "text-4xl text-white" : "text-white text-2xl"
            }
          >
            {city}
          </Title>
        </div>

        {type === "city" || type === "category" ? (
          <Button
            variant="white"
            className="bg-white sm:flex hidden"
            color="dark"
          >
            {type === "city" ? "View " + city : "View "}
          </Button>
        ) : (
          <div>
            <a href={url} className="w-full h-full">
              <ImNewTab className="w-8 h-8 text-white" />
            </a>
          </div>
        )}
      </Paper>
    </Link>
  );
}

function StaticDataCarousel({
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
      route: cat?.route,
    };
  });

  console.log(categories, "where are the categories");

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = items.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <section className="sm:mt-20 sm:mb-0 mb-10 mt-14 w-11/12 sm:w-11/12 max-w-7xl mx-auto">
      <h2 className="mx-auto text-left text-3xl sm:text-5xl text-black font-semibold sm:pb-6">
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
            className="bottomCarousel mt-10 mx-auto w-full  "
            slideSize={mobile ? 100 / 3 + "%" : 100 / 5 + "%"}
            slideGap={mobile ? "xs" : "xl"}
            align={mobile ? "start" : "start"}
            slidesToScroll={mobile ? 1 : 1}
            height={!mobile ? 300 : 230}
            // withControls={mobile ? false : true}
            // withControls={false}
            // loop
            styles={{
              control: {
                "&[data-inactive]": {
                  opacity: 0,
                  cursor: "default",
                },
              },
            }}
            initialSlide={0}
          >
            {slides}
          </Carousel>
        )}
      </section>
    </section>
  );
}
export default StaticDataCarousel;
