"use client";
import { useEffect, useState } from "react";
import useSearchedData from "@/app/hooks/useSearchedData";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function Search({ allTypes, placeholderText, categories }: any) {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (e: any) => {
    if (inputValue === "" || inputValue.length < 4) {
      alert("Please input something...");
      return;
    } else {
      const params = new URLSearchParams(searchParams);
      if (inputValue) {
        params.set("q", inputValue);
      } else {
        params?.delete("q");
      }
      router.replace(`/search${`?${params.toString()}`}`);
      // router.push(`/search${`?${params.toString()}`}`);
      console.log(params.get("q"), "from the input");
    }
  };

  const handleSearchClick = () => {};

  return (
    <section
      className={`w-full 
    ${pathname === "/search" && "mt-10"}
    `}
    >
      <div className="flex flex-wrap w-11/12 relative   sm:w-[450px] mx-auto h-16 items-center justify-center  backdrop-blur-md">
        <input
          type="text"
          placeholder={placeholderText}
          className={`h-10 sm:h-12 bg-white placeholder-gray-300 rounded-full border  shadow-sm pl-9 sm:pb-4 pt-[13px] w-full  mx-auto text-xs outline-none border-collapse placeholder:text-[14px] py-4 sm:text-xs

            ${pathname === "/search" && "border-2 border-blue-400 relative"}
            
            `}
          // value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id="search"
          name="search"
          defaultValue={searchParams?.get("query")?.toString()}
          required
        />
        <IoIosSearch className="absolute top-6 sm:left-3 left-3" />
        <button
          className="bg-sky absolute  active:bg-gray-400 right-1  text-xs sm:right-2 top-4 sm:top-[14px] rounded-full sm:px-6 px-5 font-semibold py-2 sm:py-2 text-white sm:text-sm"
          onClick={(e) => handleSearch(e)}
          type="submit"
        >
          {/* <BsSearch className="text-xl" /> */}
          Search
        </button>
      </div>
    </section>
  );
}

export default Search;
