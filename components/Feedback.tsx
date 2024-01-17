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
      slideSize={mobile ? "70%" : "48%"}
      loop
      slidesToScroll={mobile ? 1 : 2}
      align={mobile ? "center" : "center"}
      slideGap={mobile ? "sm" : "xl"}
      nextControlIcon={<IconArrowRight />}
      previousControlIcon={<IconArrowLeft />}
      // style={{ flex: 1 }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      className="flex items-center"
      withControls={mobile ? false : false}
    >
      {quotes.map((q: any) => (
        <Carousel.Slide key={q.id} className="mb-5">
          <div className="w-full max-w-md py-4 mt-4 bg-white rounded-lg border  mx-auto  sm:h-fit">
            {/* <div className="flex justify-center  md:justify-end"> */}
            {/*   <img */}
            {/*     className="object-cover w-14 h-14 border-2 border-blue-500 rounded-full dark:border-blue-400 absolute bottom-0" */}
            {/*     alt="Testimonial avatar" */}
            {/*     src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" */}
            {/*   /> */}
            {/* </div> */}
            <Blockquote className="text-gray-300 text-sm" cite={q.name}>
              {q.review}
            </Blockquote>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default Feedback;
