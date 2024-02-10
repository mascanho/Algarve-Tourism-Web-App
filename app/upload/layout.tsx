import React from "react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Upload Your Daily Dishes | Algarve Wonders",
    template: "%s | Algarve Wonders",
  },
  description:
    "Upload your daily meals for others to see. Publish your meal for others to see. All in one place. Hassle free.",
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

function layout({ children }: any) {
  return <div className=" h-full ">{children}</div>;
}

export default layout;
