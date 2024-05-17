import React from "react";
import BuilderFooter from "./components/BuilderFooter";
import BuilderHeader from "./components/header";
import AiSelection from "./components/AiSelection";

const page = () => {
  return (
    <main className="sm:h-screen sm:overflow-hidden w-full sm:pt-2 flex flex-col items-center justify-center">
      <section className="max-w-5xl mx-auto flex fle-col flex-wrap justify-center w-full items-center">
        <AiSelection />
      </section>
    </main>
  );
};
export default page;
