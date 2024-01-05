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
        <div key={index} className="my-4">
          <Link href={`/${item.type}/${item.id}`} onClick={close}>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="shadow p-2 cursor-pointer hover:bg-sky group  hover:text-white hover:border-white rounded-md relative flex flex-col justify-start text-left transition-all ease-in delay-75"
              >
                <span
                  onClick={() => removeFavourite(item.id)}
                  className="absolute right-2 bottom-3 text-xs text-gray-500 transition-all ease-in delay-75 group-hover:text-black"
                >
                  <FaRegTrashAlt className="group-hover:text-white" />
                </span>
                <div className="text-left flex  space-x-3">
                  <div className="flex items-center">
                    <img
                      src={item?.image}
                      alt="dwd"
                      className="w-24 h-16 rounded-md object-fill m-auto"
                    />
                  </div>
                  <div className="w-full mx-auto flex flex-col mt-2 space-y-[2px]">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <div className="flex items-start text-left text-xs">
                      <StarRating rating={item.rating} />
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-600">
                      {item.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Link>
        </div>
      ))}

      {favourites.length < 1 ? (
        <>
          <div className="flex flex-col space-y-2">
            <span className="text-gray-400">Add places & experiences</span>
            <Link href="/beaches">
              <button
                onClick={close}
                className="w-full bg-sky text-white px-3 py-1 rounded-md"
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
            className="w-full bg-sky text-white px-3 py-1 rounded-md"
          >
            {" "}
            Export
          </button>
        </Link>
      )}
    </>
  );
};
export default DrawerContent;
