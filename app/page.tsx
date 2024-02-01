import Feedback from "@/components/Feedback";
import { quotes } from "@/Data/Quotes";
import { createClient } from "contentful";
import { cityArr } from "@/Data/Cities";
import { carRentals } from "@/Data/CarRentals";
import { Suspense, cache, lazy } from "react";
import { catArr } from "@/Data/Categories";
import dynamic from "next/dynamic";

// Lazy loaded
const Hero = dynamic(() => import("@/components/Hero"));
const Card = lazy(() => import("@/components/Card"));
const RandomBanner = dynamic(() => import("@/components/Layout/RandomBanner"));
const Acordion = dynamic(() => import("@/components/Acordion"));
const AlgarveSpecs = dynamic(() => import("@/components/AlgarveSpecs"));
const BottomCarousel = dynamic(
  () => import("@/components/Layout/BottomCarousel"),
);
const GenericCarousel = dynamic(
  () => import("@/components/Layout/CarouselGeneric"),
);
const StaticDataCarousel = dynamic(
  () => import("@/components/Layout/StaticDataCarousel"),
);
const Features = dynamic(() => import("@/components/Features"));

export const metadata = {
  title: "Algarve Wonders - Find The Best Hidden Gems",
  description: "The Best Place To Find The Hidden Gems In Algarve",
  icons: {
    icon: "/images/icon.png",
    href: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

const allCategories = async (catType: any, catLimit: number) => {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const res = await client.getEntries({
    content_type: catType,
    limit: catLimit,
    order: "-sys.createdAt",
  });
  return await res.items;
};

const getCategory = cache(allCategories);

export default async function Home(props: any) {
  const catCards = catArr;

  // Filter cats from all the categories
  const restaurants = await getCategory("restaurants", 6);
  const beaches = await getCategory("beaches", 6);
  const adventure = await getCategory("adventure", 6);
  // const events = await getCategory("events", 7);
  const cities = cityArr;
  const categories = await getCategory(["beaches", "events", "restaurants"], 7);

  return (
    <section className="w-full">
      <Hero categories={categories} />
      <Features />
      <div className="space-y-4 my-10 hidden mt-12 sm:mt-10 mx-auto text-center sm:flex sm:flex-col sm:justify-center w-11/12 max-w-7xl ">
        <h3 className="text-4xl font-bold text-black sm:text-5xl mt-20 hidden sm:flex sm:text-center sm:justify-center sm:mx-auto">
          Most recent entries
        </h3>{" "}
        <h4 className="w-8/12 mx-auto sm:flex flex-wrap hidden text-center text-gray-700 sm:mx-auto sm:text-center justify-center">
          This week&apos;s selection of popular places and events
        </h4>
      </div>

      <Card categories={categories} />
      <StaticDataCarousel categories={catCards} title="Popular categories" />
      <GenericCarousel categories={adventure} title="What to do" />
      <StaticDataCarousel categories={cities} title="Cities to visit" />
      <GenericCarousel categories={restaurants} title="Where to eat" />
      <BottomCarousel categories={beaches} title="More to explore" />
      <StaticDataCarousel categories={carRentals} title="Car rentals" />
      <RandomBanner categories={categories} />
      <Feedback {...quotes} />
      <AlgarveSpecs />
      <Acordion />
    </section>
  );
}
