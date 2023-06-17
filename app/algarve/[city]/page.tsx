import React from "react";
import type { Metadata } from "next";
import TableAccordion from "./Accordion";
import CardCity from "./CardCity";
import CarouselCity from "./Carrossel";
import { createClient } from "contentful";
import { cityArr } from "@/Data/Cities";
import { redirect } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

// Get all categories from contentful
async function getAllCategories() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID2!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN2!,
  });
  const res = await client.getEntries({
    content_type: ["beaches", "events", "restaurants"],
  });

  return await res.items;
}
const tableData: any = [
  {
    id: 1,
    name: "About ",
    url: "/",
    anchor: "#about",
  },
  {
    id: 2,
    name: "City",
    url: "#map",
    anchor: "#city",
  },
];

async function page(props: any) {
  const categories = await getAllCategories();

  let city = props.params.city;

  const filteredData: any = categories.filter(
    (obj: any) => obj.fields.slug === city
  );

  console.log(filteredData, "city");

  // conditionally route the user if the city is not included in the cityArr
  let cityIsPresent = false;
  for (let i = 0; i < cityArr.length; i++) {
    if (cityArr[i].name.toLowerCase() === city) {
      cityIsPresent = true;
      break;
    }
  }
  if (!cityIsPresent) {
    redirect("/algarve");
  }

  let filteredCity = categories.filter((cat: any) => {
    if (cat?.fields?.city?.toLowerCase() === city.toLowerCase()) {
      return cat.fields;
    }
  });

  const cityImages = filteredCity.map((cat: any) => {
    return cat.fields;
  });

  console.log(filteredCity, "city");

  //Shuffle the array with the cards
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(filteredCity);

  const aboutCity = documentToReactComponents(
    categories[0]?.fields?.aboutCity,
    options
  );

  const whatToDo = documentToReactComponents(
    categories[0]?.fields?.whatToDo,
    options
  );

  const history = documentToReactComponents(
    categories[0]?.fields?.history,

    options
  );

  return (
    <>
      <div className="sm:hidden mt-10 w-11/12 max-w-7xl mx-auto">
        <TableAccordion tableData={tableData} />
      </div>
      <section className="sm:pt-20 pt-10 max-w-7xl w-11/12 mx-auto sm:flex">
        <div className="w-full">
          <div className="sm:w-full max-w-5xl  sm:pr-10">
            <img
              src={filteredData[0]?.fields?.mainImage?.fields?.file?.url}
              alt="image"
              className="mx-auto relative filter w-full object-cover"
            />
          </div>
        </div>
        {/* Mobile */}
        {/* Desktop */}
        <aside className="border h-fit sm:w-72 p-4 rounded-md hidden sm:block">
          <h2 className="mx-auto w-full text-center mb-2 ">Title</h2>
          {tableData.map((i: any) => (
            <Link key={i} href={i.url}>
              <p
                key={i}
                className="flex pl-2 items-center mx-auto space-x-4 text-black"
              >
                <span className="text-gray-400 text-xl items-center mr-4 flex classNametext-gray-400">
                  {i.id} {""}
                </span>
                {""}
                {i.name}
              </p>
            </Link>
          ))}
        </aside>
      </section>
      <section className="my-10 max-w-7xl mx-auto w-11/12 space-y-5">
        <h1 id="about" className="text-2xl font-bold sm:text-6xl text-black">
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

        <div className="max-w-5xl space-y-3 pt-5">
          <h2 className="sm:text-3xl text-3xl text-black font-bold">
            What to do
          </h2>
          <div className="richText">{whatToDo}</div>
        </div>
        <div className="grid sm:grid-cols-3 w-full gap-y-10 pt-5 max-w-5xl place-content-between place-items-stretch gap-x-6">
          {filteredCity.slice(0, 6).map((i: any) => (
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

        <div className="max-w-5xl space-y-3 pt-10">
          <h2 className="sm:text-3xl text-3xl text-black font-bold">History</h2>
          <div className="richText">{history}</div>
        </div>

        <div className="max-w-5xl py-10">
          <CarouselCity images={cityImages} />
        </div>
      </section>
    </>
  );
}

export default page;
