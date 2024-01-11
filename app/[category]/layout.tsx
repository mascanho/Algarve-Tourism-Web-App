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
        <div className="w-11/12 sm:w-6/12 md:w-8/12 mx-auto  my-8 max-w-7xl xl:max-w-4xl">
          <Breadcrumbs />
        </div>
        <section className="sm:pl-4 xl:pl-0    max-w-7xl mx-auto flex   justify-start transition-all ease-in delay-75 sticky top-11  ">
          <SidePanel />
          <div className="flex-1  mb-20">{children}</div>
        </section>
      </NextAuthProvider>
    </section>
  );
}
