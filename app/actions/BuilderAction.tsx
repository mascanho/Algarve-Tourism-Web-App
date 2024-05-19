"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function BuilderAction(formData: FormData) {
  const cookieStore = cookies();
  cookieStore.set("builder", "true");
  revalidatePath("/");

  const data: any = formData.entries();

  console.log(Array.from(formData.entries()));

  const resultObject = {
    days: "",
    attractions: "",
    categories: [],
  };

  for (const entry of data) {
    const key = entry[0];
    const value = entry[1];

    if (key === "days") {
      resultObject.days = value;
    } else if (key === "attractions") {
      resultObject.attractions = value;
    } else if (value === "on") {
      resultObject.categories.push(key);
    }
  }
  console.log(resultObject.categories);

  // set the cookiestore with the data
  cookieStore.set("builderData", JSON.stringify(resultObject));
  revalidatePath("/builder");
}

export default BuilderAction;
