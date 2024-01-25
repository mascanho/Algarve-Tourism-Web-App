"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Tabs, ScrollArea } from "@mantine/core";
import { FaBell, FaHeart } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { TiHeartOutline } from "react-icons/ti";
import { AiOutlineBell } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/navigation";

function BottomDrawer({ favouritesLength }: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  const favouritesFromLocalStorage =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("favourites")
      : null;

  const favouritesArray = JSON.parse(favouritesFromLocalStorage) || [];

  return (
    <>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="bottom"
        title=""
        size={favouritesArray.length > 4 ? "100%" : ""}
        className="bottomDraw sm:hidden relative"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        // scrollAreaComponent={ScrollArea.Autosize}
      >
        {/* Drawer content */}

        <Tabs defaultValue="favourites">
          <Tabs.List className="mb-6  top-0">
            <Tabs.Tab color="dark" value="favourites">
              Favourites <TiHeartOutline className="inline ml-1" />
            </Tabs.Tab>
            <Tabs.Tab
              className="flex items-center"
              color="dark"
              value="notifications"
            >
              Notifications
              <AiOutlineBell className="inline ml-2" />
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="favourites">
            <section>
              {favouritesArray.map((item: any) => (
                <div
                  className="px-4 pt-2  border text-xs relative flex flex-col  mb-2 space-y-1  rounded-md h-fit "
                  key={item.id}
                  onClick={() => {
                    router.push(`/${item?.type}/${item?.slug}`);
                    close();
                  }}
                >
                  <BiChevronRight className="right-2 absolute text-xl top-6 text-gray-300" />
                  <div className="flex mt-1 flex-wrap  ">
                    <h5 className="my-0 font-semibold">{item?.title}</h5>
                    <span className="text-gray-400 ml-2">{item?.city}</span>
                    <p className="text-gray-500 mt-1 truncate mb-0 pr-3">
                      {item?.shortDescription}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </Tabs.Panel>
          <Tabs.Panel value="notifications">
            <p>Notifications</p>
          </Tabs.Panel>
        </Tabs>
      </Drawer>

      <div
        onClick={open}
        className="bg-gray-700 w-fit mx-auto flex items-center gap-2 transition-all ease-in delay-75 px-2 text-xs py-1 rounded-full"
      >
        <FaHeart className="text-red-500" />
        {favouritesLength}
      </div>
    </>
  );
}

export default BottomDrawer;
