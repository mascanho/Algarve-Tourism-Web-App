import React from "react";
import BuilderFooter from "./components/BuilderFooter";
import BuilderHeader from "./components/header";
import AiSelection from "./components/AiSelection";

const page = () => {
  return (
    <>
      <main className="min-h-svh w-full flex flex-col items-center justify-center">
        <BuilderHeader />
        <section className="max-w-5xl mx-auto flex fle-col flex-wrap justify-center w-full h-full items-center">
          <section className="w-full flex justify-center h-full items-center">
            <AiSelection />
          </section>

          <section className="absolute bottom-0 w-full">
            <BuilderFooter />
          </section>
        </section>
      </main>
    </>
  );
};
export default page;
