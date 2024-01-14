import Link from "next/link";
import React from "react";

const Agenda = () => {
  return (
    <div className="grid grid-cols-1 sm;grid-cols-2 md:grid-cols-3 gap-y-8 w-full">
      {[1, 2, 3, 4, 5, 6].map(() => (
        <section className="flex">
          <div className="text-center bg-gray-700 w-24 p-2">
            <span>10</span>
            <span className="block">Janeiro</span>
          </div>
          <div className="ml-4 flex justify-start items-start flex-col">
            <span className="text-[8px] font-thin">
              10 de jan a 16 de jan 2024
            </span>
            <p>Feira de Vakantiebeurs</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Agenda;
