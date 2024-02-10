import React from "react";
import prisma from "@/app/libs/prismadb";

// get the data from Prisma

async function MealsPage() {
  const allMeals = await prisma?.dailymeal?.findMany({});

  console.log(allMeals);

  return (
    <div className="h-screen pt-20 w-full">
      <h1 className="text-black mb-10 text-xl font-semibold text-center">
        Today's daily meals
      </h1>
      {allMeals?.map((meal: any) => {
        return (
          <div
            key={meal.id}
            className="w-11/12 mx-auto border p-2 rounded-xl bg-white mb-2"
          >
            <h3 className="font-bold text-black">{meal?.business}</h3>
            <h3 className="text-black">{meal?.meal}</h3>
            <h3 className="text-black">
              €{""}
              {meal?.price}
            </h3>
            <h3 className="text-black">{meal?.city}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default MealsPage;
