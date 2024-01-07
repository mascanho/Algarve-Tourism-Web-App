"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHeart, IoThumbsUp } from "react-icons/io5";

const CommentCard = ({ comment }: any) => {
  const pathname = usePathname();

  return (
    <div
      key={comment.id}
      className="my-6 flex items-center  p-4 border rounded-md"
    >
      <div className="w-12 h-12 flex">
        <img className="rounded-full" src={comment.image} alt="" />
      </div>
      <div className="flex flex-col ml-3 ">
        <p className="text-gray-600 font-semibold">{comment.name}</p>
        <p className="font-thin">{comment.comment}</p>
        <div className="space-x-3 mt-1 flex">
          <span className="flex items-center">
            {comment.thumbs}
            <IoThumbsUp className="ml-1" />
          </span>
          <span className="flex items-center">
            {comment.likes}
            <IoHeart className="ml-1 text-red-600" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
