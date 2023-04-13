import Image from "next/image";
import React from "react";
import { IoIosPin } from "react-icons/io";

const popularCategories = [
  {
    id: Math.random(),
    name: "Unique and Insteresting Events",
    url: "/culture",
    image:
      "https://www.portugalresident.com/wp-content/uploads/2019/12/Galeria_TN_ALB_FA_cam3_ok.jpg",
  },
  {
    id: Math.random(),
    name: "Unique and Insteresting Culture",
    url: "/culture",
    image:
      "https://d1bv4heaa2n05k.cloudfront.net/user-images/1561648963513/algarve-towns1_main_1561649125133.jpeg",
  },
  {
    id: Math.random(),
    name: "Unique and Insteresting Places",
    url: "/culture",
    image:
      "https://guidebook.isango.com//theguidebook/wp-content/uploads//2021/10/The-Algarve-featured.1.jpg",
  },
];

function PopularCategories() {
  return (
    <section className="max-w-7xl mx-auto mt-40 mb-10 text-center w-full ">
      <div className="space-y-2">
        <h2 className="text-3xl text-black">Popular Categories For You</h2>
        <h3>50+ locations from the best 3 categories</h3>
      </div>

      <div className="mt-20 sm:flex gap-x-10 justify-center space-y-10 sm:space-y-0 ">
        {popularCategories.map((item: any) => (
          <div
            key={item}
            className="w-fit text-center space-y-4 m-auto rounded-xl h-fit cursor-pointer "
          >
            <img
              src={item.image}
              height={200}
              width={100}
              alt="image"
              className="w-96 h-[400px] object-cover hover:scale-95 transition-all ease-in delay-75 rounded-md cursor-pointer "
            />
            <h3 className="">{item.name}</h3>
            <div className="flex items-center space-x-2 text-sm border  w-fit px-2 py-1 rounded-md mx-auto">
              <IoIosPin className="text-red-500 text-center" />
              <span>103 Locations</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;
