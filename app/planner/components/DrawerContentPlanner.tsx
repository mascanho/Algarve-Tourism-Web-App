"use client";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import React, { useEffect, useState } from "react";
import { getClientSideCookie } from "@/app/libs/getClientSideCookie";
import { FaPlus } from "react-icons/fa";
import { Box, Collapse, Group, Rating, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const DrawerContentPlanner = () => {
  const [tripName, setTripName] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [cookieError, setCookieError] = useState(null);
  const [opened, { toggle }] = useDisclosure(false);
  const [openCollapses, setOpenCollapses] = useState<{
    [key: string]: boolean;
  }>({});
  const router = useRouter();

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

  // Check for trip data in localStorage
  useEffect(() => {
    const tripData = localStorage.getItem("trip");
    if (tripData) {
      const parsedData = parseCookie(tripData);
      if (parsedData) {
        setSelectedTrip(parsedData);
      }
    }
  }, []);

  return (
    <div className="flex flex-col space-y-2 h-full justify-between items-stretch">
      <div className="flex items-center" onClick={toggle}>
        <FaPlus className="bg-gray-400 p-1 text-3xl rounded-sm mr-2 font-thin" />
        <button type="button">Create a Trip</button>
      </div>
      <Box className="flex flex-col">
        <Collapse in={opened}>
          <form
            className="flex flex-col mb-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="bg-transparent p-2 my-2 text-key border border-key rounded-md"
              type="text"
              name="title"
              value={tripName}
              id="title"
              onChange={(e) => setTripName(e.target.value)}
              placeholder="My Lagos dream trip"
            />
            <div className="flex justify-between w-full px-1 mx-auto">
              <button className="underline" onClick={toggle} type="button">
                Cancel
              </button>
              <button
                className="underline"
                onClick={handleTripCreation}
                type="button"
              >
                Save
              </button>
            </div>
          </form>
        </Collapse>
      </Box>

      {localStorage.getItem("trip") && (
        <div className="flex items-center py-3 space-x-2 flex-wrap">
          <span className="text-key-60">Trip:</span>
          <p className="text-xl font-bold">{selectedTrip?.name}</p>
        </div>
      )}

      <div className="pt-1 space-y-2">
        {favourites.favourites.map((trip) => (
          <div
            key={trip.id}
            className="flex items-center justify-start border p-1 rounded-md"
          >
            <div className="w-16 h-16 rounded-md flex items-center mr-2">
              <Link
                href={`/${trip.type}/${trip.slug}`}
                className="w-full h-full rounded-md object-cover flex items-center"
              >
                <img
                  src={"https:" + trip?.image}
                  className="w-full h-full rounded-md object-cover"
                  alt=""
                />
              </Link>
            </div>
            <div className="w-8/12">
              <p className="text-base font-semibold">{trip?.title}</p>
              <p className="text-xs">{trip?.city}</p>
              <Box maw={400} mx="auto">
                <Group justify="center" mb={5}>
                  <span
                    className="text-xs cursor-pointer"
                    onClick={() => handleToggleCollapse(trip.id)}
                  >
                    <Rating
                      value={trip?.rating}
                      fractions={2}
                      readOnly
                      size="xs"
                      className="text-xs mt-1 cursor-pointer"
                    />
                  </span>
                </Group>

                <Collapse in={openCollapses[trip.id]}>
                  <span className="text-xs">{trip?.shortDescription}</span>
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
      <Link href="/favourites" className="w-full pt-3">
        <button
          onclick={() => {
            router.push("/");
            toast.success("Trip saved");
          }}
          className="btn w-full"
        >
          Save All
        </button>
      </Link>
    </div>
  );
};

export default DrawerContentPlanner;
