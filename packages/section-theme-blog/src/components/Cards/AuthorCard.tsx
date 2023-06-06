import { createStyles, Text, Title, Image, rem } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { GetImage, MdxFileAuthorCard } from "../../types";
import { IconBrandTwitter, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { getImage } from "@/utlis/getImage";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  link: {
    textDecoration: "none",
  },
  body: {
    paddingLeft: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan("sm")]: {
      paddingLeft: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function AuthorCard({ subItem }: { subItem: MdxFileAuthorCard }) {
  const { classes } = useStyles();

  if (subItem.frontMatter === undefined) {
    throw new Error("frontMatter is missing");
  }

  let imageType = subItem.frontMatter.image;

  return (
    <div className={classes.wrapper}>
      {subItem?.frontMatter?.image !== undefined ? (
        <Image
          src={getImage(imageType)}
          alt={subItem?.frontMatter.name}
          className={classes.image}
        />
      ) : (
        ""
      )}

      <div className={classes.body}>
        <Link
          key={subItem.frontMatter.name}
          href={subItem.route}
          className={classes.link}
        >
          <Title className={classes.title}>{subItem.frontMatter.name}</Title>
        </Link>

        <Text fw={500} fz="lg" mb={5}>
          {subItem.frontMatter.job}
        </Text>

        <Text fz="sm" c="dimmed">
          {subItem.frontMatter.except}
        </Text>

        <div className={classes.controls}>
          {subItem?.frontMatter.social &&
            subItem?.frontMatter?.social.map(
              (item: { name: string; url: string }) => {
                return (
                  <Link key={item.name} target="_blank" href={item.url}>
                    <ActionIcon aria-label={item.name} size="lg">
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
        </div>
      </div>
    </div>
  );
}
