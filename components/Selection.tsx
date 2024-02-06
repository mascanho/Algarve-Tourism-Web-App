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

    // Determine the index of the selected category within catArr
    const selectedIndex = catArr.findIndex(
      (category) => category.name === cat.name,
    );

    // If the carouselRef is available and the index is valid
    if (carouselRef.current && selectedIndex !== -1) {
      // Calculate the scroll position based on the index and the width of each slide
      const slideWidth = carouselRef?.current?.offsetWidth;
      const scrollLeft = selectedIndex * slideWidth;

      // Scroll the carousel to the calculated position
      carouselRef?.current?.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }

    // Get the DOM element of the category link to scroll into view
    const categoryLink = document.getElementById(`category-link-${cat.route}`);

    // If the category link element exists, scroll it into view
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
    <section className="w-full inline text-center sm:hidden overflow-x-clip fixed top-8 z-20 bg-white h-18 pt-3">
      {pathname === "/" ? null : (
        <>
          <section className="overflow-hidden w-full shadow-xl border-b py-1">
            <Carousel
              ref={carouselRef} // Assign the ref to the Carousel component
              dragFree
              nextControlIcon={<BiChevronRight />}
              previousControlIcon={<BiChevronLeft />}
              align={"start"}
              className="w-full overflow-hidden mx-auto flex flex-wrap pt-1"
            >
              {catArr.map((cat) => (
                <div
                  className={`
                                        px-2 text-xs mr-2 my-1 text-right flex justify-end h-auto w-[95px]`}
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
