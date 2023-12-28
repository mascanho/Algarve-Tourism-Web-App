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
    console.log(daysSelected);
  };
  // Handle Chip Selection
  let selectedCategories: any;
  const handleChange = (value: any) => {
    selectedCategories = value;

    const textCategories = selectedCategories.map((str: any) => {
      // Remove the first character and the space afterward
      return str.substring(3)?.trim()?.toLowerCase();
    });

    console.log(textCategories);

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
    console.log(searchResult);
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
        id: Math.random(),
      };
      addFav.addFavourite(favorites);
    }

    toast.success("Random Items" + " added to " + "🧳");
    close();
  };

  return (
    <div className="animate-fade-in bg-[url('https://www.benoitproperties.com/wp-content/uploads/2021/07/algarve-header.png')] bg-cover bg-blend-multiply bg-black/40 w-11/12 py-10 sm:py-16 mx-auto sm:space-y-2 text-center text-white sm:w-full rounded-xl sm:space-y-2">
      <div className="-mt-2 sm:mt-0">
        <h4>Come join and have a vacation with us</h4>
        <h3 className="text-2xl sm:text-3xl hidden sm:block">
          Prepare yourself and lets explore
        </h3>
      </div>
      <div className="w-full flex sm:justify-center">
        <div className="sm:space-x-8 space-y-4 mt-8 sm:mt-0">
          <button
            onClick={handleClickRandom}
            className="px-4 w-52 text-sm sm:w-fit sm:text-base py-2 text-black hover:bg-sky hover:text-white transition-all ease-in delay-75 bg-white rounded-md active:scale-95"
          >
            Discover The Best Places
          </button>
          <button
            onClick={GenerateRandomChoice}
            className="px-4 py-2 w-52 sm:w-fit text-sm sm:text-base  text-black hover:bg-sky hover:text-white transition-all ease-in delay-75 bg-white rounded-md active:scale-95"
          >
            Generate Random Choice
          </button>
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
        {/* Modal content */}
        {/* {randomChoice.map((item: any) => ( */}
        {/*   <> */}
        {/*     <div */}
        {/*       className="flex space-y-1 border rounded-md p-2 items-center" */}
        {/*       key={item.id} */}
        {/*     > */}
        {/*       <div className="flex items-center"> */}
        {/*         <img */}
        {/*           src={item?.fields?.mainImage?.fields?.file?.url} */}
        {/*           className="w-8 h-8 rounded-full bg-sky  mr-2" */}
        {/*         /> */}
        {/*         {item?.fields?.title} */}
        {/*       </div> */}
        {/*     </div> */}
        {/*     <span className="[&:nth-child(10)]:hidden text-gray-200 m-auto w-full flex text-center justify-center items-center"> */}
        {/*       | */}
        {/*     </span> */}
        {/*   </> */}
        {/* ))} */}
        {/* <button */}
        {/*   onClick={addToFavourites} */}
        {/*   className="mt-8 mb-4 mx-auto px-4 py-2 bg-sky text-white hover:bg-sky hover:text-white transition-all ease-in delay-75  rounded-md active:scale-95 flex justify-center" */}
        {/* > */}
        {/*   Add Choices to Your Adventure */}
        {/* </button> */}
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
                        onClick={(e: any) => console.log(e)}
                      >
                        {item.name}
                      </Chip>
                    ))}
                  </div>
                </Chip.Group>{" "}
                {/* {finalChoice.map((item: any) => { */}
                {/*   console.log(timeAndDays); */}
                {/*   return ( */}
                {/*     <div className="overflow-auto"> */}
                {/*       {timeAndDays} */}
                {/*       {item.fields.title} */}
                {/*     </div> */}
                {/*   ); */}
                {/* })} */}
              </>
            ) : (
              <section>
                {finalChoice.map((item: any) => (
                  <section key={item.id} className="mt-2">
                    <div
                      className="flex space-y-2 border rounded-md p-2 items-center"
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
                    <span className="[&:nth-child(10)]:hidden text-gray-200 m-auto w-full flex text-center justify-center items-center"></span>
                  </section>
                ))}

                <button
                  onClick={addToFavourites}
                  className="mt-6 mb-4 mx-auto px-4 py-2 bg-sky text-white hover:bg-sky hover:text-white transition-all ease-in delay-75  rounded-md active:scale-95 flex justify-center"
                >
                  Add Choices to Your Adventure
                </button>
              </section>
            )}
            <div className="w-full flex justify-between mt-4">
              {page === 0 ? (
                <button
                  className="bg-sky text-white text-xs disabled:bg-gray-300 sm:text-base px-4 w-full py-1 text-center justify-center rounded-md items-center flex"
                  onClick={() => setPage(1)}
                  disabled={!validated}
                >
                  Generate Adventure
                </button>
              ) : (
                <button
                  className="text-sky  flex text-xs sm:text-base items-center space-x-2 py-1   rounded-md "
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
