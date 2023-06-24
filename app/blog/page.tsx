import React from "react";
import { BlogCard } from "./BlogCard";
import { createClient } from "contentful";

// Get all categories from contentful
async function getBlogs() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID3!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN3!,
  });
  const res = await client.getEntries({
    content_type: "blog",
  });

  return await res.items;
}

async function page() {
  const blogs = await getBlogs();
  console.log(blogs, "From the blogs");

  return (
    <section className=" sm:max-w-7xl sm:w-full mx-auto sm:h-full  ">
      <div className="relative flex justify-center  w-full mx-auto ">
        <div className="sm:border-r sm:w-full block  w-full pt-10 mx-auto justify-center sm:ml-0">
          <div className="mx-auto sm:w-11/12 my-6 w-full flex sm:flex ">
            <input
              className=" mx-auto  sm:mx-0 rounded-lg bg-transparent border py-1 pl-2 sm:w-8/12 w-11/12"
              placeholder="Search..."
            />
          </div>
          <h2 className="sm:w-11/12 mx-auto w-11/12 border-b pb-5 font-bold text-black">
            Articles
          </h2>
          <div className="mx-auto mt-5 mb-64">
            {blogs.map((blog: any) => (
              <BlogCard
                key={blog?.sys?.id}
                image={blog?.fields?.image}
                title={blog?.fields?.title}
                slug={blog?.fields?.slug}
                description={blog?.fields?.description}
                body={blog?.fields?.body}
                author={blog?.fields?.author}
                avatar={blog?.fields?.avatar}
                tags={blog?.fields?.tags}
                date={blog?.fields?.date}
              />
            ))}
          </div>
        </div>
        <div className="w-[480px] sm:pl-6  hidden sm:block">
          <div className="mt-10">
            <div className="bg-gray-200 p-4 py-6 rounded-lg space-y-2">
              <h3 className="text-black font-bold text-lg">This is a title</h3>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam, odio.
              </p>
              <div className="mt-2">
                <button className="bg-sky rounded-md px-4 py-1 mt-2 text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <section className="mt-10">
            <div>
              <h4>Places to Visit</h4>
              {[1, 2, 3].map((item) => (
                <div className="block mt-4 mb-4" key={item}>
                  <div className="flex">
                    <img
                      src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Ichigo-Kurosaki.jpg"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2">
                      <h5 className="text-black text-sm font-bold">
                        Praia De Sta Eulalia
                      </h5>
                      <div className="flex">
                        <span className="text-xs">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, corporis.
                        </span>
                        <button className="border px-3 rounded-md">view</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-10">
            <h2>Places To Visit</h2>
            <div className="mt-5">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex">
                  <div className="flex mb-5 space-y-1">
                    <div>
                      <img
                        src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Ichigo-Kurosaki.jpg"
                        alt=""
                        className="h-20 w-36 object-fill rounded-md"
                      />
                    </div>
                    <div className="ml-2">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                      </p>
                      <span className="text-xs">
                        Lorem ipsum dolor sit amet.
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default page;
