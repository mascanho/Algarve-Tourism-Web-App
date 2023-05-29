import Link from "next/link";
import React from "react";

const DrawerContent = () => {
  return [1, 2, 3, 4, 5].map((item) => (
    <div key={item} className="my-2">
      <Link href="/">
        <div className="border p-2 cursor-pointer hover:bg-sky group  hover:text-white hover:border-white rounded-md relative flex flex-col justify-start text-left transition-all ease-in delay-75">
          <span className="absolute right-2 text-xs text-gray-500 transition-all ease-in delay-75 group-hover:text-red-400">
            remove
          </span>
          <div className="text-left flex flex-col space-x-2">
            <div>
              <img
                src="https://www.albufeiraportugaltourism.com/images/praia-da-gale-algarve.jpg"
                alt="dwd"
                className="w-full h-32 rounded-md object-fill"
              />
              <div className="w-full mx-auto flex flex-col mt-2">
                <h3 className="text-sm">Praia da Gale 😲🙊</h3>
                <p className="text-sm">Albufeira</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));
};

export default DrawerContent;
