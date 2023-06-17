"use client";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { cityArr } from "@/Data/Cities";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(280),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        {/* <Text className={classes.category} size="xs"> */}
        {/*   {category} */}
        {/* </Text> */}
        {/* <Title order={3} className={classes.title}> */}
        {/*   {title} */}
        {/* </Title> */}
      </div>
      {/* <Button variant="white" color="dark"> */}
      {/*   Read article */}
      {/* </Button> */}
    </Paper>
  );
}

export function CarrosselCity({ images }: any) {
  let imgArr = images.map((img: any) => {
    return img.images;
  });

  let data = [];

  for (let i = 0; i < imgArr.length; i++) {
    for (let j = 0; j < imgArr[i].length; j++) {
      data.push({ image: imgArr[i][j].fields.file.url });
    }
  }

  // shuffle thje photos in the carrossel
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleArray(data);

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item: any) => (
    <Carousel.Slide key={item?.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="33%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
      slideGap="lg"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}

export default CarrosselCity;
