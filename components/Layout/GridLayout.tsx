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
import { IoChevronBack } from "react-icons/io5";
import { Carousel } from "@mantine/carousel";
import { LuHeart, LuShare } from "react-icons/lu";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { usePathname } from "next/navigation";

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid({ filteredData }: any) {
  const pathname = usePathname();

  const handleShare = () => {
    const shareURL = `https://www.algarvewonders.com${pathname}`;
    const shareText = "Check out this awesome content!"; // Replace with your content

    const shareLink = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: "algarve Wonders - The best plces to visit",
          text: "Check out this awesome place in the algarve",
          url: window.location.href,
        })
        .then(() => console.log("Successfully shared."))
        .catch((error) => console.error("Error sharing:", error.message));
    } else {
      window.location.href = shareLink;
    }
  };
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  const addFavourites = useAddToFavourites();

  function addFav() {
    addFavourites.addFavourite({
      id: filteredData[0]?.fields?.title,
      title: filteredData[0]?.fields?.title,
      description: filteredData[0]?.fields?.description,
      image: filteredData[0]?.fields?.mainImage?.fields?.file?.url,
      slug: filteredData[0]?.fields?.slug,
      rating: filteredData[0]?.fields?.rating,
      city: filteredData[0]?.fields?.city,
      type: filteredData[0]?.fields?.type,
      price: filteredData[0]?.fields?.price,
      pathname: window?.location?.pathname,
      shortDescription: filteredData[0]?.fields?.shortDescription,
      embededMap: filteredData[0]?.fields?.embededMap,
      mapShare: filteredData[0]?.fields?.mapShare,
      tags: filteredData[0]?.fields?.tags,
      date: filteredData[0]?.fields?.date,
    });
  }

  return (
    <section className=" ml-0">
      <Container my="xs" className=" min-w-full ml-0  sm:pt-0 sm:pl-0 ">
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          className={`w-full sm:h-fit min-h-full h-fit relative  overflow-hidden `}
        >
          {/* SHOW CAROUSEL IMAGES ON MOBILE */}
          <IoChevronBack
            onClick={() => window.history.back()}
            className="absolute top-2 z-10 left-2 sm:hidden text-xs shadow-sm  bg-white rounded-full w-7 h-7 font-thin p-1 pl-[2px]"
          />
          <LuHeart
            onClick={addFav}
            className="absolute top-2 z-10 right-11 sm:hidden flex items-center justify-center pl-[6px] p-[6px] text-xs shadow-sm font-semibold  bg-white rounded-full w-7 h-7 "
          />
          <LuShare
            onClick={handleShare}
            className="absolute top-2  right-2 z-10 sm:hidden flex items-center justify-center pl-[6px] p-[6px] text-xs shadow-sm  bg-white rounded-full w-7 h-7 font-thin p-1 pl-[2px]"
          />
          <Carousel
            className="sm:hidden h-full w-full max-h-64 rounded-lg relative overflow-hidden car"
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
            className="relative overflow-hidden rounded-lg  sm:max-h-[340px] hidden sm:flex 
            "
          >
            <img
              alt={filteredData[0]?.fields?.title}
              src={`https://${filteredData[0]?.fields?.images[0]?.fields?.file?.url}`}
              className="sm:h-[100%] object-cover w-[100%] sm:w-full sm:block"
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
                className={`sm:h-full sm:max-h-[160px] sm:min-h-[160px] h-full w-full max-h-[130px]  rounded-lg favBanner object-cover`}
                // height={80}
                // width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <img
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[2]?.fields?.file?.url}`}
                className={`sm:h-full w-full h-full max-h-[130px] sm:max-h-[160px] rounded-lg favBanner object-fill`}
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
                className={`sm:h-full sm:max-h-[160px] rounded-lg favBanner object-cover`}
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
                className={` h-full w-full max-h-[130px] sm:max-h-[160px] rounded-lg favBanner object-cover`}
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
