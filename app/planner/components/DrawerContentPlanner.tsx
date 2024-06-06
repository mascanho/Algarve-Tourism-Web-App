"use client";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import React, { useEffect, useState } from "react";
import { getClientSideCookie } from "@/app/libs/getClientSideCookie";
import { FaPlus } from "react-icons/fa";
import { Box, Collapse, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const DrawerContentPlanner = () => {
  const [tripName, setTripName] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [cookieError, setCookieError] = useState(null);
  const [opened, { toggle }] = useDisclosure(false);
  const [openCollapses, setOpenCollapses] = useState<{
    [key: string]: boolean;
  }>({});

  // Import useAddToFavourites hook
  const addToFavs = useAddToFavourites();
  const favourites = useAddToFavourites();

  // Function to validate, decode, and parse cookie data
  const parseCookie = (cookie: string) => {
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

  // Toggle collapse for a specific trip
  const handleToggleCollapse = (id: string) => {
    setOpenCollapses((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
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

      {selectedTrip && (
        <p className="mt-2 text-xl font-bold">{selectedTrip.name}</p>
      )}

      <div className="pt-1">
        {favourites.favourites.map((trip) => (
          <div key={trip.id} className="flex items-center">
            <div className="w-16 h-16 rounded-md flex items-center">
              <img
                src={"https:" + trip?.image}
                className="w-full h-full rounded-md object-cover"
                alt=""
              />
            </div>
            <div className="w-8/12">
              <p>{trip?.title}</p>
              <Box maw={400} mx="auto">
                <Group justify="center" mb={5}>
                  <span onClick={() => handleToggleCollapse(trip.id)}>
                    Toggle content
                  </span>
                </Group>

                <Collapse in={openCollapses[trip.id]}>
                  <Text>{trip?.description || "No description available"}</Text>
                </Collapse>
              </Box>
            </div>
          </div>
        ))}
      </div>

      {cookieError && (
        <div className="text-red-500">
          <p>{cookieError}</p>
        </div>
      )}
    </div>
  );
};

export default DrawerContentPlanner;
