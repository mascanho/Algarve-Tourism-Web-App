import React from "react";

function Hero() {
  return (
    <section className="bg-base-200 ">
      <div className="hero py-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/d7/a6.jpg"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6 sm:pr-20">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="space-x-4">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
