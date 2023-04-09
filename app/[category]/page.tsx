import { createClient } from "contentful";
import Routes from "@/components/Routes/routes";

async function Page(props) {
  // Fetch COntentful data
  async function getData() {
    let pathname = props.params.category;

    pathname = "events";

    const client: any = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
    const data = await client.getEntries({ content_type: `${pathname}` });

    return await data.items;
  }

  const category = await getData();

  return (
    <div>
      <Routes category={category} />
    </div>
  );
}

export default Page;
