"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { BiSearch } from "react-icons/bi";
import SearchDesktop from "./SearchDesktop";

const Search = dynamic(() => import("./Search"));

const IMAGES_DESKTOP = [
  "/images/bg1.jpeg",
  "/images/bg2.webp",
  "/images/bg-aw.webp",
  "https://turismo.eurodicas.com.br/wp-content/uploads/2019/07/praias-do-algarve-1.jpg",
];

const Hero = ({ categories }: any) => {
  const [allTypes, setAllTypes] = useState<any[]>([]);

  return (
    <section
      id="search"
      className="mx-auto overflow-clip w-full space-y-2 sm:h-full z-0 sm:pt-10 sm:space-y-4 flex flex-wrap flex-col justify-center "
    >
      <section className="flex flex-wrap  mx-auto w-full sm:mt-10 sm:h-full md:h-[100%] sm:max-w-7xl ">
        <div className="sm:text-center md:text-left px-4  sm:mx-auto md:my-auto sm:w-full md:w-full lg:w-2/4 flex flex-col justify-center ">
          <h1 className="text-5xl w-full  sm:w-full md:text-left font-bold pt-10 sm:pt-0  text-center sm:text-8xl bg-gradient-to-r from-green-500 via-key to-red-500 text-transparent   bg-clip-text pb-2 animate-gradient ">
            Algarve&apos;s Best Travel Guide
          </h1>
          <h2 className="hidden mt-4 sm:text-center md:text-left sm:block text-center mx-auto rounded-sm w-9/12 sm:text-lg sm:py-6 md:w-10/12 ml-0 sm:mx-auto md:m-0  text-sm lg:max-w-2xl text-gray-700">
            Discover the breathtaking beauty of the Algarve! The{" "}
            <strong className="relative inline-block">
              ultimate guide{" "}
              <span
                className="absolute -bottom-[4px] left-0 w-full bg-no-repeat bg-center bg-contain"
                style={{
                  backgroundImage:
                    "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg')",
                  height: "0.75rem",
                  filter: "invert(1) sepia(1) saturate(5) hue-rotate(5deg)", // Change color to red
                }}
              ></span>
            </strong>{" "}
            to the region&apos;s top tourism attractions and less known hidden
            gems
          </h2>
          <SearchDesktop />
        </div>

        <div className="w-[430px] mt-24 md:my-auto relative h-[430px] overflow-hidden hidden sm:flex items-center justify-center rounded-full border-[6px] border-dashed border-key p-20 mx-auto my-auto">
          <div className="p-4 w-[90%] h-[90%]">
            {" "}
            {/* Adding padding and border to create gap */}
            <div className="p-2  rounded-t-3xl hidden sm:flex rounded-full mx-auto  shadow-lg">
              {" "}
              {/* Adding border to the image */}
              <Image
                src={IMAGES_DESKTOP[2]}
                alt="hero image"
                fill
                loading="eager"
                className="p-3 rounded-full shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <h2 className="sm:hidden mx-auto w-9/12 text-center rounded-sm sm:p-0 mt-2 sm:mt-0 sm:max-w-lg sm:pt-2 text-gray-700">
        The region&apos;s{" "}
        <strong className="relative inline-block">
          top attractions{" "}
          <span
            className="absolute -bottom-[4px] left-0 w-full bg-no-repeat bg-center bg-contain"
            style={{
              backgroundImage:
                "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg')",
              height: "0.75rem",
              filter: "invert(1) sepia(1) saturate(5) hue-rotate(5deg)", // Change color to red
            }}
          ></span>
        </strong>{" "}
        and less known hidden gems
      </h2>
      <div className="sm:w-11/12 mx-auto relative max-h-full p-7 sm:p-0 sm:h-[420px] w-full flex flex-wrap flex-col rounded-lg sm:hidden  sm:rounded-t-lg max-w-3xl">
        <div className="-mb-10 w-20 z-10  h-20 bg-white rounded-full flex sm:hidden items-center justify-center shadow-lg mx-auto">
          <img src="/images/icon.png" className="w-14 h-14" alt="logo" />
        </div>
        <img
          className="rounded-t-3xl z-0  sm:hidden rounded-2xl w-full h-full mx-auto shadow-lg object-fill brightness-75"
          src="/images/mobile-bg.webp"
          alt="hero image"
          width={800}
          height={100}
          loading="eager"
          // sizes="(max-width: 868px) 100vw, 33vw"
        />
        <div className="-mt-10 w-20 active:scale-90 z-10 h-20 bg-white rounded-full flex sm:hidden items-center justify-center shadow-lg m-auto">
          <div className="m-auto flex items-center justify-center pt-2 w-full h-full">
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
