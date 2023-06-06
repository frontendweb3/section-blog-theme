import { createStyles, Card, Image, Text, AspectRatio } from "@mantine/core";
import Link from "next/link";
import dayjs from "dayjs";
import { GetImage, MdxFileCard } from "../../types";
import { getImage } from "@/utlis/getImage";
import { PageOpts, ThemeConfig } from "nextra";
import { ThemeContext } from "@/Provider/config";
import { useContext } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontWeight: 600,
  },
}));

export function ArticleCard({ subItem }: { subItem: MdxFileCard }) {
  const { classes } = useStyles();

  const { themeConfig } = useContext<{
    pageOpts?: PageOpts;
    themeConfig?: ThemeConfig;
  }>(ThemeContext);

  const { dateFormat } = themeConfig;

  if (subItem.frontMatter === undefined) {
    throw new Error("frontMatter is missing");
  }

  let imageType: GetImage = subItem.frontMatter.image as GetImage;

  return (
    <Card p="md" radius="md" component="div" className={classes.card}>
      {subItem?.frontMatter?.image !== undefined ? (
        <AspectRatio ratio={1920 / 1080}>
          <Image src={getImage(imageType)} alt={subItem?.frontMatter.title} />
        </AspectRatio>
      ) : (
        ""
      )}

      <Text
        color="dimmed"
        component="h1"
        size="xs"
        transform="uppercase"
        weight={700}
        mt="md"
      >
        <time dateTime={dayjs(subItem?.frontMatter.date).format(dateFormat)}>
          {dayjs(subItem?.frontMatter.date).format(
            dateFormat ? dateFormat : "MMM DD, YYYY"
          )}
        </time>
      </Text>
      <Link href={subItem.route} className={classes.link}>
        <Text component="div" className={classes.title} mt={5}>
          {subItem.frontMatter.title}
        </Text>
      </Link>
    </Card>
  );
}
