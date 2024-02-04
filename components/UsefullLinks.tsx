import { usefulLinks as Data } from "@/Data/Links";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const UsefullLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4">
      {Data.map((item) => (
        <a href={item.link} target="_blank" rel="noreferrer" key={item.title}>
          <div className="flex items-center group ">
            <span className="mr-3">
              <FaArrowRight className="font-thin text-key group-hover:translate-x-1  transition ease-in delay-100 " />
            </span>
            <span className="font-thin transition-all ease-in delay-100 group-hover:text-key  ">
              {item.title}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default UsefullLinks;
