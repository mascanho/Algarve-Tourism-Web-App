"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MdCardTravel } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";
import LoginModal from "../modals/Login";
import DrawerContent from "../modals/DrawerContent";
import { Modal } from "@mantine/core";
import {
  useLoginModalStore,
  useRegisteredModalStore,
} from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import RegisteredModal from "../modals/Registered";
import { toast } from "react-hot-toast";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { NavMenu } from "../NavMenu";
import Image from "next/image";
import WeatherModal from "../modals/WeatherModal";
import Sheet from "./Sheet";
import NotificationsModal from "./NotificationsModal";
import BottomDrawer from "./BottomDrawer";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Header = ({ currentUser, weatherData }: any) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const favourites = useAddToFavourites();
  const [favouritesLength, setFavouritesLength] = useState(0);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const openLoginMenu = () => {
    setOpenLogin(!openLogin);
  };
  const [showMobileBurger, setShowMobileBurger] = useState(false);

  // const [weatherModal, setWeatherModal] = useState(false);

  const userLogsOut = () => {
    toast.success("Logging you out... bye!");
    signOut();
  };

  // Modals using Zustand
  const loginModal = useLoginModalStore();
  const registeredModal = useRegisteredModalStore();

  useEffect(() => {
    setFavouritesLength(favourites.favourites.length);
  }, [favourites]);

  const showFavourites = () => {
    open();
  };

  return (
    <>
      <section>
        {loginModal.isOpen === true ? (
          <LoginModal currentUser={currentUser} />
        ) : (
          ""
        )}
        {registeredModal.isOpen === true ? (
          <RegisteredModal currentUser={currentUser} />
        ) : (
          ""
        )}{" "}
        <Modal opened={opened} onClose={close} title={"Favourites"} centered>
          {/* Modal content */}
          {null ? (
            {
              /* <WeatherModal weatherData={weatherData} /> */
            }
          ) : (
            <DrawerContent close={close} />
          )}
        </Modal>
      </section>

      <nav
        className={`border-b  border  w-full   fixed flex top-0 flex-wrap bg-white  shadow-sm z-20 transition-all ease-in delay-100 `}
      >
        <header
          className={`flex flex-wrap w-11/12 sm:w-full max-w-7xl sm:px-2 md:w-full lg:w-full  justify-between mx-auto py-2 transition-all ease-in delay-150 `}
        >
          <div className="flex sm:flex-wrap w-full break-keep sm:w-auto ">
            {/* HAMBURGER MENU */}
            <section className="sm:hidden flex flex-wrap  w-fit mr-2 ">
              <Sheet
                showMobileBurger={showMobileBurger}
                favourites={favourites}
                currentUser={currentUser}
              />
            </section>

            <Image
              src="/images/icon.png"
              alt="logo"
              width={60}
              height={20}
              className="sm:h-6 sm:w-6 mr-1 flex-wrap m-auto sm:flex hidden "
            />
            {favouritesLength > 0 && (
              <div
                className={`sm:hidden text-center transition-all ease-in-out delay-75 `}
              >
                {/* Your content goes here */}
                <BottomDrawer favouritesLength={favouritesLength} />
              </div>
            )}

            <div
              className={`pl-1 text-sm sm:text-base normal-case flex-1 text-right ${showMobileSearch && "hidden"}  cursor-pointer items-center flex-grow w-full  m-auto sm:w-fit sm:flex font-semibold`}
            >
              <Link href="/">
                <span className="w-fit text-key">Algarve Wonders</span>
              </Link>
            </div>
          </div>
          <section className="hidden sm:flex flex-wrap w-1/2 justify-around">
            <NavMenu
              trigger={"hover"}
              title={"Search"}
              url={"/search"}
              search={true}
            />
            <NavMenu
              expandedMenu={false}
              trigger={"hover"}
              title={"Algarve"}
              cities={true}
              url={"/algarve"}
            />
            <NavMenu
              expandedMenu={false}
              trigger={"hover"}
              title={"Categories"}
              cities={true}
              url={"/algarve"}
            />
            <NavMenu
              expandedMenu={false}
              trigger={"hover"}
              title={"Blog"}
              cities={true}
              url={"/blog"}
            />
          </section>
          <div
            className="relative hidden sm:flex flex-wrap justify-around space-x-2 items-center 
                "
          >
            {/* <AuthenticationModal /> */}
            <NotificationsModal />
            <div
              className="cursor-pointer text-black  relative"
              onClick={showFavourites}
            >
              <MdCardTravel className="cursor-pointer relative  sm:text-2xl" />
              <span
                className={`h-3 w-3 text-[8px] bg-key absolute -right-1 -top-1  text-white rounded-full flex flex-wrap justify-center ${favouritesLength > 0 && "animate-bounce animate-once"} items-center text-center ${favouritesLength === 0 ? "hidden" : "flex"} `}
              >
                {favouritesLength}
              </span>
            </div>
            <div
              onClick={openLoginMenu}
              className="border rounded-full cursor-pointer flex flex-wrap items-center py-1 px-1 border-gray-500"
            >
              <RxHamburgerMenu className="font-semibold my-1 mx-2" />
              {currentUser?.image === "" ? (
                <span className="rounded-full text-white bg-key h-6 text-sm w-6 ml-1 capitalize flex items-center justify-center">
                  {currentUser?.initials}
                </span>
              ) : (
                <img
                  src={currentUser?.image || "/images/person-placeholder.png"}
                  height={30}
                  width={30}
                  className="rounded-full hidden sm:flex relative object-contain w-6 h-6 cursor-pointer"
                  alt="avatar"
                  loading="lazy"
                />
              )}
            </div>
            {openLogin && (
              <ul className="z-10 absolute w-36 sm:w-36 p-2 text-sm bg-white border text-right shadow-sm menu  sm:-left-3 sm:top-11 border-t-3 border-t-key rounded-b-md -left-24 top-10">
                {!currentUser ? (
                  <>
                    <li onClick={loginModal.onOpen} className="w-full">
                      <a
                        className="rounded-md active:bg-key"
                        onClick={() => setOpenLogin(!openLogin)}
                      >
                        Sign-up
                      </a>
                    </li>
                    <li onClick={registeredModal.onOpen} className="w-full">
                      <a
                        onClick={() => setOpenLogin(!openLogin)}
                        className="rounded-md active:bg-key"
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
                    <a className="rounded-md active:bg-key">Logout</a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            )}
          </div>
        </header>
      </nav>
    </>
  );
};

export default Header;
