import StarRating from "@/components/Layout/StarRating";
import Link from "next/link";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import useAddToFavourites from "../hooks/useAddToFavourites";

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
  paid,
  id,
  removeFavouriteGlobal,
}: any) => {
  const { removeFavourite } = useAddToFavourites();

  return (
    <div className="card w-full  sm:w-[300px] mx-auto bg-base-100  overflow-hidden group cardFavs">
      <div className=" h-12 p-4  text-left sm:w-full w-full relative overflow-hidden">
        <h2 className="card-title text-left w-full group-hover:text-white text-sm">
          {title || "name"}
        </h2>
        <AiFillDelete
          onClick={() => removeFavouriteGlobal(id)}
          className="group-hover:text-red-500 absolute bottom-4 right-4 cursor-pointer"
        />
      </div>
      <Link href={`/${type[0]}/${slug}`}>
        <figure className="relative h-48 w-full overflow-hidden">
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
      </Link>
    </div>
  );
};

export default CardFavs;
