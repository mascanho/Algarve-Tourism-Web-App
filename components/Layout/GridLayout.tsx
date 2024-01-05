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
          className={`w-full sm:h-full min-h-full relative overflow-hidden `}
        >
          <div
            className="relative overflow-hidden rounded-lg sm:max-h-[380px] 
            "
          >
            <img
              alt={filteredData[0]?.fields?.title}
              src={`https://${filteredData[0]?.fields?.images[0]?.fields?.file?.url}`}
              className="sm:h-full w-[100%] sm:w-full sm:block object-contain sm:object-fill "
            />
          </div>
          <Grid gutter="md" className="overflow-hidden rounded-lg">
            <Grid.Col span={6} className="relative">
              <Image
                width={260}
                height={100}
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[1]?.fields?.file?.url}`}
                className={`sm:h-[100%] h-full max-h-[130px] sm:max-h-full rounded-lg favBanner object-cover`}
                // height={80}
                // width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <img
                width={260}
                height={100}
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[2]?.fields?.file?.url}`}
                className={`sm:h-full h-full max-h-[130px] sm:max-h-full rounded-lg favBanner object-cover`}
                // height={80}
                // width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <img
                width={260}
                height={100}
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[3]?.fields?.file?.url}`}
                className={`sm:h-full h-full max-h-[130px] sm:max-h-full rounded-lg favBanner object-cover`}
                // height={80}
                // width={260}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <img
                width={260}
                height={100}
                alt={filteredData[0]?.fields?.title}
                src={`https://${filteredData[0]?.fields?.images[4]?.fields?.file?.url}`}
                className={`sm:h-full h-full max-h-[130px] sm:max-h-full rounded-lg favBanner object-cover`}
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
