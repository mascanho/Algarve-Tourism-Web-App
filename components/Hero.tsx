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
        className={`bg-[url('https://images.unsplash.com/photo-1562760156-9353a70352ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')] 
h-screen overflow-hidden  
bg-cover bg-blend-multiply bg-black/30  sm:bg-[url('https://images.unsplash.com/photo-1556967455-3b91f7020daf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')]   `}
      />
      <section className="absolute w-full mx-auto space-y-4 text-center top-56  sm:top-80">
        <h1 className="mx-auto text-3xl font-bold text-center text-white sm:text-6xl">
          Algarve&apos;s Travel Guide
        </h1>
        <h2 className="w-9/12 mx-auto sm:w-5/12 text-white/60">
          Discover the breathtaking beauty of the Algarve! The ultimate guide to
          the region&apos;s top tourism attractions and less known hidden gems
          💎
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
