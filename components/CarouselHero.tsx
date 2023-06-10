"use client";
import { Carousel } from "@mantine/carousel";

function CarouselHeroCard({ categories }: any) {
  return (
    <Carousel
      maw={380}
      mx="auto"
      withIndicators
      height={200}
      className="w-full overflow-hidden"
    >
      <Carousel.Slide>
        <img
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/bleach-tybw-ichigo-arrival.jpg"
          alt=""
          className="h-full"
        />
      </Carousel.Slide>

      <Carousel.Slide>
        <img
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/bleach-tybw-ichigo-arrival.jpg"
          alt=""
          className="h-full"
        />
      </Carousel.Slide>

      <Carousel.Slide>
        <img
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/bleach-tybw-ichigo-arrival.jpg"
          alt=""
          className="h-full"
        />
      </Carousel.Slide>

      <Carousel.Slide>
        <img
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/bleach-tybw-ichigo-arrival.jpg"
          alt=""
          className="h-full"
        />
      </Carousel.Slide>

      {/* ...other slides */}
    </Carousel>
  );
}

export default CarouselHeroCard;
