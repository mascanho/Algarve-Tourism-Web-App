import { TiArrowBack } from "react-icons/ti";
import Link from "next/link";
import { createClient } from "contentful";
import { SearchCard } from "@/components/SearchCard";
import BottomAssets from "@/components/BottomAssets";
import SearchDrawerContent from "./_components/SearchDrawerContent";

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
    console.log(data);
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
    <section className="w-11/12 mx-auto max-w-7xl sm:w-11/12 pt-5 mb-28">
      <SearchDrawerContent />
      <section className="max-w-7xl mx-auto sm:mb-10">
        <Link href="/#search">
          <div className="flex items-center w-full space-x-1 -mt-4 mb-4 sm:mb-0 sm:mt-0">
            <TiArrowBack />
            <span>Back to search</span>
          </div>
        </Link>
        <h3
          className="text-xl py-2 sm:py-4 font-bold text-black sm:text-3xl"
          id="search"
        >
          Searching for: <span className="text-sky">{searchKey}</span>
        </h3>
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
