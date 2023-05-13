"use client";
import React, { useState } from "react";
import { BiMapPin } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { MdOutlineCardTravel } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Buttons = ({ filteredData }: any) => {
  const [isCopied, setIsCopied] = useState(false);

  function handleClickGps() {
    const GPS = JSON.stringify(filteredData[0]?.fields?.locationGps);

    const latitude: any = filteredData[0]?.fields?.locationGps?.lat;
    const longitude: any = filteredData[0]?.fields?.locationGps?.lon;

    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    navigator.clipboard.writeText(url);
    window.open(url, "_blank");
  }

  return (
    <>
      <MdOutlineCardTravel
        data-tooltip-content="Add to favourites"
        className="w-6 h-6 sm:w-8 sm:h-8 fav p-1 border tooltip rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75"
      />
      <Tooltip anchorSelect=".fav" />
      <BiMapPin
        data-tooltip-content="Open in Google Maps"
        onClick={handleClickGps}
        className="w-6 h-6 sm:w-8 sm:h-8 p-1 tooltip border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75"
      />
      <Tooltip anchorSelect=".tooltip" />
      <BiShareAlt className="w-6 h-6 sm:w-8 sm:h-8 p-1 border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75" />
    </>
  );
};

export default Buttons;
