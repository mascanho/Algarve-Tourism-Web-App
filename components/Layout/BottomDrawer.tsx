"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Tabs, ScrollArea } from "@mantine/core";
import { FaBell, FaHeart } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { TiExport, TiHeartOutline } from "react-icons/ti";
import { AiOutlineBell } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { IoIosClose } from "react-icons/io";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { useEffect, useState } from "react";
import Notification from "../Notification";

function BottomDrawer({ favouritesLength }: any) {
  const [opened, { open, close }] = useDisclosure();
  const router = useRouter();
  const [favourites, setFavourites] = useState<any[]>([]);
  const { removeFavourite } = useAddToFavourites();

  const favouritesFromLocalStorage =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("favourites")
      : null;

  const favouritesArray = JSON.parse(favouritesFromLocalStorage) || [];

  const removeFavouriteGlobal = (id: any) => {
    console.log(id);
    // Remove the favorite from the local state
    removeFavourite(id);
    const updatedFavourites = favourites.filter((fav: any) => fav.id !== id);
    setFavourites(updatedFavourites);

    // Update local storage
    // localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const removeAllavourites = () => {
    // remove all favourites
    removeFavourite(0);
    setFavourites([]);

    // UPDATE LOCAL storage
    localStorage.clear();
    localStorage.setItem("favourites", JSON.stringify([]));
    window.location.reload();
  };

  useEffect(() => {
    // Initialization logic outside the store creation
    if (typeof window !== "undefined") {
      const favourites = localStorage?.getItem("favourites");
      if (favourites) {
        useAddToFavourites.setState({ favourites: JSON.parse(favourites) });
        setFavourites(JSON.parse(favourites));
      }
    }
  }, [removeFavourite, favourites.length]);

  return (
    <>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="bottom"
        title=""
        size={favouritesArray.length > 4 ? "100%" : ""}
        className="bottomDraw sm:hidden relative"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        // scrollAreaComponent={ScrollArea.Autosize}
      >
        {/* Drawer content */}

        <Tabs defaultValue="favourites">
          <Tabs.List className="mb-6  top-0">
            <Tabs.Tab color="dark" value="favourites">
              Favourites <TiHeartOutline className="inline ml-1" />
            </Tabs.Tab>
            <Tabs.Tab
              className="flex items-center"
              color="dark"
              value="notifications"
            >
              Notifications
              <AiOutlineBell className="inline ml-2" />
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="favourites">
            <section>
              {favouritesArray.map((item: any) => (
                <section
                  className="border text-xs relative flex  mb-2  h-full rounded-md items-center"
                  key={item.id}
                >
                  <div
                    onClick={() => removeFavouriteGlobal(item?.id)}
                    className="flex flex-wrap  bg-gray-200 h-12 px-2"
                  >
                    <IoIosClose className="h-full text-lg" />
                  </div>
                  <div
                    onClick={() => {
                      router.push(`/${item?.type}/${item?.slug}`);
                      close();
                    }}
                    className="flex flex-col  mt-1 flex-wrap w-full ml-3 justify-around "
                  >
                    <span className="font-semibold text-black">
                      {" "}
                      {item?.title}
                    </span>
                    <span className="text-gray-600 pb-1"> {item?.city}</span>
                  </div>
                  <div className="flex mt-1 flex-wrap pr-2  ">
                    <BiChevronRight className="text-gray-500" />
                  </div>
                </section>
              ))}
              <div className="space-x-4 flex pt-1">
                <span
                  onClick={() => {
                    router.push("/favourites");
                    close();
                  }}
                  className="text-xs text-gray-500 flex items-center underline"
                >
                  Export all
                </span>
                <span
                  onClick={() => removeAllavourites()}
                  className="text-xs text-gray-500"
                >
                  delete all
                </span>
              </div>
            </section>
          </Tabs.Panel>
          <Tabs.Panel value="notifications">
            <Notification />
          </Tabs.Panel>
        </Tabs>
      </Drawer>

      <div
        onClick={open}
        className="bg-gray-700 w-fit mx-auto flex items-center gap-2 transition-all ease-in delay-75 px-2 text-xs py-1 rounded-full"
      >
        <FaHeart className="text-red-500 animate-pulse" />
        {favouritesLength}
      </div>
    </>
  );
}

export default BottomDrawer;
