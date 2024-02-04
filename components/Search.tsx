"use client";
import { useEffect, useState } from "react";
import useSearchedData from "@/app/hooks/useSearchedData";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import SearchDrawerContent from "@/app/search/_components/SearchDrawerContent";

function Search({ allTypes, placeholderText, categories }: any) {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <section
      className={`w-full pb-10 
    ${pathname === "/search" && "mt-10"}
    `}
    >
      <Drawer
        opened={opened}
        position="top"
        size={"100%"}
        onClose={close}
        title=""
      >
        <SearchDrawerContent />
      </Drawer>
      <div className="flex flex-wrap w-11/12 relative   sm:w-[450px] mx-auto h-16 items-center justify-center  backdrop-blur-md">
        <input
          type="text"
          placeholder={placeholderText}
          onClick={open}
          className={`h-10 sm:h-12 bg-white placeholder-gray-300 rounded-full border  shadow-sm pl-9 sm:pb-4 pt-[17px] w-full  mx-auto text-xs outline-none border-collapse placeholder:text-[14px] py-4 sm:text-xs

            ${pathname === "/search" && "border-2 border-blue-400 relative"}
            
            `}
          // value={inputValue}
          id="search_input"
          name="search"
          required
        />
        <IoIosSearch className="absolute top-6 sm:left-3 left-3" />
        <button
          className="bg-black absolute  active:bg-gray-400 right-1  text-xs sm:right-2 top-4 sm:top-[14px] rounded-full sm:px-6 px-5 font-semibold py-2 sm:py-2 text-white sm:text-sm"
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
