"use client";
import React from "react";

const MobileBottomCategoryBanner = (filteredData: any) => {
  return (
    <aside className="fixed bottom-0 bg-white flex sm:hidden flex-nowrap items-center justify-between  m-auto h-16 left-0 right-0 border-t">
      <section className="w-11/12 flex justify-between mx-auto">
        <div className="line-clamp-2 w-2/3">
          <p className="text-xs">{filteredData[0]?.fields?.shortDescription}</p>
        </div>
        <div className="w-1/7">
          <button
            className="bg-sky text-white  py-2 text-xs rounded-md w-16 "
            type="button"
          >
            Save
          </button>
        </div>
      </section>
    </aside>
  );
};

export default MobileBottomCategoryBanner;
