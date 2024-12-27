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
  MdOutlineMuseum,
  MdSportsHandball,
} from "react-icons/md";
import { PiMountainsFill } from "react-icons/pi";
import { FaIndustry } from "react-icons/fa6";

const SearchDrawerContent = ({ close }: any) => {
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
    Culture: <MdOutlineMuseum />,
    Events: <MdEvent />,
    Adventure: <PiMountainsFill />,
    Business: <MdBusinessCenter />,
    Hiking: <FaHiking />,
    Sports: <MdSportsHandball />,
    Stays: <GiWoodCabin />,
    Industrial: <FaIndustry />,
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
      if (pathname !== "/search") {
        close();
      }
    }
  };

  return (
    <div
      className={`w-full sm:max-w-xl sm:mx-auto flex justify-start items-start`}
    >
      <section
        className={`p-4 relative overflow-hidden flex flex-col flex-wrap w-full slide-up space-y-4 rounded-md ${isVisible ? "visible" : ""}`}
      >
        <input
          className="bg-transparent w-full h-10 text-black ring-0 focus:ring-0 focus:outline-none focus:ring-black focus:ring-0ffset-0 pl-9 border rounded-md "
          id="search_modal"
          placeholder="Search for city or activities"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <IoIosSearch className="absolute top-3 ml-3" />
        {pathname !== "/search" && (
          <div className="flex flex-wrap justify-between sm:justify-start gap-2">
            {catArr.map((cat: any) => (
              <div
                className={`py-2 ${
                  activeCategory === cat ? "bg-black text-white" : ""
                } px-3 text-xs flex justify-center items-center h-20 w-[81px] border rounded-md`}
                key={cat}
                onClick={() => handleClick(cat)}
              >
                <div className="flex flex-col items-center justify-center">
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
          className={`overflow-clipw-full text-white rounded-md sm:absolute sm:w-20 sm:right-[22px] sm:py-1  sm:bottom-[20px]   py-2 bg-black active:bg-gray-500 active:text-black`}
        >
          Search
        </button>
      </section>
    </div>
  );
};

export default SearchDrawerContent;
