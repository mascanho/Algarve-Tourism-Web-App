// @ts-nocheck
import { useDisclosure } from "@mantine/hooks";
import { Divider, Drawer } from "@mantine/core";
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
import { toast } from "react-hot-toast";
import { signOut } from "next-auth/react";
import {
  useLoginModalStore,
  useRegisteredModalStore,
} from "@/app/hooks/useLoginModal";
import Link from "next/link";
import { More } from "@/Data/More";

function Sheet({ showMobileBurger, favourites, currentUser }: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const loginModal = useLoginModalStore();
  const registerModal = useRegisteredModalStore();

  const handleLogout = () => {
    close();
    toast.success("Logging you out... bye!");
    signOut();
  };

  const handleLogin = () => {
    close();
    registerModal.onOpen();
  };

  return (
    <section className="flex justify-between">
      <Drawer
        opened={opened}
        onClose={close}
        title=""
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        size="19em"
        position="left"
      >
        {/* Sheet content */}
        <section className="space-y-4 px-2  overflow-hidden  flex-grow h-[100%] min-h-[600px]">
          <div className="py-1 space-y-2">
            {!currentUser ? (
              ""
            ) : (
              <div className="flex items-center space-x-2  px-2">
                <img
                  src={currentUser?.image}
                  className="w-9 h-9 rounded-full"
                />
                <span className="font-bold">
                  {currentUser?.name || currentUser?.email.split("@")[0]}
                </span>
              </div>
            )}

            {!currentUser && (
              <button
                onClick={handleLogin}
                className="border px-3 py-2 w-full border-gray-100 bg-black rounded-full text-sm text-white"
              >
                Login
              </button>
            )}
          </div>
          <Divider my="md" />
          <div
            className="flex items-center mb-2"
            onClick={() => {
              router.push("/");
              close();
            }}
          >
            <span className="my-auto">Home</span>
          </div>{" "}
          <div
            className="flex items-center mb-2"
            onClick={() => {
              window.scrollTo(0, 0);
              router.push("/search");
              close();
            }}
          >
            <span className="my-auto ">Search</span>
          </div>{" "}
          <div className="">
            <NavLinks
              data={cityArr}
              // icon={<FaLocationCrosshairs size={20} />}
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
              close();
            }}
          >
            <Link href="/favourites">
              <span className="my-auto">
                Favourites
                {favourites.favourites.length > 0 ? (
                  <span className="text-sm text-gray-700 ml-2">
                    <span className="font-semibold text-black">
                      ({favourites.favourites.length})
                    </span>
                  </span>
                ) : (
                  ""
                )}
              </span>
            </Link>
          </div>{" "}
          <div
            className="flex items-center mb-2"
            onClick={() => {
              router.push("/meals");
              close();
            }}
          >
            <span className="my-auto flex items-center">
              Daily Meals{" "}
              <span className="rounded-xl py-[1px] px-2 ml-2 text-xs bg-green-500 text-white">
                New
              </span>
            </span>
          </div>{" "}
          <div
            className="flex items-center mb-2"
            onClick={() => {
              router.push("/awards");
              close();
            }}
          >
            <span className="my-auto">Awards</span>
            <span className="rounded-xl py-[1px] px-2 ml-2 text-xs bg-red-500 text-white">
              Hot
            </span>
          </div>{" "}
          <div
            className="flex items-center mb-2"
            onClick={() => {
              router.push("/blog");
              close();
            }}
          >
            <span className="my-auto">Blog</span>
          </div>{" "}
          <NavLinks
            data={More}
            icon={<MdDataArray size={20} />}
            title="More"
            close={close}
          />
          <Divider my="md" />
          <div
            className="flex items-center mb-2"
            onClick={() => {
              router.push("/advertise");
              close();
            }}
          >
            <span className="my-auto flex items-center">
              Advertise{" "}
              <span className="rounded-full bg-blue-400 text-white ml-2 px-2 py-[2px] text-xs">
                Free
              </span>
            </span>
          </div>{" "}
          <div
            className="flex items-center mb-2"
            onClick={() => {
              router.push("/contact");
              close();
            }}
          >
            <span className="my-auto">Contact us</span>
          </div>{" "}
          <div>
            {currentUser && (
              <span className="mt-4" onClick={handleLogout}>
                Logout
              </span>
            )}
          </div>
        </section>
      </Drawer>

      <HiMenuAlt2
        onClick={open}
        className={`text-2xl text-black duration-500 ease-in flex items-center m-auto w-fit`}
      />
    </section>
  );
}

export default Sheet;
