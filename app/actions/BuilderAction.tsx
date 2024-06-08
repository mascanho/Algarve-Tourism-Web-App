"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

// Initial object structure to store form data
const initialResultObject = {
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

  // Get current data from the cookie
  const cookieData = cookieStore.get("builderData");
  const resultObject = JSON.parse(
    cookieData?.value || JSON.stringify(initialResultObject),
  ); // Initialize with default if cookieData is undefined

  // Initialize a Set to handle categories without duplicates
  const categoriesSet = new Set(resultObject.categories);

  // Iterate through form data entries
  for (const entry of data) {
    const key = entry[0];
    const value = entry[1];

    // Depending on the key, update resultObject accordingly
    if (key === "days" || key === "attractions") {
      resultObject[key] = value.toString(); // Ensure value is converted to string
    } else if (value === "on") {
      categoriesSet.add(key); // Add category key to categories Set
    }
  }

  // Update resultObject with unique categories
  resultObject.categories = Array.from(categoriesSet);

  // Set the cookie store with the updated resultObject data
  cookieStore.set("builderData", JSON.stringify(resultObject));
}

// Function to normalize city names, explicitly handling encoding artifacts
const normalizeCityName = (city) => {
  // Replace specific encoding artifacts with correct characters
  let normalizedCity = city.replace(/Ã£o/g, "ão"); // Replace "Ã£o" with "ão"
  return normalizedCity;
};

// Function to handle city data submission and update builderData cookie
async function BuilderActionCities(formData: FormData) {
  const cookieStore = cookies();
  const cookieData = cookieStore.get("builderData");
  const resultObject = JSON.parse(
    cookieData?.value || JSON.stringify(initialResultObject),
  ); // Initialize with default if cookieData is undefined

  // Convert FormData to array of city names
  const cities = Array.from(formData.keys());

  // Normalize city names
  const normalizedCities = cities.map(normalizeCityName);

  // Initialize a Set to handle cities without duplicates
  const citiesSet = new Set(resultObject.cities);

  // Add normalized cities to the Set
  normalizedCities.forEach((city) => citiesSet.add(city));

  // Update resultObject with unique cities
  resultObject.cities = Array.from(citiesSet);

  // Set the cookie store with the updated resultObject data
  cookieStore.set("builderData", JSON.stringify(resultObject));

  // Revalidate the path to reflect changes in the builderData cookie
  revalidatePath("/builder");
}

async function deleteCookies() {
  const cookieStore = cookies();
  cookieStore.delete("builder");
  cookieStore.delete("builderData");
}

// Export functions for use in other parts of the application
export { BuilderAction, BuilderActionCities, deleteCookies };
