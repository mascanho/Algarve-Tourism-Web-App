import { usefullLinks } from "@/Data/Links";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const DATA = usefullLinks.map((item) => (
  <div className="flex">
    <span>
      <FaArrowRight />
    </span>
    <span>{item.title}</span>
  </div>
));

const UsefullLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4">
      {usefullLinks.map((item) => (
        <a href={item.link} target="_blank" rel="noreferrer" key={item.title}>
          <div className="flex items-center">
            <span className="mr-3">
              <FaArrowRight className="font-thin text-sky" />
            </span>
            <span className="font-thin">{item.title}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default UsefullLinks;
