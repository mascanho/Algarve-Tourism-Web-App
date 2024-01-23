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
      <section className="mx-auto w-full space-y-2 flex flex-wrap flex-col justify-center text-center m-auto">
        <h1 className="mx-auto text-6xl font-bold pt-24 text-center sm:text-6xl bg-gradient-to-r from-green-500 via-sky to-red-500 sm:text-transparent text-white  bg-clip-text pb-2 animate-gradient ">
          Algarve&apos;s Travel Guide
        </h1>
        <div className=" rounded-lg w-7/12 sm:w-fit mx-auto p-2 hidden sm:block">
          <h2 className="hidden sm:block  mx-auto rounded-sm w-9/12 sm:w-10/12 lg:w-3/4 px-4">
            Discover the breathtaking beauty of the Algarve! The ultimate guide
            to the region&apos;s top tourism attractions and less known hidden
            gems
          </h2>
        </div>
        <h2 className="sm:hidden w-9/12 mx-auto sm:w-10/12 rounded-sm sm:p-0 mt-4 sm:mt-0 sm:max-w-lg  sm:pt-2">
          {" "}
          The region&apos;s top tourism attractions and less known hidden gems
        </h2>
        {/* <div className="flex justify-center m-auto pt-5"> */}
        {/*   <Search */}
        {/*     allTypes={allTypes} */}
        {/*     placeholderText={"Type your destination or activity"} */}
        {/*     categories={categories} */}
        {/*   /> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default Hero;
