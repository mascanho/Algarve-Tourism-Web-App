import React from "react";

export const BlogCard = () => {
  return (
    <>
      <section className="flex border-b pb-4">
        <div className="avatar">
          <div className="w-12 rounded-full h-12">
            <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Ichigo-Kurosaki.jpg" />
          </div>
        </div>
        <div className="block">
          <div className="flex items-center">
            <h4>MArco Guerreiro</h4>
            <span>Apr 20, 2022</span>
          </div>
          <div className="block">
            <span>Lorem ipsum dolor sit amet.</span>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              itaque!
            </div>
            <div className="flex w-ful">
              {[1, 2, 3].map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </div>
        </div>
        <picture className="w-40 h-full">
          <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Ichigo-Kurosaki.jpg" />
        </picture>
      </section>
    </>
  );
};

export default BlogCard;
