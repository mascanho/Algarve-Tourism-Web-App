import Link from "next/link";
import React from "react";

const CardCity = ({
  image,
  title,
  desc,
  slug,
  type,
  name,
  city,
  route,
}: any) => {
  return (
    <Link href={`/${type || "algarve"}/${route}`}>
      <div className="card sm:w-[300px] mx-auto bg-base-100 shadow-xl  overflow-hidden group">
        <div className=" h-12 p-4  text-left sm:w-full w-full">
          <h2 className="card-title text-left w-full group-hover:text-white text-sm">
            {title || name}
          </h2>
        </div>
        <figure className="sm:Lh-56 h-48 w-full">
          <img
            src={image}
            alt={title || name || city}
            className="sm:h-full  w-full group-hover:scale-105 transition-all ease-in delay-75"
          />
        </figure>
      </div>
    </Link>
  );
};

export default CardCity;
