"use server";
import { revalidatePath } from "next/cache";
import getCurrentUser from "../libs/getCurrentUser";
import { redirect } from "next/dist/server/api-utils";

export async function uploadMeal(formData: FormData) {
  const currentUser = await getCurrentUser();
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to zero to represent the start of the day

  try {
    // Find the existing meal for today
    const existingMeal = await prisma.dailymeal.findFirst({
      where: {
        userId: currentUser?.id,
        date: today,
      },
    });

    if (existingMeal) {
      // Update the existing meal
      await prisma.dailymeal.update({
        where: {
          id: existingMeal.id,
        },
        data: {
          meal: formData.get("meal") as string,
          price: Number(formData.get("price")),
          business: formData.get("business") as string,
        },
      });
      console.log("Existing daily meal updated successfully");
    } else {
      // Create a new meal entry
      await prisma.dailymeal.create({
        data: {
          name: currentUser?.name as string,
          user: {
            connect: {
              id: currentUser?.id,
            },
          },
          meal: formData.get("meal") as string,
          price: Number(formData.get("price")),
          date: today,
          business: formData.get("business") as string,
        },
      });
      console.log("New daily meal uploaded successfully");
    }
  } catch (error) {
    console.error("Error uploading daily meal:", error);
    // Handle the error appropriately
  }

  revalidatePath("/");
}
