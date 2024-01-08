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
      <div className="card sm:w-[100%] sm:h-52 md:w-[360px] lg:w-[320px] xl:w-[360px] xl:h-64 lg:h-60 sm:h-72 mx-auto bg-base-100 shadow-xl  overflow-hidden group">
        <div className=" h-12 p-4  text-left sm:w-full w-full">
          <h2 className="card-title text-left w-full text-gray-300 group-hover:text-white text-sm">
            {title || name}
          </h2>
        </div>
        <figure className="sm:h-full h-48 w-full">
          <img
            src={image}
            alt={title || name || city}
            className="sm:h-full  w-full group-hover:scale-105 transition-all ease-in delay-75 sm:object-fill"
          />
        </figure>
      </div>
    </Link>
  );
};

export default CardCity;
