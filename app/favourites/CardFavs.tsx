import StarRating from "@/components/Layout/StarRating";
import { Card } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

const CardFavs = ({
  image,
  title,
  desc,
  slug,
  type,
  name,
  city,
  route,
  rating,
}: any) => {
  return (
    <Link href={`/${type}`}>
      <div className="card sm:w-[300px] w-11/12 mx-auto bg-base-100 shadow-xl  overflow-hidden group cardFavs">
        <div className=" h-12 p-4  text-left sm:w-full w-full relative">
          <h2 className="card-title text-left w-full group-hover:text-white text-sm">
            {title || "name"}
          </h2>
          <AiFillDelete
            onClick={() => console.log("delete")}
            className="group-hover:text-red-500 absolute bottom-4 right-4"
          />
        </div>
        <figure className="relative sm:Lh-56 h-48 w-full">
          <img
            src={image}
            alt="Shoes"
            className="sm:h-full  w-full group-hover:scale-105 transition-all ease-in delay-75"
          />
        </figure>
        <span className="bg-base-100 py-1 absolute bottom-12 pl-1 pr-3 text-sm rounded-r-md">
          📍 {""} {city}
        </span>
        <div className="p-2">
          <StarRating rating={rating} />
        </div>
      </div>
    </Link>
  );
};

export default CardFavs;
