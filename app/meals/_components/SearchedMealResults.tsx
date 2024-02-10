import React from "react";
import { FaCity, FaEuroSign } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { GrRestaurant } from "react-icons/gr";

function SearchedMealResults({ searchedMeals }: any) {
  return (
    <div>
      {searchedMeals && searchedMeals.length > 0 ? (
        searchedMeals.map((meal: any) => (
          <div
            key={meal.id}
            className="w-11/12 mx-auto border  rounded-xl flex bg-white mb-2"
          >
            <div className="w-full h-full flex my-auto ml-4 flex-col justify-center space-y-1 overflow-hidden">
              <h3 className="font-bold flex items-center text-key">
                <span>
                  <GrRestaurant className="text-xl mr-2" />
                </span>
                {meal?.business}
              </h3>
              <h3 className="text-key flex items-center text-sm my-auto">
                <span className="">
                  <GiHotMeal className="text-xl  my-auto mr-2" />
                </span>
                {meal?.meal}
              </h3>
              <h3 className="text-key flex items-center">
                <span className="">
                  <FaCity className="mr-2 text-xl" />
                </span>

                {meal?.city}
              </h3>
            </div>
            <div className="bg-gray-200 flex items-center text-black w-24 justify-center h-24 rounded-r-xl overflow-hidden">
              <h3 className="text-black flex text-sm items-center">
                <span className="">
                  <FaEuroSign />
                </span>
                {meal?.price}
              </h3>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No meals found.</p>
      )}
    </div>
  );
}

export default SearchedMealResults;
