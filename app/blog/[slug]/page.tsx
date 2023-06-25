import React from "react";
import TableOfContentsFloating from "./TableOfContents";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";

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

async function getAllBlogs() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID3!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN3!,
  });
  const res = await client.getEntries({ content_type: "blog" });

  return await res.items;
}

const page = async (props: any) => {
  const { category, slug } = props.params;

  const allBlogs = await getAllBlogs();
  const blog = allBlogs.filter((obj: any) => obj.fields.slug === slug);

  // Contentful Rich Text Renderer
  const post = documentToReactComponents(blog[0]?.fields?.body, options);

  return (
    <section className="max-w-7xl w-11/12 sm:flex mx-auto mt-20">
      <div className="sm:w-1/6 sm:flex sm:flex-col justify-start sticky inline-block order-2">
        <TableOfContentsFloating />
      </div>

      <div className="sm:w-3/4 w-11/12 flex-1 font-semibold">
        <div className="w-11/12 mb-8">
          <img
            src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/07/HERO-Lagos-algarve-GettyImages-1211602144.jpg"
            alt="albvufeir"
            className="w-full"
          />
        </div>
        <h1 className="text-black text-5xl font-semibold">
          {blog[0]?.fields?.title}
        </h1>
        <section className="mt-10 richText">{post}</section>
      </div>
    </section>
  );
};

export default page;
