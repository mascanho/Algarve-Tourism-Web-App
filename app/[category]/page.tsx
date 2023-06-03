import { createClient } from "contentful";
import Routes from "@/Routes/routes";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsBookmarkHeart } from "react-icons/bs";
import { CategoryCard } from "@/components/CategoryCard";

async function Page(props: any) {
  let pathname = props.params.category;
  // Fetch Contentful data
  async function getData() {
    // pathname = "events";

    const client: any = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
    const data = await client.getEntries({ content_type: `${pathname}` });

    return await data.items;
  }

  const category: any = await getData();

  function addToFavourites(e: any) {
    e.stopPropagation();
    const data = {
      id: category[0].id,
    };
    console.log(category.id, "added to favourites");
  }

  return <CategoryCard category={category} />;
}

export default Page;
