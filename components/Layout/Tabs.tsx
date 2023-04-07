"use client";
import { Tabs } from "@mantine/core";

function TabsRow() {
  return (
    <Tabs color="teal" defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">Description</Tabs.Tab>
        <Tabs.Tab value="second" color="blue">
          More Photos
        </Tabs.Tab>
        <Tabs.Tab value="third">Description</Tabs.Tab>
        <Tabs.Tab value="account" ml="auto">
          Account
        </Tabs.Tab>
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
    </Tabs>
  );
}

export default TabsRow;
