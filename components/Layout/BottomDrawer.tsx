"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Tabs, ScrollArea } from "@mantine/core";
import { FaBell, FaHeart } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { TiHeartOutline } from "react-icons/ti";
import { AiOutlineBell } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { IoIosClose } from "react-icons/io";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { useEffect, useState } from "react";

function BottomDrawer({ favouritesLength }: any) {
  const [opened, { open, close }] = useDisclosure(true);
  const router = useRouter();
  const [favourites, setFavourites] = useState<any[]>([]);
  const { removeFavourite } = useAddToFavourites();

  const favouritesFromLocalStorage =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("favourites")
      : null;

  const favouritesArray = JSON.parse(favouritesFromLocalStorage) || [];

  const removeFavouriteGlobal = (id: number) => {
    // Remove the favorite from the local state
    const updatedFavourites = favourites.filter((fav: any) => fav.id !== id);
    removeFavourite(id);
    setFavourites(updatedFavourites);
    console.log(id, "from the drawer");

    // Update local storage
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  useEffect(() => {
    document.title = "Algarve Wonders - Your Favourites";
    let link: HTMLLinkElement | null =
      document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "/images/icon.png";

    // Initialization logic outside the store creation
    if (typeof window !== "undefined") {
      const favourites = localStorage?.getItem("favourites");
      if (favourites) {
        useAddToFavourites.setState({ favourites: JSON.parse(favourites) });
        setFavourites(JSON.parse(favourites));
      }
    }
  }, [removeFavourite]);

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
                  className="border text-xs relative flex mb-2  h-full rounded-md items-center"
                  key={item.id}
                >
                  <div
                    onClick={() => removeFavouriteGlobal(item?.id)}
                    className="flex flex-wrap  bg-gray-200 h-10 px-1 "
                  >
                    <IoIosClose className="h-full" />
                  </div>
                  <div
                    onClick={() => {
                      router.push(`/${item?.type}/${item?.slug}`);
                      close();
                    }}
                    className="flex flex-col  mt-1 flex-wrap w-full ml-2 justify-around "
                  >
                    <span className="font-semibold text-black">
                      {" "}
                      {item?.title}
                    </span>
                    <span className="text-gray-600"> {item?.city}</span>
                  </div>
                  <div className="flex mt-1 flex-wrap pr-2  ">
                    <BiChevronRight className="text-gray-500" />
                  </div>
                </section>
              ))}
            </section>
          </Tabs.Panel>
          <Tabs.Panel value="notifications">
            <p>Notifications</p>
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
