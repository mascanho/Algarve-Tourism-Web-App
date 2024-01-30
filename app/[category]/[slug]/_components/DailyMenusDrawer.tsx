"use client";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import RestaurantMenuItem from "./MenuItem";

const DailyMenusDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} position="bottom" radius="md">
        {/* CONTENT  */}
        <RestaurantMenuItem />
      </Drawer>
      <span onClick={open} className="text-sm underline text-gray-700">
        Daily Meals
      </span>
    </>
  );
};

export default DailyMenusDrawer;
