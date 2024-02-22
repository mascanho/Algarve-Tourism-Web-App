import React from "react";
import { createClient } from "contentful";
import { catArr } from "@/Data/Categories";
import Link from "next/link";
import { Metadata } from "next";
import { IoArrowBack } from "react-icons/io5";
import { getContentfulData } from "@/libs/getContentfulData";
import BlogCarousel from "../blog/_components/Carousel";

export const metadata: Metadata = {
  title: "About Us",
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

// generate random categories on load
const contentCatArr = [
  "beaches",
  "events",
  "stays",
  "restaurants",
  "adventure",
  "sports",
];

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
    image: "https://www.iberian-escapes.com/images/praia-da-marinha-hiking.jpg",
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

const randomCats = Math.floor(Math.random() * contentCatArr.length - 1);

async function page() {
  const categoriesContentful = await getContentfulData(
    contentCatArr[randomCats],
    5,
  );

  // Generate random items
  const randomItems = (array: any) => {
    const randomIndex = Math.floor(Math.random() * (array.length - 1)) + 1;
    return array[randomIndex];
  };

  return (
    <section className=" sm:max-w-7xl sm:w-full mx-auto sm:h-full sm:px-4 pt-10 sm:pt-20  ">
      <div className="relative flex justify-center  w-full mx-auto ">
        <div className="sm:border-r sm:w-full block  w-11/12 pt-10 mx-auto justify-center sm:ml-0">
          <h2
            className="sm:w-full mx-auto w-full sm:border-b pb-5  font-bold text-black text-3xl
            sm:text-4xl"
          >
            About Us
          </h2>
          <section className="flex flex-col sm:mt-10 mt-5 sm:pr-8 space-y-5 mb-20 text-black">
            <p>
              Welcome to our corner of discovery, where the natural wonders of
              the Algarve come to life in all their splendor. We are a
              passionate team of explorers, adventurers, and nature enthusiasts
              who have embarked on a journey to uncover the region's best-kept
              secrets.
            </p>
            <p>
              Our website is more than just a virtual guide—it's a window into
              the heart of the Algarve's untouched beauty and the allure of its
              hidden gems.
            </p>
            <p>
              Our mission is simple: to provide you with an authentic and
              captivating experience of the Algarve that goes beyond the usual
              tourist paths. We believe that the true essence of a destination
              lies in its hidden corners, in the whispering woods, along the
              unspoiled shores, and within the ancient landscapes that few have
              ventured to explore.
            </p>
            <p>
              Through meticulous research and on-the-ground exploration, we have
              curated a collection of the most enchanting and
              off-the-beaten-path locations that the Algarve has to offer.
              **What We Offer: Your Personal Guide** Our website is designed
              with your curiosity and wanderlust in mind.
            </p>
            <p>
              We've meticulously organized a treasure trove of nature's wonders
              and secret hideaways, ensuring that your journey through the
              Algarve is as seamless and inspiring as possible. Each
              destination, from the hidden coves to the serene trails, is
              accompanied by insightful descriptions, captivating photographs,
              and practical travel tips.
            </p>
            <p>
              We've done the legwork so you can focus on the joy of exploration.
            </p>
            <p>
              We are not your typical travel guide. We are storytellers,
              dedicated to sharing the tales of the Algarve's landscapes, its
              history, and its inhabitants. With us, you won't just find a list
              of places to visit; you'll uncover the stories that make each
              location special.
            </p>
            <p>
              Whether you're seeking solitude amidst nature or yearning to
              capture the perfect sunset view, we're here to guide you towards
              the extraordinary moments that only the Algarve can offer.
            </p>

            <p>
              Your Adventure Awaits: Planning a trip to the Algarve has never
              been easier. With our user-friendly interface, you can
              effortlessly navigate through the best-hidden spots, creating your
              own personalized itinerary. Whether you're an avid hiker, a beach
              lover, or a seeker of authentic cultural experiences, our platform
              empowers you to tailor your Algarve adventure according to your
              preferences.
            </p>
            <p>
              join us on a journey of discovery as we invite you to witness the
              Algarve's natural wonders through our eyes. Let the landscapes
              captivate you, the stories enchant you, and the hidden treasures
              beckon you. Together, let's embark on a unique exploration of the
              Algarve, where the unseen becomes a reality and where every corner
              tells a story waiting to be unveiled.
            </p>
            <div className="pb-10 flex">
              <Link href={"/beaches"}>
                <span className="rounded-md ml-0 py-2 mt-2 text-black flex items-center">
                  <IoArrowBack className="inline-block mr-1" />
                  Start Exploring
                </span>
              </Link>
            </div>
          </section>
        </div>
        <div className="w-[480px] sm:pl-6  hidden sm:block">
          <section className="mt-10">
            <BlogCarousel items={categoriesContentful} />
          </section>
          <div className="mt-10"></div>
          <section className="mt-10">
            <div>
              <h4 className="text-lg">Sports to Do</h4>
              {sportsToDo.map((item) => (
                <div className="block mt-4 mb-4" key={item.id}>
                  <div className="flex">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-2 space-y-[2px]">
                      <h5 className="text-black text-sm font-bold">
                        {item?.name}
                      </h5>
                      <div className="flex">
                        <span className="text-xs line-clamp-2 pr-2">
                          {item?.desc}
                        </span>
                        <Link href={item?.path}>
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
                      <div className="ml-2 w-full space-y-[2px]">
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
