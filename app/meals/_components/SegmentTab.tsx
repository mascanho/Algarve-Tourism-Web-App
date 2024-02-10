"use client";
import { SegmentedControl, Select } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import SearchMeal from "./SearchMeal";
import SearchMeals from "@/app/actions/SearchMeals";
import { cityArr } from "@/Data/Cities";
import { FaSearch } from "react-icons/fa";
import SearchedMealResults from "./SearchedMealResults";
import DailyMeals from "./DailyMeals";
import { useRouter } from "next/navigation";
import { IoReload, IoReloadSharp } from "react-icons/io5";

function SegmentTab({ meals }: any, searchParams: any) {
  console.log(searchParams, "search params");
  const [searchedMeals, setSearchedMeals]: any = useState(null);
  const [inputRetaurant, setInputRetaurant] = useState("");
  const formRef = useRef();
  const router = useRouter();

  useEffect(() => {
    console.log("hello");
    console.log(formRef.current);
  }, [searchedMeals, inputRetaurant]);

  const [regime, setRegime] = useState("daily");
  return (
    <section className="w-full mb-4">
      <SegmentedControl
        className="mx-auto w-11/12 flex"
        value={regime}
        onChange={setRegime}
        data={[
          { value: "daily", label: "Daily" },
          { value: "weekly", label: "Weekly" },
        ]}
      />
      {regime === "daily" && (
        <div className="mt-4">
          <form
            ref={formRef}
            action={async (formData: FormData) => {
              const data = await SearchMeals(formData);
              console.log(data, "from the Form component");
              setSearchedMeals(data);
            }}
            className="flex w-full mx-auto justify-center rounded-xl my-4  relative "
          >
            <div className="w-11/12 flex">
              <select
                className="appearance-none border border-gray-300 rounded-l-xl bg-white w-full active:ring-0  bg-transparent text-black px-3 py-2"
                id="city_search"
                name="city"
                onChange={() => formRef?.current?.requestSubmit()}
                defaultValue="" // Set default value to an empty string
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
                type="submit"
                onClick={() => window?.location?.reload()}
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
