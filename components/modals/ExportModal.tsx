"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

function ExportModal(title: any, closeDrawer: any) {
  const [opened, { open, close }] = useDisclosure(false);

  function handleButtonClick() {
    open;
    closeDrawer;
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        className="z-50"
        title="Export Favourites"
      >
        {/* Modal content */}
        <h1>hello</h1>
      </Modal>

      <Group position="center" className="w-full">
        <Button className="bg-key w-[100%]" onClick={open}>
          Export Favourites
        </Button>
      </Group>
    </>
  );
}
export default ExportModal;
