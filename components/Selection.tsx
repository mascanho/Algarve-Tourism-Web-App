"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Carousel } from "@mantine/carousel";
import { catArr } from "@/Data/Categories";
import { GiBeachBucket, GiWoodCabin } from "react-icons/gi";
import { FaHiking, FaUtensils } from "react-icons/fa";
import { MdBusinessCenter, MdEvent, MdSportsHandball } from "react-icons/md";
import { PiMountainsFill } from "react-icons/pi";
import Link from "next/link";

const Selection = () => {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState(null);
  const carouselRef = useRef(null); // Ref for Carousel component

  const handleClick = (cat: any) => {
    setActiveCategory(cat);
    const selectedIndex = catArr.findIndex(
      (category) => category.name === cat.name,
    );

    if (carouselRef.current && selectedIndex !== -1) {
      const slideWidth = carouselRef?.current?.offsetWidth;
      const scrollLeft = selectedIndex * slideWidth;
      carouselRef?.current?.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }

    const categoryLink = document.getElementById(`category-link-${cat.route}`);
    if (categoryLink) {
      categoryLink.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const categoryIcons = {
    Beaches: <GiBeachBucket />,
    Restaurants: <FaUtensils />,
    Events: <MdEvent />,
    Adventure: <PiMountainsFill />,
    Business: <MdBusinessCenter />,
    Hiking: <FaHiking />,
    Sports: <MdSportsHandball />,
    Stays: <GiWoodCabin />,
  };

  return (
    <section className="w-full z-20 inline text-center sm:hidden overflow-x-clip fixed border top-[240px] h-18  bg-white h-18 pt-1 ">
      {pathname === "/" ? null : (
        <>
          <section className="selection overflow-hidden flex w-full shadow-lg border-b h-fit ">
            <Carousel
              ref={carouselRef} // Assign the ref to the Carousel component
              dragFree
              nextControlIcon={<BiChevronRight />}
              previousControlIcon={<BiChevronLeft />}
              align={"start"}
              className="w-full overflow-hidden mx-auto flex flex-nowrap"
              slideSize={"5%"}
              controlSize={14}
              loop
            >
              {catArr.map((cat) => (
                <Carousel.Slide
                  className={`px-2 text-xs mr-2 text-right h-auto w-full`}
                  key={cat.name}
                  onClick={() => handleClick(cat)}
                >
                  <Link href={cat.route} id={`category-link-${cat.route}`}>
                    <div className="flex flex-col items-center rounded-xl justify-center">
                      <span
                        className={`text-2xl text-gray-400 ${
                          pathname?.includes(cat.route)
                            ? "text-key"
                            : "text-gray-400"
                        }`}
                      >
                        {categoryIcons[cat?.name]}
                      </span>
                      <span
                        className={`ml-1 ${
                          pathname?.includes(cat.route)
                            ? "text-key"
                            : "text-gray-400"
                        }`}
                        id={cat.route} // Assign id to the span element
                      >
                        {cat.name}
                      </span>
                    </div>
                  </Link>
                </Carousel.Slide>
              ))}
            </Carousel>
          </section>
        </>
      )}
    </section>
  );
};

export default Selection;
