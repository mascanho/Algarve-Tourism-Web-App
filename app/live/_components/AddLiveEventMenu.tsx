"use client";
import { Menu } from "@mantine/core";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import LiveUploadForm from "./LiveUploadForm";
import { useLoginModalStore } from "@/app/hooks/useLoginModal";
import { useSession } from "next-auth/react";

function AddLiveEventMenu() {
  const [opened, { open, close }] = useDisclosure(true);
  const signIn = useLoginModalStore();
  const isLoggedIn = useSession();

  const handleClick = () => {
    if (isLoggedIn.status === "unauthenticated") {
      signIn.onOpen();
    } else {
      open();
    }
  };

  return (
    <>
      <FaPlus
        onClick={handleClick}
        className="w-fit h-fit border border-dotted border-key/90 p-1 text-sm rounded-full ml-2 cursor-pointer"
      />

      {isLoggedIn.status === "authenticated" ? (
        <Modal
          opened={opened}
          onClose={close}
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
          centered
          title="Add Live Event"
        >
          <LiveUploadForm />
        </Modal>
      ) : null}
    </>
  );
}

export default AddLiveEventMenu;
