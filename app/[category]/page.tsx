import { createClient } from "contentful";
import Routes from "@/components/Routes/routes";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

async function Page(props: any) {
  // Fetch Contentful data
  async function getData() {
    let pathname = props.params.category;

    // pathname = "events";

    const client: any = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
    const data = await client.getEntries({ content_type: `${pathname}` });

    return await data.items;
  }

  const category: any = await getData();

  return (
    <section className="max-w-7xl mx-auto w-11/12 sm:w-full grid sm:grid-cols-4 sm:ml-6 gap-y-8 h-full mb-20">
      {category.map((cat: any) => (
        <section
          key={cat.fields.name}
          className="max-w-7xl space-y-2 text-left md:w-64 shadow-sm rounded-md pb-2"
        >
          <div className="w-full h-40 flex flex-col rounded-t-md overflow-hidden relative">
            <Image
              src="https://th.bing.com/th/id/OIG.XUrUyoz7q_uPku3p7E.0?pid=ImgGn"
              fill
              alt="image"
              className="block"
            />
            <span className="absolute left-0 top-4 pr-2 py-1 rounded-r-full text-xs text-black bg-white  ">
              {/* 📍 {data.city} */}
            </span>
          </div>
          <div className="flex w-full  text-left justify-between px-2 items-center">
            <h3 className="w-full text-left text-black text-sm items-center">
              {" "}
              {cat.fields.title}
            </h3>
            <span className="text-gray-500 text-sm"> $66.99</span>
          </div>
          <div className="w-full h-[1px] bg-gray-300" />
          <div className="mt-20 flex w-full px-2">
            <p className="line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea neque
              dicta minus laboriosam illum. Placeat, harum sint! Hic, suscipit
              nobis!
            </p>
            {/* <span className="flex-1 text-sky text-xs">Read more</span> */}
          </div>
          <div className="text-[9px] space-x-2 pb-2 px-2">
            {["📸 Photo Tour"].map((cat) => (
              <span
                key={cat}
                className="border px-2 items-center align-middle justify-center my-auto  py-1 rounded-full item"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="w-full h-[1px] bg-gray-300 px-2" />
          <div className="flex justify-between items-center align-middle w-full px-2">
            <div className="mt-1 text-sm flex items-center space-x-2 mb-2 bg-sky text-white rounded-full w-fit px-3 ">
              <AiFillHeart className="text-red-500 text-xs" />
              <span className="text-[10px]">Add to dream</span>
            </div>
            <span className="text-sm text-sky">Read More</span>
          </div>
        </section>
      ))}
    </section>
  );
}

export default Page;
