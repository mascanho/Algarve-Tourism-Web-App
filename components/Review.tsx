import React from "react";

const options = {
  // weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Europe/London",
};

function Review({ review }: any) {
  return (
    <div className="full">
      <div className="flex w-[100%] items-center">
        <img
          alt={review?.email}
          src={review?.image}
          className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
        />
        <div className="flex flex-col items-center justify-center ml-2 w-full">
          <div className="flex items-center  m-auto pt-1 my-2 w-full">
            <span className="text-black sm:text-lg text-sm  flex-1 font-semibold text-left">
              {review?.name}
            </span>
            <div>
              <span className="text-xs text-gray-400 m-auto ">
                {review?.createdAt?.toLocaleDateString("en-GB", options)}
              </span>
            </div>
          </div>
          <div className="block w-full text-left -mt-2">
            <p className="text-sm sm:text-base text-left pl-0 w-full text-black/80">
              {review?.review}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
