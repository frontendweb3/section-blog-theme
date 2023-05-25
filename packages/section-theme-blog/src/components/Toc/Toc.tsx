import { Box, Collapse, Button } from "@mantine/core";
import { IconListSearch } from "@tabler/icons-react";
import { TocItem } from "./TocItem";

import { ThemeContext } from "../../Provider/config";
import { useContext } from "react";
import { PageOpts, ThemeConfig } from "nextra";
import { useDisclosure } from "@mantine/hooks";

export function Toc() {
  const { pageOpts } = useContext<{
    pageOpts?: PageOpts;
    themeConfig?: ThemeConfig;
  }>(ThemeContext);

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box my={"lg"}>
      {pageOpts?.headings && pageOpts?.headings.length >= 1 ? (
        <>
          <Button
            variant="light"
            color="gray"
            fullWidth
            leftIcon={<IconListSearch />}
            radius="md"
            size="md"
            onClick={toggle}
          >
            Table of contents
          </Button>

          <Collapse in={opened}>
            {pageOpts?.headings.map((item) => (
              <TocItem key={item.id} item={item} />
            ))}
          </Collapse>
        </>
      ) : (
        ""
      )}
    </Box>
  );
}
