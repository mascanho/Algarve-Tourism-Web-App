import { cityArr } from "@/Data/Cities";
import React from "react";
import CardCity from "./[city]/CardCity";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Find Your City in The Algarve ",
  description: "Here you will find the best places in Algarve",
  icons: {
    icon: "/images/icon.png",
    href: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

function page() {
  return (
    <section className="max-w-7xl mx-auto pt-5 sm:pt-28 sm:px-3">
      <div className="sm:-mt-12 pt-8 sm:pt-0 mb-8 w-11/12 sm:w-full mx-auto">
        <Breadcrumbs />
      </div>
      <div className="w-11/12 sm:w-full mx-auto ">
        <img
          src="https://lp-cms-production.imgix.net/2022-05/GettyRF_1013112160.jpg?auto=format&w=1440&h=810&fit=crop&q=75"
          alt=""
          className="max-h-96 w-full object-cover rounded-xl"
        />
        <div className="space-y-4 mt-10 text-black">
          <h1 className="text-3xl sm:text-6xl text-black font-bold mb-8">
            Algarve
          </h1>
          <p>
            Nestled along the sun-drenched coastline of southern Portugal, the
            Algarve stands as a testament to nature's artistry and the
            harmonious blend of history and modernity. This captivating region
            is renowned for its pristine beaches, each one a unique masterpiece
            of nature's design. From the expansive sands of Praia da Rocha to
            the secluded coves of Praia do Camilo, the Algarve's coastline
            offers an array of beach experiences that cater to every traveler's
            dream. The gentle lapping of the waves against the shore creates a
            soothing symphony that resonates through the heart, inviting
            visitors to unwind and immerse themselves in the serenity of their
            surroundings.{" "}
          </p>
          <p>
            But the Algarve's appeal isn't confined to its coastline alone. Its
            Mediterranean climate is a blessing that bathes the region in
            sunshine for over 300 days a year. Sun-seekers and outdoor
            enthusiasts revel in the warm embrace of the sun, turning activities
            like hiking, golfing, and exploring the picturesque villages into
            delightful adventures. The region's climate, characterized by mild
            winters and balmy summers, ensures that every season is an
            opportunity to experience the Algarve's beauty in its own unique
            way.
          </p>
          <p>
            However, beyond the natural wonders and idyllic weather lies the
            heart of the Algarve: its people. The locals, known for their warm
            and welcoming nature, embody the true essence of Portuguese
            hospitality. As you traverse the cobblestone streets of historic
            towns like Faro, Lagos, and Albufeira, you'll be greeted with
            genuine smiles and open arms, making you feel like a part of their
            community.
          </p>
          <p>
            The Algarve's charm also stems from its ability to seamlessly blend
            tradition with modernity. Quaint fishing villages and vibrant
            markets exist alongside luxurious resorts and world-class dining
            establishments. This juxtaposition of old and new creates a dynamic
            tapestry that invites travelers to explore the region's rich history
            while indulging in contemporary comforts.
          </p>
          <p>
            Whether you're basking under the sun on a golden beach, delving into
            the region's storied past, or savoring delectable Portuguese
            cuisine, the Algarve offers an experience that transcends the
            ordinary. It's a place where the vibrant hues of sunset mirror the
            warmth of its people, where the whispering winds carry tales of
            ancient civilizations, and where the beauty of the land is only
            surpassed by the hearts of those who call it home. So, join us on a
            journey through the Algarve, where the beauty of its beaches, the
            generosity of its weather, and the kindness of its people combine to
            create an enchanting mosaic of memories waiting to be etched into
            your soul.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 sm:mt-12 sm:gap-4 overflow-hidden mx-auto w-11/12 sm:w-full sm:gap-y-8 gap-y-8 max-w-7xl   place-content-between">
        {cityArr.map((city: any) => (
          <CardCity
            key={city.id}
            city={city}
            name={city.name}
            image={city.image}
            route={city.route}
          />
        ))}
      </div>

      <div className="mt-10 space-y-4 max-w-7xl px-3 mx-auto text-black">
        <h3 className="font-bold text-xl">Charming Coastal Towns</h3>
        <p>
          The Algarve is not only about nature's grandeur but also about the
          quaint charm of its coastal towns. Lagos, with its historic
          architecture and vibrant markets, is a living testament to the
          region's rich history. Faro, the capital of the Algarve, enchants
          visitors with its medieval walls, cobbled streets, and a picturesque
          old town. Each town narrates a story of the region's past, with
          influences from Moorish, Roman, and medieval eras blending seamlessly
          into the present.
        </p>
        <p>
          In each city of the Algarve, history and modernity dance together,
          creating an atmosphere that invites exploration and relaxation in
          equal measure. From the narrow alleys of Faro to the vibrant streets
          of Albufeira, the charisma of these urban gems adds an extra layer of
          allure to the sun-drenched splendor that defines Portugal's southern
          coastal paradise.
        </p>
      </div>
      <div className="py-10  mx-auto max-w-7xl px-3">
        <Link href="/">
          <button type="button" className="flex text-key items-center">
            <IoArrowBack className="mr-1" />
            Home
          </button>
        </Link>
      </div>
    </section>
  );
}

export default page;
