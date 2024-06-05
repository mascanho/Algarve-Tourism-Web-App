"use client";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import React, { useEffect, useState } from "react";
import { getClientSideCookie } from "@/app/libs/getClientSideCookie";
import { FaPlus } from "react-icons/fa";
import { Box, Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const DrawerContentPlanner = () => {
  const [tripName, setTripName] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [cookieError, setCookieError] = useState(null);
  const [opened, { toggle }] = useDisclosure(false);

  // Import useAddToFavourites hook
  const addToFavs = useAddToFavourites();
  const favourites = useAddToFavourites();

  // Function to validate, decode, and parse cookie data
  const parseCookie = (cookie) => {
    try {
      const decodedCookie = decodeURIComponent(cookie);
      return JSON.parse(decodedCookie);
    } catch (error) {
      console.error("Failed to parse cookie:", error);
      setCookieError("Invalid cookie data");
      return null;
    }
  };

  // Create the folder name and details in localStorage
  const handleTripCreation = () => {
    const TRIP = {
      name: tripName,
      date: new Date(),
      id: Math.random().toString(36).substring(2, 9),
    };

    localStorage.setItem("trip", JSON.stringify(TRIP));
    setTripName("");
    setSelectedTrip(TRIP); // Update state immediately after saving

    toggle();
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center" onClick={toggle}>
        <FaPlus className="bg-gray-400 p-1 text-3xl rounded-sm mr-2 font-thin" />
        <button type="button">Create a Trip</button>
      </div>
      <Box className="flex flex-col">
        <Collapse in={opened}>
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-transparent p-2 my-2 text-key border border-key rounded-md"
              type="text"
              name="title"
              value={tripName}
              id="title"
              onChange={(e) => setTripName(e.target.value)}
              placeholder="My Lagos dream trip"
            />
            <div className="flex justify-between">
              <button onClick={toggle} type="button">
                Cancel
              </button>
              <button onClick={handleTripCreation} type="button">
                Save
              </button>
            </div>
          </form>
        </Collapse>
      </Box>

      {
        // show the saved cookie trip name
        selectedTrip && <p className="text-xl font-bold">{selectedTrip.name}</p>
      }

      {
        // show the saved cookie name
        favourites.favourites.map((trip) => (
          <p key={trip.id}>{trip.title}</p>
        ))
      }

      {cookieError && (
        <div className="text-red-500">
          <p>{cookieError}</p>
        </div>
      )}
    </div>
  );
};

export default DrawerContentPlanner;
