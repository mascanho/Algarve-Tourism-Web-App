"use client";

import { catArr } from "@/Data/Categories";
import { useRouter } from "next/navigation";

// Generate random items
const randomItems = (array: any) => {
  const randomIndex = Math.floor(Math.random() * (array.length - 1)) + 1;
  return array[randomIndex];
};

function RandomBanner() {
  const router = useRouter();

  const handleClickRandom = () => {
    const randomItem = randomItems(catArr);
    console.log(randomItem, "random Item");
    router.push(randomItem.route);
  };

  return (
    <div className="w-11/12 py-10 mx-auto space-y-2 text-center text-white bg-sky/60 sm:w-full rounded-xl sm:space-y-2">
      <h4>Come join and have a vacation with us</h4>
      <h3 className="text-2xl sm:text-3xl">
        Prepare yourself and lets explore
      </h3>
      <h5>Explore the beauty of these hidden places</h5>
      <div className="pt-4">
        <button
          onClick={handleClickRandom}
          className="px-3 py-1 text-black transition-all ease-in delay-75 bg-white rounded-md active:scale-95"
        >
          Discover The Best Places
        </button>
      </div>
    </div>
  );
}

export default RandomBanner;
