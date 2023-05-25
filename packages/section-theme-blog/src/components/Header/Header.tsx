import { Header, Group, Container, Burger, Text, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useStyles } from "./Header-style";
import { MenuItems } from "./MenuItems";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { SocialIcons } from "./SocialIcons";
import { useContext } from "react";
import type { PageOpts, ThemeConfig } from "nextra";
import { ThemeContext } from "../../Provider/config";
import Link from "next/link";

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const { classes } = useStyles();

  const { themeConfig } = useContext<{
    pageOpts?: PageOpts;
    themeConfig?: ThemeConfig;
  }>(ThemeContext);

  const { logo } = themeConfig;

  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>
        <Group>
          <Menu trigger={"hover"} shadow="md" width={200}>
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={toggle}
                size="sm"
                className={classes.burger}
              />
            </Menu.Target>

            <Menu.Dropdown>
              <ResponsiveMenu />
            </Menu.Dropdown>
          </Menu>

          <Link className={classes.logo} href={"/"}>
            {logo.text !== undefined ? (
              <Text className={classes.link} size={"lg"}>
                {logo.text}{" "}
              </Text>
            ) : (
              logo.svg
            )}
          </Link>
        </Group>

        <Group>
          <MenuItems />
          <SocialIcons />
        </Group>
      </Container>
    </Header>
  );
}
