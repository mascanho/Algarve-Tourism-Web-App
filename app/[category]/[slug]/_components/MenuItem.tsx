import React from "react";

const RestaurantMenuItem = () => {
  return (
    <ul>
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index}>Menu Item</li>
      ))}
    </ul>
  );
};

export default RestaurantMenuItem;
