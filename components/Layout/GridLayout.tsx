"use client";
import Image from "next/image";
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { useEffect } from "react";
import { FaArrowLeft, FaChevronLeft } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { Carousel } from "@mantine/carousel";

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid({ filteredData }: any) {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  // useEffect(() => {
  //   // Check if the window object is defined before using it
  //   if (typeof window !== "undefined") {
  //     window.scrollTo(0, 0);
  //   }
  // }, []);
  //
  return (
    <section className=" ml-0">
      <Container my="xs" className=" min-w-full ml-0  sm:pt-0 sm:pl-0 ">
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          className={`w-full sm:h-full min-h-full h-fit relative overflow-hidden `}
        >
          {/* SHOW CAROUSEL IMAGES ON MOBILE */}
          <IoChevronBack
            onClick={() => window.history.back()}
            className="absolute top-2 z-10 left-2 sm:hidden text-xs shadow-sm  bg-white rounded-full w-7 h-7 font-thin p-1 pl-[2px]"
          />
          <Carousel
            className="sm:hidden h-full w-full rounded-lg relative overflow-hidden car"
            loop
            slideSize="100%"
            withControls={false}
            withIndicators
            height={"100%"}
          >
            {filteredData[0]?.fields?.images?.map((image: any) => (
              <Carousel.Slide
                key={image?.fields?.file?.url}
                className="rounded-lg car"
              >
                <img
                  alt={filteredData[0]?.fields?.title}
                  src={`https://${image?.fields?.file?.url}`}
                  className="sm:h-[100%] w-[100%] h-full sm:w-full sm:block object-cover"
                />
              </Carousel.Slide>
            ))}
          </Carousel>

          <div
            className="relative overflow-hidden rounded-lg  sm:max-h-full hidden sm:flex 
            "
          >
            <img
              alt={filteredData[0]?.fields?.title}
              src={`https://${filteredData[0]?.fields?.images[0]?.fields?.file?.url}`}
              className="sm:h-[100%] w-[100%] sm:w-full sm:block"
            />
          </div>
          <Grid
            gutter="md"
            className="overflow-hidden rounded-lg hidden sm:flex sm:h-fit"
          >
            <Grid.Col span={6}>
              <img
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[1]?.fields?.file?.url}`}
                className={`sm:h-[100%] h-full w-full max-h-[130px] sm:max-h-full rounded-lg favBanner object-cover`}
                // height={80}
                // width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <img
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[2]?.fields?.file?.url}`}
                className={`sm:h-full w-full h-full max-h-[130px] sm:max-h-full rounded-lg favBanner object-cover`}
                // height={80}
                // width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <img
                width={260}
                height={100}
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[3]?.fields?.file?.url}`}
                className={`sm:h-full h-full max-h-[130px] sm:max-h-full rounded-lg favBanner object-cover`}
                // height={80}
                // width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <img
                width={260}
                height={100}
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[4]?.fields?.file?.url}`}
                className={` h-full w-full max-h-[130px] sm:max-h-full rounded-lg favBanner object-cover`}
                // height={100}
                // width={260}
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    </section>
  );
}
