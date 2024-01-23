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
        <section className="space-y-4  overflow-hidden  flex-grow h-[100%] min-h-[600px]">
          <div className="py-1 space-y-2">
            {!currentUser ? (
              ""
            ) : (
              <div className="flex items-center space-x-2  px-2">
                <img
                  src={currentUser?.image}
                  className="w-9 h-9 rounded-full"
                />
                <span>
                  {currentUser?.name || currentUser?.email.split("@")[0]}
                </span>
              </div>
            )}

            {!currentUser && (
              <button
                onClick={handleLogin}
                className="border px-3 py-2 w-full border-gray-100 bg-gray-700 rounded-full text-sm text-white"
              >
                Login
              </button>
            )}

            {/* <button */}
            {/*   onClick={() => { */}
            {/*     router.push("/#aigenerate"); */}
            {/*     close(); */}
            {/*   }} */}
            {/*   className="border px-3 py-2 w-full border-sky" */}
            {/* > */}
            {/*   AI Generate */}
            {/* </button> */}
          </div>
          <Divider my="md" />
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
            <span className="my-auto font-semibold">Home</span>
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
            <span className="my-auto font-semibold">Search</span>
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
            <span className="my-auto font-semibold">
              Favourites
              {favourites.favourites.length > 0 ? (
                <span className="text-sm text-gray-400 ml-2">
                  {favourites.favourites.length}
                </span>
              ) : (
                ""
              )}
            </span>
          </div>{" "}
          <div
            className="flex items-center mb-2"
            onClick={() => {
              router.push("/blog");
              close();
            }}
          >
            <FaBookOpen
              className="w-8 h-8 bg-sky p-[7px]  rounded-md flex items-center justify-center text-white mr-2 font-semibold"
              size={16}
            />
            <span className="my-auto font-semibold">Blog</span>
          </div>{" "}
          <Divider my="md" />
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
        className={`text-2xl transition-all text-black duration-500 ease-in flex items-center m-auto ${
          showMobileBurger && "animate-fade  "
        }`}
      />
    </section>
  );
}

export default Sheet;
