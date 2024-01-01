"use client";

import { AiFillApple } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { BsFillShareFill } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import AOS from "aos";
import { useEffect } from "react";

const mockData = [
  {
    id: Math.random(),
    icon: <MdOutlineFavorite />,
    name: "Add to Favorites",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    id: Math.random(),
    icon: <BsFillShareFill />,
    name: "Share with Others",
    description: "The React Framework",
  },
  {
    id: Math.random(),
    icon: <MdOutlinePlace />,
    name: "Save Locations",
    description: "The React Framework",
  },
  {
    id: Math.random(),
    icon: <AiFillApple />,
    name: "Vite",
    description: "The React Framework",
  },
  {
    id: Math.random(),
    icon: <AiFillApple />,
    name: "Vite",
    description: "The React Framework",
  },
  {
    id: Math.random(),
    icon: <AiFillApple />,
    name: "Vite",
    description: "The React Framework",
  },
];

function Features() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="max-w-7xl w-11/12 mx-auto">
      <div className="space-y-4 mb-10 mx-auto text-center animate-fade-in">
        <span className="bg-sky px-4 py-1 font-semibold text-white rounded-full">
          Best company ever
        </span>
        <h4 className="text-4xl font-semibold pt-2">
          Integrate effortlessly with any technology stack
        </h4>
        <h5 className="w-10/12 mx-auto">
          every once in a while Lorem ipsum dolor sit amet, qui minim labore
          adipisicing minim sint cillum sint consectetur cupidatat.
        </h5>
        <div className="w-16 h-[2px] bg-sky mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8 grid-rows-2">
        {mockData.map((item) => (
          <div
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
    </section>
  );
}
export default Features;
