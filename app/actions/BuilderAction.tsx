"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const resultObject = {
  days: "",
  attractions: "",
  categories: [],
  cities: [],
};

async function BuilderAction(formData: FormData) {
  const cookieStore = cookies();
  cookieStore.set("builder", "true");
  revalidatePath("/");

  // Convert FormData to array to iterate over
  const data = Array.from(formData.entries());

  for (const entry of data) {
    const key = entry[0];
    const value = entry[1];

    if (key === "days") {
      resultObject.days = value.toString(); // Ensure value is converted to string if necessary
    } else if (key === "attractions") {
      resultObject.attractions = value.toString();
    } else if (value === "on") {
      resultObject.categories.push(key);
    }
  }

  // Set the cookie store with the updated resultObject data
  cookieStore.set("builderData", JSON.stringify(resultObject));
  // revalidatePath("/builder");
}

async function BuilderActionCities(formData: FormData) {
  const cookieStore: any = cookies();
  const cookieData: any = cookieStore.get("builderData");
  const resultObject = JSON.parse(cookieData?.value || {});

  console.log(resultObject, "Marco");

  // Convert FormData to array to iterate over
  const data = Array.from(formData.entries());

  const cities = [];

  for (const entry of data) {
    cities.push(entry[0]);
  }

  // Push cities as an array of cities to resultObject
  resultObject.cities.push(...cities);

  // Set the cookie store with the updated resultObject data
  cookieStore.set("builderData", JSON.stringify(resultObject));
  revalidatePath("/builder");

  console.log(resultObject);
}

export { BuilderAction, BuilderActionCities };
