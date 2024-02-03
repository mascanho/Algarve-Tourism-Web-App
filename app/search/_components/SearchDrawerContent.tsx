"use client";
import { catArr } from "@/Data/Categories";
import { useEffect, useState, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const SearchDrawerContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);

  const handleClick = (cat: any) => {
    setActiveCategory(cat);
  };

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
      router.push(`/search${`?${params.toString()}`}`);
      console.log(params.get("q"), "from the input");
    }
  };

  useEffect(() => {
    // Set focus on the element when it mounts
    if (inputRef.current) {
      console.log("Setting focus on:", inputRef.current);
      inputRef.current.focus();
    } else {
      console.log("Element ref is null");
    }
  }, []);

  console.log(pathname);

  return (
    <div className="w-full flex justify-start items-start">
      <section
        className={`p-4 overflow-hidden flex flex-col flex-wrap w-full slide-up space-y-4 border rounded-md shadow-lg ${isVisible ? "visible" : ""}`}
      >
        <div className="w-full relative">
          <span>Where to?</span>
          <input
            ref={inputRef}
            id="search"
            className="bg-transparent w-full text-black pl-9 border p-2 mt-4 rounded-md"
            placeholder="Search for city or activities"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IoIosSearch className="absolute left-3 bottom-3" />
        </div>
        {pathname !== "/search" && (
          <div className="flex flex-wrap mt-4">
            {catArr.map((cat: any) => (
              <span
                className={`py-2 ${activeCategory === cat ? "bg-black text-white" : ""} px-3 text-xs mr-2 my-1 text-right flex justify-end h-20 w-[81px] border rounded-md`}
                key={cat}
                onClick={() => handleClick(cat)}
              >
                {cat?.name}
              </span>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={(e) => handleSearch(e)}
          className="w-full text-white rounded-md py-2 bg-black active:bg-gray-500 active:text-black"
        >
          Search
        </button>
      </section>
    </div>
  );
};

export default SearchDrawerContent;
