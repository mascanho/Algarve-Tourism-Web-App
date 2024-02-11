"use client";
import React, { useEffect, useState } from "react";
import { IoReloadSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { SegmentedControl } from "@mantine/core";
import SearchedMealResults from "./SearchedMealResults";
import DailyMeals from "./DailyMeals";
import Link from "next/link";

function SegmentTab({ meals, search, citiesOnDb }: any) {
  const [searchedMeals, setSearchedMeals] = useState(null);
  const [regime, setRegime] = useState("daily");
  const router = useRouter();

  const handleSelectChange = (event) => {
    const selectedCity = event.target.value;
    const params = new URLSearchParams(router.query);
    if (selectedCity) {
      params.set("city", selectedCity);
    } else {
      params.delete("city");
    }
    router.push(`?${params.toString()}`);
  };

  const handleReloadButtonClick = () => {
    // Reset the selected value of the select field
    const selectElement = document.getElementById("city_search");
    if (selectElement) {
      selectElement.value = ""; // Set the value to empty string
    }
    // Navigate to /meals
    router.push(`/meals`);
  };

  useEffect(() => {
    if (search) {
      setSearchedMeals(search);
    }
  }, [search]);

  // format the current week day: Monday,...
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const dayOfWeekNumber = today.getDay();
  const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

  return (
    <section className="w-full mb-4 mt-8">
      <SegmentedControl
        className="mx-auto w-11/12 flex"
        value={regime}
        onChange={setRegime}
        data={[
          { value: "daily", label: dayOfWeekName },
          { value: "weekly", label: "Weekly" },
        ]}
      />

      {regime === "daily" && (
        <div className="mt-4">
          <div className="w-11/12 flex mx-auto mb-4">
            <select
              className="appearance-none border border-gray-300 rounded-l-xl bg-white w-full bg-transparent text-black px-3 py-2"
              id="city_search"
              name="city"
              onChange={handleSelectChange}
            >
              <option value="" disabled selected>
                Select a city
              </option>
              {citiesOnDb?.map((city: any) => (
                <option key={city?.city}>{city.city}</option>
              ))}
            </select>
            <button
              className="rounded-r-xl flex items-center bg-key text-white justify-center w-20"
              type="button"
              onClick={handleReloadButtonClick}
            >
              <IoReloadSharp />
            </button>
          </div>
          {searchedMeals?.length > 0 ? (
            <SearchedMealResults searchedMeals={searchedMeals} />
          ) : (
            <div className="mx-auto flex justify-center mt-10 w-11/12">
              <span className="text-center w-full mx-auto">
                No daily meals today, yet.
                <Link className="underline ml-1" href={"/upload/"}>
                  Add some
                </Link>
              </span>
            </div>
          )}
        </div>
      )}

      {regime === "weekly" && (
        <div className="mt-4 text-center">No weekly meals at the moment</div>
      )}
    </section>
  );
}

export default SegmentTab;
