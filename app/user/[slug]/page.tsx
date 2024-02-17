import React from "react";
import prisma from "@/app/libs/prismadb";
import WeeklyMealsCard from "@/app/meals/_components/WeeklyMealsCard";

async function Mealslug({ params }) {
  const restFromMealDb = await prisma?.Weeklymeal?.findMany({
    where: {
      userId: params?.slug,
    },
  });

  console.log(restFromMealDb, "0000000000000000000000");
  return (
    <>
      <h1 className="pt-20 m-auto text-black">{restFromMealDb[0].business}</h1>
      <section className="min-h-screen grid grid-cols-1 items-center ">
        {restFromMealDb?.map((meal) => {
          return <WeeklyMealsCard meal={meal} />;
        })}
      </section>
    </>
  );
}

export default Mealslug;
