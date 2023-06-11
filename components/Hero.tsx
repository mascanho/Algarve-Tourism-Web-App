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

  console.log(categories, "This is freom the categories");

  return (
    <>
      <div className=" bg-[url('https://rare-gallery.com/uploads/posts/504981-Public-domain.jpg')]  h-screen overflow-hidden  bg-cover bg-blend-multiply bg-black/30  " />
      <section className="absolute w-full mx-auto space-y-6 text-center top-60 sm:top-80">
        <h1 className="mx-auto text-3xl font-bold text-center text-white sm:text-6xl">
          Algarve&apos;s Travel Guide
        </h1>
        <h2 className="w-9/12 mx-auto sm:w-5/12 text-white/60">
          Discover the breathtaking beauty of the Algarve! Our website is your
          ultimate guide to the region&apos;s top tourism attractions and less
          known hidden gems 💎
        </h2>
        <div className="flex justify-center mx-auto"></div>
        <Search
          allTypes={allTypes}
          placeholderText={"Search for your destination..."}
          categories={categories}
        />
      </section>
    </>
  );
};

export default Hero;
