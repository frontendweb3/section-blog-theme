import { useContext } from "react";
import { ThemeContext } from "../../Provider/config";
import { useStyles } from "./Header-style";
import Link from "next/link";
import type { PageOpts, ThemeConfig } from "nextra";
import { Group, ActionIcon, ThemeIcon } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandGithub,
  IconSun,
  IconMoonStars,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { SearchBar } from "../Search/Search";
import { iconsType } from "../../../types";

let Icons = {
  Facebook: <IconBrandFacebook size={"1.1rem"} stroke={"1.5"} />,
  Twitter: <IconBrandTwitter size="1.1rem" stroke={1.5} />,
  Youtube: <IconBrandYoutube size="1.1rem" stroke={1.5} />,
  Instagram: <IconBrandInstagram size="1.1rem" stroke={1.5} />,
  Github: <IconBrandGithub size="1.1rem" stroke={1.5} />,
  Linkedin: <IconBrandLinkedin size="1.1rem" stroke={1.5} />,
};

export function SocialIcons() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { themeConfig } = useContext<{
    pageOpts?: PageOpts;
    themeConfig?: ThemeConfig;
  }>(ThemeContext);

  return (
    <Group className={classes.social} align="center" noWrap>
      <Group
        className={classes.socialHide}
        align="center"
        position="center"
        noWrap
      >
        {themeConfig.social_links.map(
          (link: { name: iconsType; svg?: React.ReactNode; url: string }) => {
            return (
              <Link
                aria-label={link.name}
                key={link.name}
                target="_blank"
                href={link.url}
              >
                <ActionIcon aria-label={link.name} size="lg">
                  {link.svg ? link.svg : Icons[link.name]}
                </ActionIcon>
              </Link>
            );
          }
        )}
      </Group>

      <Group align="center" position="center" noWrap>
        <SearchBar />

        <ActionIcon
          aria-label="theme toggle"
          onClick={() => toggleColorScheme()}
          size="lg"
        >
          {colorScheme === "dark" ? (
            <IconSun size="1.2rem" />
          ) : (
            <IconMoonStars size="1.2rem" />
          )}
        </ActionIcon>
      </Group>
    </Group>
  );
}
