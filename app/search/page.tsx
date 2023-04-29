"use client";

import { Inter } from "next/font/google";
import Selection from "@/components/Selection";

import Pagination from "@/components/Pagination";
import BottomAssets from "@/components/BottomAssets";

import Review from "@/components/Review";
import { Reviews } from "@/Data/Reviews";
import PopularCategories from "@/components/PopularCategories";

import CarouselHero from "@/components/Carousel";
import useSearchedData from "../hooks/useSearchedData";

import { SearchCard } from "@/components/SearchCard";
import Search from "@/components/Search";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  const searchData = useSearchedData();

  return (
    <>
      <section>
        <Search placeholderText={"Search now..."} />
      </section>
      <section className="pt-10 pb-16 space-y-4 text-center bg-white">
        <div className="w-11/12 mx-auto">
          {searchData.data.length === 0 ? (
            <>
              <h3
                className="text-3xl font-bold text-black sm:text-5xl"
                id="search"
              >
                Ups.... nothing to show here 😭
              </h3>
              <h4 className="w-8/12 mx-auto mt-4">
                Try searching for something else or check out the popular
                categories
              </h4>
            </>
          ) : (
            <>
              <h3
                className="text-3xl font-bold text-black sm:text-5xl"
                id="search"
              >
                Searching for:{" "}
                <span className="text-sky">{searchData.searchInput}</span>
              </h3>

              <h4 className="w-8/12 mx-auto mt-4">
                Check out this week&apos; selection of popular trips and events
              </h4>
            </>
          )}
        </div>

        <section className="w-11/12 mx-auto max-w-7xl sm:w-11/12">
          <section className="grid items-center w-full grid-cols-1 mt-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-10 place-items-start">
            {/* Normal Cards with no search feature */}
            {searchData.data?.map((item: any) => (
              <SearchCard
                key={item.id}
                title={item.title}
                category={item.category}
                slug={item.slug}
                tags={item.tags}
                hiddenGem={item.hiddenGem}
                mainImage={item.mainImage}
                city={item.city}
                type={item.type}
              />
            ))}
          </section>
          {/* <Pagination /> */}
          <div className="mt-32 divider">
            <span className="text-xl">Some of our suggestions</span>
          </div>
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
          <div className="w-11/12 py-8 mx-auto space-y-2 text-center text-white bg-red-500 sm:w-full rounded-xl sm:space-y-2">
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