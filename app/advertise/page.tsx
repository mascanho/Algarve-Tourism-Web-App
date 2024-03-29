import { Metadata } from "next";
import React from "react";
import { GiMeal } from "react-icons/gi";
import DrawerExample from "./_components/Drawer";
import { MdAddLocationAlt, MdLiveTv } from "react-icons/md";
import { createClient } from "contentful";
import Link from "next/link";

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
    <main className="mx-auto my-20 min-h-screen w-11/12 max-w-7xl">
      <div className="pt-10">
        <div className="mb-2 flex items-center justify-center  ">
          <h1 className="flex items-center text-3xl font-semibold text-black sm:text-5xl">
            Advertise & Promote
            <span className="ml-4 rounded-xl bg-green-500 px-2 text-left text-base text-white sm:text-lg">
              Free
            </span>
          </h1>
        </div>
        <div className="mx-auto my-8 mt-10 flex w-fit max-w-4xl flex-col flex-wrap rounded-xl bg-white p-4 text-black">
          <p>
            Advertise your business, your products or services{" "}
            <span className="underline">for free,</span> on any of the below
            categories in our platform.
          </p>
          <p className="mt-4">
            Leverage the power and reach of{" "}
            <span className="font-semibold">Algarve Wonders</span> and promote
            your business.
          </p>
          <p className="mt-4">
            Our modular approach on advertising allows a quick and easy setup,
            letting you choose in which modules or sections you want to promote.
          </p>
        </div>
      </div>
      <div className="mx-auto my-12 sm:mt-20 w-11/12">
        <h2 className="text-center text-3xl font-semibold text-black">
          Advertising Modules
        </h2>
      </div>
      <section className="mt-10 grid gap-8 text-black sm:grid-cols-2">
        {/* Weekly Meals */}
        <div className="group rounded-md border border-dashed border-key p-6 hover:bg-white">
          <div className="flex  items-center space-x-4">
            <GiMeal className="text-7xl text-black" />
            <p className="text-3xl font-semibold text-black">Weekly Meals</p>
          </div>
          <p className="mt-3">
            Showcase your best daily meals from your Restaurant, local Pub or
            eating avenue. Let the world see what you have been cooking up to.{" "}
            <br />
            Bring your weekly menus online with Algarve Wonders.
          </p>
          <div className="mt-8 w-full  space-x-4">
            <Link href="/upload/">
              <button className="rounded-md bg-key px-6 py-2 text-white">
                Advertise
              </button>{" "}
            </Link>
            <DrawerExample title="Weekly Meals" />{" "}
          </div>
        </div>

        {/* Live Events */}
        <div className="group rounded-md border border-dashed border-key p-6 hover:bg-white">
          <div className="flex  items-center space-x-4">
            <MdLiveTv className="text-7xl text-black" />
            <p className="text-3xl font-semibold text-black">Live Events</p>
          </div>
          <p className="mt-3">
            Let the world know what you are up to. <br />
            Advertise your live events on Algarve Wonders, engage with a bigger
            audience and garantee that your event will be a success.
          </p>
          <div className="mt-8 w-full  space-x-4">
            <Link href="/live/">
              <button className="rounded-md bg-key px-6 py-2 text-white">
                Advertise
              </button>{" "}
            </Link>
            <DrawerExample title="Live Events" />{" "}
          </div>
        </div>

        {/* List a location */}
        <div className="group rounded-md border border-dashed border-key p-6 hover:bg-white">
          <div className="flex  items-center space-x-4">
            <MdAddLocationAlt className="text-7xl text-black" />
            <p className="text-3xl font-semibold text-black">List Locations</p>
          </div>
          <p className="mt-3">
            List your locations on Algarve Wonders at ease and hassle free.{" "}
            <br />
            Advertise your local business with us using one of our many
            categories, for free! <br />
          </p>
          <div className="mt-8 w-full  space-x-4">
            <Link href="/submit">
              <button className="rounded-md bg-key px-6 py-2 text-white">
                Advertise
              </button>{" "}
            </Link>
            <DrawerExample title="List Locations" />{" "}
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
