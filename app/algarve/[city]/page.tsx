import React from "react";
import type { Metadata } from "next";
import TableAccordion from "./Accordion";
import CardCity from "./CardCity";
import CarouselCity from "./Carrossel";
import { createClient } from "contentful";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { cityArr } from "@/Data/Cities";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

// Get all categories from contentful
async function getAllCategories() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const res = await client.getEntries({
    content_type: ["beaches", "events", "restaurants", "cities"],
  });

  return await res.items;
}
const tableData: any = [
  {
    id: 1,
    name: "City",
    url: "/",
    anchor: "#city",
  },
  {
    id: 2,
    name: "City",
    url: "/",
    anchor: "#city",
  },
];

async function page(props: any) {
  const categories = await getAllCategories();

  let city = props.params.city;

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
    if (cat.fields.city.toLowerCase() === city.toLowerCase()) {
      return cat.fields;
    }
  });

  const cityImages = filteredCity.map((cat: any) => {
    return cat.fields;
  });

  //Shuffle the array with the cards
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(filteredCity);

  return (
    <>
      <div className="sm:hidden mt-10 w-11/12 max-w-7xl mx-auto">
        <TableAccordion tableData={tableData} />
      </div>
      <section className="sm:pt-20 pt-10 max-w-7xl w-11/12 mx-auto sm:flex">
        <div className="w-full">
          <div className="sm:w-full max-w-5xl  sm:pr-10">
            <img
              src="https://s3-eu-west-1.amazonaws.com/jet2blog/production/_1200x630_crop_center-center_none/FAO_Albufeira_Overview__Marina_955186632_Getty_RGB-136-DPI-For-Web.jpg"
              alt="image"
              className="mx-auto relative filter w-full object-cover"
            />
          </div>
        </div>
        {/* Mobile */}
        {/* Desktop */}
        <aside className="border h-fit sm:w-72 p-4 rounded-md hidden sm:block">
          <h2 className="mx-auto w-full text-center mb-2 ">Title</h2>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <p
              key={i}
              className="flex pl-2 items-center mx-auto space-x-4 text-black"
            >
              <span className="text-gray-400 text-xl items-center mr-4 flex classNametext-gray-400">
                {i} {""}
              </span>
              {""}
              Lorem, ipsum dolor.
            </p>
          ))}
        </aside>
      </section>
      <section className="my-10 max-w-7xl mx-auto w-11/12 space-y-5">
        <h1 id="city" className="text-2xl font-bold sm:text-6xl text-black">
          Albufeira
        </h1>
        <div className="max-w-5xl space-y-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            labore! Nam molestiae necessitatibus, ea fuga suscipit magni
            explicabo adipisci illum numquam repudiandae quis totam voluptas
            aliquid quisquam in ullam dolorem error quo hic repellendus dolore
            atque exercitationem commodi! Aperiam, quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            temporibus corporis cupiditate. Consequuntur nam fuga suscipit harum
            quasi laboriosam facilis totam ex magni, vero magnam veniam qui
            delectus quia quidem, dolorum quaerat neque minima animi accusamus
            expedita quo at recusandae. Molestias mollitia adipisci ex
            doloremque fuga amet saepe expedita temporibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            dolore perspiciatis impedit fugit laboriosam cumque, nostrum in
            rerum pariatur officia nesciunt iusto debitis praesentium esse sint
            a velit nisi? Magnam consequatur suscipit eum eaque fuga ullam,
            quibusdam itaque ratione expedita dolorem ut maiores facilis, eius
            deleniti unde ipsum quis nam.
          </p>
        </div>
        <div className="pt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101814.59849718511!2d-8.300387963770717!3d37.11211048977129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1aceae38ddc41f%3A0xed22e7a562441045!2sAlbufeira%2C%20Portugal!5e0!3m2!1sen!2suk!4v1686943665641!5m2!1sen!2suk"
            // width="600"
            // height="450"
            className="max-w-5xl w-11/12 h-[450px]"
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="max-w-5xl space-y-3 pt-5">
          <h2 className="sm:text-3xl text-3xl text-black font-bold">
            What to do
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            labore! Nam molestiae necessitatibus, ea fuga suscipit magni
            explicabo adipisci illum numquam repudiandae quis totam voluptas
            aliquid quisquam in ullam dolorem error quo hic repellendus dolore
            atque exercitationem commodi! Aperiam, quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            labore! Nam molestiae necessitatibus, ea fuga suscipit magni
            explicabo adipisci illum numquam repudiandae quis totam voluptas
            aliquid quisquam in ullam dolorem error quo hic repellendus dolore
            atque exercitationem commodi! Aperiam, quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            labore! Nam molestiae necessitatibus, ea fuga suscipit magni
            explicabo adipisci illum numquam repudiandae quis totam voluptas
            aliquid quisquam in ullam dolorem error quo hic repellendus dolore
            atque exercitationem commodi! Aperiam, quod.
          </p>
        </div>
        <div className="grid grid-cols-3 w-full gap-y-10 pt-5 max-w-5xl place-content-between place-items-stretch gap-x-6">
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            labore! Nam molestiae necessitatibus, ea fuga suscipit magni
            explicabo adipisci illum numquam repudiandae quis totam voluptas
            aliquid quisquam in ullam dolorem error quo hic repellendus dolore
            atque exercitationem commodi! Aperiam, quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            labore! Nam molestiae necessitatibus, ea fuga suscipit magni
            explicabo adipisci illum numquam repudiandae quis totam voluptas
            aliquid quisquam in ullam dolorem error quo hic repellendus dolore
            atque exercitationem commodi! Aperiam, quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            labore! Nam molestiae necessitatibus, ea fuga suscipit magni
            explicabo adipisci illum numquam repudiandae quis totam voluptas
            aliquid quisquam in ullam dolorem error quo hic repellendus dolore
            atque exercitationem commodi! Aperiam, quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            labore! Nam molestiae necessitatibus, ea fuga suscipit magni
            explicabo adipisci illum numquam repudiandae quis totam voluptas
            aliquid quisquam in ullam dolorem error quo hic repellendus dolore
            atque exercitationem commodi! Aperiam, quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            labore! Nam molestiae necessitatibus, ea fuga suscipit magni
            explicabo adipisci illum numquam repudiandae quis totam voluptas
            aliquid quisquam in ullam dolorem error quo hic repellendus dolore
            atque exercitationem commodi! Aperiam, quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            labore! Nam molestiae necessitatibus, ea fuga suscipit magni
            explicabo adipisci illum numquam repudiandae quis totam voluptas
            aliquid quisquam in ullam dolorem error quo hic repellendus dolore
            atque exercitationem commodi! Aperiam, quod.
          </p>
        </div>

        <div className="max-w-5xl py-10">
          <CarouselCity images={cityImages} />
        </div>
      </section>
    </>
  );
}

export default page;
