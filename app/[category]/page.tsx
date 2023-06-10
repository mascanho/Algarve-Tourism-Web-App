import { createClient } from "contentful";
import Routes from "@/Routes/routes";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsBookmarkHeart } from "react-icons/bs";
import { CategoryCard } from "@/components/CategoryCard";
import { catArr } from "@/Data/Categories";

async function Page(props: any) {
  let pathname = props.params.category;
  // Fetch Contentful data
  let routeMatched = false;
  async function getData() {
    // pathname = "events";

    const client: any = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    for (const obj of catArr) {
      const plainPathname = obj.route.replace("/", "");
      switch (pathname) {
        case plainPathname:
          routeMatched = true;
          break;
      }
    }

    if (!routeMatched) {
      return <p>Hi</p>;
    }

    const data = await client.getEntries({ content_type: `${pathname}` });
    return await data.items;
  }

  const category: any = await getData();

  function addToFavourites(e: any) {
    e.stopPropagation();
    const data = {
      id: category[0].id,
    };
  }

  // If the route matches Contentful categories then render the categorey card
  if (routeMatched) return <CategoryCard category={category} />;

  // If the route does not match Contentful categories then render the a warning
  return (
    <>
      <section className="ml-6">
        <h2 className="text-2xl">
          {" "}
          <span className="text-sky">{pathname} </span>
          {""}does not exist
        </h2>
        <p>Please select an existing category</p>
      </section>
    </>
  );
}

export default Page;
