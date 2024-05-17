"use client";

import { catArr } from "@/Data/Categories";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Stepper } from "@mantine/core";
import { useState } from "react";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { toast } from "react-hot-toast";
import RandomModalContent from "../modals/RandomModalContent";
import { SegmentedControl } from "@mantine/core";
import { Chip } from "@mantine/core";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { NumberInput } from "@mantine/core";
import Link from "next/link";

// Generate random items
const randomItems = (array: any) => {
  const randomIndex = Math.floor(Math.random() * (array.length - 1)) + 1;
  return array[randomIndex];
};

function RandomBanner({ categories }: any) {
  const [page, setPage] = useState(0);
  const router = useRouter();
  const addFav = useAddToFavourites();
  const [randomChoice, setRandomChoice]: any = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const handleClickRandom = () => {
    const randomItem = randomItems(catArr);
    router.push(randomItem.route);
  };
  const [finalChoice, setFinalChoice]: any = useState([]);
  const [timeAndDays, setTimeAndDays]: any = useState(0);
  const [daysSelected, setDaysSelected]: any = useState(0);
  const [totalPlacesPerDays, setTotalPlacesPerDays]: any = useState(0);
  const [validated, setValidated] = useState(false);

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

  // Handle Day Selection & number of places

  const handleAttractionsPerDay = (value: any) => {
    setTotalPlacesPerDays(value);
  };

  const handleDaysSelection = (value: any) => {
    setDaysSelected(value);
  };
  // Handle Chip Selection
  let selectedCategories: any;
  const handleChange = (value: any) => {
    selectedCategories = value;

    const textCategories = selectedCategories.map((str: any) => {
      // Remove the first character and the space afterward
      return str.substring(3)?.trim()?.toLowerCase();
    });

    const searchObjectsByValues = (array: any[], searchValues: any[]) => {
      return array.filter((item) => {
        return searchValues.some((searchValue) => {
          return item.fields.type.some((val: any) =>
            String(val).includes(searchValue),
          );
        });
      });
    };

    // Search for objects where fields.type includes the selected categories
    const searchResult = searchObjectsByValues(categories, textCategories);
    selectedCategories = searchResult;

    const arrSelected = searchResult.slice(
      0,
      Math.floor(daysSelected * totalPlacesPerDays),
    );

    setFinalChoice(arrSelected);
    const roundedDaysPlaces = Math.round(daysSelected * totalPlacesPerDays);
    setTimeAndDays(roundedDaysPlaces);

    if (daysSelected <= 0 || totalPlacesPerDays <= 0) {
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const addToFavourites = (e: any) => {
    e.stopPropagation();

    for (let i = 0; i < finalChoice.length; i++) {
      const favorites = {
        category: finalChoice[i]?.fields?.title,
        title: finalChoice[i]?.fields?.title,
        slug: finalChoice[i]?.fields?.slug,
        date: finalChoice[i]?.fields?.date,
        mainImage: finalChoice[i]?.fields?.mainImage.fields?.file?.url,
        city: finalChoice[i]?.fields?.city,
        image: finalChoice[i]?.fields?.mainImage?.fields?.file?.url,
        tags: finalChoice[i]?.fields?.tags,
        description: finalChoice[i]?.fields?.description,
        type: finalChoice[i]?.fields?.type,
        hiddenGem: finalChoice[i]?.fields?.hiddenGem,
        rating: finalChoice[i]?.fields?.rating,
        embededMap: finalChoice[i]?.fields?.embededMap,
        mapShare: finalChoice[i]?.fields?.mapShare,
        price: finalChoice[i]?.fields?.price,
        id: finalChoice[i]?.fields?.title,
        shortDescription: finalChoice[i]?.fields?.shortDescription,
      };
      addFav.addFavourite(favorites);
    }

    close();
  };

  return (
    <div className="animate-fade-in mb-20 mt-10 sm:mt-24 sm:mb-28  w-11/12 overflow-hidden  max-w-7xl sm:py-10 mx-auto sm:space-y-2 text-center text-white sm:w-full">
      <div className=" sm:mt-0 space-y-2 sm:space-y-6">
        <h3 className="sm:text-7xl font-semibold text-black  text-5xl">
          Start your journey
        </h3>
        <h3 className="sm:text-4xl  sm:block text-gray-500 pt-4 sm:pt-0 sm:mt-0">
          Generate your new journey
        </h3>
      </div>

      <div className="w-full mx-auto px-2">
        <div className="sm:space-x-8 mx-auto justify-center items-center   mt-8 sm:mt-8 w-full flex flex-wrap">
          <Link href="/builder" className="mt-4">
            <button className="px-8 py-3 w-52 sm:w-fit text-sm sm:text-base m-auto text-white bg-key hover:bg-black hover:text-white transition-all ease-in delay-75 rounded-md active:scale-95">
              Generate AI Journey
            </button>
          </Link>
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={close}
        className="text-gray-400"
        title={`Your Adventure - ${daysSelected} days | ${totalPlacesPerDays} places`}
        centered
        color="blue"
      >
        <section>
          <>
            {page === 0 ? (
              <>
                <h4 className="text-gray-400 py-1">Planning</h4>
                <div className="mb-2 mt-2 border-b-black pb-2 flex space-x-4">
                  <NumberInput
                    className="text-xs sm:text-sm days"
                    placeholder="Number of days"
                    min={1}
                    size="xs"
                    max={20}
                    onChange={(e: any) => handleDaysSelection(e)}
                  />{" "}
                  <NumberInput
                    className="text-xs sm:text-sm atractions"
                    size="xs"
                    placeholder="Atractions per day"
                    min={1}
                    max={20}
                    onChange={(e: any) => handleAttractionsPerDay(e)}
                  />{" "}
                </div>
                <Chip.Group multiple onChange={(e) => handleChange(e)}>
                  <h4 className="text-gray-400 text-center ">
                    Select categories
                  </h4>
                  <div className="flex w-full flex-wrap items-center mt-2 text-left justify-center">
                    {catArr.map((item: any) => (
                      <Chip
                        className="mb-2 mr-2"
                        key={item.id}
                        value={item.name}
                      >
                        {item.name}
                      </Chip>
                    ))}
                  </div>
                </Chip.Group>{" "}
              </>
            ) : (
              <section>
                {finalChoice.map((item: any) => (
                  <section key={item?.fields?.title} className="mt-2">
                    <div
                      className="flex space-y-2 border rounded-md p-2 items-center"
                      key={item.id}
                    >
                      <div className="flex items-center">
                        <img
                          src={item?.fields?.mainImage?.fields?.file?.url}
                          className="w-8 h-8 rounded-full bg-key  mr-2"
                          loading="lazy"
                        />
                        {item?.fields?.title}
                      </div>
                    </div>
                    <span className="[&:nth-child(10)]:hidden text-gray-200 m-auto w-full flex text-center justify-center items-center"></span>
                  </section>
                ))}

                <button
                  onClick={addToFavourites}
                  className="mt-6 mb-4 mx-auto px-4 py-2 bg-key text-white hover:bg-key hover:text-white transition-all ease-in delay-75  rounded-md active:scale-95 flex justify-center"
                >
                  Add Choices to Your Adventure
                </button>
              </section>
            )}
            <div className="w-full flex justify-between mt-4">
              {page === 0 ? (
                <button
                  className="bg-black text-white text-xs disabled:bg-gray-300 sm:text-base px-4 w-full py-2 font-semibold text-center justify-center rounded-md items-center flex"
                  onClick={() => setPage(1)}
                  disabled={!validated}
                >
                  Generate Adventure
                </button>
              ) : (
                <button
                  className="text-key  flex text-xs sm:text-base items-center space-x-2 py-1   rounded-md "
                  onClick={() => setPage(0)}
                >
                  <AiOutlineArrowLeft className="mr-1" />
                </button>
              )}
            </div>
          </>
        </section>
      </Modal>
    </div>
  );
}

export default RandomBanner;
