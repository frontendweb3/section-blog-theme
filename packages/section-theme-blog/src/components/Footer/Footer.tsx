import { Button, Container, Group } from "@mantine/core";
import { useStyles } from "./footer-style";
import Link from "next/link";
import { useContext } from "react";
import type { PageOpts, ThemeConfig } from "nextra";
import { ThemeContext } from "../../Provider/config";

export function Footer() {
  const { classes } = useStyles();
  const { themeConfig } = useContext<{
    pageOpts?: PageOpts;
    themeConfig?: ThemeConfig;
  }>(ThemeContext);

  const { logo, secondary_navigation } = themeConfig;

  const items = secondary_navigation.map(
    (link: { name: string; route: string }) => {
      return (
        <Link
          key={link.name}
          className={classes.link}
          href={link.route}
          color="dimmed"
        >
          {link.name}
        </Link>
      );
    }
  );

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Link className={classes.logo} href={"/"}>
          {logo.text !== undefined ? (
            <Button leftIcon={logo?.svg} variant="transprent">
              {" "}
              {logo?.text}{" "}
            </Button>
          ) : (
            <div>{logo.svg} </div>
          )}
        </Link>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
