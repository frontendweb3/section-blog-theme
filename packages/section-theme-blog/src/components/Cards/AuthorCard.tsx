import {
  Group,
  Avatar,
  Text,
  createStyles,
  ActionIcon,
  Box,
} from "@mantine/core";
import { IconBrandTwitter, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { MdxFileAuthorCard } from "../../../types";

const useStyles = createStyles((theme) => ({
  center: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  box: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: "10px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },
  },
}));

export function AuthorCard({ subItem }: { subItem: MdxFileAuthorCard }) {
  const { classes } = useStyles();

  if (subItem.frontMatter === undefined) {
    throw new Error("frontMatter is missing");
  }
  return (
    <Box className={classes.box}>
      <Avatar src={subItem?.frontMatter?.image} radius="xl" />

      <div style={{ flex: 1 }}>
        <Link href={subItem?.route} className={classes.link}>
          <Text
            className={classes.center}
            component="h1"
            size="sm"
            weight={500}
          >
            {subItem?.frontMatter.name}
          </Text>
        </Link>

        <Text
          className={classes.center}
          component="h2"
          color="dimmed"
          size="xs"
        >
          {subItem.frontMatter.description}
        </Text>
      </div>

      <Group>
        {subItem?.frontMatter.social &&
          subItem?.frontMatter?.social.map(
            (item: { name: string; url: string }) => {
              return (
                <Link key={item.name} target="_blank" href={item.url}>
                  <ActionIcon size="lg">
                    {item.name === "github" ? (
                      <IconBrandGithub size={"1.1rem"} stroke={"1.5"} />
                    ) : (
                      <IconBrandTwitter size={"1.1rem"} stroke={"1.5"} />
                    )}
                  </ActionIcon>
                </Link>
              );
            }
          )}
      </Group>
    </Box>
  );
}
