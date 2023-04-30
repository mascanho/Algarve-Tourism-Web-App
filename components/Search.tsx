"use client";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter, usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import useSearchedData from "@/app/hooks/useSearchedData";

function Search({ allTypes, placeholderText }: any) {
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
    } else {
      const filteredData: any = [];

      // Search and filter the results

      if (pathname === "/search") {
        const filteredArr = allTypesStore.allTypes.filter((obj: any) => {
          for (let key in obj) {
            if (
              obj.fields.title.includes(inputValue) ||
              obj.fields.title.toLowerCase().includes(inputValue)
            ) {
              filteredData.push(obj.fields);
              setSearchResults(filteredData);
              break;
            }
          }
          savedData.AddData(filteredData);
          savedData.addSearchInput(inputValue);
        });
      }

      const filteredArr = allTypes?.filter((obj: any) => {
        for (let key in obj) {
          if (
            obj.fields.title.includes(inputValue) ||
            obj.fields.title.toLowerCase().includes(inputValue)
          ) {
            filteredData.push(obj.fields);
            setSearchResults(filteredData);
            break;
          }
        }
        savedData.AddData(filteredData);
        savedData.addSearchInput(inputValue);
      });
    }
    router.push(`/search?q=${inputValue}`);
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
        <div className="flex bg-white/60 w-[360px] sm:w-[450px] mx-auto h-16 items-center justify-center rounded-full backdrop-blur-md overflow-hidden ">
          <input
            type="text"
            placeholder={placeholderText}
            className={`h-12 bg-white rounded-full p-4 w-[340px] sm:w-[436px] mx-auto text-sm outline-none border-collapse
            ${pathname === "/search" && "border-2 border-blue-400"}
            
            `}
            value={inputValue}
            onChange={handleInputChange}
          />
          <div />
        </div>
        <div className="absolute right-0 flex items-center justify-center w-12 h-12 text-xs text-white bg-blue-400 rounded-full cursor-pointer top-2 sm:right-4">
          <button type="submit">
            <BsSearch className="text-xl" />
          </button>
        </div>
      </form>
      {openModal && (
        <ResultsModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          searchResults={searchResults}
        />
      )}
    </section>
  );
}

export default Search;
