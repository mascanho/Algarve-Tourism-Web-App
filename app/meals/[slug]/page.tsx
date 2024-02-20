import { IoArrowBackSharp } from "react-icons/io5";
import WeeklyMealsCard from "../_components/WeeklyMealsCard";
import Link from "next/link";

async function Mealslug({ params }) {
  try {
    // Decode the URL-encoded string
    const decodedDateString = decodeURIComponent(params?.slug);

    // Parse the decoded date string
    const date = new Date(decodedDateString);

    // Format the date
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const restFromMealDb = await prisma?.Weeklymeal?.findMany({
      where: {
        dayOfWeek: formattedDate,
      },
    });

    // Rendering logic remains the same as before
    return (
      <main className="min-h-screen">
        <div className="pt-16 sm:pt-24 mb-14 sm:mb-10 flex items-center justify-center relative ">
          <Link href="/meals">
            <IoArrowBackSharp className="text-black my-auto absolute  bottom-1 left-6 text-xl" />
          </Link>
          <h1 className="text-xl font-semibold m-auto text-center w-full text-black">
            {restFromMealDb[0].dayOfWeek}
          </h1>
        </div>
        <section className=" sm:grid sm:grid-cols-2 ">
          {restFromMealDb?.map((meal) => {
            return <WeeklyMealsCard meal={meal} />;
          })}
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error occurred:", error);
    // Handle the error gracefully, e.g., display an error message
    return (
      <div className="text-red-500 h-screen pt-20 flex  items-center justify-center">
        An error occurred while processing the request.
      </div>
    );
  }
}

export default Mealslug;
