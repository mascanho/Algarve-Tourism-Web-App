"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Tabs, ScrollArea } from "@mantine/core";
import { FaBell, FaHeart } from "react-icons/fa";

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
        className="bottomDraw sm:hidden"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {/* Drawer content */}

        <Tabs defaultValue="favourites ">
          <Tabs.List>
            <Tabs.Tab color="dark" value="favourites">
              Favourites
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="favourites">
            {favouritesArray.map((item: any) => (
              <div
                className="p-4 border text-sm flex flex-col mt-4 mb-2 rounded-md space-y-2"
                key={item.id}
              >
                <p>{item.title}</p>
                <p>{item.shortDescription}</p>
              </div>
            ))}
          </Tabs.Panel>
        </Tabs>
      </Drawer>

      <div
        onClick={open}
        className="bg-gray-700 w-fit mx-auto flex items-center gap-2 transition-all px-2 py-1 rounded-full"
      >
        <FaHeart className="text-red-500" />
        {favouritesLength}
      </div>
    </>
  );
}

export default BottomDrawer;
