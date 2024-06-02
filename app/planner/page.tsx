import React from "react";
import { cookies } from "next/headers";
import { createClient } from "contentful";
import { PlannerCard } from "./components/PlannerCard";
import BuilderFooter from "../builder/components/BuilderFooter";
import PreviousButton from "./components/PreviousButton";

const JourneyPage = async () => {
  // retrieve the cookies from the server
  const getCookie = (name: string) => {
    const cookieStore = cookies();
    return cookieStore.get(name)?.value;
  };

  // Function to normalize city names, explicitly handling encoding artifacts
  const normalizeCityName = (city) => {
    // Replace specific encoding artifacts with correct characters
    let normalizedCity = city
      .replace(/Ã£o/g, "ão") // Replace "Ã£o" with "ão"
      .replace(/Õ£/g, "e") // Replace "Õ£" with "e" (adjust as per your specific encoding issue)
      .replace(/Õƒ/g, "i") // Replace "Õƒ" with "i" (adjust as per your specific encoding issue)
      .replace(/Õ€/g, "o") // Replace "Õ€" with "o" (adjust as per your specific encoding issue)
      .replace(/Õ„/g, "u"); // Replace "Õ„" with "u" (adjust as per your specific encoding issue)

    return normalizedCity;
  };

  // Function to normalize an array of city names
  const normalizeCityNames = (cities) => {
    return cities.map(normalizeCityName);
  };

  const data = getCookie("builderData");
  const cookieData = JSON.parse(data || "{}");

  const days = cookieData.days;
  const categories = cookieData.categories;
  const attractions = cookieData.attractions;
  const cities = normalizeCityNames(cookieData.cities);

  // Fetch data from Contentful that matches the queries
  async function getCategories(catType: string, placeNames: string[]) {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    // Construct the query
    const query = {
      content_type: ["restaurants", "yes"],
      order: "-sys.createdAt",
      limit: 1000,
    };

    // console.log("Constructed query:", query); // Debug log

    try {
      // Fetch entries from Contentful
      const res = await client.getEntries(query);
      return res.items;
    } catch (error) {
      // Log the error and return an empty array
      console.error("Error fetching categories:", error);
      return [];
    }
  }

  // Example usage
  const catType = "beaches"; // Replace with your actual content type ID
  const placeNames = ["faro", "albufeira"]; // Array of place names to search for

  const ALLDB = await getCategories(catType, placeNames)
    .then((items) => {
      // console.log("Fetched items:", items, items.length);
      return items;
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });

  // From ALLDB find the ones that match items inside of the arrays for cities and categories

  let CITIES_FILTERED = ALLDB?.filter((item) => {
    return cities.includes(item.fields.city);
  });

  let CATEGORIES_FILTERED = CITIES_FILTERED.filter((item) => {
    return categories.some((category) =>
      item.fields.type.includes(category.toLowerCase()),
    );
  });

  console.log(
    CATEGORIES_FILTERED,
    "FINAL FILTERED DATA: ",
    CATEGORIES_FILTERED?.length,
  );

  console.log(categories);
  console.log(typeof days);

  // Shuffle the objects in the array

  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(CATEGORIES_FILTERED);

  // limit the numbewr of attractions based on user input

  if (attractions) {
    CATEGORIES_FILTERED = CATEGORIES_FILTERED.slice(
      0,
      parseInt(attractions) * Number(days),
    );
  }

  return (
    <div className="pt-20">
      <h3>heelllooooooooo</h3>

      <span>{CITIES_FILTERED?.length}</span>
      <section className=" grid sm:grid-cols-3 md:grid-cols-4 h-full pb-20  gap-y-6 self-center mx-auto max-w-5xl  mb-20 items-center justify-center align-middle">
        {CATEGORIES_FILTERED?.map((item) => {
          return <PlannerCard key={item.sys.id} item={item} />;
        })}
      </section>
      <div className="h-16  border bg-white w-full flex justify-between z-20  text-black  items-center fixed bottom-0 ">
        <div className="w-11/12 mx-auto flex items-center justify-end max-w-[53rem]  justify-between ">
          <PreviousButton />
          <button
            type="button"
            className="w-24 bg-key text-white py-1 rounded-lg px-4 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            text
          </button>
        </div>
      </div>
    </div>
  );
};

export default JourneyPage;
