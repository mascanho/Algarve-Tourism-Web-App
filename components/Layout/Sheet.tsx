import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { HiMenuAlt2 } from "react-icons/hi";
import NavLinks from "./NavLinks";
import { cityArr } from "@/Data/Cities";
import { catArr } from "@/Data/Categories";
import { IoBag } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FaBook, FaBookOpen, FaHeartbeat, FaHome } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdDataArray, MdFavorite } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";

function Sheet() {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  return (
    <section className="flex justify-between">
      <Drawer
        opened={opened}
        onClose={close}
        title=""
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        size="15em"
        position="left"
        closeButtonProps={{
          icon: <HiMenuAlt2 size={20} stroke={1.5} />,
        }}
      >
        {/* Sheet content */}
        <section className="space-y-4  overflow-hidden  flex-grow">
          <div className="py-1">
            <button
              onClick={() => {
                router.push("/#aigenerate");
                close();
              }}
              className="border px-3 py-2 w-full border-sky"
            >
              AI Generate
            </button>
          </div>
          <div
            className="flex items-center mb-2"
            onClick={() => {
              router.push("/");
              close();
            }}
          >
            <FaHome
              className="w-8 h-8 bg-sky p-[5px]  rounded-md flex items-center justify-center text-white mr-2"
              size={16}
            />
            <span className="my-auto">Home</span>
          </div>{" "}
          <div
            className="flex items-center mb-2"
            onClick={() => {
              router.push("/#search");
              close();
            }}
          >
            <HiMagnifyingGlass
              className="w-8 h-8 bg-sky p-[5px]  rounded-md flex items-center justify-center text-white mr-2"
              size={16}
            />
            <span className="my-auto">Search</span>
          </div>{" "}
          <div className="">
            <NavLinks
              data={cityArr}
              icon={<FaLocationCrosshairs size={20} />}
              title="Algarve"
              close={close}
            />
            <NavLinks
              data={catArr}
              icon={<MdDataArray size={20} />}
              title="Categories"
              close={close}
            />
          </div>
          <div
            className="flex items-center mb-2"
            onClick={() => {
              router.push("/favourites");
              close();
            }}
          >
            <MdFavorite
              className="w-8 h-8 bg-sky p-[6px]  rounded-md flex items-center justify-center text-white mr-2"
              size={16}
            />
            <span className="my-auto">Favourites</span>
          </div>{" "}
          <div
            className="flex items-center mb-2"
            onClick={() => {
              router.push("/blog");
              close();
            }}
          >
            <FaBookOpen
              className="w-8 h-8 bg-sky p-[7px]  rounded-md flex items-center justify-center text-white mr-2"
              size={16}
            />
            <span className="my-auto">Blog</span>
          </div>{" "}
        </section>
      </Drawer>

      <span className="text-sky mt-1 mr-2" onClick={open}>
        <HiMenuAlt2 className="text-2xl" />
      </span>
    </section>
  );
}

export default Sheet;
