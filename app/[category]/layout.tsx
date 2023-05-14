import Hero from "@/components/Layout/Hero";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import "../../app/globals.css";

import SidePanel from "@/components/Layout/SidePanel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto ml-4 sm:ml-auto sm:mt-4 text-sm -mb-8 sm:-mb-10 pt-4 ">
        <Breadcrumbs />
      </div>
      {/* <Hero /> */}
      <section className="max-w-7xl mx-auto flex pt-10 sm:pt-20 justify-start transition-all ease-in delay-75 sticky top-11 mb-72  h-[100%]">
        <SidePanel />
        <div className="flex-1 h-full mb-20">{children}</div>
      </section>
    </>
  );
}
