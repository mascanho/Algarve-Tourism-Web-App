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
    <section className="max-w-7xl w-11/12 px-4 sm:px-0 mx-auto mt-10 sm:mt-0">
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
              <div className="bg-white pb-8  space-y-2 shadow-md rounded-l-md rounded-tr-md pt-2  relative h-full sm:w-full flex flex-col justify-between">
                <Blockquote cite={q.review} className="text-gray-900" />
                <div className="pl-6 flex">
                  <img
                    src={q.image}
                    className="w-12 p-1 items-center h-12   border-black border object-cover rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  <span className="inline ml-3 m-auto text-sm w-11/12 text-left sm:pl-2">
                    {q.name}
                  </span>
                </div>
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
              </div>
            </section>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
}

export default Feedback;
