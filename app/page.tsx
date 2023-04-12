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

  return (
    <>
      <Hero />
      <section className="text-center bg-white pt-20 pb-16 space-y-4">
        <div className="w-11/12 mx-auto">
          <h3 className="text-3xl font-bold sm:text-5xl text-black">
            Guides for your next location{" "}
          </h3>
        </div>
        <h4 className="w-8/12 mx-auto">
          Check out this week&apos; selection of popular trips and events
        </h4>
        <Selection />
        <section className="max-w-7xl mx-auto w-11/12 sm:w-full">
          <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-10 w-full items-center place-items-center">
            {categories.map((cat: any) => (
              <Card
                key={Math.random()}
                title={cat.fields.title}
                category={categories}
              />
            ))}
          </section>
          <Pagination />
          <BottomAssets />
        </section>
      </section>
      <section className="h-full  mx-auto max-w-7xl">
        <div className="sm:py-20 my-10 text-center">
          <h2 className="text-black text-4xl">Satisfied customers</h2>
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
        <section className="py-28">
          <div className="bg-sky w-11/12 sm:w-full  mx-auto rounded-xl text-center text-white py-10 space-y-2 sm:space-y-4">
            <h4>Come join and have a vacation with us</h4>
            <h3 className="text-2xl sm:text-3xl">
              Prepare yourself and lets explore
            </h3>
            <h5>Explore the beauty of these hidden places</h5>
            <div className="pt-3">
              <button className="bg-white rounded-md text-black px-3 py-1">
                Get started
              </button>
            </div>
          </div>
          <PopularCategories />
        </section>
      </section>
    </>
  );
}
