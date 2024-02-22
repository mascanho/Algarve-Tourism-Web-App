import { cityArr } from "@/Data/Cities";
import SearchMeals from "@/app/actions/SearchMeals";
import { Select } from "@mantine/core";
import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchMeal() {
  return (
    <form
      action={async (formData: FormData) => {
        const data = await SearchMeals(formData);
      }}
      className="flex w-full mx-auto justify-center rounded-xl my-4   "
    >
      <div className="w-11/12 flex">
        <input
          placeholder="Restaurante name"
          type="text"
          name="meal"
          className="w-full bg-white relative border px-2 rounded-l-md"
        />
        <Select
          id="city_search"
          name="city"
          data={cityArr.map((city) => city.name)}
          className="w-2/4 border-0 border-key ring-0 bg-white rounded-r-md outline-none "
          placeholder="City"
        />
        <button
          className="rounded-md flex items-center bg-key text-white text-xs justify-center w-16"
          type="submit"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchMeal;
