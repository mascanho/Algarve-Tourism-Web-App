"use server";

import { revalidatePath } from "next/cache";
import getCurrentUser from "../libs/getCurrentUser";

export async function uploadLiveEvents(formData: FormData) {
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
    // create the event on Mongo DB
    const liveEvent = await prisma?.live?.create({
      data: {
        name: currentUser?.name,
        email: currentUser?.email,
        title: formData.get("title") as string,
        website: formData.get("website") as string,
        image: formData.get("image") as string,
        location: formData.get("location") as string,
        description: formData.get("description") as string,
        date: formData.get("date") as string,
        time: formData.get("time") as string,
        city: formData.get("city") as string,
        userId: currentUser?.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/live");
}
