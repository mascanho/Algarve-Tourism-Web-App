"use client";
import { Menu } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { IoChevronDownSharp } from "react-icons/io5";
import { cityArr } from "@/Data/Cities";
import { catArr } from "@/Data/Categories";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import SearchDrawerContent from "@/app/search/_components/SearchDrawerContent";
import { FaSearch } from "react-icons/fa";
import { GiHotMeal, GiMeal } from "react-icons/gi";
import { MenuDropdown } from "@mantine/core/lib/Menu/MenuDropdown/MenuDropdown";

export function NavMenu({
  title,
  trigger,
  url,
  cities,
  mobile,
  search,
  fixed,
}: any | null) {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  const handleClick = (url: any) => {
    if (mobile) {
      return;
    }
    router.push(url);
  };

  if (fixed) {
    return (
      <Menu trigger={trigger} shadow="md" width={"fit"}>
        <Menu.Target>
          <button
            className={`text-black flex items-center mr-1 rounded-md transition duration-300 ease-in-out`}
          >
            Toggle menu
          </button>
        </Menu.Target>
        <Menu.Dropdown className="flex w-fit">
          <div className="grid grid-cols-3 ">
            <div className="">
              {cityArr.slice(0, 5).map((item) => (
                <Menu.Item>{item.name}</Menu.Item>
              ))}
            </div>
            <div className="flex flex-col ">
              {cityArr.slice(6, cityArr.length - 1).map((item) => (
                <Menu.Item
                  key={item.id}
                  className="flex justify-center items-center text-black "
                >
                  {item.name}
                </Menu.Item>
              ))}
            </div>
            <div className="flex flex-col border-l border-l-key  ">
              {cityArr.slice(6, cityArr.length - 1).map((item) => (
                <Menu.Item
                  key={item.id}
                  className="flex justify-center items-center text-black "
                >
                  {item.name}
                </Menu.Item>
              ))}
            </div>
          </div>
        </Menu.Dropdown>
      </Menu>
    );
  }

  if (search && !cities) {
    return (
      <Menu trigger={trigger} shadow="md" width={"fit"}>
        <Menu.Target>
          <button
            onClick={() => handleClick(url)}
            className={`text-black flex items-center mr-1 rounded-md transition duration-300 ease-in-out`}
          >
            {trigger ? (
              <>
                {mobile && (
                  <RxHamburgerMenu className="ml-1 mt-1 w-8 active:bg-gray-400 active:text-white  text-4xl p-1 rounded-md hover:bg-gray-400 hover:text-white" />
                )}
                {!mobile && title}{" "}
                {!mobile && trigger ? (
                  <IoChevronDownSharp className="md:pl-1" />
                ) : (
                  ""
                )}
              </>
            ) : (
              title
            )}
          </button>
        </Menu.Target>

        <Modal
          className={`${pathname === "/search" && "hidden"}`}
          size={"auto"}
          centered
          opened={opened}
          onClose={close}
        >
          <SearchDrawerContent close={close} />
        </Modal>

        <Menu.Dropdown className="border-key border-3 w-96 mx-auto">
          <Menu.Item
            onClick={open}
            className="text-black border-t-key border-3 w-full mx-auto"
          >
            <div className="flex flex-col justify-center">
              <div className="flex items-center">
                <div className="rounded-md w-8 h-8 bg-key flex items-center mr-2">
                  <FaSearch className="w-6 m-auto text-lg  h-6 p-1 rounded-full text-white" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-semibold">Search Places</span>
                  <span className="text-xs text-gray-500">
                    Discover the most unique places near you
                  </span>
                </div>
              </div>
            </div>
          </Menu.Item>
          <Menu.Item className="text-black border-t-key border-3 w-full mx-auto">
            <div
              className="flex flex-col justify-center"
              onClick={() => router.push("/meals")}
            >
              <div className="flex items-center">
                <div className="rounded-md w-8 h-8 bg-key flex items-center mr-2">
                  <GiHotMeal className="w-5 m-auto text-lg  h-5  rounded-full text-white" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-semibold">
                    Search Daily Meals
                  </span>
                  <span className="text-xs text-gray-500">
                    Find the best daily dishes around your city
                  </span>
                </div>
              </div>
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  }

  return (
    <Menu trigger={trigger} shadow="md" width={200}>
      <Menu.Target>
        <button
          onClick={() => handleClick(url)}
          className={`text-black flex items-center mr-1 rounded-md transition duration-300 ease-in-out`}
        >
          {trigger ? (
            <>
              {mobile && (
                <RxHamburgerMenu className="ml-1 mt-1 w-8 active:bg-gray-400 active:text-white  text-4xl p-1 rounded-md hover:bg-gray-400 hover:text-white" />
              )}
              {!mobile && title}{" "}
              {!mobile && trigger ? (
                <IoChevronDownSharp className="md:pl-1" />
              ) : (
                ""
              )}
            </>
          ) : (
            title
          )}
        </button>
      </Menu.Target>

      <Menu.Dropdown
        className={`ml-1  border-t-key border-3 ${search ? "hidden" : ""} `}
      >
        {cities && trigger && !search
          ? cityArr.map((city: any) => (
              <Menu.Item
                key={city.name}
                onClick={() =>
                  router.push(`/algarve/${city?.route?.toLowerCase()}`)
                }
              >
                {city.name}
              </Menu.Item>
            ))
          : catArr.map((cat: any) => (
              <div className="hidden sm:flex" key={cat.name}>
                <Menu.Item
                  key={cat.name}
                  className="hidden sm:flex"
                  onClick={() => router.push(`${cat?.route?.toLowerCase()}`)}
                >
                  {cat.name}
                </Menu.Item>
              </div>
            ))}

        {/* Always render the links for small screens */}
        <section className="text-gray-700 block sm:hidden ">
          <Link href="/">
            <Menu.Item className="sm:hidden text-gray-400">Home</Menu.Item>
          </Link>
          <Link href="/">
            <Menu.Item className="sm:hidden text-gray-400">Search</Menu.Item>
          </Link>
          <Link href="/algarve">
            <Menu.Item className="sm:hidden text-gray-400">Algarve</Menu.Item>
          </Link>
          <Link
            aria-label="Category Beaches with all the beaches in the Algarve"
            href="/beaches"
          >
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
