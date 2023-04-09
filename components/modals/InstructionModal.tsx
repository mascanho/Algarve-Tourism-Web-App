"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import { useEffect } from "react";

function InstructionModal() {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    open();
  }, []);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        centered
        className=""
      >
        {/* Modal content */}
      </Modal>
    </>
  );
}

export default InstructionModal;
