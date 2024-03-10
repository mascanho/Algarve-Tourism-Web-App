"use client";

import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";

function DrawerExample({ title }: any) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        title="Authentication"
      >
        <p>Content</p>
      </Drawer>

      <button className="underline text-black" onClick={open}>
        Example
      </button>
    </>
  );
}

export default DrawerExample;
