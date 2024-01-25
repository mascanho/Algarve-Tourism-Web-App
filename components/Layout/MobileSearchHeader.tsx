import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
// Add any other necessary imports

const MobileSearchHeader = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Add any other logic you need for input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any logic you need for form submission
  };

  return (
    <div className="w-full sm:hidden mx-auto px-4">
      <form
        onSubmit={handleSubmit}
        className="relative sm:flex w-full sm:w-[470px] mx-auto"
      >
        <div className="flex flex-wrap mx-auto items-center justify-center backdrop-blur-md">
          <input
            type="text"
            placeholder="Enter your search term"
            className={`h-8 sm:h-12 bg-white placeholder-gray-300 rounded-full border shadow-sm relative pl-9 sm:pb-4 pt-[13px] w-full mx-auto text-xs outline-none border-collapse placeholder:text-[14px] py-4 sm:text-xs`}
            value={inputValue}
            onChange={handleInputChange}
            id="search"
            name="search"
          />
          <IoIosSearch className="absolute  left-3" />
        </div>
        <button
          type="submit"
          className="bg-sky absolute active:bg-gray-400 right-1 text-xs sm:right-4 bottom-1  sm:top-[14px] rounded-full sm:px-6 px-4 py-1 sm:py-2 text-white sm:text-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default MobileSearchHeader;
