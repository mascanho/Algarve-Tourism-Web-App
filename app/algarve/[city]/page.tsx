import React from "react";
import TableAccordion from "./Accordion";
import CardCity from "./CardCity";
import CarouselCity from "./Carrossel";
import { createClient } from "contentful";
import { notFound, redirect } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import TableOfContentsFloating from "@/app/blog/[slug]/TableOfContents";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import { IoArrowBack } from "react-icons/io5";
import { YouTubeEmbed } from "@next/third-parties/google";
import Youtube from "@/components/Youtube";

const options = {
  renderNode: {
    "embedded-asset-block": (node: any) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file.contentType;
      const src = file.url;
      const alt = title || description;
      if (mimeType === "image/jpeg" || mimeType === "image/png") {
        return <img src={src} alt={alt} />;
      }
    },
  },
};

export function generateMetadata({ params, searchParams }: any) {
  return {
    title: params.city.charAt(0).toUpperCase() + params.city.slice(1),
    description:
      "Here you can enjoy the weather, the local food, and much more.",
    icons: {
      icon: "/images/icon.png",
      href: "/images/icon.png",
      apple: "/apple-icon.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    },
  };
}

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

const getCities = async () => {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID2!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN2!,
  });
  const res = await client.getEntries({
    content_type: "cities",
  });

  return await res.items;
};

const tableData: any = [
  {
    id: 1,
    label: "About ",
    url: "/",
    link: "#about",
    order: 1,
  },
  {
    id: 2,
    label: "How to get here",
    url: "#map",
    link: "#map",
    order: 1,
  },
  {
    id: 3,
    label: "What to do",
    url: "#whattodo",
    link: "#whattodo",
    order: 1,
  },
  {
    id: 4,
    label: "History of the city",
    url: "#history",
    link: "#history",
    order: 1,
  },
  {
    id: 5,
    label: "What is the weather like?",
    url: "#weather",
    link: "#weather",
    order: 1,
  },
  {
    id: 6,
    label: "Watch the video",
    url: "#video",
    link: "#food",
    order: 1,
  },
];

async function page(props: any) {
  const categories = await getAllCategories();
  const cities = await getCities();

  let city = props.params.city;

  const filteredData: any = cities.filter(
    (obj: any) => obj.fields.slug === city,
  );

  // conditionally route the user if the city is not included in the cityArr

  let cityIsPresent = false;
  for (let i = 0; i < cities.length; i++) {
    if (
      cities[i].fields.name.toLowerCase() === city ||
      cities[i].fields.slug === city
    ) {
      cityIsPresent = true;
      break;
    }
  }
  if (!cityIsPresent) {
    notFound();
  }

  let filteredCity = categories.filter((cat: any) => {
    if (
      cat?.fields.city
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase() === city
    ) {
      return cat.fields;
    }
  });

  const cityImages = filteredCity.map((cat: any) => {
    return cat.fields;
  });

  const test = categories.map((cat: any) => {
    return cat?.fields.city
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  });

  //Shuffle the array with the cards
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(filteredCity);

  // Contentful Rich Text Renderer
  const aboutCity = documentToReactComponents(
    filteredData[0]?.fields?.about,
    options,
  );

  const whatToDo = documentToReactComponents(
    filteredData[0]?.fields?.whatToDo,
    options,
  );

  const history = documentToReactComponents(
    filteredData[0]?.fields?.history,

    options,
  );

  const weather = documentToReactComponents(filteredData[0]?.fields?.weather);

  return (
    <section className="sm:pt-8">
      <section className="sm:pt-10 pt-10 max-w-7xl w-11/12 mx-auto sm:flex">
        <div className="w-full">
          <div className="text-gray-400 mb-2 pt-4">
            <Breadcrumbs />
          </div>
          <div className="sm:hidden w-full max-w-7xl mb-3 mx-auto">
            <TableAccordion tableData={tableData} />
          </div>
          <div className="sm:w-full max-w-5xl  sm:pr-10">
            <img
              src={filteredData[0]?.fields?.mainImage?.fields?.file?.url}
              alt="image"
              className="mx-auto relative filter w-full max-h-[300px] object-cover rounded-md"
            />
          </div>
        </div>
        {/* Desktop */}
        <aside className=" h-fit sm:w-80 p-4  hidden sm:block  sm:top-20 sm:right-10">
          <TableOfContentsFloating blogtableData={tableData} />
        </aside>
      </section>
      <section className="sm:mt-8 mt-4 max-w-7xl mx-auto w-11/12 space-y-3 sm:space-y-5 text-black">
        <h1 id="about" className="text-4xl font-bold sm:text-6xl text-black">
          {filteredData[0]?.fields?.name}
        </h1>
        <div className="max-w-5xl space-y-3">{aboutCity}</div>
        <div className="pt-5" id="map">
          <iframe
            src={filteredData[0]?.fields?.embededMap}
            width="600"
            height="450"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
            className="max-w-5xl w-full"
          ></iframe>
        </div>

        <div className="max-w-5xl space-y-3 pt-5" id="whattodo">
          <h2 className="sm:text-3xl text-3xl text-black font-bold">
            What to do
          </h2>
          <div className="richText">{whatToDo}</div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-col-4 gap-x-4 xl:gap-x-2 w-full gap-y-10 pt-5 sm:max-w-5xl m-0 place-content-between place-items-stretch md:gap-x-7">
          {cityImages.length === 0
            ? null
            : filteredCity
                .slice(0, 6)
                .map((i: any) => (
                  <CardCity
                    key={i}
                    image={i?.fields?.mainImage?.fields?.file?.url}
                    title={i?.fields?.title}
                    desc={i?.fields?.shortDescription}
                    slug={i?.fields?.slug}
                    type={i?.fields?.type}
                  />
                ))}
        </div>

        <div className="max-w-5xl space-y-3 pt-5" id="history">
          <h2 className="sm:text-3xl text-3xl text-black font-bold">History</h2>
          <div className="richText">{history}</div>
        </div>

        {cityImages.length === 0 ? null : (
          <div className="max-w-5xl py-5">
            <CarouselCity images={cityImages} />
          </div>
        )}
        <div className="max-w-5xl space-y-3" id="weather">
          <h2 className="sm:text-3xl text-3xl text-black font-bold">Weather</h2>
          <div className="richText">{weather}</div>
        </div>
        {/* embeded Youtube section */}
        {filteredData[0]?.fields?.youtubeId ? (
          <div id="video" className="space-y-3 pt-5">
            <h2 className="sm:text-3xl text-3xl text-black font-bold">
              Watch the video
            </h2>
            <Youtube id={filteredData[0]?.fields?.youtubeId} />
            <span className="text-xs text-black/50">
              &copy; All rights reserved to the video creator/owner
            </span>
          </div>
        ) : null}
        <div className="py-10">
          <Link href="/algarve">
            <button type="button" className="flex items-center">
              <IoArrowBack className="mr-1" />
              Go back
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default page;
