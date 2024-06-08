// connect to contentful
import { createClient } from "contentful";

async function FetchBuilderData(catNumber: number, catType: any) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const res = await client.getEntries({
    content_type: catType,
    limit: catNumber,
    order: "-sys.createdAt",
  });
  return res.items;
}

export default FetchBuilderData;
