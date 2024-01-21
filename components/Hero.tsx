"use client";
import React, { useEffect, useState } from "react";
import Search from "./Search";

const IMAGES_DESKTOP = [
  "/images/bg1.jpeg",
  "/images/bg2.webp",
  "https://escales.ponant.com/wp-content/uploads/2023/07/iStock-621690956-1.jpg",
  "https://turismo.eurodicas.com.br/wp-content/uploads/2019/07/praias-do-algarve-1.jpg",
];

const Hero = ({ categories }: any) => {
  const [allTypes, setAllTypes] = useState<any[]>([]);

  return (
    <>
      <div
        className={`sm:hidden  animate-fade overflow-x-hidden  bg-blend-multiply bg-black/60 bg-[url("/images/bg-mobile.webp")] object-cover bg-fixed   h-screen w-screen min-h-screen min-w-screen`}
        style={{
          backgroundSize: "cover",
        }}
      />
      <div
        className={` overflow-x-hidden hidden sm:block animate-fade bg-fixed bg-cover  bg-blend-multiply bg-black/70  h-dvh`}
        style={{
          backgroundImage: `url(${IMAGES_DESKTOP[1]})`,
          width: "100vw",
          height: "100vh",
        }}
      />
      <section className="mx-auto w-full sm:h-screen space-y-2 flex flex-col justify-center text-center m-auto absolute top-[10em] sm:-mt-36  md:top-0 ">
        <h1 className="mx-auto text-7xl font-bold text-center sm:text-8xl bg-gradient-to-r from-green-500 via-sky to-red-500 sm:text-transparent text-white  bg-clip-text pb-2 animate-gradient ">
          Algarve&apos;s Travel Guide
        </h1>
        <div className=" rounded-lg w-7/12 sm:w-fit mx-auto p-2 hidden sm:block">
          <h2 className="hidden sm:block  mx-auto rounded-sm w-9/12 sm:w-10/12 lg:w-3/4 px-4  text-white/70  ">
            Discover the breathtaking beauty of the Algarve! The ultimate guide
            to the region&apos;s top tourism attractions and less known hidden
            gems
          </h2>
        </div>
        <h2 className="sm:hidden w-9/12 mx-auto sm:w-10/12 text-white rounded-sm sm:p-0 mt-4 sm:mt-0 sm:max-w-lg text-white/60 sm:pt-2">
          {" "}
          The region&apos;s top tourism attractions and less known hidden gems
        </h2>
        <div className="flex justify-center m-auto pt-5">
          <Search
            allTypes={allTypes}
            placeholderText={"Type your destination or activity"}
            categories={categories}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
