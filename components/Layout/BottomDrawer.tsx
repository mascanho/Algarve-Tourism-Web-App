import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";

function BottomDrawer() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

export default BottomDrawer;
