import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, ScrollArea } from "@mantine/core";
import { AiOutlineNotification } from "react-icons/ai";
import Notification from "../Notification";
import { notes } from "@/Data/Notifications";
import { FaRegBell } from "react-icons/fa";
function NotificationsModal() {
  const [opened, { open, close }] = useDisclosure(false);

  // const content = Array(20)
  //   .fill(0)
  //   .map((_, index) => <p key={index}>...</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Notifications"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <Notification />
      </Modal>
      <FaRegBell
        onClick={open}
        className="ml-1 text-black  hidden sm:inline cursor-pointer active:scale-90 z-50 text-xl"
      />{" "}
    </>
  );
}

export default NotificationsModal;
