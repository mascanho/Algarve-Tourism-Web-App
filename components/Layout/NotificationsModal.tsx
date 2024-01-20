import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, ScrollArea } from "@mantine/core";
import { AiOutlineNotification } from "react-icons/ai";

function NotificationsModal() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(20)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>
      <AiOutlineNotification
        onClick={open}
        className="ml-1 mr-1 hidden sm:inline cursor-pointer active:scale-90 z-50 text-3xl"
      />{" "}
    </>
  );
}

export default NotificationsModal;