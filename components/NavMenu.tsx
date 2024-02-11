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

export function NavMenu({
  title,
  trigger,
  url,
  cities,
  mobile,
  search,
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

  if (search && !cities) {
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

        <Modal
          className={`${pathname === "/search" && "hidden"}`}
          size={"auto"}
          centered
          opened={opened}
          onClose={close}
        >
          <SearchDrawerContent close={close} />
        </Modal>

        <Menu.Dropdown className="border-t-key border-3">
          <Menu.Item
            onClick={open}
            className="text-black border-t-key border-3"
          >
            Search Places
          </Menu.Item>
          <Menu.Item
            onClick={() => router.push("/meals")}
            className="text-black"
          >
            Find Daily Meals
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
