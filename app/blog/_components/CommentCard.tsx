"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHeart, IoThumbsUp } from "react-icons/io5";

const CommentCard = ({ comment }: any) => {
  const pathname = usePathname();

  //set the date to be displayed as "Days ago" using javascript only
  const date: any = new Date(comment.createdAt);
  const daysAgo = Math.floor((Date.now() - date) / (1000 * 60 * 60 * 24));

  return (
    <div
      key={comment.id}
      className="my-6 flex items-center   p-4 border rounded-md"
    >
      <div className="w-12 h-12 flex">
        <img className="rounded-full" src={comment.image} alt="" />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col ml-3  ">
          <p className="text-gray-600 font-semibold">{comment.name}</p>
          <p className="font-thin">{comment.comment}</p>
          {/* <div className="space-x-3 mt-1 flex"> */}
          {/*   <span className="flex items-center"> */}
          {/*     {comment.thumbs} */}
          {/*     <IoThumbsUp className="ml-1" /> */}
          {/*   </span> */}
          {/*   <span className="flex items-center"> */}
          {/*     {comment.likes} */}
          {/*     <IoHeart className="ml-1 text-red-600" /> */}
          {/*   </span> */}
          {/* </div> */}
        </div>
        <div>
          <span className="text-xs text-gray-400 w-full">
            {daysAgo} days ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
