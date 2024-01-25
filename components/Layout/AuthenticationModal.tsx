import { useDisclosure } from "@mantine/hooks";
import { Button, Modal } from "@mantine/core";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import {
  useLoginModalStore,
  useRegisteredModalStore,
} from "@/app/hooks/useLoginModal";
import { toast } from "react-hot-toast";

const AuthenticationModal = ({ currentUser }: any) => {
  const [opened, { open, close }] = useDisclosure(true);
  const openLoginMenu = () => {
    setOpenLogin(!openLogin);
  };
  const [openLogin, setOpenLogin] = useState(false); // Modals using Zustand
  const loginModal = useLoginModalStore();
  const registeredModal = useRegisteredModalStore();
  const userLogsOut = () => {
    toast.success("Logging you out... bye!");
    signOut();
  };
  return (
    <>
      <Modal onClose={close} opened={opened} centered>
        <div className="h-full">
          {!currentUser && (
            <img
              src={
                currentUser?.image ||
                "https://heritagehill.dental/wp-content/uploads/2018/01/person-placeholder-5.png"
              }
              height={140}
              width={140}
              className="rounded-full hidden sm:flex relative object-contain w-20 h-20 cursor-pointer mx-auto"
              alt="avatar"
              onClick={open}
            />
          )}

          <ul className="text-sm bg-white ">
            {!currentUser ? (
              <>
                <li
                  onClick={loginModal.onOpen}
                  className="w-full border py-4 border"
                >
                  <a
                    className="rounded-md active:bg-sky"
                    onClick={() => setOpenLogin(!openLogin)}
                  >
                    Sign-up
                  </a>
                </li>
                <li onClick={registeredModal.onOpen} className="w-full">
                  <a
                    onClick={() => setOpenLogin(!openLogin)}
                    className="rounded-md active:bg-sky"
                  >
                    Login
                  </a>
                </li>
              </>
            ) : (
              ""
            )}

            {currentUser ? (
              <li onClick={userLogsOut}>
                <a className="rounded-md active:bg-sky">Logout</a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default AuthenticationModal;
