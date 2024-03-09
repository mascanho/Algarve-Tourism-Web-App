import { IconExternalLink } from "@tabler/icons-react";
import React from "react";
import { IoLocation } from "react-icons/io5";

function MusicCard(Data: any) {
  // Destructuring the data array
  const { name, website, image, description, location, time, date } = Data[0];

  return (
    <div className="border space-x-2 flex items-center flex-nowrap h-full sm:w-2/4 rounded-xl">
      <div className="w-36 overflow-clip h-38 p-3 rounded-xl flex items-center">
        <img src={image} alt="" className="object-cover h-36 rounded-xl" />
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
          <p className="border border-key p-1 rounded-md">{time}</p>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
