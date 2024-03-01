import { TiArrowBack } from "react-icons/ti";
import Link from "next/link";
import { createClient } from "contentful";
import { SearchCard } from "@/components/SearchCard";
import BottomAssets from "@/components/BottomAssets";
import SearchDrawerContent from "./_components/SearchDrawerContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Search For The Best Hidden Gems in The Algarve ",
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
    apple: "/images/icon.png",
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

async function fetchSearchQuery(query: any) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  try {
    const res = await client.getEntries({
      content_type: ["beaches", "events", "restaurants", "adventure"],
      query: query,
      limit: 40,
      include: 10,
      skip: 0,
    });

    const data = res.items;
    return data; // Return the data
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error
  }
}

async function Search(searchParams: any) {
  const searchKey = searchParams.searchParams.q;
  let searchResults: any = [];

  if (searchKey) {
    searchResults = await fetchSearchQuery(searchKey);
  }

  return (
    <section className="w-11/12 mx-auto max-w-7xl sm:w-11/12 pt-20 mb-28">
      <section className="max-w-7xl mx-auto sm:mb-10">
        <Link href="/#search">
          <div className="flex items-center w-full space-x-1 -mt-4 mb-4 sm:mb-0 sm:mt-0">
            <TiArrowBack className="bg-black text-white rounded-full w-6 p-1 h-6" />
          </div>
        </Link>
        <SearchDrawerContent />
        <div className="w-11/12 sm:w-full flex justify-between items-center flex-wrap mx-auto mt-10 mb-2 overflow-hidden">
          <h3
            className="text-xl py-2  font-bold text-black sm:text-3xl"
            id="search"
          >
            Searching for: <span className="text-key">{searchKey}</span>
          </h3>
          <span className="text-xs">Found: {searchResults.length}</span>
        </div>
      </section>
      <section className="grid items-start w-full grid-cols-1 mt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 place-items-start">
        {/* Normal Cards with no search feature */}
        {searchResults.map((item: any, index: any) => (
          <SearchCard key={index} {...item} />
        ))}
      </section>
      <div className="mt-10 divider">
        <span className="text-xl">Some of our suggestions</span>
      </div>
      <BottomAssets />
    </section>
  );
}

export default Search;
