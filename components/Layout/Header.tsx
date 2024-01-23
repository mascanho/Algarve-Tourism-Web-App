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
import Image from "next/image";
import WeatherModal from "../modals/WeatherModal";
import Sheet from "./Sheet";
import NotificationsModal from "./NotificationsModal";
import MobileDrawer from "./MobileDrawer";

const Header = ({ currentUser, weatherData }: any) => {
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const favourites = useAddToFavourites();
  const [favouritesLength, setFavouritesLength] = useState(0);

  const openLoginMenu = () => {
    setOpenLogin(!openLogin);
  };

  const [showMobileBurger, setShowMobileBurger] = useState(false);
  const [weatherModal, setWeatherModal] = useState(false);

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

  const showWeather = () => {
    setWeatherModal(true);
    open();
  };

  const showFavourites = () => {
    if (weatherModal) {
      setWeatherModal(false);
    }
    open();
  };

  useEffect(() => {
    // check the scroll height
    const handleScroll = () => {
      setShowMobileBurger(window.scrollY > 150);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`shadow-sm bg-white z-10 mx-auto flex flex-wrap justify-between w-dvw fixed`}
      >
        {/* <section */}
        {/*   className={`sm:hidden flex justify-between ${showMobileBurger && "fixed left-6 top-4 bg-white rounded-md text-black transition-all ease-in delay-75 border z-50"}`} */}
        {/* > */}
        {/*   <Sheet */}
        {/*     showMobileBurger={showMobileBurger} */}
        {/*     favourites={favourites} */}
        {/*     currentUser={currentUser} */}
        {/*   /> */}
        {/* </section> */}
        <header className="flex flex-wrap w-full max-w-7xl justify-between mx-auto">
          <div className="flex flex-wrap items-center">
            <Image src="/images/icon.png" alt="logo" width={40} height={30} />
            <span
              onClick={() => router.push("/")}
              className="sm:text-base pt-1 text-center sm:pt-0 normal-case cursor-pointer font-semibold text-xl sm:my-auto sm:mx-0 flex items-center"
            >
              Algarve Wonders
            </span>
          </div>
          <section className="hidden sm:flex flex-wrap">
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
              url={"/beaches"}
              categories={true}
            />
            <NavMenu
              trigger={false}
              title={"Blog"}
              url={"/blog"}
              categories={true}
            />
            {/* <NavMenu trigger={false} title={"News"} url={"/news"} /> */}
            {/* <NavMenu trigger={false} title={"Contact"} url={"/contact"} /> */}
          </section>
          <div className="flex items-center space-x-2 relative">
            <img
              src={
                currentUser?.image ||
                "https://heritagehill.dental/wp-content/uploads/2018/01/person-placeholder-5.png"
              }
              height={30}
              width={30}
              className="rounded-full hidden sm:flex relative"
              alt="avatar"
              onClick={openLoginMenu}
            />
            {openLogin && (
              <ul className="z-10 absolute w-36 sm:w-36 p-2 text-sm bg-white border text-right shadow-sm menu rounded-box sm:right-10 sm:top-10 border-t-3 border-t-sky -left-24 top-10">
                {!currentUser ? (
                  <>
                    <li onClick={loginModal.onOpen} className="w-full">
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
                  <li onClick={userLogsOut}>
                    <a className="rounded-md active:bg-sky">Logout</a>
                  </li>
                )}
              </ul>
            )}
            <div className="flex items-center">
              <MdCardTravel
                onClick={showFavourites}
                className="cursor-pointer sm:text-xl"
              />
              <span className="text-[8px] bg-sky text-black rounded-full top-0 w-2 h-2 flex items-center justify-center text-center">
                {favouritesLength}
              </span>
            </div>
          </div>
        </header>
      </nav>
      <Modal
        opened={opened}
        onClose={close}
        title={weatherModal ? "Weather" : "Favourites"}
        centered
      >
        {weatherModal ? (
          <WeatherModal weatherData={weatherData} />
        ) : (
          <DrawerContent close={close} />
        )}
      </Modal>
    </>
  );
};

export default Header;
