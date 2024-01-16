"use client";
import { Button, MantineProvider } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
// import "@mantine/carousel/lib/index";
import classes from "./CarTesting.module.css";

function Testing() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      height={200}
      className={classes.fuck}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

export default Testing;
