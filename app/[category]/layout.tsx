import Hero from "@/components/Layout/Hero";
import "../../app/globals.css";

import SidePanel from "@/components/Layout/SidePanel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero />
      <section className="max-w-7xl mx-auto flex pt-10 sm:pt-20 justify-start transition-all ease-in delay-75 sticky top-11 mb-72  h-[100%]">
        <SidePanel />
        <div className="mb-20 flex-1 h-full">{children}</div>
      </section>
    </>
  );
}
