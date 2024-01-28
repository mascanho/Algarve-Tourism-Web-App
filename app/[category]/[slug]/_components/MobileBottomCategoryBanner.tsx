"use client";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import React from "react";

const MobileBottomCategoryBanner = (filteredData: any) => {
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
    <aside className="fixed bottom-0 bg-white flex z-[500] sm:hidden flex-nowrap items-center justify-between  m-auto h-16 left-0 right-0 border-t">
      <section className="w-11/12 flex justify-between mx-auto">
        <div className="line-clamp-2 w-2/3">
          <p className="text-xs text-black font-semibold">
            {filteredData[0]?.fields?.title}
          </p>
          <span className="text-gray-500 text-xs">
            {filteredData[0]?.fields?.city}
          </span>
        </div>
        <div className="w-1/4 flex items-center">
          <button
            className="bg-sky text-white  py-2 text-xs rounded-md w-16 font-semibold "
            type="button"
            onClick={addFav}
          >
            Save
          </button>
        </div>
      </section>
    </aside>
  );
};

export default MobileBottomCategoryBanner;
