"use client";
import { Button, Group, Text, Collapse, Box, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaHeart, FaMap, FaMapPin } from "react-icons/fa";
import Link from "next/link";
import DrawerContentPlanner from "./DrawerContentPlanner";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";

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
}

export const PlannerCard: React.FC<PlannerCardProps> = ({ item, trip }) => {
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [collapseOpened, { toggle: toggleCollapse, close: closeCollapse }] =
    useDisclosure(false);

  const addToFavs = useAddToFavourites();

  const handleOpenDrawer = (itemCard) => {
    closeCollapse(); // Ensure collapse is closed when opening the drawer
    openDrawer();

    addToFavs.addFavourite(itemCard, true);
    console.log(itemCard);
  };

  const handleToggleCollapse = () => {
    closeDrawer(); // Ensure drawer is closed when toggling the collapse
    toggleCollapse();
  };

  return (
    <>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title="Authentication"
        size={"xs"}
      >
        <DrawerContentPlanner />
      </Drawer>
      <section className="border w-full sm:w-52 mx-auto rounded-lg overflow-hidden relative fade-in-image">
        <div className="flex flex-col p-3 space-y-2 typewriter overflow-hidden flex-nowrap min-h-72 sm:h-[19rem] py-1 line-clamp-2">
          <div className="flex justify-between items-center">
            <Link
              target="_blank"
              href={`/${item.fields.type}/${item.fields.slug}`}
            >
              <h4 className="text-key font-semibold flex flex-wrap truncate text-sm pt-2">
                {item.fields.title}
              </h4>
            </Link>
            <FaHeart
              onClick={() =>
                handleOpenDrawer({
                  title: item.fields.title,
                  city: item.fields.city,
                  image: item.fields.mainImage.fields.file.url,
                  type: item.fields.type,
                  slug: item.fields.slug,
                  embededMap: item.fields.embededMap,
                  shortDescription: item.fields.shortDescription,
                  id: item.sys.id,
                  pathname: window?.location?.pathname,
                })
              }
              className="text-key hover:text-red-500 mt-1 mr-1 text-sm hover:cursor-pointer ease-in delay-75 transition-all"
            />
          </div>
          <div key={item.sys.id} className="space-y-2">
            <Link
              target="_blank"
              href={`/${item.fields.type}/${item.fields.slug}`}
            >
              <div className="fade-in-image relative">
                <div className="bg-key p-1 pr-2 absolute bottom-2 flex space-x-1 rounded-r-lg items-center">
                  <FaMapPin className="text-[11px] text-red-500" />
                  <span className="text-[11px] text-white">
                    {item.fields.city}
                  </span>
                </div>
                <img
                  src={`https://${item.fields.mainImage.fields.file.url}`}
                  alt={item.fields.title}
                  className="sm:h-32 w-full object-cover rounded-md max-w-48"
                />
              </div>
            </Link>
            <Box maw={400} mx="auto">
              <Group justify="left" mb={5}>
                <div className="flex space-x-1">
                  <FaMap className="text-sm" />
                  <span
                    className="text-xs cursor-pointer"
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
                  height={100}
                  src={item.fields.embededMap}
                  title="Location Map"
                ></iframe>
              </Collapse>
            </Box>

            <div className="flex sm:w-48 justify-between typewriter min-h-20 h-10 max-h-40 overflow-hidden">
              <div>
                <h4 className="text-xs sm:w-44 w-40 text-black">
                  {item.fields.shortDescription}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
