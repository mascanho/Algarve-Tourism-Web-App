"use client";

import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import DrawerContentPlanner from "./DrawerContentPlanner";
import { createTrip } from "@/app/actions/createTip";

const AddPlannerButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleClick = async () => {
    await createTrip();
    open();
  };

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
        onClick={handleClick}
      >
        Save to Planner
      </button>
    </>
  );
};

export default AddPlannerButton;
