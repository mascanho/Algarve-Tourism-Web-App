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
import { BsSearch } from "react-icons/bs";

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
        {/* Modals */}
        {/* <InstructionModal /> */}

        {/* Drawer */}
        <Drawer
          size={"300px"}
          opened={opened}
          onClose={close}
          title="Favourites"
        >
          {/* Drawer Content */}
          <DrawerContent />
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
      </section>

      <nav id="search" className={`shadow-sm  w-full sticky  bg-white z-10 `}>
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

                {/* Mobile Menu */}

                <Link href="/">
                  <li className="rounded-md active:bg-sky">
                    <span className="rounded-md active:bg-sky">Search</span>
                  </li>
                </Link>
                <Link href="/beaches">
                  <li className="rounded-md active:bg-sky">
                    <span className="rounded-md active:bg-sky">Categories</span>
                  </li>
                </Link>

                <Link href="/algarve">
                  <li className="rounded-md active:bg-sky">
                    <span className="rounded-md active:bg-sky">Algarve</span>
                  </li>
                </Link>
                <Link href="/blog">
                  <li className="rounded-md active:bg-sky">
                    <span className="rounded-md active:bg-sky">Blog</span>
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="rounded-md active:bg-sky">
                    <span className="rounded-md active:bg-sky">Contact</span>
                  </li>
                </Link>
              </ul>
            </div>
            <a
              onClick={() => router.push("/")}
              className="w-full p-0 sm:text-xl text-left normal-case cursor-pointer"
            >
              Algarve Wonders
            </a>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
              <Link href="/#search">
                <li className="active:bg-sky active:rounded-md">
                  <span className="active:bg-sky active:rounded-md">
                    Search
                  </span>
                </li>
              </Link>
              <li className="rounded-md active:bg-transparent" tabIndex={0}>
                <span
                  onClick={() => router.push("/algarve")}
                  className="active:bg-sky "
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
                      onClick={() => router.push(`/algarve/${item.route}`)}
                    >
                      <span className="rounded-md active:bg-sky">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="rounded-md active:bg-transparent" tabIndex={0}>
                <a className="active:bg-sky ">
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
                <Link href="/blog" className="active:bg-sky">
                  <span className="rounded-md active:bg-sky">Blog</span>
                </Link>
              </li>
              <Link href="/contact">
                <li className="rounded-md active:bg-sky">
                  <span className="rounded-md active:bg-sky ">Contact</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="space-x-4 navbar-end">
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

        {/* Bottom Navigation */}

        {bottomNav ? (
          <div className="btm-nav sm:hidden">
            <button className="active border-teal-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </button>
            <button className="active:border-gray-700">
              <BsSearch />
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </button>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Header;
