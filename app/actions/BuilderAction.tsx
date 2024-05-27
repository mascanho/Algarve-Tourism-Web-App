"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

// Initial object structure to store form data
const resultObject = {
  days: "",
  attractions: "",
  categories: [],
  cities: [],
};

// Function to handle form submission and update builderData cookie
async function BuilderAction(formData: FormData) {
  const cookieStore = cookies();
  cookieStore.set("builder", "true"); // Set a "builder" cookie flag
  revalidatePath("/"); // Revalidate the root path after setting cookies

  // Convert FormData to array to iterate over
  const data = Array.from(formData.entries());

  // Iterate through form data entries
  for (const entry of data) {
    const key = entry[0];
    const value = entry[1];

    // Depending on the key, update resultObject accordingly
    if (key === "days" || key === "attractions") {
      resultObject[key] = value.toString(); // Ensure value is converted to string
    } else if (value === "on") {
      resultObject.categories.push(key); // Add category key to categories array
    }
  }

  // Set the cookie store with the updated resultObject data
  cookieStore.set("builderData", JSON.stringify(resultObject));
}

// Function to normalize city names, explicitly handling encoding artifacts
const normalizeCityName = (city) => {
  // Replace specific encoding artifacts with correct characters
  let normalizedCity = city.replace(/ã£/g, "ã");

  // Convert city name to lowercase and remove non-alphanumeric characters
  normalizedCity = normalizedCity
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, "")
    .trim();

  return normalizedCity;
};

// Function to handle city data submission and update builderData cookie
async function BuilderActionCities(formData: FormData) {
  const cookieStore = cookies();
  const cookieData = cookieStore.get("builderData");
  const resultObject = JSON.parse(
    cookieData?.value || JSON.stringify(resultObject),
  ); // Initialize with default if cookieData is undefined

  // Convert FormData to array of city names
  const cities = Array.from(formData.keys());

  // Normalize city names
  const normalizedCities = cities.map(normalizeCityName);

  // Update resultObject with normalized cities
  resultObject.cities.push(...normalizedCities);

  // Set the cookie store with the updated resultObject data
  cookieStore.set("builderData", JSON.stringify(resultObject));

  // Revalidate the path to reflect changes in the builderData cookie
  revalidatePath("/builder");
}

// Export functions for use in other parts of the application
export { BuilderAction, BuilderActionCities };
