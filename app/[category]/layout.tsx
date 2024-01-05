import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import "../../app/globals.css";
import type { Metadata } from "next";
import SidePanel from "@/components/Layout/SidePanel";
import { NextAuthProvider } from "../providers/AuthProvider";

export const metadata: Metadata = {
  title: {
    default: "Algarve Wonders",
    template: "%s | Algarve Wonders",
  },
  description: "Developer, writer, and creator.",
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
    title: "Mascanho",
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/icon.png",
    href: "/images/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },

  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full">
      <NextAuthProvider>
        <div className="w-10/12 sm:max-w-xs  md:w-10/12  md:max-w-4xl mx-auto ml-4 sm:ml-auto sm:pl-2  sm:pt-8 text-sm mb-4 py-6 overflow-x-hidden">
          <Breadcrumbs />
        </div>
        <section className="max-w-7xl mx-auto flex   justify-start transition-all ease-in delay-75 sticky top-11  ">
          <SidePanel />
          <div className="flex-1  mb-20">{children}</div>
        </section>
      </NextAuthProvider>
    </section>
  );
}
