import React from "react";
import { cookies } from "next/headers";
import { createClient } from "contentful";

const JourneyPage = async () => {
  // retrieve the cookies from the server
  const getCookie = (name: string) => {
    const cookieStore = cookies();
    return cookieStore.get(name)?.value;
  };

  const data = getCookie("builderData");
  const cookieData = JSON.parse(data || "{}");
  console.log(cookieData.days, cookieData.categories, "From the Page itself");

  const days = cookieData.days;
  const categories = cookieData.categories;
  const attractions = cookieData.attractions;

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

    console.log("Constructed query:", query); // Debug log

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
      console.log("Fetched items:", items, items.length);
      return items;
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });

  const DATATYPES = items.map((item) => {
    return item.fields.type[0];
  });

  const DATACITY = items.map((item) => {
    return item.fields.city;
  });

  console.log(DATATYPES, "DATATYPES");
  console.log(DATACITY, "DATACITY");

  const filteredTypes = (types, data, key) => {
    return data.filter((item) => types.includes(item[key]));
  };

  const filteredCity = (city, data, key) => {
    return data.filter((item) => city.includes(item[key]));
  };

  const albufeira = filteredCity(items, items, "Albufeira");

  console.log(albufeira);

  return (
    <div className="pt-20">
      <h3>heelllooooooooo</h3>
    </div>
  );
};

export default JourneyPage;
