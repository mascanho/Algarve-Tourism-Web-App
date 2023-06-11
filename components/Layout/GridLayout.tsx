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

  return (
    <section className=" ml-0">
      <Container my="xl" className=" min-w-full ml-0 mt-0 sm:pt-0 sm:pl-0 ">
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          className={`w-full h-fit min-h-full relative overflow-hidden `}
        >
          <div
            className="relative overflow-hidden rounded-lg 
            "
          >
            <img
              alt={filteredData[0]?.fields?.title}
              src={`https://${filteredData[0]?.fields?.images[0]?.fields?.file?.url}`}
              className="h-[100%] w-[100%] sm:block"
            />
          </div>
          <Grid gutter="md" className="overflow-hidden rounded-lg">
            <Grid.Col span={6}>
              <img
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[1]?.fields?.file?.url}`}
                className={`h-full rounded-lg`}
                // height={80}
                // width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <img
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[2]?.fields?.file?.url}`}
                className={`h-full rounded-lg`}
                // height={80}
                // width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <img
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[3]?.fields?.file?.url}`}
                className={`h-full rounded-lg`}
                // height={80}
                // width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <img
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[4]?.fields?.file?.url}`}
                className={`h-full rounded-lg`}
                // height={100}
                // width={260}
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    </section>
  );
}
