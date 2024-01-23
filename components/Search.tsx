"use client";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter, usePathname } from "next/navigation";
import useSearchedData from "@/app/hooks/useSearchedData";

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
      className={`relative 
    ${pathname === "/search" && "mt-10"}
    `}
    >
      <form
        onSubmit={handleSubmit}
        className="relative sm:flex w-[350px] sm:w-[470px] mx-auto"
      >
        <div className="flex bg-white/60 w-[360px] sm:w-[450px] mx-auto h-16 items-center justify-center rounded-full backdrop-blur-md">
          <input
            type="text"
            placeholder={placeholderText}
            className={`h-12 bg-white placeholder-gray-300 rounded-full border shadow-sm relative  p-3 w-full  mx-auto text-xs outline-none border-collapse placeholder:text-[14px] pb-5 sm:pb-4  sm:text-xs
            ${pathname === "/search" && "border-2 border-blue-400"}
            
            `}
            value={inputValue}
            onChange={handleInputChange}
            id="search"
            name="search"
          />
          <div />
        </div>
        <button
          type="submit"
          className="bg-sky absolute right-7 top-[17px] rounded-full px-3 py-1 text-white text-sm"
        >
          {/* <BsSearch className="text-xl" /> */}
          Search
        </button>
      </form>
    </section>
  );
}

export default Search;
