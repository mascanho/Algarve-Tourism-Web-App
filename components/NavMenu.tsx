"use client";
import { Menu, Button, Text, rem } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

import { IoChevronDownSharp } from "react-icons/io5";
import { cityArr } from "@/Data/Cities";
import { catArr } from "@/Data/Categories";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export function NavMenu({ title, trigger, url, cities, mobile }: any) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Menu trigger={trigger} shadow="md" width={200}>
      <Menu.Target>
        <button
          onClick={mobile ? null : () => router.push(url)}
          className={`text-gray-400 flex items-center  p-2 rounded-md transition duration-300 ease-in-out`}
        >
          {trigger ? (
            <>
              {mobile && (
                <RxHamburgerMenu className="ml-1 mt-1 w-8 active:bg-gray-400 active:text-white  text-4xl p-1 rounded-md hover:bg-gray-400 hover:text-white" />
              )}
              {!mobile && title}{" "}
              {!mobile && trigger ? (
                <IoChevronDownSharp className="ml-1 mt-1" />
              ) : (
                ""
              )}
            </>
          ) : (
            title
          )}
        </button>
      </Menu.Target>

      <Menu.Dropdown className="sm:mt-1 mt-[6px] ml-1 sm:ml-0">
        {cities && trigger
          ? cityArr.map((city: any) => (
              <Menu.Item
                key={city.name}
                onClick={() =>
                  router.push(`/algarve/${city?.name?.toLowerCase()}`)
                }
              >
                {city.name}
              </Menu.Item>
            ))
          : catArr.map((cat: any) => (
              <Menu.Item
                key={cat.name}
                className="hidden sm:flex"
                onClick={() => router.push(`${cat?.route?.toLowerCase()}`)}
              >
                {cat.name}
              </Menu.Item>
            ))}
        <section className="text-gray-700">
          <Link href="/">
            <Menu.Item className="sm:hidden text-gray-400">Search</Menu.Item>
          </Link>
          <Link href="/algarve">
            <Menu.Item className="sm:hidden text-gray-400">Algarve</Menu.Item>
          </Link>
          <Link href="/beaches">
            <Menu.Item className="sm:hidden text-gray-400">
              Categories
            </Menu.Item>
          </Link>
          <Link href="/blog">
            <Menu.Item className="sm:hidden text-gray-400">Blog</Menu.Item>
          </Link>
          <Link href="/contact">
            <Menu.Item className="sm:hidden text-gray-400">Contact</Menu.Item>
          </Link>
        </section>
      </Menu.Dropdown>
    </Menu>
  );
}
