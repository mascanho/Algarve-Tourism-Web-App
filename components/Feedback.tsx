"use client";
import { quotes } from "@/Data/Quotes";
import { Carousel } from "@mantine/carousel";
import { Blockquote, Rating, useMantineTheme } from "@mantine/core";
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
      align={mobile ? "start" : "center"}
      slideSize={mobile ? "100%" : "26%"}
      slideGap={mobile ? "" : "xl"}
      nextControlIcon={<IconArrowRight />}
      previousControlIcon={<IconArrowLeft />}
      // className="flex items-center"
      withControls={mobile ? false : false}
      plugins={[autoplay.current]}
      loop
    >
      {quotes.map((q: any) => (
        <Carousel.Slide key={q.review} className="w-full h-full">
          <section className="h-full pb-10 pt-8">
            <div className="bg-white pb-8 space-y-2 shadow-md rounded-l-md rounded-tr-md pt-2  relative h-full sm:w-full flex flex-col justify-between">
              <Blockquote cite={q.review} className="text-gray-600" />
              <span className="block text-sm w-7/12 sm:w-8/12 mx-auto sm:pl-2">
                - {q.name}
              </span>
            </div>
            <div className="mt-1  w-full  py-1 rounded-r-md rounded-bl-md text-right flex items-center justify-end">
              <div className="text-right bg-gray-600  py-1 rounded-l-md rounded-br-md px-2">
                <Rating
                  value={q.rating}
                  fractions={2}
                  className="text-right mx-auto"
                  readOnly
                />
              </div>
              <img
                src={q.image}
                className="w-12 bottom-[6.2rem] p-1 right-12 h-12 border-sky border absolute rounded-full"
              />
            </div>
          </section>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default Feedback;
