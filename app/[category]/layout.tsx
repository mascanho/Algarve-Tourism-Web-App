import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import "../../app/globals.css";
import type { Metadata } from "next";
import SidePanel from "@/components/Layout/SidePanel";
import { NextAuthProvider } from "../providers/AuthProvider";
import Selection from "@/components/Selection";

export const metadata: Metadata = {
  title: {
    default: "Algarve Wonders",
    template: "%s | Algarve Wonders",
  },
  description:
    "Discover the best places in the Algarve. Find the hidden gems and enjoy the culture",
  viewport: {
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Algarve Wonders - The best places to visit",
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/icon.png",
    href: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },

  // verification: {
  //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //   yandex: "14d2e73487fa6c71",
  // },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" sm:pt-12 min-h-screen ">
      <NextAuthProvider>
        {/* <div className="w-10/12 sm:w-full sm:max-w-5xl sm:text-left print:hidden mx-auto pt-2 sm:mt-4 sm:p-0 pb-4 sm:mb-0 hidden  sm:flex  max-w-7xl xl:max-w-4x5"> */}
        {/*   <Breadcrumbs /> */}
        {/* </div> */}
        <section className="sm:pl-4 xl:pl-0 relative    max-w-7xl mx-auto flex   justify-start transition-all ease-in delay-75 top-11  ">
          <Selection />
          <SidePanel />
          <div className="flex-1 print:bg-white sm:rounded-xl  mb-20">
            {children}
          </div>
        </section>
      </NextAuthProvider>
    </section>
  );
}
