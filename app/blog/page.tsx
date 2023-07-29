import React from "react";
import { BlogCard } from "./BlogCard";
import { createClient } from "contentful";
import { catArr } from "@/Data/Categories";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Discover the latest news and blog posts about the Algarve",
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
  console.log(blogs, "From the blogs");

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

  const randomItem = randomItems(catArr);
  console.log(randomItem.name, "random Item");

  return (
    <section className=" sm:max-w-7xl sm:w-full mx-auto sm:h-full  ">
      <div className="relative flex justify-center  w-full mx-auto ">
        <div className="sm:border-r sm:w-full block  w-full pt-10 mx-auto justify-center sm:ml-0">
          <div className="mx-auto sm:w-11/12 my-6 w-full flex sm:flex ">
            <input
              className=" mx-auto  sm:mx-0 rounded-lg bg-transparent border py-1 pl-2 sm:w-full w-11/12"
              placeholder="Search..."
            />
          </div>
          <h2 className="sm:w-11/12 mx-auto w-11/12 border-b pb-5 font-bold text-black">
            Articles
          </h2>
          <div className="mx-auto mt-5 mb-64">
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
              />
            ))}
          </div>
        </div>
        <div className="w-[480px] sm:pl-6  hidden sm:block">
          <div className="mt-10">
            <div className="bg-gray-200 p-4 py-6 rounded-lg space-y-2">
              <h3 className="text-black font-bold text-lg">
                Randomise my selection
              </h3>
              <p className="text-sm">
                Let chance choose your next destination, your next adventure,
                your next trip
              </p>
              <div className="mt-2">
                <button className="bg-sky rounded-md px-4 py-1 mt-2 text-white">
                  Random Choice
                </button>
              </div>
            </div>
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
                      <div className="flex">
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
                      <div className="ml-2 w-full">
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
