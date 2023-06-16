import React from "react";

const CardCity = () => {
  return (
    <div className="card w-[300px] bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <figure>
        <img
          src="https://a.cdn-hotels.com/gdcs/production55/d1324/c15fe6ea-0bc9-41c5-8f46-d613d9b52c1b.jpg?impolicy=fcrop&w=800&h=533&q=medium"
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export default CardCity;
