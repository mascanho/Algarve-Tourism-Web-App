import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IoIosPin } from "react-icons/io";

function PopularCategories({ beaches, events, adventure }: any) {
  const popularCategories = [
    {
      id: 1,
      name: "Unique and Insteresting Events",
      url: "/events",
      image:
        "https://www.walkalgarve.com/wp-content/uploads/2016/10/SandsSculpture-1.jpg",
      quantity: events?.length,
    },
    {
      id: 2,
      name: "Unique and Insteresting Adventures",
      url: "/adventure",
      image:
        "https://blog-cdn.checkyeti.com/wp-content/uploads/2020/07/Skydiving_in_the_Algarve.jpg",
      quantity: adventure?.length,
    },
    {
      id: 3,
      name: "Unique and Insteresting Places",
      url: "/beaches",
      image:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=4096x4096:format=jpg/path/sa6549607c78f5c11/image/ibff35da300188e47/version/1472987546/image.jpg",
      quantity: beaches?.length,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-20 sm:mt-40 mb-10 text-center w-full ">
      <div className="space-y-4 w-full mx-auto group">
        <h2 className="text-2xl sm:font-bold sm:text-4xl  text-black font-semibold">
          Popular Categories For You
        </h2>
        <hr className="w-16 transition-all ease-in delay-100  group-hover:w-full hover:rounded-full   bg-sky h-1 mx-auto rounded-full " />
        <h3>50+ locations from the best 3 categories</h3>
      </div>

      <div className="mt-20 sm:flex gap-x-10 justify-center space-y-10 sm:space-y-0 px-4 sm:px-0 ">
        {popularCategories.map((item: any) => (
          <div
            key={item.id}
            className="w-fit text-center space-y-4 m-auto rounded-xl h-fit cursor-pointer "
          >
            <Link href={item.url}>
              <img
                src={item.image}
                height={200}
                width={100}
                alt="image"
                className="w-96 h-[400px] object-cover hover:scale-95 transition-all ease-in delay-75 rounded-md cursor-pointer "
              />
            </Link>
            <h3 className="">{item.name}</h3>
            <div className="flex items-center space-x-2 text-sm border  w-fit px-2 py-1 rounded-md mx-auto">
              <IoIosPin className="text-red-500 text-center" />
              <span>{item.quantity} Locations</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;
