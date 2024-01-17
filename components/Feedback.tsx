"use client";
import { quotes } from "@/Data/Quotes";
import { Carousel } from "@mantine/carousel";
import { Blockquote, useMantineTheme } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "@mantine/hooks";

function Feedback({ name, job, rating, review, image }: any) {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Carousel
      align={mobile ? "start" : "start"}
      slideSize={mobile ? "100%" : "23%"}
      slideGap={mobile ? "" : "xl"}
      nextControlIcon={<IconArrowRight />}
      previousControlIcon={<IconArrowLeft />}
      // className="flex items-center"
      withControls={mobile ? false : false}
      plugins={[autoplay.current]}
    >
      {quotes.map((q: any) => (
        <Carousel.Slide key={q.review} className="w-full">
          <Blockquote cite={q.name} className="border rounded-md">
            {q.review}
          </Blockquote>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default Feedback;
