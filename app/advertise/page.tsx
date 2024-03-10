import { Metadata } from "next";
import React from "react";
import { GiMeal } from "react-icons/gi";
import DrawerExample from "./_components/Drawer";
import { MdAddLocationAlt, MdLiveTv } from "react-icons/md";

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

function page() {
  return (
    <main className="min-h-screen mt-20 max-w-7xl w-11/12 mx-auto">
      <div className="text-black">
        <h1 className="text-3xl font-semibold text-black">
          Advertise Your Business
        </h1>
        <p className="mt-2">
          Advertise your business, your products or services on any of the below
          categories for free.
        </p>
        <p>
          Leverage the power and reach of Algarve Wonders to advertise and reach
          broader audiences.
        </p>
      </div>
      <section className="grid sm:grid-cols-2 gap-8 mt-10 text-black">
        {/* Weekly Meals */}
        <div className="px-4 py-6 border border-key border-dashed rounded-md">
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
            </button>
              {" "}
              <DrawerExample title="Weekly Meals" />{" "}
          </div>
        </div>

        {/* Live Events */}
        <div className="px-4 py-6 border border-key border-dashed rounded-md">
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
            </button>
              {" "}
              <DrawerExample title="Weekly Meals" />{" "}
          </div>
        </div>

        {/* List a location */}
        <div className="px-4 py-6 border border-key border-dashed rounded-md">
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
            </button>
              {" "}
              <DrawerExample title="Weekly Meals" />{" "}
          </div>
        </div>
        <div className="p-4 border border-key border-dashed">Meals</div>
        <div className="p-4 border border-key border-dashed">Meals</div>
        <div className="p-4 border border-key border-dashed">Meals</div>
      </section>
    </main>
  );
}

export default page;
