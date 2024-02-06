"use client";
import { catArr } from "@/Data/Categories";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Box, ScrollArea, Select } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import {
  MdBusiness,
  MdBusinessCenter,
  MdEvent,
  MdSportsHandball,
} from "react-icons/md";
import { PiMountainsFill } from "react-icons/pi";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHiking,
  FaUtensils,
} from "react-icons/fa";
import { GiBeachBucket, GiWoodCabin } from "react-icons/gi";
import { useState } from "react";
import { rem } from "@mantine/core";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const categoryIcons: any = {
  Beaches: <GiBeachBucket />,
  Restaurants: <FaUtensils />,
  Events: <MdEvent />,
  Adventure: <PiMountainsFill />,
  Business: <MdBusinessCenter />,
  Hiking: <FaHiking />,
  Sports: <MdSportsHandball />,
  Stays: <GiWoodCabin />,
};

const Selection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState(null);
  const goToPage = (e: any) => {
    const route = e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    router.push(`${route}`);
  };

  const handleClick = (cat: any) => {
    setActiveCategory(cat);
  };

  return (
    <section className="w-full inline  sm:hidden overflow-x-clip fixed bottom-0 z-10 bg-darkwhite border-t px-1 h-18 pt-1 ">
      {pathname === "/" ? null : (
        <>
          <span className="absolute -top-[13px] bg-darkwhite px-6 py-1 m-auto rounded-t-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {pathname}
          </span>
          <section className="overflow-hidden w-full">
            <Carousel
              nextControlIcon={
                <BiChevronRight style={{ width: rem(16), height: rem(16) }} />
              }
              previousControlIcon={
                <BiChevronLeft style={{ width: rem(16), height: rem(16) }} />
              }
              align={"center"}
              className="w-full overflow-hidden mx-auto flex flex-wrap"
            >
              {catArr.map((cat: any) => (
                <div
                  className={`py-1  ${
                    activeCategory === cat
                      ? "bg-key rounded-xl w-20 text-white"
                      : ""
                  } px-2 text-xs mr-2  my-1 text-right flex justify-end h-auto w-[95px] `}
                  key={cat}
                  onClick={() => handleClick(cat)}
                >
                  <Link href={`${cat.route}`}>
                    <div className="flex flex-col items-center rounded-xl justify-center ">
                      <span
                        className={`text-2xl text-key ${activeCategory === cat ? "text-white" : "text-key"}`}
                      >
                        {" "}
                        {categoryIcons[cat.name]}
                      </span>
                      <span
                        className={`ml-1 ${activeCategory === cat ? "text-white" : "text-key"}`}
                      >
                        {cat?.name}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </Carousel>
          </section>
        </>
      )}
    </section>
  );
};

export default Selection;
