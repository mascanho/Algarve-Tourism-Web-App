import { cityArr } from "@/Data/Cities";
import React from "react";
import CardCity from "./[city]/CardCity";
function page() {
  return (
    <section className="max-w-7xl mx-auto sm:mt-20">
      <div className="w-11/12 sm:w-full mx-auto">
        <img
          src="https://lp-cms-production.imgix.net/2022-05/GettyRF_1013112160.jpg?auto=format&w=1440&h=810&fit=crop&q=75"
          alt=""
        />
        <div className="space-y-4 mt-10">
          <h1 className="text-3xl sm:text-6xl text-black font-bold mb-8">
            Algarve
          </h1>
          <p>
            The Algarve is a beautiful region located in the southernmost part
            of Portugal. It is renowned for its stunning coastline, picturesque
            beaches, and pleasant climate, making it a popular destination for
            tourists from around the world.
          </p>
          <p>
            The region boasts a diverse landscape, with golden cliffs, hidden
            coves, and long stretches of sandy beaches along the Atlantic Ocean.
            The Algarve is also known for its dramatic rock formations,
            including the iconic Ponta da Piedade in Lagos.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 sm:mt-20 sm:gap-x-8 overflow-hidden mx-auto w-full sm:gap-y-20 gap-y-8 max-w-7xl justify-stretch place-items-center  place-content-between">
        {cityArr.map((city: any) => (
          <CardCity
            key={city.id}
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
