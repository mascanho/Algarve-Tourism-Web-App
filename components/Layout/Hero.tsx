import React from "react";
import CarouselHeroCard from "../CarouselHero";

function Hero() {
  return (
    <section className="bg-base-200 ">
      <div className="hero py-10 bg-base-200">
        <div className="hero-content flex-col flex-col-reverse lg:flex-row-reverse w-full overflow-hidden">
          <CarouselHeroCard />
          <div className="sm:w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6 sm:pr-20">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="space-x-4">
              {/* <button className="btn btn-primary">Get Started</button> */}
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
