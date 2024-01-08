"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import Search from "./Search";

async function getAllCategories() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process?.env?.CONTENTFUL_ACCESS_TOKEN!,
  });
  const res = await client.getEntries();

  return await res.items;
}

const IMAGES_DESKTOP = [
  "https://lp-cms-production.imgix.net/2022-05/GettyRF_1013112160.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
  "https://fullsuitcase.com/wp-content/uploads/2023/05/Lagos-the-nicest-town-in-Algarve-Portugal.jpg.webp",
  "https://escales.ponant.com/wp-content/uploads/2023/07/iStock-621690956-1.jpg",
  "https://turismo.eurodicas.com.br/wp-content/uploads/2019/07/praias-do-algarve-1.jpg",
];

const Hero = ({ categories }: any) => {
  const [allTypes, setAllTypes] = useState<any[]>([]);

  return (
    <>
      <div
        className={`sm:hidden  animate-fade bg-[url('https://images.unsplash.com/photo-1607419977878-5b1099c99715?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
 overflow-hidden  bg-blend-multiply bg-black/60  bg-cover h-screen`}
      />
      <div
        className={` hidden sm:block animate-fade overflow-hidden  bg-cover bg-fixed bg-blend-multiply bg-black/70  h-screen`}
        style={{
          backgroundImage: `url(${
            IMAGES_DESKTOP[Math.floor(Math.random() * IMAGES_DESKTOP.length)]
          })`,
        }}
      />
      <section className="mx-auto w-full sm:h-screen space-y-2 flex flex-col justify-center text-center m-auto absolute top-64  sm:top-2 md:top-0 ">
        <h1 className="mx-auto text-5xl font-bold text-center text-white sm:text-8xl">
          Algarve&apos;s Travel Guide
        </h1>
        <div className=" rounded-lg w-7/12 mx-auto p-2 hidden sm:block">
          <h2 className="hidden sm:block  mx-auto rounded-sm  text-white ">
            Discover the breathtaking beauty of the Algarve! The ultimate guide
            to the region&apos;s top tourism attractions and less known hidden
            gems 💎
          </h2>
        </div>
        <h2 className="sm:hidden w-9/12 mx-auto sm:w-10/12 text-white rounded-sm sm:p-0 mt-4 sm:mt-0 sm:max-w-lg text-white/60 sm:pt-2">
          {" "}
          The region&apos;s top tourism attractions and less known hidden gems
          💎
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
