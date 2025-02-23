// @ts-nocheck
"use client";
import { Tabs } from "@mantine/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Reviews from "./Reviews";
import { useSearchParams } from "next/navigation";
import Youtube from "../Youtube";
import { PiYoutubeLogoLight } from "react-icons/pi";

function TabsRow({ filteredData, reviews, slug, props }: any) {
  const searchParams = useSearchParams();
  const search: any = searchParams?.getAll("reviews");

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

  const parsedContent = documentToReactComponents(
    filteredData[0]?.fields?.description,
    options,
  );

  // Protect the app in case this is null || false
  if (!filteredData) return null;

  let activeTab = "";
  if (search[0] === "reviews") {
    activeTab = "reviews";
  }

  return (
    <Tabs
      color="black"
      defaultValue={activeTab === "" ? "first" : activeTab}
      className="bg-transparent w-full pr-4 decoration-black"
    >
      <Tabs.List justify="center" className="text-center ">
        <Tabs.Tab className="ml-0 pl-0" value="first" color="black">
          Description
        </Tabs.Tab>
        <Tabs.Tab value="map" color="black">
          Map
        </Tabs.Tab>
        <Tabs.Tab value="third" color="black">
          Price
        </Tabs.Tab>
        {filteredData[0].fields.bookingUrl || filteredData[0].fields.booking ? (
          <Tabs.Tab value="booking" color="black">
            Booking
          </Tabs.Tab>
        ) : null}

        {filteredData[0].fields.youtubeId && (
          <Tabs.Tab value="calendar" color="black" className="flex">
            <PiYoutubeLogoLight className="inline" /> Video
          </Tabs.Tab>
        )}
        <Tabs.Tab value="reviews" color="black">
          Reviews
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel
        value="first"
        pt="xs"
        className="leading-7 text-gray-700 min-h-[400px]"
      >
        <div className="mt-2">{parsedContent}</div>
      </Tabs.Panel>

      <Tabs.Panel value="map" pt="xs" className="min-h-[400px]">
        <section className="overflow-hidden w-full mt-2">
          {filteredData[0]?.fields?.embededMap === undefined ? (
            <p>No map to display</p>
          ) : (
            <iframe
              src={filteredData[0]?.fields?.embededMap}
              width="600"
              height="450"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          )}
        </section>
      </Tabs.Panel>
      <Tabs.Panel value="third" pt="xs" className="min-h-[400px]">
        <div className="mt-5">{filteredData[0]?.fields?.price}</div>
      </Tabs.Panel>
      <Tabs.Panel className="text-left min-h-[400px]" value="reviews" pt="xs">
        {/* Comments will go here, connected to the DB  */}
        <section>
          <Reviews slug={slug} reviews={reviews} />
        </section>
      </Tabs.Panel>
      <Tabs.Panel value="booking" pt="xs" className="min-h-[400px]">
        {filteredData[0]?.fields?.booking && (
          <iframe
            src={filteredData[0]?.fields?.booking}
            width="100%"
            height="1000px"
            className="border-none mt-10"
          />
        )}

        {filteredData[0]?.fields?.bookingUrl && (
          <div className="mt-5">
            <a
              href={filteredData[0]?.fields?.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 border border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300"
            >
              Book now
            </a>
          </div>
        )}
      </Tabs.Panel>

      <Tabs.Panel value="calendar" pt="xs" className="min-h-[400px]">
        {/* embeded Youtube video */}
        {filteredData[0]?.fields?.youtubeId && (
          <div className="pt-5">
            <Youtube id={filteredData[0]?.fields?.youtubeId} />
            <span className="text-xs text-black/50">
              &copy; All rights reserved to the video creator/owner
            </span>
          </div>
        )}
      </Tabs.Panel>
    </Tabs>
  );
}

export default TabsRow;
