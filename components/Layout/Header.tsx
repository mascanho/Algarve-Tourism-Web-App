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
      if (window.scrollY > 150) {
        setShowMobileBurger(true);
      } else {
        setShowMobileBurger(false);
      }
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
        <Modal
          opened={opened}
          onClose={close}
          title={weatherModal ? "Weather" : "Favourites"}
          centered
        >
          {/* Modal content */}
          {weatherModal ? (
            <WeatherModal weatherData={weatherData} />
          ) : (
            <DrawerContent close={close} />
          )}
        </Modal>
      </section>

      <nav className="mx-auto border-b w-screen  border fixed flex flex-wrap bg-white  shadow-sm">
        <section
          className={`sm:hidden flex flex-wrap justify-between ${
            showMobileBurger &&
            "fixed left-6 top-4 bg-white rounded-md text-black transition-all ease-in delay-75 border z-50"
          }`}
        >
          <Sheet
            showMobileBurger={showMobileBurger}
            favourites={favourites}
            currentUser={currentUser}
          />
        </section>
        <header className="flex flex-wrap  max-w-7xl w-full justify-between mx-auto py-2">
          <div className="flex flex-wrap">
            <Image
              src="/images/icon.png"
              alt="logo"
              width={50}
              height={20}
              className="h-8 w-8"
            />
            <span
              onClick={() => router.push("/")}
              className="pl-2 sm:text-base text-center normal-case cursor-pointer font-semibold text-xl flex items-center"
            >
              Algarve Wonders
            </span>
          </div>
          <section className="hidden sm:flex flex-wrap w-1/2 justify-around">
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
          </section>
          <div
            className="relative flex flex-wrap justify-around space-x-2 items-center 
                "
          >
            <img
              src={
                currentUser?.image ||
                "https://heritagehill.dental/wp-content/uploads/2018/01/person-placeholder-5.png"
              }
              height={30}
              width={30}
              className="rounded-full hidden sm:flex relative object-contain w-8 h-8 cursor-pointer"
              alt="avatar"
              onClick={openLoginMenu}
            />
            {openLogin && (
              <ul className="z-10 absolute w-36 sm:w-36 p-2 text-sm bg-white border text-right shadow-sm menu rounded-box  sm:right-10 sm:top-10 border-t-3 border-t-sky -left-24 top-10">
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
            )}
            <NotificationsModal />
            <MdCardTravel
              onClick={showFavourites}
              className="cursor-pointer relative  sm:text-2xl"
            />
            <span className="h-3 w-3 text-[8px] bg-sky absolute right-0 top-1 text-white rounded-full flex flex-wrap justify-center items-center text-center">
              {favouritesLength}
            </span>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Header;
