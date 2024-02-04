"use client";
import { catArr } from "@/Data/Categories";
import { useEffect, useState, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { GiBeachBucket, GiWoodCabin } from "react-icons/gi";
import { FaHiking, FaUtensils } from "react-icons/fa";
import {
  MdBusiness,
  MdBusinessCenter,
  MdEvent,
  MdSportsHandball,
} from "react-icons/md";
import { PiMountainsLight } from "react-icons/pi";

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

  const categoryIcons: any = {
    Beaches: <GiBeachBucket />,
    Restaurants: <FaUtensils />,
    Events: <MdEvent />,
    Adventure: <PiMountainsLight />,
    Business: <MdBusinessCenter />,
    Hiking: <FaHiking />,
    Sports: <MdSportsHandball />,
    Stays: <GiWoodCabin />,
  };

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

  return (
    <div
      className={`w-full sm:max-w-xl sm:mx-auto flex justify-start items-start`}
    >
      <section
        className={`p-4 relative overflow-hidden flex flex-col flex-wrap shadow-lg  w-full slide-up space-y-4 border rounded-md   ${isVisible ? "visible" : ""}`}
      >
        <input
          className="bg-transparent w-full h-10 text-black ring-0 focus:ring-0 focus:outline-none focus:ring-black focus:ring-0ffset-0 pl-9 border rounded-md "
          data-autofocus
          id="search_modal"
          placeholder="Search for city or activities"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <IoIosSearch className="absolute top-3 ml-3" />
        {pathname !== "/search" && (
          <div className="flex flex-wrap mt-4 justify-start sm:justify-stretch">
            {catArr.map((cat: any) => (
              <div
                className={`py-2  ${
                  activeCategory === cat ? "bg-black text-white" : ""
                } px-3 text-xs mr-2  my-1 text-right flex justify-end h-20 w-[81px] border rounded-md`}
                key={cat}
                onClick={() => handleClick(cat)}
              >
                <div className="flex flex-col items-end justify-end ">
                  <span className="text-4xl"> {categoryIcons[cat.name]}</span>
                  <span className="ml-1">{cat?.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={(e) => handleSearch(e)}
          className={`overflow-clipw-full text-white rounded-md sm:absolute sm:w-20 sm:right-[22px] sm:py-1  sm:bottom-[22px]   py-2 bg-black active:bg-gray-500 active:text-black`}
        >
          Search
        </button>
      </section>
    </div>
  );
};

export default SearchDrawerContent;
