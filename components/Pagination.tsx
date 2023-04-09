import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Pagination = () => {
  return (
    <div className="sm:mt-28 mt-10 flex justify-center  items-center space-x-3">
      <button className="border px-3 py-2 rounded-full items-center text-xs sm:text-sm">
        <GrLinkPrevious className="text-gray-300" />
      </button>

      <div className="bg-white space-x-2">
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <span
            key={page}
            className="rounded-full border px-2 py-2 w-24 h-24 text-xs sm:text-sm"
          >
            {page}
          </span>
        ))}
      </div>
      <button className="border px-3 py-2 rounded-full items-center flex text-xs sm:text-sm">
        <GrLinkNext className="text-red-400" />
      </button>
    </div>
  );
};

export default Pagination;
