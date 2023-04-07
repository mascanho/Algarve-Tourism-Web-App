import Image from "next/image";
import React from "react";

function Review({ name, job, rating, review, image }: any) {
  return (
    <aside className="w-72 bg-neutral-100 p-2 rounded-md">
      <div className="flex items-center space-x-2">
        <div>
          <img
            src={image}
            alt="avatar"
            height={30}
            width={30}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="">
            <h4 className="text-black">{name}</h4>
            <p className="text-xs">{job}</p>
          </div>
        </div>
        <span className="text-sm">{rating}</span>
      </div>
      <div className="w-full h-[1px] bg-gray-200 my-2" />
      <p className="text-sm">{review}</p>
    </aside>
  );
}

export default Review;
