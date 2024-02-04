"use client";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import StarRating from "../Layout/StarRating";
import Link from "next/link";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { FaRegTrashAlt } from "react-icons/fa";

const DrawerContent = ({ close, title }: any) => {
  const { favourites, addFavourite, removeFavourite } = useAddToFavourites();

  return (
    <>
      {favourites.map((item, index) => (
        <div key={index} className="my-1 flex items-center w-full">
          <Link
            href={`/${item.type}/${item.slug}`}
            onClick={close}
            className="w-full"
          >
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="shadow p-2 cursor-pointer  group w-full   hover:shadow-md rounded-md relative flex flex-col justify-start text-left transition-all ease-in delay-100"
              >
                <div className="text-left flex  space-x-3 w-full">
                  <div className="flex items-center">
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="w-24 h-16 rounded-md object-fill m-auto"
                    />
                  </div>
                  <div className="w-full mx-auto flex flex-col mt-2 space-y-[2px]">
                    <h3 className="text-sm font-semibold">{item?.title}</h3>
                    <div className="flex items-start text-left text-xs">
                      <StarRating rating={item?.rating} />
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-600">
                      {item?.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Link>
          <span
            onClick={() => removeFavourite(item?.id)}
            className="text-xs text-gray-500 transition-all ease-in delay-75 absolute right-8 hover:text-red-500 hover:cursor-pointer hover:scale-110 group-hover:shadow-black  group-hover:text-black"
          >
            <FaRegTrashAlt className="group-hover:text-white text-lg" />
          </span>
        </div>
      ))}

      {favourites.length < 1 ? (
        <>
          <div className="flex flex-col space-y-2 mb-2">
            <span className="text-gray-400 mb-2">Add places & experiences</span>
            <Link href="/beaches">
              <button
                onClick={close}
                className="w-full bg-key text-white px-3 py-2 font-semibold rounded-md"
              >
                View categories
              </button>
            </Link>
          </div>
        </>
      ) : (
        <Link href="/favourites/">
          <button
            onClick={close}
            className="w-full bg-key text-white px-3 py-2 mt-4 rounded-md font-semibold"
          >
            View favourites
          </button>
        </Link>
      )}
    </>
  );
};
export default DrawerContent;
