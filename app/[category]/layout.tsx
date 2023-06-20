import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import "../../app/globals.css";
import type { Metadata } from "next";
import SidePanel from "@/components/Layout/SidePanel";
import { NextAuthProvider } from "../providers/AuthProvider";

export const metadata: Metadata = {
  title: {
    default: "Algarve Travel",
    template: "%s | Algarve Travel",
  },
  description: "Developer, writer, and creator.",
  viewport: {
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Lee Robinson",
    description: "Developer, writer, and creator.",
    url: "https://leerob.io",
    siteName: "Lee Robinson",
    images: [
      {
        url: "https://leerob.io/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
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
    title: "Lee Robinson",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
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
        <div className="w-10/12 max-w-4xl mx-auto ml-4 sm:ml-auto sm:pl-2  sm:pt-8 text-sm mb-4 py-6 overflow-x-hidden">
          <Breadcrumbs />
        </div>
        <section className="max-w-7xl mx-auto flex   justify-start transition-all ease-in delay-75 sticky top-11 mb-72 ">
          <SidePanel />
          <div className="flex-1  mb-20">{children}</div>
        </section>
      </NextAuthProvider>
    </section>
  );
}
