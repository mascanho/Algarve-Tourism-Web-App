import React from "react";
import prisma from "@/app/libs/prismadb";
import WeeklyMealsCard from "@/app/meals/_components/WeeklyMealsCard";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";

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
    <main className="min-h-screen">
      <div className="pt-16 sm:pt-24 mb-14 sm:mb-10 flex items-center justify-center relative ">
        <Link href="/meals">
          <IoArrowBackSharp className="text-black my-auto absolute  bottom-1 left-6 text-xl" />
        </Link>
        <h1 className="text-xl font-semibold m-auto text-center w-full text-black">
          {restFromMealDb[0].business}
        </h1>
      </div>
      <section className=" sm:grid sm:grid-cols-2 ">
        {restFromMealDb?.map((meal) => {
          return <WeeklyMealsCard meal={meal} />;
        })}
      </section>
    </main>
  );
}

export default Mealslug;
