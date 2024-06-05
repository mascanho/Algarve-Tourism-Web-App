"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createTrip() {
  const cookieStore = cookies();

  const data = cookieStore.get("builderData");

  cookieStore.set("Planner", JSON.stringify(data));
  revalidatePath("/trip");
}
