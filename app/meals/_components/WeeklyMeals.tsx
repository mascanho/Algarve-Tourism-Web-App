import React from "react";
import WeeklyMealsCard from "./WeeklyMealsCard";

export default function WeeklyMeals({ weeklyMeals }: any) {
  console.log(weeklyMeals);

  return (
    <section>
      {weeklyMeals?.map((meal: any) => {
        return <WeeklyMealsCard key={meal?.id} meal={meal} />;
      })}
    </section>
  );
}
