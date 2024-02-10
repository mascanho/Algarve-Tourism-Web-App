import React from "react";
import prisma from "@/app/libs/prismadb";
import { SegmentedControl } from "@mantine/core";
import SegmentTab from "./_components/SegmentTab";
import SearchMeal from "./_components/SearchMeal";

// get the data from Prisma

async function MealsPage(params: any) {
  const city = params?.searchParams?.city;

  let allMeals = await prisma?.dailymeal?.findMany({});

  const search = await prisma?.dailymeal?.findMany({
    where: {
      city: city,
    },
  });

  console.log(city, search);

  return (
    <div className="h-screen pt-20 w-full">
      <h1 className="text-black mb-10 text-xl font-semibold text-center">
        Today's daily meals
      </h1>
      <SegmentTab meals={allMeals} search={search} />
    </div>
  );
}

export default MealsPage;
