import React from "react";
import { cookies } from "next/headers";
import { createClient } from "contentful";
import { PlannerCard } from "./components/PlannerCard";
import BuilderFooter from "../builder/components/BuilderFooter";
import PreviousButton from "./components/PreviousButton";
import AddPlannerButton from "./components/AddPlannerButton";
import { createTrip } from "../actions/createTrip"; // Adjust import path as needed

const JourneyPage = async () => {
  // Retrieve the cookies from the server
  const getCookie = (name: string) => {
    const cookieStore = cookies();
    return cookieStore.get(name)?.value;
  };

  // Function to normalize city names, explicitly handling encoding artifacts
  const normalizeCityName = (city: string) => {
    const encodingArtifacts = [
      { pattern: /Ã£o/g, replacement: "ão" },
      { pattern: /Õ£/g, replacement: "e" },
      { pattern: /Õƒ/g, replacement: "i" },
      { pattern: /Õ€/g, replacement: "o" },
      { pattern: /Õ„/g, replacement: "u" },
    ];

    return encodingArtifacts.reduce(
      (acc, artifact) => acc.replace(artifact.pattern, artifact.replacement),
      city,
    );
  };

  // Function to normalize an array of city names
  const normalizeCityNames = (cities: string[]) =>
    cities?.map(normalizeCityName);

  const data = getCookie("builderData");
  const cookieData = JSON.parse(data || "{}");

  const days = cookieData.days;
  const categories = cookieData.categories;
  const attractions = cookieData.attractions;
  const cities = normalizeCityNames(cookieData.cities);

  // Fetch data from Contentful that matches the queries
  const getCategories = async (catType: string, placeNames: string[]) => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const query = {
      content_type: catType,
      order: "-sys.createdAt",
      limit: 1000,
    };

    try {
      const res = await client.getEntries(query);
      return res.items;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };

  const catType = "beaches"; // Replace with your actual content type ID
  const placeNames = ["faro", "albufeira"]; // Array of place names to search for

  const ALLDB = await getCategories(catType, placeNames)
    .then((items) => items)
    .catch((error) => {
      console.error("Error fetching categories:", error);
      return [];
    });

  // Filter the fetched data by cities and categories
  const CITIES_FILTERED = ALLDB.filter((item) =>
    cities.includes(item.fields.city),
  );

  let CATEGORIES_FILTERED = CITIES_FILTERED.filter((item) =>
    categories.some((category) =>
      item.fields.type.includes(category.toLowerCase()),
    ),
  );

  // Shuffle the array
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  shuffleArray(CATEGORIES_FILTERED);

  // Limit the number of attractions based on user input
  if (attractions) {
    const limit = parseInt(attractions) * Number(days);
    CATEGORIES_FILTERED = Object.freeze(CATEGORIES_FILTERED.slice(0, limit));
  }

  // Move the cookie setting to the server action
  // await createTrip(CATEGORIES_FILTERED);

  return (
    <>
      <div className="pt-20 max-w-4xl mx-auto">
        <section className="w-11/12 sm:w-full grid grid-cols-2 gap-x-8 sm:grid-cols-3 md:grid-cols-4 h-full sm:pt-10 sm:pb-10 pb-20 gap-y-4 sm:gap-y-6 self-center mx-auto max-w-5xl mb-20 items-center justify-center align-middle">
          {CATEGORIES_FILTERED.map((item) => (
            <PlannerCard
              key={item.sys.id}
              item={item}
              trip={CATEGORIES_FILTERED}
            />
          ))}
        </section>
      </div>
      <div className="h-16 border bg-white w-full flex justify-between z-20 text-black items-center fixed bottom-0">
        <div className="w-11/12 mx-auto flex items-center max-w-4xl justify-between">
          <PreviousButton />
          <AddPlannerButton />
        </div>
      </div>
    </>
  );
};

export default JourneyPage;
