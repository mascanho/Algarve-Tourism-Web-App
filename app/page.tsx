import { cache, Suspense } from "react";
import { quotes } from "@/Data/Quotes";
import { createClient } from "contentful";
import { cityArr } from "@/Data/Cities";
import { catArr } from "@/Data/Categories";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/components/Card"));
const Hero = dynamic(() => import("@/components/Hero"));
const Feedback = dynamic(() => import("@/components/Feedback"));
const RandomBanner = dynamic(() => import("@/components/Layout/RandomBanner"));
// const Acordion = dynamic(() => import("@/components/Acordion"));

const BottomCarousel = dynamic(
  () => import("@/components/Layout/BottomCarousel"),
);
const GenericCarousel = dynamic(
  () => import("@/components/Layout/CarouselGeneric"),
);

const StaticDataCarousel = dynamic(
  () => import("@/components/Layout/StaticDataCarousel"),
);

const AlgarveSpecs = dynamic(() => import("@/components/AlgarveSpecs"));

const Features = dynamic(() => import("@/components/Features"));

export const metadata = {
  title: "Algarve Wonders - Find The Best Hidden Gems",
  description: "The Best Place To Find The Hidden Gems In the Algarve",
  icons: {
    icon: "/images/icon.png",
    href: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

// async function getCategories(catNumber: number, catType: any) {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID!,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
//   });
//   const res = await client.getEntries({
//     content_type: catType,
//     limit: catNumber,
//     order: "-sys.createdAt",
//   });
//   return res.items;
// }

// const getCategory = cache(getCategories);

export default async function Home() {
  // const categories = await getCategory(7, ["beaches", "restaurants"]);

  // const catCards = catArr;

  // Filter restaurants from all the categories
  // const restaurants = await getCategory(5, "restaurants");

  // filter beaches from all the PopularCategories
  // const beaches: any = await getCategory(5, "beaches");

  // filter adventure from all the PopularCategories
  // const adventure = await getCategory(5, "adventure");

  // Filter the cities
  // const cities = cityArr;

  return (
    <section className="min-h-screen flex justify-center align-middle items-center w-full bg-gradient-to-br from-blue-50 to-orange-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl p-8 md:p-12 border-t-4 border-orange-500">
        <div className="text-center">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Temporary Service Interruption
          </h1>

          <div className="text-lg text-gray-700 space-y-4 mb-6">
            <p>
              We're experiencing a temporary service interruption due to
              unexpected hosting costs.
            </p>
            <p>
              Thanks to your incredible support and the{" "}
              <strong className="text-orange-600">high traffic</strong> our site
              has received, our hosting provider has significantly increased
              their pricing.
            </p>
            <p>
              We're currently exploring{" "}
              <strong className="text-blue-600">new hosting solutions</strong>{" "}
              to bring Algarve Wonders back online as soon as possible.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
            <p className="text-orange-800">
              <strong>
                Thank you for your patience and continued support!
              </strong>
            </p>
          </div>

          <p className="text-gray-600 text-sm">
            We appreciate your understanding as we work to provide you with the
            best experience for discovering the hidden gems of the Algarve.
          </p>
        </div>
      </div>
    </section>
  );
}
