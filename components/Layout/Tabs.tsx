"use client";
import { Tabs } from "@mantine/core";

function TabsRow() {
  return (
    <Tabs color="teal" defaultValue="first" className="">
      <Tabs.List className="text-left">
        <Tabs.Tab className="text-left ml-0 pl-0" value="first">
          Description
        </Tabs.Tab>
        <Tabs.Tab value="second" color="blue">
          Photos
        </Tabs.Tab>
        <Tabs.Tab value="third">Description</Tabs.Tab>
        <Tabs.Tab value="fourth">Price</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        First tab color is teal, it gets this value from context
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        Second tab color is blue, it gets this value from props, props have the
        priority and will override context value
      </Tabs.Panel>
      <Tabs.Panel value="third" pt="xs">
        third tab color is blue, it gets this value from props, props have the
        priority and will override context value
      </Tabs.Panel>
      <Tabs.Panel value="fourth" pt="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        dignissimos consequuntur ad aperiam vitae excepturi, ipsam modi.
        Repellendus, quae quis.
      </Tabs.Panel>
    </Tabs>
  );
}

export default TabsRow;
