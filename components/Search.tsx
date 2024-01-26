"use client";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter, usePathname } from "next/navigation";
import useSearchedData from "@/app/hooks/useSearchedData";
import { IoIosSearch } from "react-icons/io";

function Search({ allTypes, placeholderText, categories }: any) {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // Zustand Data
  const savedData = useSearchedData();
  const allTypesStore = useSearchedData();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/search") {
      allTypesStore.addAllTypes(allTypes);
    }
  }, [inputValue]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputValue === "") {
      alert("Please input something...");
      return;
    }

    const searchQueries = inputValue.trim().toLowerCase().split(" ");
    const filteredData: any = [];

    const filteredArr =
      pathname === "/search"
        ? allTypesStore.allTypes.filter((obj: any) => {
            const title = obj.fields.title.toLowerCase();
            const city = obj.fields.city.toLowerCase();

            // Check if any of the search queries match the title or city
            const matchedQueries = searchQueries.filter(
              (query) => title.includes(query) || city.includes(query),
            );

            if (matchedQueries.length === searchQueries.length) {
              filteredData.push(obj.fields);
            }
          })
        : categories?.filter((obj: any) => {
            const title = obj.fields.title.toLowerCase();
            const city = obj.fields.city.toLowerCase();

            // Check if any of the search queries match the title or city
            const matchedQueries = searchQueries.filter(
              (query) => title.includes(query) || city.includes(query),
            );

            if (matchedQueries.length === searchQueries.length) {
              filteredData.push(obj.fields);
            }
          });

    setSearchResults(filteredData);
    savedData.AddData(filteredData);
    savedData.addSearchInput(inputValue);

    router.push(`/search?q=${encodeURIComponent(inputValue)}`);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <section
      className={`w-full 
    ${pathname === "/search" && "mt-10"}
    `}
    >
      <form
        onSubmit={handleSubmit}
        className="sm:flex w-full sm:w-[470px] mx-auto"
      >
        <div className="flex flex-wrap w-11/12 relative   sm:w-[450px] mx-auto h-16 items-center justify-center  backdrop-blur-md">
          <input
            type="text"
            placeholder={placeholderText}
            className={`h-10 sm:h-12 bg-white placeholder-gray-300 rounded-full border  shadow-sm pl-9 sm:pb-4 pt-[13px] w-full  mx-auto text-xs outline-none border-collapse placeholder:text-[14px] py-4 sm:text-xs

            ${pathname === "/search" && "border-2 border-blue-400 relative"}
            
            `}
            value={inputValue}
            onChange={handleInputChange}
            id="search"
            name="search"
          />
          <IoIosSearch className="absolute top-6 sm:left-3 left-3" />
          <button
            type="submit"
            className="bg-sky absolute  active:bg-gray-400 right-1  text-xs sm:right-2 top-4 sm:top-[14px] rounded-full sm:px-6 px-5 font-semibold py-2 sm:py-2 text-white sm:text-sm"
          >
            {/* <BsSearch className="text-xl" /> */}
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default Search;
