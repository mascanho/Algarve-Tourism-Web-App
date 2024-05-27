import React from "react";
import { cookies } from "next/headers";
import { createClient } from "contentful";

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
      .replace(/Ã/g, "aã") // Replace "Ã" with "A" (adjust as per your specific encoding issue)
      .replace(/Õ£/g, "e") // Replace "Õ£" with "e" (adjust as per your specific encoding issue)
      .replace(/Õƒ/g, "i") // Replace "Õƒ" with "i" (adjust as per your specific encoding issue)
      .replace(/Õ€/g, "o") // Replace "Õ€" with "o" (adjust as per your specific encoding issue)
      .replace(/Õ„/g, "u"); // Replace "Õ„" with "u" (adjust as per your specific encoding issue)

    // Convert city name to lowercase and remove non-alphanumeric characters
    normalizedCity = normalizedCity
      // .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, "")
      .trim();

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

  const items = await getCategories(catType, placeNames)
    .then((items) => {
      // console.log("Fetched items:", items, items.length);
      return items;
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });

  const filterItems = (cities, items, key) => {
    return items.filter((object) =>
      cities.includes(object.fields[key].toLowerCase()),
    );
  };

  const CITIES_FILTERED = filterItems(cities, items, "city");

  console.log(CITIES_FILTERED, "Cities filtered");

  console.log(cities);

  return (
    <div className="pt-20">
      <h3>heelllooooooooo</h3>

      <span>{CITIES_FILTERED.length}</span>
      {CITIES_FILTERED.map((item) => {
        return (
          <div key={item.sys.id}>
            <h3>{item.fields.city.toLowerCase()}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default JourneyPage;
