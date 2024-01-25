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
import AuthenticationModal from "./AuthenticationModal";
import MobileSearchHeader from "./MobileSearchHeader";

const Header = ({ currentUser, weatherData }: any) => {
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const favourites = useAddToFavourites();
  const [favouritesLength, setFavouritesLength] = useState(0);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [nav, setNav] = useState(true);
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

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      // Scrolling down
      setNav(false);
    } else {
      // Scrolling up
      setNav(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
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

      <nav
        id="search"
        className={`border-b  border w-screen   fixed flex flex-wrap bg-white  shadow-sm z-10 transition-all ease-in delay-1000 opacity-100 ${!nav && "hidden transition-all ease-in"}`}
      >
        <header className="flex flex-wrap w-11/12 sm:w-full max-w-7xl sm:px-2 md:w-full lg:w-full  justify-between mx-auto py-2 transition-all ease-in delay-150">
          {/* END OF BURGER MENU */}
          <div className="flex sm:flex-wrap w-full break-keep sm:w-auto ">
            {/* HAMBURGER MENU */}
            <section className="sm:hidden flex flex-wrap  w-fit">
              <Sheet
                showMobileBurger={showMobileBurger}
                favourites={favourites}
                currentUser={currentUser}
              />
            </section>

            <Image
              src="/images/icon.png"
              alt="logo"
              width={50}
              height={20}
              className="h-6 w-6 sm:h-8 sm:w-8 flex-wrap m-auto sm:flex hidden "
            />
            <span
              onClick={() => router.push("/")}
              className={`pl-1 text-sm sm:text-base normal-case flex-1 text-right ${showMobileSearch && "hidden"}  cursor-pointer items-center flex-grow  m-auto sm:w-fit sm:flex font-semibold`}
            >
              Algarve Wonders
            </span>
            {/* {showMobileSearch && <MobileSearchHeader />} */}
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
            className="relative hidden sm:flex flex-wrap justify-around space-x-2 items-center 
                "
          >
            {/* <AuthenticationModal /> */}
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
              <ul className="z-10 absolute w-36 sm:w-36 p-2 text-sm bg-white border text-right shadow-sm menu  sm:right-10 sm:top-10 border-t-3 border-t-sky rounded-b-md -left-24 top-10">
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
            <div className="cursor-pointer" onClick={showFavourites}>
              <MdCardTravel className="cursor-pointer relative  sm:text-2xl" />
              <span className="h-3 w-3 text-[8px] bg-sky absolute right-0 top-1 text-white rounded-full flex flex-wrap justify-center items-center text-center">
                {favouritesLength}
              </span>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Header;
