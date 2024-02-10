import React from "react";
import prisma from "@/app/libs/prismadb";
import { SegmentedControl } from "@mantine/core";
import SegmentTab from "./_components/SegmentTab";
import SearchMeal from "./_components/SearchMeal";

// get the data from Prisma

async function MealsPage() {
  let allMeals = await prisma?.dailymeal?.findMany({});

  console.log(allMeals);

  return (
    <div className="h-screen pt-20 w-full">
      <h1 className="text-black mb-10 text-xl font-semibold text-center">
        Today's daily meals
      </h1>
      <SegmentTab meals={allMeals} />
    </div>
  );
}

export default MealsPage;
