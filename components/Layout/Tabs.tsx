"use client";
import { Tabs } from "@mantine/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Reviews from "./Reviews";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import BookingDrawer from "@/app/[category]/[slug]/_components/BookingDrawer";
import { Suspense } from "react";

function TabsRow({ filteredData, reviews, slug, props }: any) {
  const pathname = usePathname();
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
      color="teal"
      defaultValue={activeTab === "" ? "first" : activeTab}
      className="bg-transparent w-full pr-4"
    >
      <Tabs.List justify="center" className="text-center ">
        <Tabs.Tab className="ml-0 pl-0" value="first" color="blue">
          Description
        </Tabs.Tab>
        <Tabs.Tab value="map" color="blue">
          Map
        </Tabs.Tab>
        <Tabs.Tab value="third" color="blue">
          Price
        </Tabs.Tab>
        <Tabs.Tab value="reviews" color="blue">
          Reviews
        </Tabs.Tab>
        {filteredData[0]?.fields?.booking && (
          <Tabs.Tab value="booking" color="blue">
            Booking
          </Tabs.Tab>
        )}
        {filteredData[0]?.fields?.bookingUrl && (
          <Tabs.Tab value="bookingURL" color="blue">
            Booking
          </Tabs.Tab>
        )}
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
        <Suspense fallback={<div className="h-screen">Loading...</div>}>
          <iframe
            src={filteredData[0]?.fields?.booking}
            width="100%"
            height="1000px"
            className="border-none mt-10"
          />
        </Suspense>
        <Tabs.Panel value="bookingURL" pt="xs" className="min-h-[400px]">
          <Suspense fallback={<div className="h-screen">Loading...</div>}>
            <iframe
              src={filteredData[0]?.fields?.booking}
              width="100%"
              height="1000px"
              className="border-none mt-10"
            />
          </Suspense>
        </Tabs.Panel>
      </Tabs.Panel>
    </Tabs>
  );
}

export default TabsRow;
