"use client";

import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import ExampleWeeklyMeals from "./ExampleWeeklyMeals";
import ExampleLiveEvents from "./ExampleLiveEvents";
import ExampleListLocations from "./ExampleListLocations";

function DrawerExample({ title, itemsFromContentful }: any) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer position="right" opened={opened} onClose={close} title={title}>
        {title === "Weekly Meals" ? <ExampleWeeklyMeals /> : null}
        {title === "Live Events" ? <ExampleLiveEvents /> : null}
        {title === "List Locations" ? <ExampleListLocations /> : null}
      </Drawer>

      <button className="underline text-black" onClick={open}>
        Example
      </button>
    </>
  );
}

export default DrawerExample;
