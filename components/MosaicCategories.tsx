import React from "react";

const MosaicCategories = ({ categories }: any) => {
  console.log(categories[0], "from the categories");

  // return the categories randomized in a grid
  const randomCategories = categories.sort(() => Math.random() - 0.5);

  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-2 sm:gap-4 mx-auto">
      <div className="col-span-2">
        <img
          src="https://a.cdn-hotels.com/gdcs/production40/d520/9413d6ac-768a-4246-ae9a-1e3a9247f41d.jpg?impolicy=fcrop&w=800&h=533&q=medium"
          alt=""
          className="rounded-md"
        />
      </div>
      <div className="col-span-2 col-start-3">
        <img
          src="https://www.luxsphere.co/wp-content/uploads/Ponta-da-Piedade-algarve-.jpg"
          alt=""
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="col-start-2 row-start-2">
        <img
          src="https://84589f90.rocketcdn.me/wp-content/uploads/2023/06/Views-from-the-cliffs-over-Carvoeiro.jpg"
          alt=""
          className="rounded-md w-full h-full object-cover"
        />
      </div>
      <div className="col-start-1 row-start-2">
        <img
          src="https://www.originaltravel.co.uk/travel-blog/ShowPhoto/1328/0"
          alt=""
          className="rounded-md w-full h-full object-cover"
        />
      </div>
      <div className="row-start-2">
        <img
          src="https://www.tripsavvy.com/thmb/-jsJZgLNQ5ET1YFwYfY16mfTQXU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-148574283-594804765f9b58d58ab8b09a.jpg"
          alt=""
          className="rounded-md w-full h-full object-cover"
        />
      </div>
      <div className="row-start-2">
        <img
          src="https://images.resosys.com/destinations/7/articles/best-area-algarve_en/inline/1672317187-fs-1629198535-pacote-de-viagem-ao-algarve.jpg"
          alt=""
          className="rounded-md w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MosaicCategories;
