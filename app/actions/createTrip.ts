"use server";
import { cookies } from "next/headers";

export const createTrip = async (tripData: any) => {
  // Perform the trip creation logic here

  // Set the new trip data as a cookie
  const cookieStore = cookies();
  cookieStore.set("tripData", JSON.stringify(tripData));
};
