"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HiBars3 } from "react-icons/hi2";
import { MdCardTravel } from "react-icons/md";
import Image from "next/image";
import { usePathname } from "next/navigation";
import InstructionModal from "../modals/InstructionModal";
import { Drawer, Group, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import DrawerModal from "../modals/Drawer";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openLogin, setOpenLogin] = useState(false);
  const [openBag, setOpenBag] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const openLoginMenu = () => {
    setOpenLogin(!openLogin);
  };

  return (
    <>
      <nav className={`shadow-sm  w-full top-0  z-50  `}>
        <div className="navbar max-w-7xl mx-auto z-50 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-white z-10">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a
              onClick={() => router.push("/")}
              className="normal-case text-xl text-left cursor-pointer"
            >
              Algarve Travel
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a>
                  Parent
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
                <ul className="p-2 bg-white z-10">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <div className="border border-black/20 flex items-center text-xl space-x-2 pr-4 rounded-full  bg-white/50 text-black">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                height={30}
                width={30}
                className="rounded-full"
                alt="avatar"
              />
              <div className="relative">
                <HiBars3 className="cursor-pointer" onClick={openLoginMenu} />
                {openLogin && (
                  <div>
                    <ul className="menu bg-white shadow-sm border w-56 p-2 rounded-box absolute sm:-left-24 sm:top-8 -left-40 top-8 z-10 text-sm">
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                      <li>
                        <a>Item 3</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative">
                <span className="absolute -top-1 -right-1 text-[8px] bg-sky text-white rounded-full w-3 h-3 flex justify-center items-center text-center">
                  2
                </span>
                <div className="relative">
                  <MdCardTravel onClick={open} className="cursor-pointer" />
                  {openBag && (
                    <div>
                      <ul className="menu bg-white shadow-sm border w-56 p-2 rounded-box absolute sm:-left-28 sm:top-8 -left-48 top-8 z-10 text-sm">
                        <li>
                          <a>Item 1</a>
                        </li>
                        <li>
                          <a>Item 2</a>
                        </li>
                        <li>
                          <a>Item 3</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Modals */}
      {/* <InstructionModal /> */}

      {/* Drawer */}
      <Drawer
        size={"300px"}
        opened={opened}
        onClose={close}
        title="Authentication"
      >
        {/* Drawer content */}
      </Drawer>
    </>
  );
};

export default Header;
