import { createClient } from "contentful";
import { CategoryCard } from "@/components/CategoryCard";
import { catArr } from "@/Data/Categories";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "The Best Places",
  description: "...",
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
};

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
  if (routeMatched) {
    const shuffledCategory = category?.sort(() => 0.5 - Math.random());
    return <CategoryCard category={shuffledCategory} />;
  }
  // If the route does not match Contentful categories then render the a warning
  notFound();
}

export default Page;
