"use client";

import { AiFillApple } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import AOS from "aos";
import { useEffect } from "react";
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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="max-w-7xl w-11/12 mx-auto mt-20 sm:mt-10">
      <div className="space-y-4 mb-10 mx-auto text-center animate-fade-in">
        <span className="bg-sky px-4 py-1 font-semibold text-white rounded-full">
          How It Works
        </span>
        <h5 className="w-10/12 sm:w-2/4 mx-auto">
          Discover the best places, save and share your next adventure with
          others, all in one place, no stress and no time wasted
        </h5>
        <div className="w-16 h-[2px] bg-sky mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8 grid-rows-2">
        {mockData.map((item) => (
          <div
            key={item?.id}
            className="flex-col justify-start text-left rounded-md items-center space-y-2 p-8 border "
            data-aos="zoom-in-up"
          >
            <div className="text-5xl text-sky">{item.icon}</div>

            <div className="font-semibold text-gray-700">{item.name}</div>
            <div className="w-16 h-[2px] bg-sky" />
            <div className="text-sm text-gray-400 pt-2">{item.description}</div>
          </div>
        ))}
      </div>
      <div className="space-y-4 my-10 sm:mt-28 mx-auto text-center animate-fade-in">
        <h3 className="text-3xl font-bold text-black sm:text-5xl">
          Discover the best of the Algarve
        </h3>{" "}
        <h4 className="w-8/12 mx-auto text-center">
          Check out this week&apos;s selection of popular places and events
        </h4>
      </div>
    </section>
  );
}
export default Features;
