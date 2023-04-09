import { useDisclosure } from "@mantine/hooks";
import { Drawer, Group, Button } from "@mantine/core";

function DrawerModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>
    </>
  );
}

export default DrawerModal;
