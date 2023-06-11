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
      <div className="w-10/12 max-w-4xl mx-auto ml-4 sm:ml-auto sm:pl-2  sm:pt-6 text-sm mb-4 py-6 overflow-x-hidden">
        <Breadcrumbs />
      </div>
      {/* <Hero /> */}
      <section className="max-w-7xl mx-auto flex   justify-start transition-all ease-in delay-75 sticky top-11 mb-72 ">
        <SidePanel />
        <div className="flex-1  mb-20">{children}</div>
      </section>
    </>
  );
}
