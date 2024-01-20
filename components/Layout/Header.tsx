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
      if (window.scrollY > 120) {
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
        className={`shadow-sm sm:fixed  bg-white z-10   mx-auto  w-svw  sm:pb-0 `}
      >
        <div className="z-10 mx-auto navbar flex justify-evenly max-w-7xl px-0 w-11/12 ">
          {/* MOBILE */}

          <section
            className={`sm:hidden ${
              showMobileBurger &&
              "fixed left-4 top-4 bg-white rounded-md pl-1 text-black pb-1 transition-all ease-in delay-75 border z-50"
            }`}
          >
            <Sheet
              showMobileBurger={showMobileBurger}
              favourites={favourites}
              currentUser={currentUser}
            />
          </section>
          <div className="flex justify-between w-full items-center">
            <div className="flex mx-auto sm:mx-0 sm:w-ful">
              <Image
                className="pr-1 -ml-5 sm:ml-0 sm:block p-2 "
                src="/images/icon.png"
                alt="logo"
                width={40}
                height={30}
              />
              <span
                onClick={() => router.push("/")}
                className=" sm:text-base pt-1 sm:pt-0 text-left normal-case cursor-pointer font-semibold text-xl m-auto sm:my-auto sm:mx-0  flex items-center"
              >
                Algarve Wonders
              </span>
            </div>
            <section className="hidden sm:flex sm:space-x-4 md:space-x-8 lg:space-x-14 sm:pt-1 sm:text-sm md:text-base sm:items-center justify-start m-auto">
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
          </div>
          <div className="space-x-4 ">
            {" "}
            {/* Weather API */}
            <div
              onClick={showWeather}
              className="hidden sm:flex items-center pt-1 justify-end sm:mr-1 -mr-2 cursor-pointer hover:scale-105 transition ease-in"
            >
              <span className="-mr-[1px]">
                {weatherData.current.temp_c + "°"}
              </span>
              <img
                src={"https:" + weatherData.current.condition.icon}
                alt="weather"
                width={30}
                height={30}
              />{" "}
            </div>
            <section className="border sm:inline hidden rounded-full mt-1 sm:w-fit">
              <div className="flex items-center  pr-2  sm:pr-2 text-xl text-black bg-white/50">
                <img
                  src={
                    currentUser?.image ||
                    "https://heritagehill.dental/wp-content/uploads/2018/01/person-placeholder-5.png"
                  }
                  height={30}
                  width={30}
                  className="rounded-full hidden sm:inline"
                  alt="avatar"
                  onClick={openLoginMenu}
                />
                <NotificationsModal />
                <div className="relative flex">
                  <MobileDrawer currentUser={currentUser} />
                  <div
                    className="relative flex sm:inline hidden"
                    suppressHydrationWarning
                  >
                    <span className="absolute -top-1 -right-1 text-[8px] bg-sky text-white rounded-full w-3 h-3 flex justify-center items-center text-center">
                      {favouritesLength}
                    </span>
                    <MdCardTravel
                      onClick={showFavourites}
                      className="cursor-pointer active:scale-90"
                    />
                  </div>
                  {openLogin && (
                    <div className="overflow-hidden">
                      <ul className="absolute z-10 w-36 sm:w-36 overflow-hidden p-2 text-sm bg-white border text-right shadow-sm menu rounded-box  sm:right-10 sm:top-10 border-t-3 border-t-sky -left-24 top-10">
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
                            <li
                              onClick={registeredModal.onOpen}
                              className="w-full"
                            >
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
              </div>
            </section>
          </div>
        </div>
      </nav>
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
    </>
  );
};

export default Header;
