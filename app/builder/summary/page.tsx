import React from "react";
import SummaryCard from "./components/SummaryCard";

const SummaryPage = () => {
  return (
    <section
      className="max-w-4xl m-auto  w-11/12 h-full flex flex-col flex-wrap items-center justify-center py-20 sm:my-5"
      suppressHydrationWarning
    >
      <SummaryCard />
    </section>
  );
};
export default SummaryPage;
