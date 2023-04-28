"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter, usePathname } from "next/navigation";
import { useParams } from "next/navigation";

function Search({ allTypes }: any) {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState();
  const router = useRouter();

  console.log(router);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputValue === "") {
      alert("Please input something...");
    } else {
      console.log("clicked");
      // Search and filter the results
      allTypes.forEach((element: any) => {
        for (let key in element) {
          const value = element.fields;
          if (element.fields.title.toLowerCase().includes(inputValue)) {
            console.log(value);
            setSearchResults(value);
            break;
          } else {
            console.log("There are no results for your search...");
          }
        }
      });
    }
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative sm:flex w-[350px] sm:w-[470px] mx-auto"
      >
        <div className="flex bg-white/60 w-[360px] sm:w-[450px] mx-auto h-16 items-center justify-center rounded-full backdrop-blur-md overflow-hidden ">
          <input
            type="text"
            placeholder="Start your next adventure here..."
            className="h-12 bg-white rounded-full p-4 w-[340px] sm:w-[436px] mx-auto text-sm outline-none border-collapse"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div />
        </div>
        <div className="absolute right-0 flex items-center justify-center w-12 h-12 text-xs text-white bg-blue-400 rounded-full top-2 sm:right-4">
          <button type="submit">
            <BsSearch className="text-xl" />
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
