"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HiBars3 } from "react-icons/hi2";
import { MdCardTravel } from "react-icons/md";
import { usePathname } from "next/navigation";
import { Drawer, Group, Button } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { catArr } from "@/Data/Categories";
import LoginModal from "../modals/Login";
import DrawerContent from "../modals/DrawerContent";
import {
  useLoginModalStore,
  useRegisteredModalStore,
} from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import RegisteredModal from "../modals/Registered";
import { toast } from "react-hot-toast";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import Link from "next/link";
import { cityArr } from "@/Data/Cities";

interface UserProps {
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

const Header = ({ currentUser }: UserProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [openLogin, setOpenLogin] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const favourites = useAddToFavourites();
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

  return (
    <>
      <nav className={`shadow-sm  w-full top-0  z-50   `}>
        <div className="z-50 mx-auto navbar max-w-7xl  ">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="p-2 mt-3 bg-white shadow menu menu-compact dropdown-content rounded-box w-52"
              >
                <li className="rounded-md active:bg-sky">
                  <a className="active:bg-sky">Blog</a>
                </li>
                <li tabIndex={0} className="">
                  <ul className="z-10 p-2 bg-white">
                    {catArr.map((cat) => (
                      <li
                        className="px-1 py-2 rounded-md active:bg-sky active:text-white"
                        onClick={() => router.push(cat.route)}
                        key={cat.id}
                      >
                        {cat.name}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="rounded-md active:bg-sky">
                  <a className="rounded-md active:bg-sky">Contact</a>
                </li>
              </ul>
            </div>
            <a
              onClick={() => router.push("/")}
              className="w-full p-0 text-xl text-left normal-case cursor-pointer"
            >
              AlgarveGems
            </a>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
              <Link href="/#search">
                <li className="active:bg-sky active:rounded-md">
                  <span className="active:bg-sky active:rounded-md font-bold">
                    Search
                  </span>
                </li>
              </Link>
              <li className="rounded-md active:bg-transparent" tabIndex={0}>
                <span
                  onClick={() => router.push("/algarve")}
                  className="active:bg-sky font-bold"
                >
                  Algarve
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </span>
                <ul className="z-10 p-2 bg-white">
                  {cityArr.map((item) => (
                    <li
                      key={item.id}
                      className="rounded-md active:bg-sky"
                      onClick={() => router.push(`${item.route}`)}
                    >
                      <span className="rounded-md active:bg-sky">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="rounded-md active:bg-transparent" tabIndex={0}>
                <a className="active:bg-sky font-bold">
                  Categories
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="z-10 p-2 bg-white">
                  {catArr.map((item) => (
                    <li
                      key={item.id}
                      className="rounded-md active:bg-sky"
                      onClick={() => router.push(`${item.route}`)}
                    >
                      <span className="rounded-md active:bg-sky">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="rounded-md active:bg-sky">
                <a className="rounded-md active:bg-sky font-bold">Blog</a>
              </li>
              <li className="rounded-md active:bg-sky">
                <a className="rounded-md active:bg-sky font-bold">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-x-4 navbar-end">
            <div className="flex items-center pr-3 text-xl text-black border rounded-full border-black/20 bg-white/50">
              <img
                src={
                  currentUser?.image ||
                  "https://backalleycrossfit.com/wp-content/uploads/2016/09/profile-placeholder-300x300.png"
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
      {/* Modals */}
      {/* <InstructionModal /> */}

      {/* Drawer */}
      <Drawer size={"300px"} opened={opened} onClose={close} title="Favourites">
        {/* Drawer Content */}
        <DrawerContent close={close} />
      </Drawer>

      {/* Modals Section */}

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
    </>
  );
};

export default Header;
