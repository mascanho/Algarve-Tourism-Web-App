import { cityArr } from "@/Data/Cities";
import React from "react";
import CardCity from "./[city]/CardCity";

function page() {
  return (
    <section className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-3 gap-x-2 mx-auto w-full gap-y-8 max-w-7xl place-items-center  place-content-between">
        {cityArr.map((city: any) => (
          <CardCity
            city={city}
            name={city.name}
            image={city.image}
            route={city.route}
          />
        ))}
      </div>
    </section>
  );
}

export default page;
