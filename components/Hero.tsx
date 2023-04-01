import Image from "next/image";
import React from "react";

import Search from "./Search";

function Hero() {
  return (
    <>
      <div className=" bg-[url('https://images.unsplash.com/photo-1585130401366-fe05a8d813c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1556&q=80')]  h-screen overflow-hidden -mt-16 bg-cover " />
      <section className="absolute top-60 sm:top-80 mx-auto w-full text-center space-y-6">
        <h1 className="mx-auto text-center sm:text-6xl text-white text-3xl font-bold">
          Travel Around The World
        </h1>
        <h2 className="w-9/12 sm:w-4/12 mx-auto text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic animi
          illo explicabo iste, voluptatum quo quis ex error excepturi vero.
        </h2>
        <div className="flex mx-auto justify-center"></div>
        <Search />
      </section>
    </>
  );
}

export default Hero;
