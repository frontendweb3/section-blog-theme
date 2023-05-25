import React from "react";
import { TypographyStylesProvider, Box, Title, Text } from "@mantine/core";
import type { PageOpts } from "nextra";
import dayjs from "dayjs";

export const Page = ({ children, pageOpts }: { children: React.ReactNode; pageOpts?: PageOpts; }) => {
  return (
    <Box maw={724} mx="auto">
      <Box py={"lg"} mt={"lg"}>
        <Title order={1}>{pageOpts?.frontMatter.title}</Title>
        {pageOpts?.frontMatter.date ? (
          <Text>
            {dayjs(pageOpts?.frontMatter.date).format("MMM DD, YYYY")}
          </Text>
        ) : (
          ""
        )}
      </Box>
      <TypographyStylesProvider> {children}</TypographyStylesProvider>
    </Box>
  );
};
