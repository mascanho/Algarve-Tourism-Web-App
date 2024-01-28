"use client";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { RiMapPinLine } from "react-icons/ri";
import { LuClipboardCheck } from "react-icons/lu";
import { FaPaperPlane } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";

const MobileButtons = (filteredData: any) => {
  const addFavourites = useAddToFavourites();
  const favourites = useAddToFavourites();

  function addFav() {
    addFavourites.addFavourite({
      id: filteredData[0]?.fields?.title,
      title: filteredData[0]?.fields?.title,
      description: filteredData[0]?.fields?.description,
      image: filteredData[0]?.fields?.mainImage?.fields?.file?.url,
      slug: filteredData[0]?.fields?.slug,
      rating: filteredData[0]?.fields?.rating,
      city: filteredData[0]?.fields?.city,
      type: filteredData[0]?.fields?.type,
      price: filteredData[0]?.fields?.price,
      pathname: window?.location?.pathname,
      shortDescription: filteredData[0]?.fields?.shortDescription,
      embededMap: filteredData[0]?.fields?.embededMap,
      mapShare: filteredData[0]?.fields?.mapShare,
      tags: filteredData[0]?.fields?.tags,
      date: filteredData[0]?.fields?.date,
    });
  }
  return (
    <div className="flex flex-wrap flex-col px-2">
      <div className="flex space-x-3 items-start justify-center my-2">
        <BiHeart className="mt-1" />
        <div className="flex flex-col flex-wrap w-full space-y-1">
          <span className="text-sm underline" onClick={addFav}>
            Add to favourite
          </span>
          <span className="text-xs text-gray-500">
            Bookmark this location to your favourites
          </span>
        </div>
      </div>
      <div className="flex space-x-3 items-start justify-center my-2">
        <FaPaperPlane className="mt-1" />
        <div className="flex flex-col flex-wrap w-full space-y-1">
          <a
            className="mb-1"
            href={`mailto:?subject=Check%20this%20place%20I%20found%20in%20the%20Algarve&body=${window?.location?.href}`}
            target="_blank"
          >
            <span className="text-sm underline">Email this location</span>
          </a>
          <span className="text-xs text-gray-500">
            share tihs location via email{" "}
          </span>
        </div>
      </div>
      <div className="flex space-x-3 items-start justify-center my-2">
        <BsGlobe className="mt-1" />
        <div className="flex flex-col flex-wrap w-full space-y-1">
          <span className="text-sm underline">Visit the website</span>
          <span className="text-xs text-gray-500">
            Open {filteredData[0]?.fields?.title} website on a new tab
          </span>
        </div>
      </div>
      <div className="flex space-x-3 items-start justify-center my-1">
        <RiMapPinLine className="mt-1 " />
        <div className="flex flex-col flex-wrap w-full space-y-1">
          <span className="text-sm underline">Open Map</span>
          <span className="text-xs text-gray-500">
            Find this location on Google Maps
          </span>
        </div>
      </div>
      <div className="flex space-x-3 items-start justify-center my-2">
        <LuClipboardCheck className="mt-1 " />
        <div className="flex flex-col flex-wrap w-full space-y-1">
          <span className="text-sm underline">Copy to clipboard</span>
          <span className="text-xs text-gray-500">
            Share this link with your friends and family
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileButtons;
