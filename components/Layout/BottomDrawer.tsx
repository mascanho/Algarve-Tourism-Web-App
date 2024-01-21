import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";

function BottomDrawer() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="bottom"
        title="Authentication"
        className="bottomDraw"
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

export default BottomDrawer;
