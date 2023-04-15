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
import { catArr } from "@/Data/Categories";

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
        <div className="navbar max-w-7xl mx-auto z-50  ">
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
                <li className="active:bg-sky rounded-md">
                  <a className="active:bg-sky">Blog</a>
                </li>
                <li tabIndex={0} className="active:bg-sky rounded-md">
                  <a className="justify-between active:bg-sky rounded-md">
                    Catoegories
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
                    {catArr.map((cat) => (
                      <li className="px-1 py-2" onClick={() => {}} key={cat.id}>
                        {cat.name}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="active:bg-sky rounded-md">
                  <a className="active:bg-sky rounded-md">Contact</a>
                </li>
              </ul>
            </div>
            <a
              onClick={() => router.push("/")}
              className="normal-case text-xl text-left cursor-pointer w-full p-0"
            >
              AlgarveGems
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="active:bg-sky active:rounded-md">
                <a className="active:bg-sky active:rounded-md">Item 1</a>
              </li>
              <li className="active:bg-transparent rounded-md" tabIndex={0}>
                <a className="active:bg-sky">
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
                <ul className="p-2 bg-white z-10">
                  {catArr.map((item) => (
                    <li
                      key={item.id}
                      className="active:bg-sky rounded-md"
                      onClick={() => router.push(`${item.route}`)}
                    >
                      <span className="active:bg-sky rounded-md">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="active:bg-sky rounded-md">
                <a className="active:bg-sky rounded-md">Blog</a>
              </li>
              <li className="active:bg-sky rounded-md">
                <a className="active:bg-sky rounded-md">Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <div className="border border-black/20 flex items-center text-xl  pr-3 rounded-full  bg-white/50 text-black">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                height={30}
                width={30}
                className="rounded-full"
                alt="avatar"
              />
              <div className="relative">
                <HiBars3
                  className="cursor-pointer active:scale-90 ml-1 mr-2"
                  onClick={openLoginMenu}
                />
                {openLogin && (
                  <div>
                    <ul className="menu bg-white shadow-sm border  w-56 p-2 rounded-box absolute sm:-left-24 sm:top-8 -left-40 top-8 z-10 text-sm">
                      <li>
                        <a className="active:bg-sky rounded-md">Sign up</a>
                      </li>
                      <li>
                        <a className="active:bg-sky rounded-md">Login</a>
                      </li>
                      <li>
                        <a className="active:bg-sky rounded-md">Logout</a>
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
                  <MdCardTravel
                    onClick={open}
                    className="cursor-pointer active:scale-90"
                  />
                  {openBag && (
                    <div>
                      <ul className="menu bg-white shadow-sm border w-56 p-2 rounded-box absolute sm:-left-28 sm:top-8 -left-48 top-8 z-10 text-sm">
                        <li>
                          <a>Sign up</a>
                        </li>
                        <li>
                          <a>Login</a>
                        </li>
                        <li>
                          <a>Logout</a>
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
