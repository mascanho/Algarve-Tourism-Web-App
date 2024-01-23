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
    <section className="w-fit mx-auto">
      {/* <div className="relative"> */}
      {/*   <Hero categories={categories} /> */}
      {/* </div> */}
      <section className="space-y-4 text-center-white max-w-7xl mx-auto border-red-500 border ">
        <div className="mb-28">{/* <Features /> */}</div>
        <div className="mx-auto text-center">
          <h3 className="text-3xl font-bold text-black sm:text-5xl">
            Discover the best of the Algarve
          </h3>
        </div>
        <h4 className="w-8/12 mx-auto text-center">
          Check out this week&apos;s selection of popular places and events
        </h4>
        <section className="w-11/12 mx-auto max-w-7xl sm:w-11/12 sm:pt-5">
          <Selection />
          <section className="sm:grid mx-auto containera items-start w-full sm:grid-cols-2 sm:gap-x-10 md:gap-x-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 sm:gap-y-2 place-items-center">
            {/* {categories.slice(0, 8).map((cat: any) => ( */}
            {/*   <Card */}
            {/*     key={cat?.fields?.title} */}
            {/*     title={cat?.fields?.title} */}
            {/*     description={cat?.fields?.shortDescription} */}
            {/*     image={cat?.fields?.mainImage?.fields?.file?.url} */}
            {/*     category={categories} */}
            {/*     slug={cat?.fields?.slug} */}
            {/*     id={cat?.fields?.title} */}
            {/*     hiddenGem={cat?.fields?.hiddenGem} */}
            {/*     city={cat?.fields?.city} */}
            {/*     type={cat?.fields?.type} */}
            {/*     shortDescription={cat?.fields?.shortDescription} */}
            {/*     mainImage={cat?.fields?.mainImage?.fields?.file?.url} */}
            {/*     rating={cat?.fields?.rating} */}
            {/*     tags={cat?.fields?.tags} */}
            {/*     embededMap={cat?.fields?.embededMap} */}
            {/*     mapShare={cat?.fields?.mapShare} */}
            {/*     price={cat?.fields?.price} */}
            {/*   /> */}
            {/* ))} */}
          </section>
          {/* <div className="flex justify-center my-10"> */}
          {/*   <Link href="/beaches"> */}
          {/*     <button className="border px-5 py-2 rounded-md">View more</button> */}
          {/*   </Link> */}
          {/* </div> */}
        </section>
      </section>
      <section className="h-fit mx-auto max-w-7xl">
        <div className="my-10 text-center sm:pt-20">
          <h2 className="text-4xl font-semibold text-black sm:text-4xl">
            Satisfied Visitors
          </h2>
          <h4 className="w-10/12 mx-auto mt-4 sm:w-6/12">
            See what people are talking about the fantastic locations, events
            and hidden gems in the south of Portugal
          </h4>
        </div>
        <section className="w-11/12 sm:w-full mx-auto">
          {/* <Feedback {...quotes} /> */}
        </section>
        <section
          className="pt-16 sm:pt-20 sm:pb-2 w-11/12 sm:w-full mx-auto"
          id="aigenerate"
        >
          {/* <RandomBanner categories={categories} /> */}
        </section>
      </section>
      {/* Generic Carousel  */}
      <section className="mx-auto animate-fade-in mt-20 max-w-7xl">
        <h2 className="max-w-7xl mx-auto text-left w-11/12 w-full sm:text-5xl text-black font-semibold sm:pb-6">
          What to do
        </h2>
        {/* <GenericCarousel categories={categories} /> */}
      </section>
      <section className="mx-auto animate-fade-in mt-20 max-w-7xl ">
        <h2 className="max-w-7xl mx-auto text-left w-full text-4xl sm:text-5xl text-black font-semibold sm:pb-6">
          Cities to visit
        </h2>
        {/* <StaticDataCarousel categories={cities} /> */}
      </section>
      <section className="mx-auto animate-fade-in mt-20 max-w-7xl  ">
        <h2 className="max-w-7xl mx-auto text-left  text-4xl sm:text-5xl text-black font-semibold sm:pb-6">
          Restaurants
        </h2>
        {/* <GenericCarousel categories={restaurants} /> */}
      </section>
      <section className="mx-auto animate-fade-in mt-20 mb-14 sm:mb-32 max-w-7xl ">
        <h2 className="max-w-7xl mx-auto text-left text-4xl sm:text-5xl text-black font-semibold sm:pb-6">
          Car rentals
        </h2>
        {/* <StaticDataCarousel categories={carRentals} /> */}
      </section>
      <section className=" mx-auto pt-12 sm:pt-2 pb-24 sm:pb-1 max-w-7xl ">
        <h4 className="max-w-7xl text-left sm:pb-6 mx-auto text-4xl sm:text-5xl  font-semibold text-black">
          More to explore
        </h4>
        {/* <BottomCarousel categories={categories} /> */}
      </section>
      {/*BOTTOM ASSETS */}
      {/* <section className="max-w-7xl mx-auto w-11/12 mb-20"> */}
      {/* <BottomAssets /> */}
      {/* </section> */}
      {/* Algarve Specs */}
      {/* <section className="animate-fade-in pb-10 max-w-7xl mx-auto"> */}
      {/* <AlgarveSpecs /> */}
      {/* </section> */}
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
