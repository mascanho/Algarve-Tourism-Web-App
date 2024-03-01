import Form from "./Form";
import Image from "next/image";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "The Best Hidden Gems in The Algarve",
    template: "%s | Algarve Wonders",
  },
  description: "The place to find the best places in the Algarve",
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

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: "device-width",
};

function page() {
  return (
    <div className="flex flex-col h-screen justify-center w-full">
      <section className="sm:w-[90%] md:w-[90%] lg:w-[90%] max-w-5xl sm:h-[70%]  mx-auto sm:flex justify-center rounded-md  space-x-2 sm:border">
        <Form />
        <section className="relative w-[100%]">
          <Image
            src="/images/places.jpeg"
            alt="contact image"
            // width={600}
            // height={500}
            fill
            className="relative"
          />
          {/* <div className="bg-gradient-to-r from-white h-full w-10 absolute top-0 -left-4" /> */}
        </section>
      </section>
    </div>
  );
}

export default page;
