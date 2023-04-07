import "../../app/globals.css";

import SidePanel from "@/components/Layout/SidePanel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-7xl mx-auto flex pt-20 justify-start transition-all ease-in delay-75 sticky top-11 mb-72  h-full">
      <SidePanel />
      <div className="flex-1 h-full">{children}</div>
    </section>
  );
}
