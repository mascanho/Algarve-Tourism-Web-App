import { Metadata } from "next";
import BuilderHeader from "./components/header";

export const metadata: Metadata = {
  title: {
    default: "Discover The Best Hidden Gems in The Algarve",
  },
  description:
    "Automated generation of the best places to visit in the algarve. Discover the best hidden gems and enjoy the culture. Find the best restaurants, hotels and more.",
  robots: {
    index: false,
    follow: false,
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
const BuilderLayout = ({ children }: any) => {
  return (
    <div className="relative min-h-screen">
      <BuilderHeader />
      {children}
    </div>
  );
};

export default BuilderLayout;
