import React from "react";

const options = {
  // weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Europe/London",
};

function Comment({ comment }: any) {
  return (
    <div className="full">
      <div className="flex w-[100%] items-center">
        <img
          alt={comment?.email}
          src={comment?.image}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col items-center justify-center ml-2 w-full">
          <div className="flex items-center  m-auto pt-1 my-2 w-full">
            <span className="text-black  flex-1 font-semibold text-left">
              {comment?.name}
            </span>
            <div>
              <span className="text-xs text-gray-400 m-auto ">
                {comment?.createdAt.toLocaleDateString("en-GB", options)}
              </span>
            </div>
          </div>
          <div className="block w-full text-left -mt-2">
            <p className="text-base text-left pl-0 w-full">
              {comment?.comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
