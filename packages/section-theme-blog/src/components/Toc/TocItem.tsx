import { Heading } from "nextra";
import Link from "next/link";
import { Box, createStyles, rem, useMantineTheme } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: "block",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    lineHeight: 1.2,
    fontSize: theme.fontSizes.sm,
    padding: theme.spacing.xs,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
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
    borderLeftColor:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 6 : 7],
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 2 : 7],

    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
    },
  },
}));

interface TableOfContentsProps {
  item: Heading;
}

export function TocItem({ item }: TableOfContentsProps) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const [active, setActive] = useState(0);

  return (
    <Box
      onClick={() => setActive(item.depth)}
      onMouseEnter={() => setActive(item.depth)}
      onMouseLeave={() => setActive(0)}
    >
      <Link
        href={`#${item.id}`}
        key={item.value}
        className={cx(classes.link, {
          [classes.linkActive]: active === item.depth,
        })}
        style={{
          paddingLeft: `calc(${item.depth} * ${theme.spacing.md})`,
        }}
      >
        {item.value}
      </Link>
    </Box>
  );
}
