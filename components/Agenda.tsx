import Link from "next/link";
import React from "react";

const Agenda = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 w-full">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <section
          className="flex group transform ease-in delay-100"
          key={item.id}
        >
          <Link href="#" className="flex">
            <div className="text-center bg-gray-700 w-24 p-2">
              <span className="group-hover:text-white transition ease-in delay-100">
                10
              </span>
              <span className="block group-hover:text-white transition ease-in delay-100">
                Janeiro
              </span>
            </div>
            <div className="ml-4 flex justify-start items-start flex-col">
              <span className="text-[10px] font-thin">
                10 de jan a 16 de jan 2024
              </span>
              <p>Feira de Vakantiebeurs</p>
            </div>
          </Link>
        </section>
      ))}
    </div>
  );
};

export default Agenda;
