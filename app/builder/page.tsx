import React from "react";
import AiSelection from "./components/AiSelection";
import { cookies } from "next/headers";

const page = async () => {
  return (
    <main className="sm:h-screen sm:overflow-hidden w-full sm:pt-2 flex flex-col items-center justify-center">
      <section className="max-w-5xl mx-auto flex fle-col flex-wrap justify-center w-full items-center">
        <AiSelection />
      </section>
    </main>
  );
};
export default page;
