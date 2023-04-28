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
        title="Authentications"
        centered
        className=""
      >
        {/* Modal content */}
        <p>hello</p>
      </Modal>
    </>
  );
}

export default InstructionModal;
