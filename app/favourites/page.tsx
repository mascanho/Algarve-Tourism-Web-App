"use client";
import React, { useEffect, useState } from "react";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import Link from "next/link";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import { Accordion, Divider, Table } from "@mantine/core";
import { Rating } from "@mantine/core";
import CardFavs from "./CardFavs";
import { AiFillDelete } from "react-icons/ai";
import { BsGridFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { sendMail } from "@/libs/NodeMailer";
import { toast } from "react-hot-toast";
import { favouritesEmail } from "@/libs/MailTemplate";
import { useSession } from "next-auth/react";
import { useLoginModalStore } from "../hooks/useLoginModal";
import useWindowSize from "react-use/lib/useWindowSize";
import { FaSpinner } from "react-icons/fa";
import FavMobileCard from "./components/FavMobileCard";
import { IoMdSend } from "react-icons/io";
import { FaSquare } from "react-icons/fa6";

function page() {
  const [favourites, setFavourites] = useState<any[]>([]);
  const [changeTable, setChangeTable]: any = useState(false);
  const [userEmail, setUserEmail]: any = useState("");
  const [loading, setLoading]: any = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const session = useSession();
  const loginModal = useLoginModalStore();
  const { removeFavourite } = useAddToFavourites();
  const [localStorageItems, setLocalStorageItems] = useState([]);

  const removeFavouriteGlobal = (id: number) => {
    // Remove the favorite from the local state
    const updatedFavourites = favourites.filter((fav) => fav.id !== id);
    removeFavourite(id);
    setFavourites(updatedFavourites);

    // Update local storage
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  useEffect(() => {
    document.title = "Algarve Wonders - Your Favourites";
    let link: HTMLLinkElement | null =
      document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "/images/icon.png";

    // Initialization logic outside the store creation
    if (typeof window !== "undefined") {
      const favourites = localStorage?.getItem("favourites");
      if (favourites) {
        useAddToFavourites.setState({ favourites: JSON.parse(favourites) });
        setFavourites(JSON.parse(favourites));
      }
    }
  }, [removeFavourite]);

  const getLocalStorageItems = () => {
    const storedItems = JSON.parse(localStorage.getItem("yourKey") || "[]");
    setLocalStorageItems(storedItems);
  };

  const tripName = () => {
    // check if localstorage exists

    if (!localStorage.getItem("trip")) {
      return null;
    }
    const name = localStorage.getItem("trip") || [];
    const tripName = JSON.parse(name);
    return tripName.name;
  };

  const TRIPNAME = tripName();

  // Initial load from local storage
  useEffect(() => {
    getLocalStorageItems();
  }, []);

  // Update the state when local storage changes
  useEffect(() => {
    window?.addEventListener("storage", getLocalStorageItems);

    return () => {
      window?.removeEventListener("storage", getLocalStorageItems);
    };
  }, []);

  const sendFavEmail = async () => {
    if (userEmail.length < 1) {
      toast("Please enter a valid email address", {
        icon: "🚨",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    // if user email is not a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      toast("Please enter a valid email address", {
        icon: "🚨",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    setLoading(true);

    await sendMail({
      to: userEmail,
      subject: "🔥 Algarve Wonders - Your Favourites 🔥",
      body: favouritesEmail(userEmail, favourites),
      name: "Algarve Wonders",
      bcc: "mascanho@sapo.pt",
    });

    // favouritesEmail(userEmail, favourites);
    setUserEmail("");
    setLoading(false);
    toast("Email sent to: " + userEmail, {
      icon: "📬",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const rows = favourites?.map((element: any) => (
    <tr key={element?.title} suppressHydrationWarning={true}>
      <td className="flex items-center space-x-2 ">
        <div className="w-12 h-12 rounded-full mr-2">
          <img
            className="w-12 h-12 rounded-full flex"
            src={element?.image}
            alt="image"
          />
        </div>
        {element?.title}
      </td>
      <td>{element?.city}</td>
      <td className="text-left">
        <Rating value={element?.rating} />
      </td>
      <td>{element?.price}</td>
      <td>
        <Link href={`${element?.type}/${element?.slug}`}>
          <button className="border px-3 py-1 hiddenRow">view</button>
        </Link>
      </td>
      <td>
        <AiFillDelete
          onClick={() => removeFavouriteGlobal(element?.id)}
          className="hover:text-red-500 cursor-pointer hiddenRow"
        />
      </td>
    </tr>
  ));
  return (
    <section
      className="max-w-7xl mx-auto w-11/12 pt-5 min-h-screen"
      suppressHydrationWarning={true}
    >
      <div className="relative justify-center overflow-hidden bg-cover bg-blend-multiply ">
        <div className="w-full favBanner hidden rounded-b-xl sm:flex sm:max-h-[300px] sm:pt-10">
          <img
            src="https://www.lartisien.com/blog/wp-content/uploads/2023/05/shutterstock_721857286-2.jpg"
            alt="beach"
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="m-auto max-w-7xl w-11/12 sm:w-full mt-1 sm:mt-2 flex items-center justify-between ">
          <div className="flex flex-col w-fit ">
            <h1 className="text-2xl pt-10 sm:pt-0 sm:text-3xl w-full text-key font-semibold hiddenRow  ">
              Your Favourites{" "}
            </h1>
            {TRIPNAME && (
              <span className=" w-full text-lg text-key-50 font-bold sm:text-xl pb-4">
                {TRIPNAME}
              </span>
            )}
          </div>
          <div className="fixed bottom-0 sm:relative flex justify-center sm:items-start space-x-8 sm:space-x-0 left-0 z-10 py-3 px-3 w-full sm:flex sm:flex-col sm:w-40 sm:space-y-2 sm:flex-wrap sm:text-xl hiddenRow bg-key text-white sm:px-3 sm:py-2 sm:rounded-xl ">
            <div
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("sendEmail");
                section?.scrollIntoView({ behavior: "smooth" });
                setSendEmail(true);
              }}
              className="flex items-center space-x-1 justify-center cursor-pointer"
            >
              <AiOutlineMail className="cursor-pointer text-xl" />
              <span className="text-xs">Email Favourites</span>
            </div>
            <div
              onClick={() => {
                window?.print();
              }}
              className="flex items-center sm:items-start space-x-1 justify-center sm:justify-center cursor-pointer"
            >
              <FiPrinter className="cursor-pointer text-xl" />
              <span className="text-xs">Print Favourites</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-2 sm:mb-0 sm:mt-5 w-full ">
        <div className="flex font-bold sapce-x-5 w-full justify-between pb-2 mb-10 h-full overflow-auto">
          {/* Optional table */}
          {!changeTable ? (
            <>
              <Table
                suppressHydrationWarning={true}
                className="table-normal overflow-auto mt-10 hidden sm:inline-table"
                fontSize={14}
              >
                <thead>
                  <tr className="text-4xl">
                    <th>Destination</th>
                    <th>City</th>
                    <th>Rating</th>
                    <th>Price</th>
                    <th className="hiddenRow">Details</th>
                    <th className="hiddenRow">Remove</th>
                  </tr>
                </thead>
                <tbody suppressHydrationWarning={true}>{rows}</tbody>
              </Table>
              <div className="mb-5 sm:hidden grid grid-col-1  ">
                {favourites.map((el: any) => (
                  <FavMobileCard
                    key={el.title}
                    {...el}
                    removeFavouriteGlobal={removeFavouriteGlobal}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gridFavs mt-10 sm:gap-x-4 gap-y-4 w-full">
              {favourites.map((el: any) => (
                <CardFavs
                  title={el?.title}
                  image={el?.image}
                  key={el?.title}
                  rating={el?.rating}
                  city={el?.city}
                  paid={el?.paid}
                  slug={el?.slug}
                  type={el?.type}
                  id={el?.id}
                  shortDescription={el?.shortDescription}
                  price={el?.price}
                  tags={el?.tags}
                  removeFavouriteGlobal={removeFavouriteGlobal}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center my-20 " id="sendEmail">
        <form action="submit" className="w-fit relative">
          {sendEmail &&
            (session.status === "authenticated" ? (
              <div className="flex flex-col">
                {favourites.length <= 0 ? (
                  <Link href="/beaches">
                    <button className="text-white btn">
                      Add some favourites
                    </button>
                  </Link>
                ) : (
                  <>
                    <input
                      className="h-10 max-w-sm w-72 sm:w-96 mx-auto relative rounded-md bg-white border p-2 text-black"
                      type="email"
                      name="email"
                      placeholder="Email your favourites"
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                      value={userEmail}
                    />
                    <button
                      className="hiddenRow block mt-6 absolute bottom-1 right-1 m-auto text-sm sm:text-base disabled:text-gray-400 disabled:cursor-not-allowed hover:text-white z-10"
                      type="button"
                      disabled={!favourites.length}
                      onClick={sendFavEmail}
                    >
                      {loading ? (
                        <div className="bg-key text-white w-8 h-8 flex items-center justify-center rounded-md">
                          <FaSpinner className="animate-spin" />
                        </div>
                      ) : (
                        <div className="bg-key text-white w-8 h-8 flex items-center justify-center rounded-md">
                          <IoMdSend />
                        </div>
                      )}
                    </button>
                  </>
                )}
              </div>
            ) : (
              <section className="mb-20 hiddenRow mx-auto flex justify-center">
                <button
                  onClick={() => loginModal.onOpen()}
                  className="btn text-white mx-auto"
                  type="button"
                >
                  Please login to send email
                </button>
              </section>
            ))}
        </form>
      </div>
    </section>
  );
}

export default page;
