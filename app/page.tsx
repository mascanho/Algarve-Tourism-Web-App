import Image from "next/image";
import { Inter } from "next/font/google";
import Selection from "@/components/Selection";
import { Card } from "@/components/Card";
import Pagination from "@/components/Pagination";
import BottomAssets from "@/components/BottomAssets";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import { Reviews } from "@/Data/Reviews";
import PopularCategories from "@/components/PopularCategories";
import { createClient } from "contentful";
import CarouselHero from "@/components/Carousel";
import { catArr } from "@/Data/Categories";
import RandomBanner from "@/components/Layout/RandomBanner";

export const metadata = {
  title: "Algarve Wonders - Find The Best Hidden Gems",
  description: "The Best Place To Find The Hidden Gems In Algarve",
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

const inter = Inter({ subsets: ["latin"] });

// Get all categories from contentful
async function getAllCategories() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const res = await client.getEntries({
    content_type: ["beaches", "events", "restaurants", "adventure"],
  });

  return await res.items;
}

export default async function Home(props: any) {
  const categories = await getAllCategories();

  const shuffledCategories = categories.sort(() => 0.5 - Math.random());

  return (
    <>
      <Hero categories={categories} />
      <section className="pt-14 sm:pt-20 pb-6 space-y-4 text-cente-white">
        <div className="-q11/12 mx-auto text-center">
          <h3 className="text-3xl font-bold text-black sm:text-5xl">
            Discover the best of the Algarve
          </h3>
        </div>
        <h4 className="w-8/12 mx-auto text-center">
          Check out this week&apos;s selection of popular places and events
        </h4>
        <section className="w-11/12 mx-auto max-w-7xl sm:w-11/12 sm:pt-5">
          <Selection />
          <section className="sm:grid mx-auto containera items-start w-full sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 sm:gap-y-2 place-items-center">
            {/* Normal Cards with no search feature */}
            {categories.slice(0, 8).map((cat: any) => (
              <Card
                key={Math.random()}
                title={cat?.fields?.title}
                description={cat?.fields?.shortDescription}
                image={cat?.fields?.mainImage?.fields?.file?.url}
                category={categories}
                slug={cat?.fields?.slug}
                id={cat?.sys?.id}
                hiddenGem={cat?.fields?.hiddenGem}
                city={cat?.fields?.city}
                type={cat?.fields?.type}
                shortDescription={cat?.fields?.shortDescription}
                mainImage={cat?.fields?.mainImage?.fields?.file?.url}
                rating={cat?.fields?.rating}
                tags={cat?.fields?.tags}
                embededMap={cat?.fields?.embededMap}
                mapShare={cat?.fields?.mapShare}
                price={cat?.fields?.price}
              />
            ))}
          </section>
          <Pagination categories={categories} />
          <BottomAssets />
        </section>
      </section>
      <section className="h-full mx-auto max-w-7xl">
        <div className="my-10 text-center sm:pt-20">
          <h2 className="text-4xl font-semibold text-black sm:text-4xl">
            Satisfied Visitors
          </h2>
          <h4 className="w-10/12 mx-auto mt-4 sm:w-6/12">
            See what people are talking about the fantastic locations, events
            and hidden gems in the south of Portugal
          </h4>
        </div>
        <section className="grid sm:grid-cols-3 gap-y-6 mx-auto justify-items-center">
          {Reviews.map((review: any) => (
            <Review
              key={review.id}
              id={review.id}
              name={review.name}
              job={review.job}
              rating={review.rating}
              review={review.review}
              image={review.image}
            />
          ))}
        </section>
        <section className="pt-16 sm:pt-28 pb-16">
          <RandomBanner categories={categories} />
          <PopularCategories />
        </section>
      </section>
      <section className="mx-auto mb-40 ">
        <CarouselHero categories={categories} />
      </section>
    </>
  );
}
