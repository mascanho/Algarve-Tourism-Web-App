import Image from "next/image";
import { Inter } from "next/font/google";
import Selection from "@/components/Selection";
import { Card } from "@/components/Card";
import type { Metadata } from "next";
import { catArr } from "@/Data/Categories";
import Pagination from "@/components/Pagination";
import BottomAssets from "@/components/BottomAssets";
import { CarouselCard } from "@/components/Card2";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import { Reviews } from "@/Data/Reviews";
import PopularCategories from "@/components/PopularCategories";
import { createClient } from "contentful";
import CarouselHero from "@/components/Carousel";
import useSearchedData from "./hooks/useSearchedData";

const inter = Inter({ subsets: ["latin"] });

// Get all categories from contentful

async function getAllCategories() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const res = await client.getEntries({ content_type: "events" });

  return await res.items;
}

export default async function Home(props: any) {
  const categories = await getAllCategories();

  console.log(categories[1].sys.contentType.sys.id);

  return (
    <>
      <Hero />
      <section className="pt-20 pb-6 space-y-4 text-cente-white">
        <div className="-q11/12 mx-auto">
          <h3 className="text-3xl font-bold text-black sm:text-5xl">
            Guides for your next location{" "}
          </h3>
        </div>
        <h4 className="-8/12 mx-auto">
          Check out this week&apos; selection of popular trips and events
        </h4>
        <Selection />
        <section className="w-11/12 mx-auto max-w-7xl sm:w-11/12 sm:pt-5">
          <section className="grid items-center w-full sm:grid-cols-2 sm:gap-x-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 place-items-left">
            {/* Normal Cards with no search feature */}
            {categories.map((cat: any) => (
              <Card
                key={Math.random()}
                title={cat?.fields?.title}
                category={categories}
              />
            ))}
          </section>
          <Pagination />
          <BottomAssets />
        </section>
      </section>
      <section className="h-full mx-auto max-w-7xl">
        <div className="my-10 text-center sm:pt-20">
          <h2 className="text-4xl font-semibold text-black sm:text-4xl">
            Satisfied customers
          </h2>
          <h4 className="w-10/12 mx-auto mt-4 sm:w-6/12">
            See what people are talking about the fantastic locations, events
            and hidden gems in the south of Portugal
          </h4>
        </div>
        <section className="grid sm:grid-cols-3 gap-y-6">
          {Reviews.map((review: any) => (
            <Review
              key={review.id}
              id={review.id}
              name={review.name}
              job={review.job}
              rating={review.rating}
              review={review.review}
              image={review.image}
            />
          ))}
        </section>
        <section className="pt-16 sm:py-28">
          <div className="w-11/12 py-10 mx-auto space-y-2 text-center text-white bg-sky sm:w-full rounded-xl sm:space-y-2">
            <h4>Come join and have a vacation with us</h4>
            <h3 className="text-2xl sm:text-3xl">
              Prepare yourself and lets explore
            </h3>
            <h5>Explore the beauty of these hidden places</h5>
            <div className="pt-3">
              <button className="px-3 py-1 text-black transition-all ease-in delay-75 bg-white rounded-md active:scale-95">
                Discover The Best Places
              </button>
            </div>
          </div>
          <PopularCategories />
        </section>
      </section>
      <section className="mx-auto mb-40 h-96">
        <CarouselHero />
      </section>
    </>
  );
}
