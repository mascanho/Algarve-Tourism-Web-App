import React from "react";
import { BlogCard } from "./BlogCard";
import { createClient } from "contentful";
import { catArr } from "@/Data/Categories";
import Link from "next/link";
import { Metadata } from "next";
import CarouselHero from "@/components/Carousel";
import BlogCarousel from "./_components/Carousel";
import { getContentfulData } from "@/libs/getContentfulData";

export const metadata: Metadata = {
  title: {
    default: "Algarve Wonders - The Blog",
    template: "%s | Algarve Wonders",
  },
  description: "The place to find the best places in the Algarve",
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
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },

  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

// Get all blogs from contentful
async function getBlogs() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID3!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN3!,
  });
  const res = await client.getEntries({
    content_type: "blog",
  });

  return await res.items;
}

async function page() {
  const blogs = await getBlogs();

  const allCats = ["beaches", "events", "restaurants", "adventure"];

  const beaches = await getContentfulData("beaches", 4);
  const events = await getContentfulData("events", 4);
  const restaurants = await getContentfulData("restaurants", 4);

  const all = [...beaches, ...events, ...restaurants];

  const sportsToDo = [
    {
      id: 1,
      name: "Surf Expert - School 🏄",
      image:
        "https://images.ctfassets.net/z8r91y113x4j/2Iosoq1xchir3mnPryMchN/c040f1c3a26f4394e55e362b990e26c3/unnamed.jpg",
      desc: "Since 2002, introducing the culture of surf, stand up paddle and their unique lifestyle, bringing people from all over the world together for unforgettable shared experiences in these amazing surf world. ",
      path: "/sports/surf-expert-school",
    },
    {
      id: 2,
      name: "Kitesurf Algarve 🪁",
      image:
        "https://images.ctfassets.net/z8r91y113x4j/ji8ii1EbGPmkUKbRP30tA/d7fd418f544d2c6dabe1450771b15ff7/g24.png",
      desc: "To be able to take advantage of all the sensations of this sport, you have to know how to use and control the equipment with security.",
      path: "/sports/kitesurf-algarve",
    },
  ];

  const beachesToVisit = [
    {
      id: 1,
      name: "Camilo Beach",
      image:
        "https://a.cdn-hotels.com/gdcs/production119/d895/b91c3722-92d0-4f4e-93de-00d83c6c1fc4.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
      desc: "Camilo Beach (Praia do Camilo to locals) is one of the finest places to enjoy the splendours of the Algarve coast.",
      path: "/beaches/camilo-beach",
    },
    {
      id: 2,
      name: "Marinha Beach",
      image:
        "https://www.iberian-escapes.com/images/praia-da-marinha-hiking.jpg",
      desc: "Praia da Marinha (translation: navy beach) is an iconic beach near Lagoa. It is known as one of the most beautiful beaches of the world.",
      path: "/beaches/marinha-beach",
    },
    {
      id: 3,
      name: "Santa Eulalia Beach",
      image:
        "https://www.granderealsantaeulalia.realhotelsgroup.com/wp-content/uploads/sites/228/2021/11/Quartos-Grande-Real-Santa-Eulalia-Resort-Hotel-Spa-Albufeira-001.jpg",
      desc: "Santa Eulalia Beach is one of the most beautiful beaches of the Algarve.",
      path: "/beaches/praia-de-santa-eulalia",
    },
  ];

  // Generate random items
  const randomItems = (array: any) => {
    const randomIndex = Math.floor(Math.random() * (array.length - 1)) + 1;
    return array[randomIndex];
  };

  return (
    <section className=" sm:max-w-7xl sm:w-full mx-auto sm:h-full  ">
      <div className="relative flex justify-center  w-full mx-auto ">
        <div className="sm:border-r sm:w-full block  w-full pt-10 mx-auto justify-center sm:ml-0">
          <h2 className="sm:w-11/12 mx-auto w-11/12  pb-10 font-bold text-black text-3xl">
            Articles
          </h2>
          <div className="mx-auto sm:mt-5 mb-64 ">
            {blogs.map((blog: any) => (
              <BlogCard
                key={blog?.sys?.id}
                image={blog?.fields?.image}
                title={blog?.fields?.title}
                slug={blog?.fields?.slug}
                description={blog?.fields?.description}
                body={blog?.fields?.body}
                author={blog?.fields?.author}
                avatar={blog?.fields?.avatar}
                tags={blog?.fields?.tags}
                date={blog?.fields?.date}
                role={blog?.fields?.role}
              />
            ))}
          </div>
        </div>
        <div className="w-[480px] sm:px-6  hidden sm:block">
          <div className="mt-10">
            <BlogCarousel items={all} />
          </div>
          <section className="mt-10">
            <div>
              <h4 className="text-lg">Sports to Do</h4>
              {sportsToDo.map((item) => (
                <div className="block mt-4 mb-4" key={item.id}>
                  <div className="flex">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-2">
                      <h5 className="text-black text-sm font-bold">
                        {item?.name}
                      </h5>
                      <div className="flex mt-1">
                        <span className="text-xs line-clamp-2 pr-2">
                          {item?.desc}
                        </span>
                        <Link href={item.path}>
                          <button className="border px-3 rounded-md">
                            view
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-lg">Beaches to Visit</h2>
            <div className="mt-5">
              {beachesToVisit.map((item) => (
                <div key={item?.id} className="flex">
                  <Link href={item?.path}>
                    <div className="flex mb-5 space-y-1 cursor-pointer">
                      <div className="rounded-md overflow-hidden">
                        <img
                          src={item?.image}
                          alt=""
                          className="h-16 w-36  rounded-md"
                        />
                      </div>
                      <div className="ml-2 w-full space-y-1">
                        <p className="text-sm font-semibold text-black">
                          {item.name}
                        </p>
                        <span className="text-xs line-clamp-2 w-full flex-1">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default page;
