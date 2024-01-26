import "@mantine/carousel/esm/index";
import Header from "@/components/Layout/Header";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import type { Metadata, Viewport } from "next";
import ClientOnly from "@/components/ClientOnly";
import "react-toastify/dist/ReactToastify.css";
import getCurrentUser from "./libs/getCurrentUser";
import { ToasterProvider } from "./providers/ToasterProvider";
import { NextAuthProvider } from "./providers/AuthProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import { PT_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    default: "Algarve Wonders - The Best Hidden Gems in The Algarve",
    template: "%s | Algarve Wonders",
  },
  description:
    "Search, save and share the best hidden gems the Algarve has to offer. All in one place. Hassle free.",
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

  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: "device-width",
};

// Fetch Weather data
// async function getWeatherData() {
//   const res = await fetch(
//     `https://api.weatherapi.com/v1/current.json?key=8fd5b11106094719a89115725232912&q=Algarve&aqi=no`,
//   );
//   return await res.json();
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  // const weatherData = await getWeatherData();

  return (
    <html lang="en" className={`${ptsans.className} h-full `}>
      <NextAuthProvider>
        <body className="bg-white w-screen overflow-x-hidden ">
          <ClientOnly>
            <ToasterProvider />
            <section className="pb-12">
              <Header currentUser={currentUser} />
            </section>
            {children}
          </ClientOnly>
          <GoogleTagManager gtmId="GTM-MHX7R9FF" />
          <Footer />
        </body>
      </NextAuthProvider>
    </html>
  );
}
