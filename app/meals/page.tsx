import React from "react";
import prisma from "@/app/libs/prismadb";

// get the data from Prisma

async function MealsPage() {
  const allMeals = await prisma?.dailymeal?.findMany({});

  return (
    <div>
      {allMeals?.map((meal: any) => {
        return (
          <div key={meal.id}>
            <h1>{meal.meal}</h1>
            <h1>{meal.price}</h1>
            <h1>{meal.business}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default MealsPage;
