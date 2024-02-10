import React from "react";
import prisma from "@/app/libs/prismadb";
import { SegmentedControl } from "@mantine/core";
import SegmentTab from "./_components/SegmentTab";
import SearchMeal from "./_components/SearchMeal";
import { createClient } from "contentful";
import RestaurantsCards from "./_components/RestaurantsCards";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Find The Best Daily Meals in The Algarve | Algarve Wonders",
    template: "%s | Algarve Wonders",
  },
  description: "Discover the best daily dishes in the Algarve",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/icon.png",
    href: "/images/icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },

  // verification: {
  //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //   yandex: "14d2e73487fa6c71",
  // },
};

// get data from contentful
const getRestaurants = async () => {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  return await client
    .getEntries({
      content_type: "restaurants",
      limit: 10,
      include: 10,
      skip: 0,
    })
    .then((res: any) => {
      return res.items;
    });
};

// get the data from prisma
async function MealsPage(params: any) {
  const restaurants = await getRestaurants();
  const city = params?.searchParams?.city;
  const citiesOnDb = await prisma?.dailymeal?.findMany({
    select: {
      city: true,
    },
  });

  const reducedCities = Array.from(
    citiesOnDb
      ?.reduce((map, obj) => {
        map.set(obj.city, obj); // Assuming city is the property name holding the city name
        return map;
      }, new Map())
      .values(),
  );

  console.log(citiesOnDb, reducedCities, "00000000000000000000000000000000000");

  let allMeals = await prisma?.dailymeal?.findMany({});

  const search = await prisma?.dailymeal?.findMany({
    where: {
      city: city,
    },
  });

  return (
    <div className="pt-20 w-full">
      <h1 className="text-black mb-2 text-4xl font-semibold text-center">
        Daily meals
      </h1>
      <h3 className="text-center">
        Discover the best meals of the day near you
      </h3>
      <SegmentTab meals={allMeals} search={search} citiesOnDb={reducedCities} />
      <RestaurantsCards restaurants={restaurants} />
    </div>
  );
}

export default MealsPage;
