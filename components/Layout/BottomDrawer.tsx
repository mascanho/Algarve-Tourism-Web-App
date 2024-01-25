"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Tabs, ScrollArea } from "@mantine/core";
import { FaBell, FaHeart } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { TiHeartOutline } from "react-icons/ti";
import { AiOutlineBell } from "react-icons/ai";

function BottomDrawer({ favouritesLength }: any) {
  const [opened, { open, close }] = useDisclosure(false);

  const favouritesFromLocalStorage =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("favourites")
      : null;

  const favouritesArray = JSON.parse(favouritesFromLocalStorage) || [];

  return (
    <>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="bottom"
        title=""
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
            <section className="h-2">
              {favouritesArray.map((item: any) => (
                <div
                  className="px-4 py-3 border text-xs flex flex-col  mb-3 space-y-1  rounded-md "
                  key={item.id}
                >
                  <h5 className="my-0 font-semibold">{item.title}</h5>
                  <p className="text-gray-500">{item.shortDescription}</p>
                </div>
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
        className="bg-gray-700 w-fit mx-auto flex items-center gap-2 transition-all ease-in delay-75 px-3 py-1 rounded-full"
      >
        <FaHeart className="text-red-500" />
        {favouritesLength}
      </div>
    </>
  );
}

export default BottomDrawer;
