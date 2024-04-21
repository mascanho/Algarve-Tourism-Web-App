"use server";
import { revalidatePath } from "next/cache";
import getCurrentUser from "../libs/getCurrentUser";
import prisma from "../libs/prismadb";

export async function uploadWeekly(formData: FormData) {
  const currentUser = await getCurrentUser();
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to zero to represent the start of the day
  const dateString = formData.get("weekday");
  const day = new Date(dateString);
  const dayOfweek = day.getDay();

  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const normalDateString = new Intl.DateTimeFormat("en-US", options).format(
    date,
  );

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = daysOfWeek[dayOfweek];

  try {
    await prisma?.weeklymeal.create({
      data: {
        name: currentUser.email,
        email: currentUser.email,
        meal: formData.get("meal"),
        dayOfWeek: normalDateString,
        price: Number(formData.get("price")),
        business: formData.get("business"),
        city: formData.get("city"),
        userId: currentUser?.id,
        date: dateString + "T00:00:00.000Z",
      },
    });
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/");
}
