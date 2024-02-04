"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Input } from "@mantine/core";
import SearchDrawerContent from "@/app/search/_components/SearchDrawerContent";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import Link from "next/link";

function SearchDesktop({ allTypes, placeholderText, categories }: any) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section className="hidden sm:flex">
      <Drawer
        opened={opened}
        position="top"
        size={"100%"}
        onClose={close}
        title=""
      >
        <SearchDrawerContent />
      </Drawer>
      <div className="hidden sm:flex items-center justify-center mx-auto space-x-6 w-10/12 mt-5 mb-10">
        <button
          onClick={open}
          className="p-5 text-white flex space-x-2 items-center justify-center bg-sky  text-sm w-48 h-12 rounded-lg"
        >
          <FaSearch className="w-5 h-5 p-1 bg-white rounded-full text-black" />
          <span> search</span>
        </button>
        <Link href="/adventure">
          <button className="p-5 text-black flex space-x-2 items-center justify-center bg-gray-100  h-12 rounded-lg text-sm">
            view categories
            <FaChevronRight className=" bg-white text-black ml-2 w-5 h-5 p-1 rounded-full" />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SearchDesktop;
