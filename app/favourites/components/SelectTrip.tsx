"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SelectTrip = () => {
  const [tripName, setTripName] = useState(false);
  const [name, setName] = useState("");
  const handleCreateTrip = (e) => {
    setName(event.target.value);
    console.log(name);
  };

  const router = useRouter();

  const handleConfirm = () => {
    localStorage.setItem("trip", JSON.stringify({ name }));
    console.log(localStorage.getItem("trip"));
    router.refresh();
    setName("");
    setTripName(false);
  };

  // Check if localstorage "trip" name changes
  useEffect(() => {
    const tripName = localStorage.getItem("trip");
    if (tripName) {
      setTripName(tripName);
    }
    setTripName(false);
  }, [localStorage.getItem("trip")]);

  return (
    <div className="mt-5 sm:mt-10 flex mx-auto sm:flex-row flex-col space-y-3 sm:space-y-0  w-11/12 justify-between gap-x-4 text-xs text-black sm:w-full sm:text-base">
      {tripName ? (
        <div className="relative w-full">
          <input
            className="flex  w-full justify-center  rounded-lg border border-gray-300 bg-transparent p-4 delay-75 duration-200 ease-in-out hover:cursor-pointer hover:border-key"
            type="text"
            name=""
            onChange={(e) => handleCreateTrip(e)}
            placeholder="Enter Trip Name"
          />
          <button
            className="absolute right-2 sm:top-2 top-2.5 rounded-lg border border-key p-2 px-3"
            type="button"
            onClick={() => handleConfirm()}
          >
            confirm
          </button>
        </div>
      ) : (
        <div className="flex w-full  justify-center rounded-lg border border-gray-300 p-4 delay-75 duration-200 ease-in-out hover:cursor-pointer hover:border-key">
          <span>+</span>
          <span onClick={() => setTripName(!tripName)}>
            Create Your Own Trip
          </span>
        </div>
      )}
      <div
        onClick={() => router.push("/builder")}
        className="flex w-full  justify-center rounded-lg border border-gray-300 p-4 delay-75 duration-200 ease-in-out hover:cursor-pointer hover:border-key"
      >
        <span>@</span>
        <span>Generate with AI</span>
      </div>
    </div>
  );
};

export default SelectTrip;
