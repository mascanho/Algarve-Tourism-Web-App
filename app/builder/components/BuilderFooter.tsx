"use client";
import React, { useEffect, useState } from "react";
import StepperEl from "./StepperEl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import FetchBuilderData from "@/app/libs/FetchBuilderData";

export const BuilderFooter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [hasBuilderData, setHasBuilderData] = useState(false);

  //check if the user has data in localstorage, with all the fields
  useEffect(() => {
    const handleClick = (event) => {
      console.log("Mouse clicked on the page.");
      // Add your logic to handle the click event hereconst data = localStorage.getItem("Builder");
      const data = localStorage?.getItem("Builder");
      const dataObj = JSON.parse(data || "{}");
      if (!dataObj) {
        console.log("No data found in localStorage.");
      }
      if (
        dataObj.days > 0 &&
        dataObj.attractions > 0 &&
        dataObj.categories.length > 0
      ) {
        setHasBuilderData(true);
      }
    };

    // Add event listener for mouse clicks on the document
    document.addEventListener("click", handleClick);

    // Clean up by removing the event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // handle next click programatically
  const handleNextClick = () => {
    if (pathname === "/builder") {
      router.push("/builder/trip");
    }
    if (pathname === "/builder/trip") {
      router.push("/builder/summary");
    }
    if (pathname === "/builder/summary") {
      router.push("/builder/summary");
    }
    if (pathname === "/builder/summary") {
      router.push("/builder/journey");
    }
  };

  const buttonText = () => {
    if (pathname === "/builder") {
      return "Next";
    }
    if (pathname === "/builder/trip") {
      return "Next";
    }
    if (pathname === "/builder/summary") {
      return "Generate";
    }
    if (pathname === "/planner") {
      return "Next";
    }
  };

  return (
    <div className="h-16  border bg-white w-full flex justify-center z-20  text-black  items-center fixed bottom-0 ">
      <div className="w-11/12 mx-auto flex items-center justify-end max-w-[53rem]  ">
        {pathname !== "/builder" && pathname !== "/planner" ? (
          <button
            type="button"
            className="w-32 bg-key text-white py-1 rounded-lg "
            onClick={() => router.back()}
          >
            Back
          </button>
        ) : (
          ""
        )}
        <StepperEl />

        <button
          onClick={handleNextClick}
          type="button"
          disabled={!hasBuilderData && pathname !== "/planner"}
          className="w-24 bg-key text-white py-1 rounded-lg px-4 disabled:opacity-20 disabled:cursor-not-allowed"
        >
          {buttonText()}
        </button>
      </div>
    </div>
  );
};

export default BuilderFooter;
