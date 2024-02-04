"use client";
import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
} from "@mantine/core";
import classes from "./FeaturesImages.module.css";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { MdAccessTime } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMessageLanguage } from "react-icons/tb";
import { IoFishOutline } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { BsGeoAlt } from "react-icons/bs";
import { MdOutlineFactory } from "react-icons/md";
import { MdOutlineLocalPolice } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const data = [
  {
    id: 1,
    image: <RiMoneyEuroCircleLine />,
    title: "Currency",
    description:
      "The Algarve currency is the Euro with the smallest monetary unit being the cent, which is equivalent to 0.01 EUR.",
  },
  {
    id: 2,
    image: <MdAccessTime />,
    title: "Timezone",
    description:
      "The Algarve, like the rest of Portugal, is in the Western European Time (WET) zone during the standard time and Western European Summer Time (WEST) during daylight saving time.",
  },
  {
    id: 343,
    image: <FaPhoneAlt className="text-3xl" />,
    title: "Phone Code",
    description:
      "The country code for Portugal, including the Algarve, is +351. For any urgencies suchs as police or ambulance services, the phone number is simply 112.",
  },
  {
    id: 2323,
    image: <TbMessageLanguage />,
    title: "Language",
    description:
      "Portuguese is the official language, and the local culture is deeply rooted in the country's history, including influences from the Moors and other Mediterranean cultures. English is, however, widely spoken",
  },
  {
    id: 54,
    image: <IoFishOutline />,
    title: "Cuisine",
    description:
      "Algarve cuisine is influenced by its coastal location, featuring fresh seafood, grilled fish, and a variety of Mediterranean flavors.",
  },
  {
    id: 654,
    image: <TiWeatherSunny />,
    title: "Climate",
    description:
      "The Algarve enjoys a Mediterranean climate with hot, dry summers and mild winters. It is one of the sunniest places in Europe, with over 3,000 hours of sunshine per year.",
  },
  {
    id: 65432,
    image: <BsGeoAlt className="text-3xl" />,
    title: "Geography",
    description:
      "The Algarve is Portugal's southernmost region and is bordered by the Atlantic Ocean to the south and west. The region covers approximately 4,997 square kilometers.",
  },
  {
    id: 9098,
    image: <MdOutlineFactory />,
    title: "Cork Production",
    description:
      "The Algarve is a significant cork-producing region, and cork oak trees are a common sight in the landscape. Cork is used for a variety of products, including wine stoppers, flooring, and fashion items.",
  },
  {
    id: 21345,
    image: <MdOutlineLocalPolice />,
    title: "Safe Destination",
    description:
      "Portugal, including the Algarve, is generally considered a safe destination for travelers. The region is known for its hospitality and welcoming atmosphere.",
  },
];

function AlgarveSpecs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "40px 0px",
  });

  return (
    <section ref={ref}>
      <div className="max-w-7xl w-11/12 mx-auto space-y-4 mb-8 mt-20 sm:mt-28">
        <h4 className="text-xl">Good To Know</h4>
      </div>
      <section
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        className="grid sm:grid-cols-3 gap-x-4 gap-y-10 max-w-7xl m-auto w-11/12"
      >
        {data.map((item, index) => {
          return (
            <div key={item.title} className="flex">
              <div>
                <div className="flex justify-center items-center text-4xl text-white mr-3 bg-key w-12 h-12 rounded-xl">
                  {item.image}
                </div>
              </div>
              <div className="w-9/12">
                <span className="font-semibold text-xl pb-1 text-gray-800">
                  {item.title}
                </span>
                <div className="">
                  <span className="text-sm text-gray-500">
                    {item.description}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default AlgarveSpecs;
