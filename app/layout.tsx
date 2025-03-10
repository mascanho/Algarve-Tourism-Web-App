import "@mantine/carousel/esm/index";
import Header from "@/components/Layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import ClientOnly from "@/components/ClientOnly";
import "react-toastify/dist/ReactToastify.css";
import getCurrentUser from "./libs/getCurrentUser";
import { ToasterProvider } from "./providers/ToasterProvider";
import { NextAuthProvider } from "./providers/AuthProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import { PT_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { headers } from "next/headers";

const Footer = dynamic(() => import("@/components/Layout/Footer"));

const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    default: "The Best Hidden Gems in The Algarve",
    template: "%s | Algarve Wonders",
  },
  description:
    "Search, save and share the best hidden gems the Algarve has to offer. All in one place. Hassle free.",
  openGraph: {
    title: "The Best Hidden Gems in The Algarve",
    description:
      "Search, save and share the best hidden gems the Algarve has to offer. All in one place. Hassle free.",
    images: [
      {
        url: "https://www.algarvewonders.com/images/icon.png",
        width: 1200,
        height: 630,
        alt: "Algarve Wonders",
      },
    ],
    url: "https://www.algarvewonders.com",
    siteName: "Algarve Wonders",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AlgarveWonders",
    title: "The Best Hidden Gems in The Algarve",
    description:
      "Search, save and share the best hidden gems the Algarve has to offer. All in one place. Hassle free.",
    images: ["https://www.algarvewonders.com/images/icon.png"],
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
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },

  // verification: {
  //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //   yandex: "14d2e73487fa6c71",
  // },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  const headersList = headers();

  const domain = headersList?.get("host") || "";
  const fullUrl = headersList?.get("referer") || "";
  const [, pathname] =
    fullUrl?.match(new RegExp(`https?:\/\/${domain}(.*)`)) || [];

  return (
    <html
      lang="en"
      className={`${ptsans.className} overflow-x-hidden bg-darkwhite `}
    >
      <NextAuthProvider>
        <body className="bg-darkwhite w-screen min-w-[350px]">
          <ClientOnly>
            <ToasterProvider />
            <Header currentUser={currentUser} />
            <SpeedInsights />
            {children}
            <Analytics />
          </ClientOnly>
          <GoogleTagManager gtmId="GTM-MHX7R9FF" />
          <div
            className={`${pathname?.includes("/builder") || pathname === "/planner" ? "hidden" : ""} custom-shape-divider-bottom-1707076088 hiddenRow`}
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>{" "}
          <Footer />
        </body>
      </NextAuthProvider>
    </html>
  );
}
