"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { FaHeart } from "react-icons/fa";

function BottomDrawer({ favouritesLength }: any) {
  const [opened, { open, close }] = useDisclosure(false);

  console.log(favouritesLength);

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
      </Drawer>

      <div
        onClick={open}
        className="bg-gray-700 w-fit mx-auto flex items-center gap-2 transition-all px-2 py-1 rounded-full "
      >
        <FaHeart className="text-red-500" />
        {favouritesLength}
      </div>
    </>
  );
}

export default BottomDrawer;
