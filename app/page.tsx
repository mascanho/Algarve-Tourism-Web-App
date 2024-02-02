import Image from "next/image";
import { cache } from "react";
import { quotes } from "@/Data/Quotes";
import { createClient } from "contentful";
import { cityArr } from "@/Data/Cities";
import { carRentals } from "@/Data/CarRentals";
import Link from "next/link";
import { catArr } from "@/Data/Categories";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/components/Card"));
const Hero = dynamic(() => import("@/components/Hero"), { suspense: true });
const Feedback = dynamic(() => import("@/components/Feedback"), {
  suspense: true,
});
const RandomBanner = dynamic(() => import("@/components/Layout/RandomBanner"), {
  suspense: true,
});
const Acordion = dynamic(() => import("@/components/Acordion"), {
  suspense: true,
});
const BottomCarousel = dynamic(
  () => import("@/components/Layout/BottomCarousel"),
  { suspense: true },
);
const GenericCarousel = dynamic(
  () => import("@/components/Layout/CarouselGeneric"),
  { suspense: true },
);

const StaticDataCarousel = dynamic(
  () => import("@/components/Layout/StaticDataCarousel"),
  { suspense: true },
);

const AlgarveSpecs = dynamic(() => import("@/components/AlgarveSpecs"), {
  suspense: true,
});

const Features = dynamic(() => import("@/components/Features"), {
  suspense: true,
});

export const metadata = {
  title: "Algarve Wonders - Find The Best Hidden Gems",
  description: "The Best Place To Find The Hidden Gems In Algarve",
  icons: {
    icon: "/images/icon.png",
    href: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

async function getCategories(catNumber: number, catType: any) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const res = await client.getEntries({
    content_type: catType,
    limit: catNumber,
    order: "-sys.createdAt",
  });
  return res.items;
}

const getCategory = cache(getCategories);

export default async function Home(props: any) {
  const categories = await getCategory(7, ["beaches", "restaurants"]);

  const catCards = catArr;

  // Filter restaurants from all the categories
  const restaurants = await getCategory(6, "restaurants");

  // filter beaches from all the PopularCategories
  const beaches = await getCategory(6, "beaches");

  // filter adventure from all the PopularCategories
  const adventure = await getCategory(6, "adventure");

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
