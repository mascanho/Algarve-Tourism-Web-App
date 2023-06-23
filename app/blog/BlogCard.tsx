import React from "react";

export const BlogCard = () => {
  return (
    <>
      <section className="flex sm:w-11/12 w-11/12 mx-auto">
        <div className="avatar">
          <div className="w-12 rounded-full h-12">
            <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Ichigo-Kurosaki.jpg" />
          </div>
        </div>
        <div className="block w-full h-full">
          <div className="flex items-center pl-2 space-y-1">
            <h4 className="font-bold flex-items text-black">MArco Guerreiro</h4>
            <div className="flex items-center">
              <span className="pb-1 text-sm ml-2">Apr 20, 2022</span>
            </div>
          </div>
          <div className="block pl-2 text-sm">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
        <picture className="w-40 h-full sm:inline-block hidden rounded-md overflow-hidden">
          <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Ichigo-Kurosaki.jpg" />
        </picture>
      </section>
      <section className="sm:w-11/12 mx-auto">
        <div className="pb-2 sm:w-2/3 w-11/12 mx-auto sm:mx-0 mt-3 sm:mt-1">
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            dolorem natus sunt voluptatum consequuntur aut consequatur placeat.
            Alias, vitae saepe.
          </p>
        </div>
        <div className="flex sm:w-full w-11/12 mx-auto mt-1 pb-8">
          {[1, 2, 3].map((item) => (
            <span className="border mr-2 px-4 rounded-2xl sm:text-xs bg-gray-100">
              {item}
            </span>
          ))}
        </div>
        <hr className="block sm:w-full mx-auto pb-8" />
      </section>
    </>
  );
};

export default BlogCard;
