"use client";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

function CarouselEl({ children }) {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <Carousel
      slideSize="38.333333%"
      slideGap="md"
      // loop
      align="start"
      slidesToScroll={1}
      withControls={true}
      styles={{
        control: {
          "&[data-inactive]": {
            opacity: 0,
            cursor: "default",
          },
        },
      }}
      className="liveCar w-full"
      style={{ flex: "1" }}
    >
      {children}
    </Carousel>
  );
}

export default CarouselEl;
