"use client";

import { MdOutlinePlace } from "react-icons/md";
import { useState } from "react";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const mockData = [
  {
    id: 1,
    icon: <MdOutlinePlace />,
    name: "Search and Save Locations",
    description:
      "Discover and save all of the best hidden wonders in the Algarve in one place, never losing them again. Easially accessible within your account",
  },
  {
    id: 2,
    icon: <MdFavoriteBorder />,
    name: "Add to Favorites",
    description:
      "Add your favourite places to your list and revisit them in a simple and intuitive way. Make your wishlist something to look forward to.",
  },
  {
    id: 3,
    icon: <IoShareSocialOutline />,
    name: "Share with Others",
    description:
      "Create awesome wishlists and easialy share them with your friends and family. Happiness is meant to be shared, after all",
  },

  {
    id: 4,
    icon: <RiMoneyEuroCircleLine />,
    name: "Save Money",
    description:
      "Discover the best free places, without unpleasant surprises and the high prices. The best places don't need to be expensive.",
  },
  {
    id: 5,
    icon: <RxUpdate />,
    name: "Regular Updates",

    description:
      "Constant database updates and continuous improvements to the platform, showcasing the latest and greatest attractions in the Algarve.",
  },
  {
    id: 6,
    icon: <MdOutlineTipsAndUpdates />,
    name: "Tips & Tricks",
    description:
      "The best tips, tricks and news from the Algarve, on a daily basis, to help you discover and enjoy the best the Algarve has to offer.",
  },
];

function Features() {
  const [showEl, setShowEl] = useState(false);

  return (
    <section className="max-w-7xl w-11/12 mx-auto mt-24 sm:mt-28">
      <div
        onClick={() => setShowEl(!showEl)} // Toggle the state on click
        className="space-y-4 mb-10 mx-auto text-center animate-fade-in cursor-pointer"
      >
        <span className="bg-black px-4 py-1 font-semibold text-white rounded-full cursor-pointer">
          How It Works
        </span>
        <p className="w-10/12 sm:w-2/4 lg:w-2/6 mx-auto text-gray-700">
          Discover the best places, save and share your next adventure with
          others, no stress, no ads and no time wasted
        </p>
        <div className="w-16 h-[2px] bg-sky mx-auto" />
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8 grid-rows-2 animate-fade-up ${showEl ? "" : "hidden"}`}
      >
        {mockData.map((item) => (
          <div
            key={item?.id}
            className="flex-col justify-start text-left rounded-md items-center space-y-2 p-8 border"
          >
            <div className="text-5xl text-sky">{item.icon}</div>

            <div className="font-semibold text-gray-700">{item.name}</div>
            <div className="w-16 h-[2px] bg-sky" />
            <div className="text-sm text-gray-400 pt-2">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Features;
