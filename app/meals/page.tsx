import React from "react";
import prisma from "@/app/libs/prismadb";
import { SegmentedControl } from "@mantine/core";
import SegmentTab from "./_components/SegmentTab";
import SearchMeal from "./_components/SearchMeal";
import { createClient } from "contentful";
import RestaurantsCards from "./_components/RestaurantsCards";
import type { Metadata, Viewport } from "next";
import { clear } from "console";

export const metadata: Metadata = {
  title: {
    default: "Find The Best Daily Meals in The Algarve",
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

// define TODAY's date
let today = new Date();
today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to zero to represent the start of the day

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

  // filter the meals in prisma by date, showing only todays meals, using a standard date format
  let todayMeals = await prisma?.Weeklymeal?.findMany({
    where: {
      date: today,
    },
  });

  const filteredToday = await prisma?.Weeklymeal?.findMany({
    where: {
      date: today,
      city: city,
    },
  });

  let filteredWeek = await prisma?.Weeklymeal?.findMany({
    where: {
      city: city,
    },
  });

  const sortedFilteredWeekMeals = filteredWeek.sort(
    (a, b) => new Date(a.dayOfWeek).getTime() - new Date(b.dayOfWeek).getTime(),
  );

  let allMeals = await prisma?.Weeklymeal?.findMany({});

  let weekMeals = await prisma?.Weeklymeal?.findMany({});

  // order the meals in function of their publication date
  const sortedWeekMeals = filteredWeek.sort(
    (a, b) => new Date(a.dayOfWeek).getTime() - new Date(b.dayOfWeek).getTime(),
  );

  return (
    <div className="pt-20 w-full max-w-4xl mx-auto">
      <h1 className="text-black mb-2 text-4xl font-semibold text-center">
        Daily meals
      </h1>
      <h3 className="text-center">
        Discover the best meals of the day near you
      </h3>
      <SegmentTab
        meals={allMeals}
        weekMeals={city ? sortedFilteredWeekMeals : sortedWeekMeals}
        todayMeals={city ? filteredToday : todayMeals}
      />
      <RestaurantsCards restaurants={restaurants} />
    </div>
  );
}

export default MealsPage;
