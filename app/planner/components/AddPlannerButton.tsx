"use client";

import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import DrawerContentPlanner from "./DrawerContentPlanner";

const AddPlannerButton = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        opened={opened}
        size={"xs"}
        onClose={close}
        // title="Authentication"
      >
        <DrawerContentPlanner />
      </Drawer>

      <button
        className="w-fit px-3 py-1 bg-key text-white rounded-md "
        onClick={open}
      >
        Save to Planner
      </button>
    </>
  );
};

export default AddPlannerButton;
