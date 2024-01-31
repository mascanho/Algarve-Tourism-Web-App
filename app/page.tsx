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

const getCategoriesCached = cache(
  // Get all categories from contentful
  async function getAllCategories() {
    const client: any = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
    const res = await client.getEntries({
      // content_type: ["beaches", "events", "restaurants", "adventure"],
      limit: 20,
      order: "-sys.createdAt",
    });

    return await res.items;
  },
);

export default async function Home(props: any) {
  const categories = await getCategoriesCached();

  const catCards = catArr;

  // Filter restaurants from all the categories
  const restaurants = categories.filter(
    (cat: any) => cat.fields.type && cat.fields.type.includes("restaurants"),
  );

  // filter beaches from all the PopularCategories
  const beaches = categories.filter(
    (cat: any) => cat.fields.type && cat.fields.type.includes("beaches"),
  );

  // filter adventure from all the PopularCategories
  const adventure = categories.filter(
    (cat: any) => cat.fields.type && cat.fields.type.includes("adventure"),
  );

  // filter all events from PopularCategories
  const events = categories.filter(
    (cat: any) => cat.fields.type && cat.fields.type.includes("events"),
  );

  // Filter the cities
  const cities = cityArr;

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
