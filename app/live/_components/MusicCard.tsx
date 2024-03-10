"use client";
import { Carousel } from "@mantine/carousel";
import React from "react";
import { IoLocation } from "react-icons/io5";

function MusicCard({
  name,
  website,
  image,
  date,
  time,
  location,
  description,
}: any) {
  // Destructuring the data array

  return (
    <Carousel.Slide>
      <div className="border space-x-2 flex items-center flex-nowrap h-full sm:w-full rounded-xl group">
        <div className="w-56  h-38 p-3 rounded-xl flex items-center overflow-hidden">
          <img
            src={image}
            alt=""
            className="object-cover h-36 rounded-xl group-hover:scale-125 transition duration-300 ease-in"
          />
        </div>
        <div className="text-base flex flex-col space-y-1">
          <a href={website} className="flex items-center">
            <p className="flex font-semibold underline">{name}</p>
            <span className="text-[2px]"></span>
          </a>

          <p className="flex text-xs items-center">
            <IoLocation className="mr-1" /> {location}
          </p>
          <p className="text-xs pr-3">{description}</p>
          <div className="flex space-x-2 text-xs items-center">
            <p>{date}</p>
            <p className="border border-key py-1 px-2 rounded-md">{time}</p>
          </div>
        </div>
      </div>
    </Carousel.Slide>
  );
}

export default MusicCard;
