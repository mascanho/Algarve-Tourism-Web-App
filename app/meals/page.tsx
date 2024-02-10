import React from "react";
import prisma from "@/app/libs/prismadb";
import { SegmentedControl } from "@mantine/core";
import SegmentTab from "./_components/SegmentTab";
import SearchMeal from "./_components/SearchMeal";
import { createClient } from "contentful";
import RestaurantsCards from "./_components/RestaurantsCards";

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
      <SegmentTab meals={allMeals} search={search} citiesOnDb={citiesOnDb} />
      <RestaurantsCards restaurants={restaurants} />
    </div>
  );
}

export default MealsPage;
