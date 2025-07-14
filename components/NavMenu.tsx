"use client";
import { Menu } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { IoChevronDownSharp } from "react-icons/io5";
import { cityArr } from "@/Data/Cities";
import { catArr } from "@/Data/Categories";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import SearchDrawerContent from "@/app/search/_components/SearchDrawerContent";
import { FaEye, FaHiking, FaSearch, FaUtensils } from "react-icons/fa";
import { GiBeachBucket, GiHotMeal, GiMeal, GiWoodCabin } from "react-icons/gi";
import {
  MdBusinessCenter,
  MdEvent,
  MdGroup,
  MdOutlineMuseum,
  MdSportsHandball,
} from "react-icons/md";
import { PiMountainsFill } from "react-icons/pi";
import { More } from "@/Data/More";
import { FaLandmark, FaIndustry, FaSkull } from "react-icons/fa6";

export function NavMenu({ title, trigger, url, search }: any | null) {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  const categoryIcons: any = {
    Beaches: <GiBeachBucket />,
    Restaurants: <FaUtensils />,
    Culture: <MdOutlineMuseum />,
    Live: <FaEye />,
    Events: <MdEvent />,
    Adventure: <PiMountainsFill />,
    Business: <MdBusinessCenter />,
    Hiking: <FaHiking />,
    Sports: <MdSportsHandball />,
    Stays: <GiWoodCabin />,
    "City councils": <FaLandmark />,
    Industrial: <FaIndustry />,
    "The Dark Side": <FaSkull />,
  };

  if (search) {
    return (
      <Menu trigger={trigger} shadow="md" width={"fit"}>
        <Menu.Target>
          <Link href={url} className="flex items-center">
            <button
              className={`text-black text-sm${
                pathname?.includes("/search")
                  ? "font-semibold underline underline-offset-[16px] decoration-4"
                  : ""
              } flex items-center mr-1 rounded-md transition duration-300 ease-in-out`}
            >
              {trigger ? (
                <>
                  {title}{" "}
                  {trigger ? <IoChevronDownSharp className="pl-1" /> : ""}
                </>
              ) : (
                title
              )}
            </button>
          </Link>
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

        <Menu.Dropdown className="border-key/50 border-1 w-72 mx-auto">
          <Menu.Item
            onClick={open}
            className="text-black border-t-key border-3 mx-auto w-full"
          >
            <div className="flex flex-col justify-center items-start">
              <div className="flex items-center">
                <FaSearch className="w-5 m-auto text-base  h-5 mr-3  rounded-full text-key" />
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-semibold">Search Places</span>
                  <span className="text-xs text-gray-500">
                    Discover the most unique places
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
                <GiHotMeal className="w-5 text-lg mr-3  h-5  rounded-full text-key" />
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-semibold">
                    Search Daily Meals
                  </span>
                  <span className="text-xs text-gray-500">
                    Find the best daily dishes
                  </span>
                </div>
              </div>
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  }
  if (title === "Algarve") {
    return (
      <Link href="/algarve" className="flex items-center text-sm">
        <Menu trigger={trigger} shadow="md" width={"fit"}>
          <Menu.Target>
            <button
              className={`text-black ${
                cityArr.some(
                  (city: any) =>
                    pathname?.includes(city.route) &&
                    !pathname?.includes("/blog"),
                )
                  ? "underline underline-offset-[16px] decoration-4"
                  : ""
              } flex items-center mr-1 rounded-md transition duration-300 ease-in-out`}
            >
              {title && trigger ? title : null}{" "}
              {trigger ? <IoChevronDownSharp className="pl-1" /> : null}
            </button>
          </Menu.Target>
          <Menu.Dropdown className="flex w-fit border-key/50 border-3 mt-1">
            <div className="grid grid-cols-3 ">
              <div className="">
                {cityArr.slice(0, 6).map((item) => (
                  <Link href={`/algarve/${item.route}`} key={item.id}>
                    <Menu.Item>{item.name}</Menu.Item>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col ">
                {cityArr.slice(6, 11).map((item) => (
                  <Link href={`/algarve/${item.route}`} key={item.id}>
                    <Menu.Item
                      key={item.id}
                      className="flex justify-center items-center text-black "
                    >
                      {item.name}
                    </Menu.Item>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col ">
                {cityArr.slice(11, cityArr.length).map((item) => (
                  <Link href={`/algarve/${item.route}`} key={item.id}>
                    <Menu.Item
                      key={item.id}
                      className="flex justify-center items-center text-black "
                    >
                      {item.name}
                    </Menu.Item>
                  </Link>
                ))}
              </div>

              {/* <div className="flex flex-col border-l border-l-key  "> */}
              {/*   {cityArr.slice(6, cityArr.length - 1).map((item) => ( */}
              {/*     <Menu.Item */}
              {/*       key={item.id} */}
              {/*       className="flex justify-center items-center text-black " */}
              {/*     > */}
              {/*       {item.name} */}
              {/*     </Menu.Item> */}
              {/*   ))} */}
              {/* </div> */}
            </div>
          </Menu.Dropdown>
        </Menu>
      </Link>
    );
  }

  if (title === "Categories") {
    return (
      <Menu trigger={trigger} shadow="md" width={"fit"}>
        <Menu.Target>
          <button
            className={`text-black text-sm ${
              catArr.some((cat: any) => pathname?.includes(cat.route))
                ? "font-semibold underline underline-offset-[16px] decoration-4"
                : ""
            } flex items-center mr-1 rounded-md transition duration-300 ease-in-out`}
          >
            {title && trigger ? title : null}{" "}
            {trigger ? <IoChevronDownSharp className="pl-1" /> : null}
          </button>
        </Menu.Target>

        <Menu.Dropdown className="flex w-fit border-key/50 border-3">
          <div className="grid grid-cols-2 w-full gap-x-2 ">
            <div className="w-full">
              {catArr.slice(0, 5).map((item) => (
                <Link key={item.id} href={`${item?.route}`}>
                  <Menu.Item className="w-full flex items-center">
                    {/* Icon and text container */}
                    <div className="flex items-center">
                      {/* Render the icon component for each category */}
                      {categoryIcons[item.name]}{" "}
                      {/* Access icon based on category name */}
                      <span className="ml-2">{item.name}</span>
                    </div>
                  </Menu.Item>
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-full ">
              {catArr.slice(5, catArr.length).map((item) => (
                <Link key={item.id} href={`${item?.route}`}>
                  <Menu.Item
                    key={item.id}
                    className="flex justify-center w-full items-center text-black "
                  >
                    {/* Icon and text container */}
                    <div className="flex items-center">
                      {/* Render the icon component for each category */}
                      {categoryIcons[item.name]}{" "}
                      {/* Access icon based on category name */}
                      <span className="ml-2">{item.name}</span>
                    </div>
                  </Menu.Item>
                </Link>
              ))}
            </div>
          </div>
        </Menu.Dropdown>
      </Menu>
    );
  }

  if (title === "More") {
    return (
      <Link href="/more" className="flex items-center text-sm cursor-pointer">
        <Menu trigger={trigger} shadow="md" width={"fit"}>
          <Menu.Target>
            <button
              className={`text-black flex items-center mr-1 rounded-md transition duration-300 ease-in-out text-sm`}
            >
              {title && trigger ? title : null}{" "}
              {trigger ? <IoChevronDownSharp className="pl-1" /> : null}
            </button>
          </Menu.Target>
          <Menu.Dropdown className="flex w-fit border-key/50 border-3 mt-2">
            <div className="grid grid-cols-1 w-full ">
              <div className="w-full">
                {More.slice(0, 5).map((item) => (
                  <Link key={item.id} href={`${item?.route}`}>
                    <Menu.Item className="w-full flex items-center cursor-pointer">
                      {/* Icon and text container */}
                      <div className="flex items-center cursor-pointer">
                        {/* Render the icon component for each category */}
                        {categoryIcons[item.name]}{" "}
                        {/* Access icon based on category name */}
                        <span className="ml-2 cursor-pointer">{item.name}</span>
                      </div>
                    </Menu.Item>
                  </Link>
                ))}
              </div>
            </div>
          </Menu.Dropdown>
        </Menu>
      </Link>
    );
  }

  if (title === "Blog") {
    return (
      <Link href="/blog" className="flex items-center">
        <button
          className={`text-black flex text-sm ${pathname.includes("/blog") && "font-semibold underline underline-offset-[16px] decoration-4"} items-center mr-1 rounded-md transition duration-300 ease-in-out`}
        >
          {title}
        </button>
      </Link>
    );
  }
  if (title === "Awards") {
    return (
      <Link href="/awards" className="flex items-center text-sm">
        <button
          className={`text-black flex ${pathname.includes("/awards") && "font-semibold underline underline-offset-[16px] decoration-4"} items-center mr-1 rounded-md transition duration-300 ease-in-out`}
        >
          {title}
        </button>
      </Link>
    );
  }
}
