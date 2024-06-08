"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEdit, FaRobot } from "react-icons/fa";

const SelectTrip = () => {
  const [tripName, setTripName] = useState(false);
  const [name, setName] = useState("");
  const handleCreateTrip = (e) => {
    setName(event.target.value);
  };

  const router = useRouter();

  const handleConfirm = () => {
    localStorage.setItem("trip", JSON.stringify({ name }));
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
    <div className="mt-5 sm:mt-10 flex mx-auto sm:flex-row h-28 sm:h-14 flex-col space-y-3 sm:space-y-0  w-11/12 justify-between gap-x-4 text-xs text-black sm:w-full sm:text-base">
      {tripName ? (
        <div className="relative sm:w-11/12">
          <input
            className="flex h-14  min-w-full justify-center  rounded-lg border border-gray-300 bg-transparent p-5 delay-75 duration-200 ease-in-out hover:cursor-pointer hover:border-key"
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
        <div
          onClick={() => setTripName(!tripName)}
          className="flex sm:w-96 items-center  hover:bg-key hover:text-white space-x-2  justify-center rounded-lg border border-gray-300 p-4 delay-75 duration-200 ease-in-out hover:cursor-pointer hover:border-key"
        >
          <FaEdit />
          <span>Create Your Own Trip</span>
        </div>
      )}
      <div
        onClick={() => router.push("/builder")}
        className="flex w-full items-center space-x-2 hover:bg-key hover:text-white  justify-center rounded-lg border border-gray-300 p-4 delay-75 duration-200 ease-in-out hover:cursor-pointer hover:border-key"
      >
        <FaRobot />
        <span>Auto Generate Trip </span>
      </div>
    </div>
  );
};

export default SelectTrip;
