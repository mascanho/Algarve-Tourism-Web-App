"use client";
import { Carousel } from "@mantine/carousel";
// import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

function CarouselHero() {
  return (
    <Carousel
      maw={300}
      mx="auto"
      height={180}
      nextControlIcon={">"}
      previousControlIcon={"<"}
    >
      <Carousel.Slide>
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/d7/a6.jpg"
          alt="dewd"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/d7/a6.jpg"
          alt="dewd"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/d7/a6.jpg"
          alt="dewd"
        />
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

export default CarouselHero;
