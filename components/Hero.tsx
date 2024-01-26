"use client";
import React, { useEffect, useState } from "react";
import Search from "./Search";

const IMAGES_DESKTOP = [
  "/images/bg1.jpeg",
  "/images/bg2.webp",
  "https://cfimg.wowcher.co.uk/cdn-cgi/image/height=520,width=777,quality=85,format=auto/https://static.wowcher.co.uk/images/deal/27289893/1078075.jpg",
  "https://turismo.eurodicas.com.br/wp-content/uploads/2019/07/praias-do-algarve-1.jpg",
];

const Hero = ({ categories }: any) => {
  const [allTypes, setAllTypes] = useState<any[]>([]);

  return (
    <section
      id="search"
      className="mx-auto w-full space-y-2 sm:h-full sm:pt-10 sm:space-y-4 flex flex-nowrap flex-col justify-center text-center m-auto"
    >
      <h1 className="mx-auto text-4xl font-bold pt-10 sm:pt-0  text-center sm:text-7xl bg-gradient-to-r from-green-500 via-sky to-red-500 text-transparent   bg-clip-text pb-2 animate-gradient ">
        Algarve&apos;s Travel Guide
      </h1>
      <h2 className="hidden sm:block  mx-auto rounded-sm w-9/12 sm:w-8/12 sm:px-14 text-sm lg:max-w-2xl   text-gray-700">
        Discover the breathtaking beauty of the Algarve! The ultimate guide to
        the region&apos;s top tourism attractions and less known hidden gems
      </h2>
      <h2 className="sm:hidden mx-auto w-9/12 rounded-sm sm:p-0 mt-1 sm:mt-0 sm:max-w-lg  sm:pt-2 text-gray-700">
        {" "}
        The region&apos;s top tourism attractions and less known hidden gems
      </h2>
      <div className="flex justify-center m-auto w-11/12 pb-10">
        <Search
          allTypes={allTypes}
          placeholderText={"Destination or activity..."}
          categories={categories}
        />
      </div>
      <div className="sm:w-8/12 mx-auto h-96 sm:h-90  flex flex-wrap flex-col rounded-t-lg max-w-3xl">
        <img
          className="rounded-t-3xl w-full h-full object-cover"
          src={IMAGES_DESKTOP[2]}
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
