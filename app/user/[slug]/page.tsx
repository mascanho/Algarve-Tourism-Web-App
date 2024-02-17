import React from "react";
import prisma from "@/app/libs/prismadb";
import WeeklyMealsCard from "@/app/meals/_components/WeeklyMealsCard";

async function Mealslug({ params }) {
  let restFromMealDb = await prisma?.Weeklymeal?.findMany({
    where: {
      userId: params?.slug,
    },
  });

  restFromMealDb.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <>
      <h1 className="pt-20 m-auto text-black">{restFromMealDb[0].business}</h1>
      <section className="min-h-screen sm:grid sm:grid-cols-2 ">
        {restFromMealDb?.map((meal) => {
          return <WeeklyMealsCard meal={meal} />;
        })}
      </section>
    </>
  );
}

export default Mealslug;
