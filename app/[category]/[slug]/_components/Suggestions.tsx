"use client";
import { Carousel } from "@mantine/carousel";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";
import { Rating, useMantineTheme } from "@mantine/core";
import { BiPlus } from "react-icons/bi";
import Link from "next/link";

function Suggestions({ recomended }: any) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Carousel height={300} slideSize={mobile ? "55%" : "24%"} align={"start"}>
      {recomended.map((item: any) => (
        <Carousel.Slide key={item?.fields?.title} className="mr-2 relative">
          <div
            style={{ backgroundImage: `url(${item?.fields?.mainImage})` }}
            className={`w-full  h-full relative bg-blend-multiply bg-[url(https: + ${item?.fields?.mainImage?.fields?.file?.url})] `}
          >
            <img
              src={"https:" + item?.fields?.mainImage?.fields?.file?.url}
              alt=""
              className="object-cover h-full rounded-md filter brightness-[55%]"
            />
            <h5 className="absolute top-4 left-4 text-white text-3xl font-bold">
              {item?.fields?.title?.replace(/[\p{Emoji}]/gu, "")}
              <Rating value={item?.fields?.rating} readOnly className="mt-1" />
            </h5>
            <span className="absolute left-6 font-bold bottom-5 text-lg text-white/60">
              {item?.fields?.city}
            </span>
          </div>
          <Link href={`/${item?.fields?.type}/${item?.fields?.slug}`}>
            <BiPlus
              className="absolute bottom-4 right-4 text-white text-4xl font-bold"
              onClick={() => {
                // scroll to the top
                // window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </Link>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default Suggestions;
