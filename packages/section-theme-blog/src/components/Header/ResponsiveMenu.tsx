import { Menu } from "@mantine/core";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/config";
import { useStyles } from "./Header-style";
import Link from "next/link";
import type { PageOpts, ThemeConfig } from "nextra";
import { useRouter } from "next/router";

export function ResponsiveMenu() {
  const { classes, cx } = useStyles();
  const router = useRouter();

  const { themeConfig } = useContext<{
    pageOpts?: PageOpts;
    themeConfig?: ThemeConfig;
  }>(ThemeContext);

  const items = themeConfig.primary_navigation.map(
    (link: { name: string; route: string }) => {
      return (
        <Menu.Item key={link.name}>
          <Link
            href={link.route}
            className={cx(
              classes.link,
              router.route === link.route ? classes.linkActive : ""
            )}
          >
            {link.name}
          </Link>
        </Menu.Item>
      );
    }
  );

  return items;
}
