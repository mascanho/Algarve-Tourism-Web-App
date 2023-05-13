"use client";
import Image from "next/image";
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  rem,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid({ filteredData }: any) {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  console.log(filteredData[0].fields.images);

  return (
    <section className=" ml-0">
      <Container
        my="xl"
        className=" min-w-full ml-0 mt-0 sm:pt-0 sm:pl-0 h-full"
      >
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          className={`w-full h-full min-h-full relative overflow-hidden `}
        >
          <div
            className="relative overflow-hidden rounded-lg 
            "
          >
            <Image
              alt={filteredData[0]?.fields?.title}
              src={`https://${filteredData[0]?.fields?.images[0]?.fields?.file?.url}`}
              fill
            />
          </div>
          <Grid gutter="md" className="overflow-hidden rounded-lg">
            <Grid.Col span={6}>
              <Image
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[1]?.fields?.file?.url}`}
                className={`h-[${SECONDARY_COL_HEIGHT}] rounded-lg`}
                height={80}
                width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[2]?.fields?.file?.url}`}
                className={`h-[${SECONDARY_COL_HEIGHT}] rounded-lg`}
                height={80}
                width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[3]?.fields?.file?.url}`}
                className={`h-[${SECONDARY_COL_HEIGHT}] rounded-lg`}
                height={80}
                width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[4]?.fields?.file?.url}`}
                className={`h-[${SECONDARY_COL_HEIGHT}] rounded-lg`}
                height={80}
                width={260}
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    </section>
  );
}
