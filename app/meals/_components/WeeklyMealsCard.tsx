import Link from "next/link";
import React from "react";
import { FaCity, FaEuroSign } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { GrRestaurant } from "react-icons/gr";

function WeeklyMealsCard({ meal }: any) {
  console.log(meal.userId, " from the weekly meal card");

  return (
    <div className="mt-10">
      <div
        key={meal.id}
        className="w-11/12 mx-auto border relative rounded-b-xl flex bg-white mb-1"
      >
        <span className="absolute text-xs  text-center h-6 fles items-center pt-1 -top-6 bg-key text-white w-full rounded-t-xl">
          {meal?.dayOfWeek}
        </span>
        <div className="w-full h-full flex my-auto ml-4 flex-col justify-center space-y-1 overflow-hidden">
          <Link href={`/user/${meal?.userId}`}>
            <h3 className="font-bold text-xs flex items-center text-key">
              <span>
                <GrRestaurant className="text-lg mr-2" />
              </span>
              {meal?.business}
            </h3>
          </Link>
          <h3 className="text-key flex items-center text-xs my-auto">
            <span className="">
              <GiHotMeal className="text-lg  my-auto mr-2" />
            </span>
            {meal?.meal}
          </h3>
          <h3 className="text-key flex text-xs items-center">
            <span className="">
              <FaCity className="mr-2 text-lg" />
            </span>

            {meal?.city}
          </h3>
        </div>
        <div className="bg-gray-200 flex items-center text-black w-20 justify-center h-24 rounded-br-xl overflow-hidden">
          <h3 className="text-black flex text-xs items-center">
            <span className="">
              <FaEuroSign />
            </span>
            {meal?.price}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WeeklyMealsCard;
