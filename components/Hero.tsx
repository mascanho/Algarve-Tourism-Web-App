"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import SearchDrawer from "@/app/s/_components/SearchDrawer";

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
      className="mx-auto overflow-clip w-full space-y-2 sm:h-full sm:pt-10 sm:space-y-4 flex flex-wrap flex-col justify-center "
    >
      <h1 className="text-3xl  font-bold pt-10 sm:pt-0  text-center sm:text-7xl bg-gradient-to-r from-green-500 via-sky to-red-500 text-transparent   bg-clip-text pb-2 animate-gradient ">
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
      <div className="flex justify-center m-auto  overflow-hidden pb-10 w-full ">
        <Search placeholderText={"Destination or activity..."} />
      </div>
      <div className="sm:w-8/12 mx-auto h-96 sm:h-[420px] w-full  flex flex-wrap flex-col rounded-t-lg relative max-w-3xl">
        <Image
          className="rounded-t-3xl  h-full mx-auto sm:object-fill"
          src={IMAGES_DESKTOP[2]}
          alt="hero image"
          width={600}
          height={400}
          loading="eager"
          // sizes="(max-width: 868px) 100vw, 33vw"
        />
      </div>
    </section>
  );
};

export default Hero;
