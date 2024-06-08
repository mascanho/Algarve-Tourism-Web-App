import { createClient } from "contentful";
import { MetadataRoute } from "next";

// Function to fetch items from Contentful
export async function fetchItems() {
  const sitemapArr = [
    {
      url: "https://www.algarvewonders.com/",
      changeFrequency: "weekly",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://www.algarvewonders.com/about",
      changeFrequency: "weekly",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://www.algarvewonders.com/blog",
      changeFrequency: "weekly",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://www.algarvewonders.com/algarve",
      changeFrequency: "weekly",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://www.algarvewonders.com/meals",
      changeFrequency: "weekly",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://www.algarvewonders.com/search",
      changeFrequency: "weekly",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://www.algarvewonders.com/contact",
      changeFrequency: "weekly",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
  ]; // Initialize an empty array to store sitemap items

  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const res = await client.getEntries({
      content_type: ["beaches", "events", "restaurants", "adventure"],
    });

    // Process each item and push to sitemapArr
    //

    console.log(res.items);

    res.items.forEach((item: any) => {
      sitemapArr.push({
        url: `https://www.algarvewonders.com/${item?.fields?.type}/${item.fields.slug}`,
        changeFrequency: "weekly",
        priority: 1,
        lastmod: new Date().toISOString(),
      });
    });

    return sitemapArr; // Return sitemap array
  } catch (error) {
    console.error("Error fetching Contentful entries:", error);
    return []; // Return empty array in case of error
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return fetchItems();
}
