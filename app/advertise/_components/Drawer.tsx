"use client";

import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import WeeklyMealsCard from "@/app/meals/_components/WeeklyMealsCard";
import ExampleWeeklyMeals from "./ExampleWeeklyMeals";
import ExampleLiveEvents from "./ExampleLiveEvents";

function DrawerExample({ title }: any) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer position="right" opened={opened} onClose={close} title={title}>
        {title === "Weekly Meals" ? <ExampleWeeklyMeals /> : null}
        {title === "Live Events" ? <ExampleLiveEvents /> : null}
      </Drawer>

      <button className="underline text-black" onClick={open}>
        Example
      </button>
    </>
  );
}

export default DrawerExample;
