import React from "react";

function DailyMeals({ meals }) {
  return (
    <div>
      {meals?.map((meal: any) => (
        <div
          key={meal.id}
          className="w-11/12 mx-auto border p-2 rounded-xl bg-white mb-2"
        >
          <h3 className="font-bold text-black">{meal?.business}</h3>
          <h3 className="text-black">{meal?.meal}</h3>
          <h3 className="text-black">€{meal?.price}</h3>
          <h3 className="text-black">{meal?.city}</h3>
        </div>
      ))}
    </div>
  );
}

export default DailyMeals;
