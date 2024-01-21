"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { FaHeart } from "react-icons/fa";

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
        title="Authentication"
        className="bottomDraw sm:hidden"
      >
        {/* Drawer content */}
        {favouritesArray.map((item: any) => (
          <div className="p-4 border text-sm gap-2" key={item.id}>
            <p>{item.title}</p>
            <p>{item.shortDescription}</p>
          </div>
        ))}
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
