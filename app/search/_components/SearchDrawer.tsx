"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import Search from "@/components/Search";

function SearchDrawer() {
  const [opened, { open, close }] = useDisclosure(open);

  return (
    <>
      <Drawer
        opened={opened}
        position="top"
        size={"100%"}
        onClose={close}
        title="Authentication"
      >
        {/* Drawer content */}
      </Drawer>

      <Search onClick={open} placeholderText={"Destination or activity..."} />
    </>
  );
}

export default SearchDrawer;
