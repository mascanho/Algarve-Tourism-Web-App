"use client";

import { catArr } from "@/Data/Categories";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { useState } from "react";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { toast } from "react-hot-toast";

// Generate random items
const randomItems = (array: any) => {
  const randomIndex = Math.floor(Math.random() * (array.length - 1)) + 1;
  return array[randomIndex];
};

function RandomBanner({ categories }: any) {
  const router = useRouter();
  const addFav = useAddToFavourites();
  const [randomChoice, setRandomChoice]: any = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const handleClickRandom = () => {
    const randomItem = randomItems(catArr);
    router.push(randomItem.route);
  };

  const categoriesFiltered: any = [];
  const GenerateRandomChoice = () => {
    const numCategories = categories.length;

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * numCategories);
      categoriesFiltered.push(categories[randomIndex]);
    }

    setRandomChoice(categoriesFiltered);
    open();
  };

  const addToFavourites = (e: any) => {
    e.stopPropagation();

    let favorites;

    for (let i = 0; i < randomChoice.length; i++) {
      const favorites = {
        category: randomChoice[i]?.fields?.title,
        title: randomChoice[i]?.fields?.title,
        slug: randomChoice[i]?.fields?.slug,
        date: randomChoice[i]?.fields?.date,
        mainImage: randomChoice[i]?.fields?.mainImage.fields?.file?.url,
        city: randomChoice[i]?.fields?.city,
        image: randomChoice[i]?.fields?.mainImage?.fields?.file?.url,
        tags: randomChoice[i]?.fields?.tags,
        description: randomChoice[i]?.fields?.description,
        type: randomChoice[i]?.fields?.type,
        hiddenGem: randomChoice[i]?.fields?.hiddenGem,
        rating: randomChoice[i]?.fields?.rating,
        embededMap: randomChoice[i]?.fields?.embededMap,
        mapShare: randomChoice[i]?.fields?.mapShare,
        price: randomChoice[i]?.fields?.price,
      };
      addFav.addFavourite(favorites);
    }

    // const favorites = {
    //   title: randomChoice[0].fields.title,
    //   slug: randomChoice[0].fields.slug,
    //   image: randomChoice[0].fields.mainImage.fields.file.url,
    //   category: randomChoice[0].fields.category,
    //   date: randomChoice[0].fields.date,
    //   mainImage: randomChoice[0].fields.mainImage,
    // };

    toast.success("Random Items" + " added to " + "🧳");
    close();
  };

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
            <span className="[&:nth-child(10)]:hidden text-gray-200 m-auto w-full flex text-center justify-center items-center">
              |
            </span>
          </>
        ))}
        <button
          onClick={addToFavourites}
          className="mt-8 mb-4 mx-auto px-4 py-2 bg-sky text-white hover:bg-sky hover:text-white transition-all ease-in delay-75  rounded-md active:scale-95 flex justify-center"
        >
          Add Choices to Your Adventure
        </button>
      </Modal>
    </div>
  );
}

export default RandomBanner;
