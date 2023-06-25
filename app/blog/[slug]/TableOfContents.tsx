"use client";
import { useState } from "react";
import { createStyles, Box, Text, Group, rem } from "@mantine/core";
import { BsSearch } from "react-icons/bs";

const LINK_HEIGHT = 38;
const INDICATOR_SIZE = 10;
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2;

const useStyles = createStyles((theme: any) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: "block",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    lineHeight: rem(LINK_HEIGHT),
    fontSize: theme.fontSizes.sm,
    height: rem(LINK_HEIGHT),
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `${rem(2)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    fontWeight: 500,
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
  },

  links: {
    position: "relative",
  },

  indicator: {
    transition: "transform 150ms ease",
    border: `${rem(2)} solid ${
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7]
    }`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: rem(INDICATOR_SIZE),
    width: rem(INDICATOR_SIZE),
    borderRadius: rem(INDICATOR_SIZE),
    position: "absolute",
    left: `calc(-${rem(INDICATOR_SIZE)} / 2 + ${rem(1)})`,
  },
}));

interface TableOfContentsFloatingProps {
  links: { label: string; link: string; order: number }[];
}

const TableOfContentsFloating = ({ tableData }: any) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(2);

  const links = [
    {
      label: "Usage",
      link: "#usage",
      order: 1,
    },
    {
      label: "Position and placement",
      link: "#position",
      order: 1,
    },
    {
      label: "With other overlays",
      link: "#overlays",
      order: 1,
    },
    {
      label: "Manage focus",
      link: "#focus",
      order: 1,
    },
    {
      label: "Examples",
      link: "#1",
      order: 1,
    },
    {
      label: "Show on focus",
      link: "#2",
      order: 2,
    },
    {
      label: "Show on hover",
      link: "#3",
      order: 2,
    },
    {
      label: "With form",
      link: "#4",
      order: 2,
    },
  ];

  const items = tableData.map((item: any, index: any) => (
    <Box<"a">
      component="a"
      href={item.link}
      // onClick={(event: any) => {
      //   event.preventDefault();
      //   setActive(index);
      // }}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === index })}
      sx={(theme: any) => ({
        paddingLeft: `calc(${item.order} * ${theme.spacing.lg})`,
      })}
    >
      {item.label}
    </Box>
  ));

  return (
    <>
      <Group mb="md">
        <BsSearch />
        <Text>Table of contents</Text>
      </Group>
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{
            transform: `translateY(${rem(
              active * LINK_HEIGHT + INDICATOR_OFFSET
            )})`,
          }}
        />
        {items}
      </div>
    </>
  );
};

export default TableOfContentsFloating;
