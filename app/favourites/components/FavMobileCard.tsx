"use client";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import {
  Card,
  Image,
  Text,
  Badge,
  Divider,
  Group,
  Rating,
} from "@mantine/core";
import { IoLocation } from "react-icons/io5";
import Link from "next/link";
import { useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

function FavMobileCard({
  title,
  image,
  rating,
  price,
  slug,
  type,
  id,
  city,
  tags,
  shortDescription,
  removeFavouriteGlobal,
}: any) {
  // const { removeFavourite } = useAddToFavourites();

  return (
    <section className="w-11/12 mx-auto mt-4 ">
      <section className="flex flex-col rounded-xl justify-between  ">
        <div className=" rounded-xl mx-auto h-full relative overflow-hidden mt-5">
          <Image
            src={image}
            alt={title}
            className="rounded-xl w-full relative border object-cover max-h-52"
          />
          <FaRegTrashAlt
            onClick={() => removeFavouriteGlobal(id)}
            className="text-xl absolute top-4 right-4 group-hover:scale-110 transition-all ease-in-out  text-red-500 hover:pt-[2px] pt-[1px]"
          />
        </div>
        <div className="flex flex-wrap justify-between pt-2 px-3 items-center ">
          <h3 className="text-left text-key ">{title}</h3>
          <div className="flex items-center">
            <IoIosStar className="text-key text-xs" />
            <span className="text-xs text-key">{rating}</span>{" "}
          </div>
        </div>
      </section>
      <section className="flex justify-between px-2 mt-2 items-center">
        <div className="flex font-normal items-center space-x-1  text-gray-400">
          <IoLocation />
          <span className="text-sm my-auto">{city}</span>
        </div>
        <Badge color={price === "Free" ? "green" : "red"} variant="light">
          {price}
        </Badge>
      </section>
      <Text size="sm" c="dimmed" className="px-3 mt-2 text-black font-thin">
        {shortDescription}
      </Text>
      <div className="text-[9px] space-x-2 space-y-3 pt-4 px-2 pb-6">
        {tags?.map((cat: any) => (
          <span
            key={cat}
            className="items-center justify-center px-2 py-1 my-auto align-middle border rounded-full item"
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-3">
        <Link href={`/${type}/${slug}`} className="w-full">
          <button className="px-3 w-full  bg-key py-2 rounded-b-xl text-white font-semibold">
            View
          </button>
        </Link>
      </div>
    </section>
  );
}
export default FavMobileCard;
