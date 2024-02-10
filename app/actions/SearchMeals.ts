"use server";
export default async function (formData: FormData) {
  const city: any = formData.get("city");

  console.log(city, "city");

  const meals = await prisma?.dailymeal?.findMany({
    where: {
      city: city,
    },
  });

  return meals;
}
