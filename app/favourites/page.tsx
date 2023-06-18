"use client";
import React, { useState } from "react";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import Link from "next/link";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import { Table } from "@mantine/core";
import { Rating } from "@mantine/core";
import CardFavs from "./CardFavs";
import { AiFillDelete } from "react-icons/ai";
import { LuLayoutGrid } from "react-icons/lu";

function page() {
  const { favourites, addFavourite, removeFavourite }: any =
    useAddToFavourites();
  const [changeTable, setChangeTable]: any = useState(false);

  console.log(favourites, "from the Favs");
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];
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
        <Link href={`${element.type[0]}/${element.slug}`}>
          <button className="border px-3 py-1">view</button>
        </Link>
      </td>
      <td>
        <AiFillDelete
          onClick={() => removeFavourite(element.id)}
          className="hover:text-red-500 cursor-pointer"
        />
      </td>
    </tr>
  ));
  return (
    <section className="max-w-7xl mx-auto w-11/12">
      <div className="relative justify-center overflow-hidden bg-cover bg-blend-multiply ">
        <div className="w-full favBanner">
          <img
            src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/05/USE_Carvoeiro-Beach-Algarve-Portugal_Credit_Alamy_2AP6967.jpg?w=2200&h=880&crop=1"
            alt="beach"
            className="w-full"
          />
        </div>
        <div className="m-auto max-w-7xl mt-10 flex items-center justify-between ">
          <h1 className="text-3xl font-semibold sm:text-6xl ">
            Your Favourites
          </h1>
        </div>
      </div>
      <div className="mt-2 mb-2 sm:mb-0 sm:mt-10 w-full ">
        <div className="flex text-xl space-x-3 w-full justify-end">
          {!changeTable ? (
            <LuLayoutGrid
              onClick={() => setChangeTable(!changeTable)}
              className="cursor-pointer"
            />
          ) : (
            <BsLayoutTextSidebarReverse
              className="font-bold text-xl cursor-pointer"
              onClick={() => setChangeTable(!changeTable)}
            />
          )}
          <FiPrinter
            onClick={() => window.print()}
            className="cursor-pointer"
          />
        </div>
        <div className="flex font-bold sapce-x-5 w-full justify-between pb-2 mb-10 h-full overflow-auto">
          {/* Optional table */}
          {!changeTable ? (
            <Table className="table-normal overflow-auto" fontSize={14}>
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
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gridFavs mt-10 gap-x-8">
              {favourites.map((el: any) => (
                <CardFavs
                  title={el.title}
                  image={el.image}
                  key={el.title}
                  rating={el.rating}
                  city={el.city}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default page;
