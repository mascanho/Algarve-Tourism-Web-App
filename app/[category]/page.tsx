import { createClient } from "contentful";
import { catArr } from "@/Data/Categories";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import dynamic from "next/dynamic";

const CategoryCard = dynamic(() => import("@/components/CategoryCard"), {});

export const metadata: Metadata = {
  title: "The Best Places",
  description:
    "Discover the best places to visit in the Algarve, the most beautiful gems and hidden treasures.",
  icons: {
    icon: "/images/icon.png",
    href: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

async function Page(props: any) {
  let pathname = props?.params?.category;
  // Fetch Contentful data
  let routeMatched = false;

  const filteredCity = props.searchParams.city
    ?.normalize("NFD")
    ?.replace(/[\u0300-\u036f]/g, "");

  async function getData() {
    try {
      const client: any = createClient({
        space: process?.env?.CONTENTFUL_SPACE_ID!,
        accessToken: process?.env?.CONTENTFUL_ACCESS_TOKEN!,
      });

      for (const obj of catArr) {
        const plainPathname = obj?.route?.replace("/", "");
        switch (pathname) {
          case plainPathname:
            routeMatched = true;
            break;
        }
      }

      if (!routeMatched) {
        notFound();
      }

      const data = await client?.getEntries({ content_type: `${pathname}` });
      return await data?.items;
    } catch (error) {
      console.log(error);
      notFound();
    }
  }

  try {
    let category: any = await getData();

    if (filteredCity) {
      // filter the data based on the city
      category = category?.filter((obj: any) => {
        return (
          obj?.fields?.city
            ?.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase() === filteredCity
        );
      });
    }

    // If the route matches Contentful categories then render the categorey card
    if (routeMatched) {
      let shuffledCategory = category?.sort(() => 0.5 - Math.random());

      return <CategoryCard category={shuffledCategory} />;
    }

    // If the route does not match Contentful categories then render the a warning
  } catch (error) {
    redirect("/404");
  }
}

export default Page;
