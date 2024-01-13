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

function page() {
  const { favourites, addFavourite, removeFavourite }: any =
    useAddToFavourites();
  const [changeTable, setChangeTable]: any = useState(false);
  const [userEmail, setUserEmail]: any = useState("");
  const [loading, setLoading]: any = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const session = useSession();
  const loginModal = useLoginModalStore();
  const { width, height } = useWindowSize();

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
  });

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
      subject: "Algarve Wonders - Your Favourites",
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

  const rows = favourites.map((element: any) => (
    <tr key={element.title}>
      <td className="flex items-center space-x-2 ">
        <div className="w-12 h-12 rounded-full mr-2">
          <img
            className="w-12 h-12 rounded-full flex"
            src={element.image}
            alt="image"
          />
        </div>
        {element.title}
      </td>
      <td>{element.city}</td>
      <td className="text-left">
        <Rating value={element.rating} />
      </td>
      <td>{element.price}</td>
      <td>
        <Link href={`${element?.type[0]}/${element?.slug}`}>
          <button className="border px-3 py-1 hiddenRow">view</button>
        </Link>
      </td>
      <td>
        <AiFillDelete
          onClick={() => removeFavourite(element.id)}
          className="hover:text-red-500 cursor-pointer hiddenRow"
        />
      </td>
    </tr>
  ));
  return (
    <section className="max-w-7xl mx-auto w-11/12">
      <div className="relative justify-center overflow-hidden bg-cover bg-blend-multiply ">
        <div className="w-full favBanner hidden sm:flex">
          <img
            src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/05/USE_Carvoeiro-Beach-Algarve-Portugal_Credit_Alamy_2AP6967.jpg?w=2200&h=880&crop=1"
            alt="beach"
            className="w-full"
          />
        </div>
        <div className="m-auto max-w-7xl mt-10 mb-5 flex items-center justify-between ">
          <h1 className="text-2xl sm:text-3xl font-semibold hiddenRow ">
            Your Favourites
          </h1>
        </div>
      </div>
      <div className="mt-2 mb-2 sm:mb-0 sm:mt-5 w-full ">
        <div className="flex text-xl space-x-3 w-full justify-end hiddenRow">
          {!changeTable ? (
            <BsGridFill
              onClick={() => setChangeTable(!changeTable)}
              className="cursor-pointer"
            />
          ) : (
            <BsLayoutTextSidebarReverse
              className="font-bold text-xl cursor-pointer"
              onClick={() => setChangeTable(!changeTable)}
            />
          )}
          <AiOutlineMail
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("sendEmail");
              section?.scrollIntoView({ behavior: "smooth" });
              setSendEmail(true);
            }}
          />
          <FiPrinter
            onClick={() => window.print()}
            className="cursor-pointer"
          />
        </div>
        <div className="flex font-bold sapce-x-5 w-full justify-between pb-2 mb-10 h-full overflow-auto">
          {/* Optional table */}
          {!changeTable ? (
            <>
              <Table
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
                <tbody>{rows}</tbody>
              </Table>
              <div className="mt-10 sm:hidden grid grid-col-1 gap-y-6">
                {favourites.map((el: any) => (
                  <FavMobileCard key={el.title} {...el} />
                ))}
              </div>
            </>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gridFavs mt-10 sm:gap-x-4 gap-y-4 w-full">
              {favourites.map((el: any) => (
                <CardFavs
                  title={el.title}
                  image={el.image}
                  key={el.title}
                  rating={el.rating}
                  city={el.city}
                  paid={el.paid}
                  slug={el.slug}
                  type={el.type}
                  id={el.id}
                  shortDescription={el.shortDescription}
                  price={el.price}
                  tags={el.tags}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mt-20" id="sendEmail">
        <form action="submit">
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
                      className="h-10 rounded-l-md bg-white border p-2 text-black "
                      type="email"
                      name="email"
                      placeholder="Email..."
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                      value={userEmail}
                    />
                    <button
                      className="hiddenRow block mt-6 w-44  btn m-auto text-sm sm:text-base disabled:text-gray-400 disabled:cursor-not-allowed hover:text-white z-10"
                      type="button"
                      disabled={!favourites.length}
                      onClick={sendFavEmail}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <FaSpinner className="animate-spin mr-1" />
                          <span>sending</span>
                        </div>
                      ) : (
                        "Send email"
                      )}
                    </button>
                  </>
                )}
              </div>
            ) : (
              <section className="mb-20 hiddenRow">
                <button
                  onClick={() => loginModal.onOpen()}
                  className="btn text-white"
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
