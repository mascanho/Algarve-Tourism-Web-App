"use client";
import { useEffect, useState } from "react";
import useSearchedData from "@/app/hooks/useSearchedData";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import SearchDrawerContent from "@/app/search/_components/SearchDrawerContent";
import { FaSearch } from "react-icons/fa";

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
      <div className="flex items-center">
        <FaSearch
          onClick={open}
          className="w-full h-full p-6 text-black text-bla mt-7 text-sm"
        />
      </div>
    </section>
  );
}

export default Search;
