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
      <div className="hidden items-center sm:w-full sm:mx-auto md:mx-auto sm:flex sm:justify-center md:justify-center lg:justify-start  space-x-3 w-10/12 mt-5 mb-10">
        <button
          onClick={open}
          className="p-5 text-key flex space-x-2 border border-key items-center justify-center   text-sm w-40 h-10 rounded-full hover:bg-white hover:text-key active:scale-95 transition ease-in-out delay-75"
        >
          <span className="text-lg font-semibold">Search</span>
          <FaSearch className="w-5 h-5 p-1 bg-key rounded-full text-white" />
        </button>
        <Link href="/#aishenanigans">
          <button className="p-5 text-black flex space-x-2 items-center justify-center   h-12 rounded-lg text-sm">
            <span className="text-lg font-semibold">Generate escapade</span>
            <FaChevronRight className="text-black ml-1 my-auto pb-[2px]  rounded-full" />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SearchDesktop;
