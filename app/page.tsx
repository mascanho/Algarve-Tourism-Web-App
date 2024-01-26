import Image from "next/image";
import Selection from "@/components/Selection";
import { Card } from "@/components/Card";
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
import { cache, lazy, Suspense } from "react";
import Link from "next/link";
import UsefullLinks from "@/components/UsefullLinks";
import Agenda from "@/components/Agenda";
import MosaicCategories from "@/components/MosaicCategories";
import BottomCarousel from "@/components/Layout/BottomCarousel";
import Testing from "@/components/Layout/CarTesting";
import GenericCarousel from "@/components/Layout/CarouselGeneric";
import StaticDataCarousel from "@/components/Layout/StaticDataCarousel";
import { catArr } from "@/Data/Categories";

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
      limit: 100,
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
      <div className="space-y-4 my-10 mt-28 mx-auto text-center sm:flex sm:flex-col sm:justify-center w-11/12 max-w-7xl ">
        <h3 className="text-4xl font-bold text-black sm:text-5xl mt-20 hidden sm:flex sm:text-center sm:justify-center sm:mx-auto">
          Just Added
        </h3>{" "}
        <h4 className="w-8/12 mx-auto sm:flex flex-wrap hidden text-center text-gray-700 sm:mx-auto sm:text-center justify-center">
          This week&apos;s selection of popular places and events
        </h4>
      </div>

      <Selection />
      <section className="sm:grid mx-auto hidden  items-start sm:w-11/12 sm:grid-cols-2 sm:gap-x-10 md:gap-x-4 lg:gap-x-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 sm:gap-y-2 place-items-center max-w-7xl ">
        {categories.slice(0, 8).map((cat: any) => (
          <Card
            key={cat?.fields?.title}
            title={cat?.fields?.title}
            description={cat?.fields?.shortDescription}
            image={cat?.fields?.mainImage?.fields?.file?.url}
            category={categories}
            slug={cat?.fields?.slug}
            id={cat?.fields?.title}
            hiddenGem={cat?.fields?.hiddenGem}
            city={cat?.fields?.city}
            type={cat?.fields?.type}
            shortDescription={cat?.fields?.shortDescription}
            mainImage={cat?.fields?.mainImage?.fields?.file?.url}
            rating={cat?.fields?.rating}
            tags={cat?.fields?.tags}
            embededMap={cat?.fields?.embededMap}
            mapShare={cat?.fields?.mapShare}
            price={cat?.fields?.price}
          />
        ))}
        {/* <div className="flex justify-center my-10"> */}
        {/*   <Link href="/beaches"> */}
        {/*     <button className="border px-5 py-2 rounded-md">View more</button> */}
        {/*   </Link> */}
        {/* </div> */}
      </section>
      <StaticDataCarousel categories={catCards} title="Popular Categories" />
      <GenericCarousel categories={categories} title="What to do" />
      <StaticDataCarousel categories={cities} title="Cities to visit" />
      <GenericCarousel categories={restaurants} title="Where to eat" />
      <StaticDataCarousel categories={carRentals} title="Car rentals" />
      <BottomCarousel categories={categories} title="More to explore" />
      <RandomBanner categories={categories} />
      <Feedback {...quotes} />
      {/*BOTTOM ASSETS */}
      {/* <BottomAssets /> */}
      <AlgarveSpecs />
      {/* Frequently asked questions */}
      {/* <section className="w-11/12 md:max-w-7xl mx-auto space-y-8 animate-fade-in my-20"> */}
      {/* <h4 className="text-xl">Frequently asked questions</h4> */}
      {/* <Acordion /> */}
      {/* </section> */}
      {/* Good To Know */}
      {/* <section className="sm:mb-40 max-w-7xl mx-auto w-11/12  mt-20"> */}
      {/*   <h3 className="text-2xl">Useful links</h3> */}
      {/*   <hr className="w-32 transition-all ease-in mt-2 delay-100  group-hover:w-11/12 hover:rounded-full   bg-sky h-1 rounded-full " /> */}
      {/*   <div className="mt-8"> */}
      {/*    
      {/*   </div> */}
      {/* </section> */}
    </section>
  );
}
