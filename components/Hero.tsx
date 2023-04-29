import Image from "next/image";
import React from "react";
import { createClient } from "contentful";
import Search from "./Search";

async function getAllCategories() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const res = await client.getEntries();

  return await res.items;
}

async function Hero() {
  const allTypes = await getAllCategories();

  return (
    <>
      <div className=" bg-[url('https://rare-gallery.com/uploads/posts/504981-Public-domain.jpg')]  h-screen overflow-hidden  bg-cover bg-blend-multiply bg-black/30 -mt-16 " />
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
        />
      </section>
    </>
  );
}

export default Hero;
