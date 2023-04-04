import "../../app/globals.css";
import type { Metadata } from "next";
import { catArr } from "@/Data/Categories";

import SidePanel from "@/components/Layout/SidePanel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-7xl mx-auto flex mt-20 justify-start transition-all ease-in delay-75 sticky top-11 mb-72">
      <SidePanel />
      <div className="flex-1">{children}</div>
    </section>
  );
}
