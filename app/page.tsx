import Image from "next/image";
import Selection from "@/components/Selection";
import Pagination from "@/components/Pagination";
import BottomAssets from "@/components/BottomAssets";
import Hero from "@/components/Hero";
import Feedback from "@/components/Feedback";
import { quotes } from "@/Data/Quotes";
import PopularCategories from "@/components/PopularCategories";
import { createClient } from "contentful";
import CarouselHero from "@/components/Carousel";
import RandomBanner from "@/components/Layout/RandomBanner";
import { cityArr } from "@/Data/Cities";
import { carRentals } from "@/Data/CarRentals";
import Acordion from "@/components/Acordion";
import AffixScrollToTop from "@/components/Layout/Affix";
import Features from "@/components/Features";
import AlgarveSpecs from "@/components/AlgarveSpecs";
import { Suspense, cache, lazy } from "react";
import Link from "next/link";
import UsefullLinks from "@/components/UsefullLinks";
import Agenda from "@/components/Agenda";
import MosaicCategories from "@/components/MosaicCategories";
import BottomCarousel from "@/components/Layout/BottomCarousel";
import GenericCarousel from "@/components/Layout/CarouselGeneric";
import StaticDataCarousel from "@/components/Layout/StaticDataCarousel";
import { catArr } from "@/Data/Categories";
import dynamic from "next/dynamic";

const Card = lazy(() => import("@/components/Card"));

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
      content_type: ["beaches", "events", "restaurants", "adventure"],
      limit: 40,
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
      <div className="space-y-4 my-10 mt-24 sm:mt-10 mx-auto text-center sm:flex sm:flex-col sm:justify-center w-11/12 max-w-7xl ">
        <h3 className="text-4xl font-bold text-black sm:text-5xl mt-20 hidden sm:flex sm:text-center sm:justify-center sm:mx-auto">
          Most recent entries
        </h3>{" "}
        <h4 className="w-8/12 mx-auto sm:flex flex-wrap hidden text-center text-gray-700 sm:mx-auto sm:text-center justify-center">
          This week&apos;s selection of popular places and events
        </h4>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <Card categories={categories} />
      </Suspense>
      <StaticDataCarousel categories={catCards} title="Popular categories" />
      <GenericCarousel categories={adventure} title="What to do" />
      <StaticDataCarousel categories={cities} title="Cities to visit" />
      <GenericCarousel categories={restaurants} title="Where to eat" />
      <StaticDataCarousel categories={carRentals} title="Car rentals" />
      <BottomCarousel categories={beaches} title="More to explore" />
      <RandomBanner categories={categories} />
      <Feedback {...quotes} />
      <AlgarveSpecs />
      <Acordion />
    </section>
  );
}
