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
      <h1 className="text-5xl  font-bold pt-10 sm:pt-0  text-center sm:text-7xl bg-gradient-to-r from-green-500 via-sky to-red-500 text-transparent   bg-clip-text pb-2 animate-gradient ">
        Algarve&apos;s Travel Guide
      </h1>
      <h2 className="hidden sm:block text-center  mx-auto rounded-sm w-9/12 sm:w-8/12 sm:px-14 text-sm lg:max-w-2xl   text-gray-700">
        Discover the breathtaking beauty of the Algarve! The ultimate guide to
        the region&apos;s top tourism attractions and less known hidden gems
      </h2>
      <h2 className="sm:hidden mx-auto w-9/12 text-center rounded-sm sm:p-0 mt-1 sm:mt-0 sm:max-w-lg  sm:pt-2 text-gray-700">
        {" "}
        The region&apos;s top attractions and less known hidden gems
      </h2>
      <SearchDesktop />
      <div className="sm:w-11/12 mx-auto relative max-h-full p-7 sm:p-0 sm:h-[420px] w-full flex flex-wrap flex-col rounded-lg  sm:rounded-t-lg max-w-3xl ">
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

        <Image
          className="rounded-t-3xl hidden sm:inline rounded-2xl w-full h-full mx-auto object-cover  sm:object-fill"
          src={IMAGES_DESKTOP[2]}
          alt="hero image"
          width={800}
          height={100}
          loading="eager"
          // sizes="(max-width: 868px) 100vw, 33vw"
        />
      </div>
    </section>
  );
};

export default Hero;
