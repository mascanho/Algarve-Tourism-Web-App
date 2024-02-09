import React from "react";
import getCurrentUser from "../libs/getCurrentUser";

async function uploadWeeklyMeals(formData: FormData) {
  const currentUser: any = getCurrentUser();

  try {
    // Create a new Weeklymeal record with Prisma
    const createdWeeklymeal = await prisma.weeklymeal.create({
      data: {
        dish: formData.get("monday_dish)") as string,
        dayOfWeek: "Monday",
        price: parseFloat(formData.get("monday_price")),
        business: formData.get("business") as string,
        email: currentUser?.email as string,
      },
    });

    await prisma.weeklymeal.create({
      data: {
        dish: formData.tuesday_dish,
        dayOfWeek: "Tuesday",
        price: formData.tuesday_price,
      },
    });

    await prisma.weeklymeal.create({
      data: {
        dish: formData.wednesday_dish,
        dayOfWeek: "Wednesday",
        price: formData.wednesday_price,
      },
    });

    await prisma.weeklymeal.create({
      data: {
        dish: formData.thursday_dish,
        dayOfWeek: "Thursday",
        price: formData.thursday_price,
      },
    });

    await prisma.weeklymeal.create({
      data: {
        dish: formData.friday_dish,
        dayOfWeek: "Friday",
        price: formData.friday_price,
      },
    });

    await prisma.weeklymeal.create({
      data: {
        dish: formData.saturday_dish,
        dayOfWeek: "Saturday",
        price: formData.saturday_price,
      },
    });

    await prisma.weeklymeal.create({
      data: {
        dish: formData.sunday_dish,
        dayOfWeek: "Sunday",
        price: formData.sunday_price,
      },
    });

    console.log("Created Weeklymeals");
  } catch (error) {
    console.error("Error creating Weeklymeals:", error);
    throw error;
  }
}
export default uploadWeeklyMeals;
