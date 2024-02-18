import React from "react";
import WeeklyMealsCard from "./WeeklyMealsCard";

export default function WeeklyMeals({ weeklyMeals }: any) {
  console.log(weeklyMeals);

  return (
    <section className="mt-14">
      {weeklyMeals?.map((meal: any) => {
        return <WeeklyMealsCard key={meal?.id} meal={meal} />;
      })}
    </section>
  );
}
