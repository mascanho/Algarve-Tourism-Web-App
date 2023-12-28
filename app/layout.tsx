import Header from "@/components/Layout/Header";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import type { Metadata } from "next";
import ClientOnly from "@/components/ClientOnly";
import "react-toastify/dist/ReactToastify.css";
import getCurrentUser from "./libs/getCurrentUser";
import { ToasterProvider } from "./providers/ToasterProvider";
import { NextAuthProvider } from "./providers/AuthProvider";

export const metadata: Metadata = {
  title: {
    default: "Algarve Wonders - The Best Hidden Gems in The Algarve",
    template: "%s | Algarve Wonders",
  },
  description: "The place to find the best places in the Algarve",
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className="bg-white overflow-x-hidden">
        <ClientOnly>
          <ToasterProvider />
          <Header currentUser={currentUser} />
          <NextAuthProvider>{children}</NextAuthProvider>
        </ClientOnly>
        <Footer />
      </body>
    </html>
  );
}
