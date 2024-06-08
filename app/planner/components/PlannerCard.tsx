"use client";
import React, { useState, useEffect } from "react";
import {
  Button,
  Group,
  Text,
  Collapse,
  Box,
  Drawer,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaHeart, FaMap, FaMapPin } from "react-icons/fa";
import Link from "next/link";
import DrawerContentPlanner from "./DrawerContentPlanner";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { toast } from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import styles from "./styles.module.css"; // Import your CSS file

interface Item {
  sys: {
    id: string;
  };
  fields: {
    type: string;
    slug: string;
    title: string;
    city: string;
    mainImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    embededMap: string;
    shortDescription: string;
  };
}

interface PlannerCardProps {
  item: Item;
  index: number;
}

export const PlannerCard: React.FC<PlannerCardProps> = ({ item, index }) => {
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [collapseOpened, { toggle: toggleCollapse, close: closeCollapse }] =
    useDisclosure(false);

  const addToFavs = useAddToFavourites();
  const [shouldFlip, setShouldFlip] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the flip animation for each card
    const timeout = setTimeout(() => {
      setShouldFlip(true);
    }, index * 200); // Adjust delay as per your preference

    return () => clearTimeout(timeout);
  }, [index]);

  const handleOpenDrawer = (itemCard) => {
    closeCollapse(); // Ensure collapse is closed when opening the drawer
    openDrawer();

    addToFavs.addFavourite(itemCard, true);
  };

  const handleToggleCollapse = () => {
    closeDrawer(); // Ensure drawer is closed when toggling the collapse
    toggleCollapse();
  };

  return (
    <>
      <Drawer opened={drawerOpened} onClose={closeDrawer} title="" size={"xs"}>
        <DrawerContentPlanner />
      </Drawer>
      <section
        className={`fade-in-image relative mx-auto w-full overflow-hidden rounded-lg border sm:w-52 ${
          shouldFlip ? styles["card-flip"] : ""
        }`}
      >
        <div className="typewriter line-clamp-2 flex min-h-72 flex-col flex-nowrap space-y-2 overflow-hidden p-3 sm:h-[19rem] sm:min-h-80 sm:py-1">
          <div className="flex items-center justify-between">
            <Link
              target="_blank"
              href={`/${item.fields.type}/${item.fields.slug}`}
            >
              <h4 className="flex flex-wrap truncate pt-2 text-sm font-semibold text-key">
                {item.fields.title}
              </h4>
            </Link>
          </div>
          <div key={item.sys.id} className="space-y-2">
            <Link
              target="_blank"
              href={`/${item.fields.type}/${item.fields.slug}`}
            >
              <div className="fade-in-image relative">
                <div className="absolute bottom-2 flex items-center space-x-1 rounded-r-lg bg-key p-1 pr-2">
                  <FaMapPin className="text-[11px] text-red-500" />
                  <span className="text-[11px] text-white">
                    {item.fields.city}
                  </span>
                </div>
                <img
                  src={`https://${item.fields.mainImage.fields.file.url}`}
                  alt={item.fields.title}
                  className="w-full max-w-48 rounded-md object-cover sm:h-32"
                />
              </div>
            </Link>
            <Box maw={400} mx="auto">
              <Group justify="left" mb={5}>
                <div className="hidden space-x-1 sm:flex">
                  <FaMap className="text-sm" />
                  <span
                    className="cursor-pointer text-xs"
                    onClick={handleToggleCollapse}
                  >
                    View Map
                  </span>
                </div>
              </Group>

              <Collapse
                in={collapseOpened}
                transitionDuration={500}
                transitionTimingFunction="linear"
              >
                <iframe
                  className="rounded-md"
                  width={180}
                  height={115}
                  src={item.fields.embededMap}
                  title="Location Map"
                ></iframe>
              </Collapse>
            </Box>

            <div className="typewriter flex h-10 max-h-40 min-h-20 justify-between overflow-hidden sm:w-48">
              <div className="relative">
                <h4 className="text-xs text-black sm:w-44 line-clamp-4">
                  {item.fields.shortDescription}
                </h4>
              </div>
            </div>
          </div>
          <Tooltip label="Add to favourites">
            <BiPlus
              onClick={() =>
                handleOpenDrawer({
                  title: item.fields.title,
                  city: item.fields.city,
                  image: item.fields.mainImage.fields.file.url,
                  type: item.fields.type,
                  slug: item.fields.slug,
                  embededMap: item.fields.embededMap,
                  rating: item.fields.rating,
                  shortDescription: item.fields.shortDescription,
                  id: item.sys.id,
                  pathname: window?.location?.pathname,
                })
              }
              className=" absolute -right-1 sm:-bottom-1 -bottom-2  h-12 w-10  sm:h-12 sm:w-10 rotate-90 rounded-tl-sm sm:rounded-tr-md rounded-l-full bg-key p-2 sm:pl-3 text-lg text-white transition-all delay-75  ease-in  hover:cursor-pointer pr-2 active:text-red-500 "
            />
          </Tooltip>
        </div>
      </section>
    </>
  );
};
