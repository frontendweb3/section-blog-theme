import { Container, Button, Text, createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  control: {
    marginLeft: "10px",
    "&: hover": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[2],
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.gray[0]
          : theme.colors.dark[2],
    },
  },
}));
export function Request() {
  const { classes } = useStyles();

  return (
    <Container
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        margin: "30px auto",
        background: theme.colors.dark[5],
        justifyContent: "space-evenly",
        paddingTop: "10px",
        paddingBottom: "10px",
      })}
    >
      <Text size="lg" color="dimmed">
        Submit new issues and feature requests on the section theme blog.
      </Text>

      <Button
        component="a"
        size="xl"
        variant="default"
        color="blue"
        className={classes.control}
        href="https://github.com/mantinedev/mantine"
      >
        GitHub
      </Button>
    </Container>
  );
}
