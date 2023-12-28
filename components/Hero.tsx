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

const Hero = ({ categories }: any) => {
  const [allTypes, setAllTypes] = useState<any[]>([]);

  // useEffect(() => {
  //   const fetchAllTypes = async () => {
  //     const categories = await getAllCategories();
  //     setAllTypes(categories);
  //   };

  //   fetchAllTypes();
  // }, []);

  return (
    <>
      <div
        className={`bg-[url('https://images.squarespace-cdn.com/content/v1/5f7f580e2a273179f84ceaee/1604667570899-9D6Z3H8BUJIFUFA7UWOU/IMG_2373-2.jpg')] 
h-screen overflow-hidden  
bg-cover bg-blend-multiply bg-black/30  sm:bg-[url('https://www.benoitproperties.com/wp-content/uploads/2021/07/algarve-header.png')]   `}
      />
      <section className="w-full mx-auto h-screen space-y-2 text-center m-auto absolute top-36 sm:top-52 md:top-28">
        <h1 className="mx-auto text-5xl font-bold text-center text-white sm:text-8xl">
          Algarve&apos;s Travel Guide
        </h1>
        <h2 className="w-9/12 hidden sm:block mx-auto sm:w-10/12 md:w-[800px]  text-gray-500 rounded-sm sm:p-0 mt-4  text-white/60 sm:pt-2">
          Discover the breathtaking beauty of the Algarve! The ultimate guide to
          the region&apos;s top tourism attractions and less known hidden gems
          💎
        </h2>
        <h2 className="sm:hidden w-9/12 mx-auto sm:w-10/12 text-gray-500 rounded-sm sm:p-0 mt-4 sm:mt-0 sm:max-w-lg text-white/60 sm:pt-2">
          {" "}
          The region&apos;s top tourism attractions and less known hidden gems
          💎
        </h2>
        <div className="flex justify-center m-auto sm:pt-48 pt-20">
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
