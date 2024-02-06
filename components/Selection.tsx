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
    <section className="w-full inline text-center   sm:hidden overflow-x-clip fixed top-7  z-10 bg-white  px-1 h-18 pt-3 ">
      {pathname === "/" ? null : (
        <>
          <section className="overflow-hidden w-full shadow-2xl border-b py-1">
            <span className="mx-auto text-center text-key pt-10 font-semibold ">
              {pathname?.replace(/^\//, "")?.charAt(0)?.toUpperCase() +
                pathname?.slice(2)}
            </span>
            <Carousel
              dragFree
              nextControlIcon={
                <BiChevronRight style={{ width: rem(16), height: rem(16) }} />
              }
              previousControlIcon={
                <BiChevronLeft style={{ width: rem(16), height: rem(16) }} />
              }
              align={"start"}
              className="w-full overflow-hidden mx-auto flex flex-wrap px-3 pt-2"
            >
              {catArr.map((cat: any) => (
                <div
                  className={`pb-1  ${
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
