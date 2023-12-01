"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HiBars3 } from "react-icons/hi2";
import { MdCardTravel } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";
import LoginModal from "../modals/Login";
import DrawerContent from "../modals/DrawerContent";
import { Modal, Group, Button, Drawer } from "@mantine/core";
import {
  useLoginModalStore,
  useRegisteredModalStore,
} from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import RegisteredModal from "../modals/Registered";
import { toast } from "react-hot-toast";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { NavMenu } from "../NavMenu";

import { RxHamburgerMenu } from "react-icons/rx";

interface UserProps {
  close: () => void;
  currentUser: {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    hashedPassword: string | null;
    favoriteIds: string[];
  } | null;
}

const Header = ({ currentUser }: any) => {
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const favourites = useAddToFavourites();
  const [bottomNav, setBottomNav] = useState(false);
  const openLoginMenu = () => {
    setOpenLogin(!openLogin);
  };

  const userLogsOut = () => {
    toast.success("Logging you out... bye!");
    signOut();
  };

  // Modals using Zustand
  const loginModal = useLoginModalStore();
  const registeredModal = useRegisteredModalStore();

  // Dynamically render the bottom Nav
  const showBottomNav = () => {
    if (window.scrollY > 70) {
      console.log("bigger than 10");
      setBottomNav(true);
    } else {
      console.log("smaller than 10");
      setBottomNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showBottomNav, { passive: true });
    return () => {
      window.removeEventListener("scroll", showBottomNav);
    };
  }, []);

  return (
    <>
      <section className="overflow-hidden">
        {loginModal.isOpen === true ? (
          <LoginModal currentUser={currentUser} />
        ) : (
          ""
        )}
        {registeredModal.isOpen === true ? (
          <RegisteredModal currentUser={currentUser} />
        ) : (
          ""
        )}
      </section>

      <nav
        id="search"
        className={`shadow-sm  w-full sticky  bg-white z-10 h-fit w-full mx-auto `}
      >
        <div className="z-50 mx-auto navbar sm:max-w-4xl flex justify-evenly  lg:max-w-5xl xl:max-w-7xl">
          {/* MOBILE */}
          <section className="sm:hidden">
            <NavMenu
              mobile={true}
              trigger={"hover"}
              title={"Search"}
              url={"/"}
            />
          </section>
          <div className="navbar-start flex justify-between w-full">
            <a
              onClick={() => router.push("/")}
              className="p-0 sm:text-xl text-left normal-case cursor-pointer"
            >
              Algarve Wonders
            </a>
            <section className="hidden sm:flex space-x-4 justify-start m-auto">
              <NavMenu trigger={false} title={"Search"} url={"/"} />
              <NavMenu
                expandedMenu={false}
                trigger={"hover"}
                title={"Algarve"}
                cities={true}
                url={"/algarve"}
              />
              <NavMenu
                trigger={"hover"}
                title={"Categories"}
                url={"/"}
                categories={true}
              />
              <NavMenu trigger={false} title={"Blog"} url={"/blog"} />
              <NavMenu trigger={false} title={"Contact"} url={"/contact"} />
            </section>
          </div>
          <div className="space-x-4 sm:w-fit navbar-end">
            <div className="flex items-center pr-3 text-xl text-black border rounded-full border-black/20 bg-white/50">
              <img
                src={
                  currentUser?.image ||
                  "https://heritagehill.dental/wp-content/uploads/2018/01/person-placeholder-5.png"
                }
                height={30}
                width={30}
                className="rounded-full"
                alt="avatar"
              />
              <div className="relative">
                <HiBars3
                  className="ml-1 mr-2 cursor-pointer active:scale-90"
                  onClick={openLoginMenu}
                />
                {openLogin && (
                  <div>
                    <ul className="absolute z-10 w-56 p-2 text-sm bg-white border shadow-sm menu rounded-box sm:-left-24 sm:top-8 -left-40 top-8">
                      {!currentUser ? (
                        <>
                          <li onClick={loginModal.onOpen}>
                            <a
                              className="rounded-md active:bg-sky"
                              onClick={() => setOpenLogin(!openLogin)}
                            >
                              Sign up
                            </a>
                          </li>
                          <li onClick={registeredModal.onOpen}>
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
                )}
              </div>

              <div className="relative">
                <span className="absolute -top-1 -right-1 text-[8px] bg-sky text-white rounded-full w-3 h-3 flex justify-center items-center text-center">
                  {favourites.favourites.length}
                </span>
                <div className="relative">
                  <MdCardTravel
                    onClick={open}
                    className="cursor-pointer active:scale-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Modal opened={opened} onClose={close} title="Favourite Places" centered>
        {/* Modal content */}
        <DrawerContent close={close} />
      </Modal>
    </>
  );
};

export default Header;
