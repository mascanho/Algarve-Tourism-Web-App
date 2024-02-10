"use client";
import React, { useEffect, useRef, useState } from "react";
import SearchMeals from "@/app/actions/SearchMeals";
import { cityArr } from "@/Data/Cities";
import { IoReloadSharp } from "react-icons/io5";
import SearchedMealResults from "./SearchedMealResults";
import DailyMeals from "./DailyMeals";
import { useRouter } from "next/navigation";

function SegmentTab({ meals, search }: any) {
  const [searchedMeals, setSearchedMeals] = useState(null);
  const [regime, setRegime] = useState("daily");
  const router = useRouter();

  console.log(search, "What the fuck are these");

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

  useEffect(() => {
    if (search) {
      setSearchedMeals(search);
    }
  }, [handleSelectChange]);

  return (
    <section className="w-full mb-4">
      {/* Your existing code for SegmentedControl */}

      {regime === "daily" && (
        <div className="mt-4">
          <form className="flex w-full mx-auto justify-center rounded-xl my-4 relative">
            <div className="w-11/12 flex">
              <select
                className="appearance-none border border-gray-300 rounded-l-xl bg-white w-full bg-transparent text-black px-3 py-2"
                id="city_search"
                name="city"
                onChange={handleSelectChange}
              >
                <option value="" disabled selected>
                  Select a city
                </option>
                {cityArr.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>{" "}
              <button
                className="rounded-r-md flex items-center bg-key text-white  justify-center w-16"
                type="button"
                onClick={() => {
                  router.push(`/meals`);
                }}
              >
                <IoReloadSharp />
              </button>
            </div>
          </form>

          {searchedMeals ? (
            <SearchedMealResults searchedMeals={searchedMeals} />
          ) : (
            <DailyMeals meals={meals} />
          )}
        </div>
      )}
    </section>
  );
}

export default SegmentTab;
