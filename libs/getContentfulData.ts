import { createClient } from "contentful";
import { cache } from "react";
import "server-only";

export const getContentfulData = cache(
  // Get all categories from contentful
  async function getAllCategories(category: any, limit: any) {
    const client: any = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
    const res = await client.getEntries({
      content_type: category || ["beaches", "events"],
      // include: 1,
      limit,
      order: "sys.createdAt",
      // select: "fields.slug,fields.title",
    });
    return await res.items;
  },
);
