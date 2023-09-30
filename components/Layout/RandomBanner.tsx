"use client";

import { catArr } from "@/Data/Categories";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { useState } from "react";

// Generate random items
const randomItems = (array: any) => {
  const randomIndex = Math.floor(Math.random() * (array.length - 1)) + 1;
  return array[randomIndex];
};

function RandomBanner({ categories }: any) {
  const router = useRouter();

  const [randomChoice, setRandomChoice] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const handleClickRandom = () => {
    const randomItem = randomItems(catArr);
    router.push(randomItem.route);
  };

  const GenerateRandomChoice = () => {
    const categoriesFiltered: any = [];
    const numCategories = categories.length;

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * numCategories);
      categoriesFiltered.push(categories[randomIndex]);
    }

    setRandomChoice(categoriesFiltered);
    open();
  };

  console.log(categories, "This is the categories");

  return (
    <div className="bg-[url('https://www.benoitproperties.com/wp-content/uploads/2021/07/algarve-header.png')] bg-cover bg-blend-multiply bg-black/40 w-11/12 py-10 mx-auto space-y-2 text-center text-white sm:w-full rounded-xl sm:space-y-2">
      <h4>Come join and have a vacation with us</h4>
      <h3 className="text-2xl sm:text-3xl">
        Prepare yourself and lets explore
      </h3>
      <div className="pt-4 sm:space-x-4 space-y-4">
        <button
          onClick={handleClickRandom}
          className="px-4 py-2 text-black hover:bg-sky hover:text-white transition-all ease-in delay-75 bg-white rounded-md active:scale-95"
        >
          Discover The Best Places
        </button>
        <button
          onClick={GenerateRandomChoice}
          className="px-4 py-2 text-black hover:bg-sky hover:text-white transition-all ease-in delay-75 bg-white rounded-md active:scale-95"
        >
          Generate Random Choice
        </button>
      </div>
      <Modal opened={opened} onClose={close} title="Your Adventure" centered>
        {/* Modal content */}
        {randomChoice.map((item: any) => (
          <>
            <div
              className="flex space-y-1 border rounded-md p-2 items-center"
              key={item.id}
            >
              <div className="flex items-center">
                <img
                  src={item?.fields?.mainImage?.fields?.file?.url}
                  className="w-8 h-8 rounded-full bg-sky  mr-2"
                />

                {item?.fields?.title}
              </div>
            </div>
            <span className="last:hidden text-gray-200 mx-auto w-full flex text-center justify-center">
              |
            </span>
          </>
        ))}
      </Modal>
    </div>
  );
}

export default RandomBanner;
