import Image from "next/image";
import React from "react";

import Search from "./Search";

function Hero() {
  return (
    <>
      <div className=" bg-[url('https://rare-gallery.com/uploads/posts/504981-Public-domain.jpg')]  h-screen overflow-hidden  bg-cover bg-blend-multiply bg-black/30 -mt-16 " />
      <section className="absolute top-60 sm:top-60 mx-auto w-full text-center space-y-6">
        <h1 className="mx-auto text-center sm:text-6xl text-white text-3xl font-bold">
          Algarve&apos;s Travel Guide
        </h1>
        <h2 className="w-9/12 sm:w-5/12 mx-auto text-white/60">
          Discover the breathtaking beauty of the Algarve! Our website is your
          ultimate guide to the region&apos;s top tourism attractions and less
          known hidden gems 💎
        </h2>
        <div className="flex mx-auto justify-center"></div>
        <Search />
      </section>
    </>
  );
}

export default Hero;
