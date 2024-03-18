import { Metadata } from "next";
import React from "react";
import { GiMeal } from "react-icons/gi";
import DrawerExample from "./_components/Drawer";
import { MdAddLocationAlt, MdLiveTv } from "react-icons/md";
import { createClient } from "contentful";

export const metadata: Metadata = {
  title: "Advertise Your Business | Algarve Wonders",
  description: "Advertise your business for Free on Algarve Wonders",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/icon.png",
    href: "/images/icon.png",
  },
};

async function page() {
  return (
    <main className="min-h-screen my-20 max-w-7xl w-11/12 mx-auto">
      <div className="text-black">
        <div className="flex items-center justify-center mb-2  ">
          <h1 className="sm:text-5xl text-4xl font-semibold flex items-center text-black">
            Advertise & Promote
            <span className="sm:text-lg text-base text-left ml-4 bg-green-500 text-white px-2 rounded-xl">
              Free
            </span>
          </h1>
        </div>
        <div className="max-w-4xl flex flex-col flex-wrap text-black bg-white p-4 w-fit mx-auto rounded-xl my-8">
          <p>
            Advertise your business, your products or services{" "}
            <span className="underline">for free,</span> on any of the below
            categories in our platform.
          </p>
          <p className="mt-4">
            Leverage the power and reach of{" "}
            <span className="font-semibold">Algarve Wonders</span> by
            advertising and reaching broader audiences. <br /> Build your brand
            and reach new customers.
          </p>
          <p className="mt-4">
            Our modular approach on advertising allows a quick and easy setup,
            letting you choose in which modules or sections you want to promote.
          </p>
        </div>
      </div>
      <div className="my-9 w-11/12 mx-auto">
        <h2 className="text-3xl font-semibold text-black text-center">
          Modules
        </h2>
      </div>
      <section className="grid sm:grid-cols-2 gap-8 mt-10 text-black">
        {/* Weekly Meals */}
        <div className="px-4 py-6 border border-key border-dashed rounded-md hover:bg-white group">
          <div className="flex  items-center space-x-4">
            <GiMeal className="text-black text-7xl" />
            <p className="text-black text-3xl font-semibold">Weekly Meals</p>
          </div>
          <p className="mt-3">
            Showcase your best daily meals from your Restaurant, local Pub or
            eating avenue. Let the world see what you have been cooking up to.
          </p>
          <div className="space-x-4 mt-8  w-full">
            <button className="text-white bg-key px-6 py-2 rounded-md">
              Advertise
            </button>{" "}
            <DrawerExample title="Weekly Meals" />{" "}
          </div>
        </div>

        {/* Live Events */}
        <div className="px-4 py-6 border border-key border-dashed rounded-md group hover:bg-white">
          <div className="flex  items-center space-x-4">
            <MdLiveTv className="text-black text-7xl" />
            <p className="text-black text-3xl font-semibold">Live Events</p>
          </div>
          <p className="mt-3">
            Showcase your best daily meals from your Restaurant, local Pub or
            eating avenue. Let the world see what you have been cooking up to.
          </p>
          <div className="space-x-4 mt-8  w-full">
            <button className="text-white bg-key px-6 py-2 rounded-md">
              Advertise
            </button>{" "}
            <DrawerExample title="Live Events" />{" "}
          </div>
        </div>

        {/* List a location */}
        <div className="px-4 py-6 border border-key border-dashed rounded-md group hover:bg-white">
          <div className="flex  items-center space-x-4">
            <MdAddLocationAlt className="text-black text-7xl" />
            <p className="text-black text-3xl font-semibold">List Locations</p>
          </div>
          <p className="mt-3">
            Showcase your best daily meals from your Restaurant, local Pub or
            eating avenue. Let the world see what you have been cooking up to.
          </p>
          <div className="space-x-4 mt-8  w-full">
            <button className="text-white bg-key px-6 py-2 rounded-md">
              Advertise
            </button>{" "}
            <DrawerExample title="List Locations" />{" "}
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
