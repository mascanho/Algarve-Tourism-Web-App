"use client";
import { useEffect, useState } from "react";
import useSearchedData from "@/app/hooks/useSearchedData";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import SearchDrawerContent from "@/app/search/_components/SearchDrawerContent";

function Search({ title }: any) {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <>
      <Drawer
        opened={opened}
        position="top"
        size={"100%"}
        onClose={close}
        title=""
      >
        <SearchDrawerContent />
      </Drawer>
      <span
        className="flex text-black items-center cursor-pointer"
        onClick={open}
      >
        {title}
      </span>
    </>
  );
}

export default Search;
