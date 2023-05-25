/// <reference no-default-lib="true"/>

import type { Result } from "@orama/orama";
import type { Position, SearchResultWithHighlight } from "@orama/plugin-match-highlight";
import { searchWithHighlight } from "@orama/plugin-match-highlight";
import Link from "next/link.js";
import { useRouter } from "next/router.js";
import { useEffect, useRef, useState } from "react";
import { HighlightedDocument } from "./components/HighlightedDocument";
import { createOramaIndex, groupDocumentsBy } from "./utils/index";
import { Box, List, Text, TextInput } from "@mantine/core";
import { Modal } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export type OramaSearchProps = {
  limitResults: number;

  boost: {
    title: number;
    description: number;
    content: number;
  };
  model: {
    setSlowTransitionOpened: (value: boolean) => void;
    slowTransitionOpened: boolean;
  };
};

const indexes = {};

OramaSearch.defaultProps = {
  limitResults: 30,
  boost: {
    title: 30,
    description: 1,
    content: 1,
  },
};

export function OramaSearch(props: OramaSearchProps) {
  const { limitResults, model, boost } = props;

  const [, setIndexing] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResultWithHighlight>();
  const [groupedResults, setGroupedResults] = useState({});
  const [hasFocus, setHasFocus] = useState(false);

  const { basePath, locale = "en-US", asPath } = useRouter();

  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  // As soon as the page loads, we create the index on the client-side
  useEffect(() => {
    setIndexing(true);

    createOramaIndex(basePath, locale).then((index) => {
      indexes[locale] = index;

      setIndexing(false);
    });
  }, [locale, basePath]);

  // If the locale changes, we create the index on the client-side
  useEffect(() => {
    if (!(locale in indexes)) {
      setIndexing(true);
      createOramaIndex(basePath, locale).then((index) => {
        indexes[locale] = index;
        setIndexing(false);
      });
    }
  }, [basePath, locale]);

  // If the user types something, we search for it
  useEffect(() => {
    if (searchTerm) {
      searchWithHighlight(indexes[locale], {
        term: searchTerm,
        limit: limitResults,
        boost: boost,
      }).then((results) => {
        setResults(results);
        setGroupedResults(groupDocumentsBy(results.hits, "title"));
      });
    }
  }, [searchTerm, locale]);

  // If the user presses ESC, we close the search box
  useEffect(() => {
    if (document.activeElement === inputRef.current) {
      setHasFocus(true);
    } else {
      setHasFocus(false);
    }
  }, []);

  // If the path changes, we close the search box
  useEffect(() => {
    setHasFocus(false);
    setSearchTerm("");
  }, [asPath]);

  return (
    <Modal
      size="lg"
      opened={model.slowTransitionOpened}
      onClose={() => model.setSlowTransitionOpened(false)}
      title="Search ..."
      transitionProps={{
        transition: "fade",
        duration: 600,
        timingFunction: "linear",
      }}
    >
      <Box>
        <Box>
          <TextInput
            placeholder="Start Search..."
            label="Search"
            variant="filled"
            spellCheck="false"
            type="search"
            icon={<IconSearch size="0.8rem" />}
            onChange={(e) => setSearchTerm(e.target?.value)}
            value={searchTerm}
          />
        </Box>

        {searchTerm && results && (
          <Box my={"md"}>
            {results.count === 0 && <Text>No results found.</Text>}

            {results.count > 0 && (
              <>
                <Box>
                  <List>
                    {Object.keys(groupedResults).map((title) => (
                      <List.Item key={title} className="nx-bg-primary-600">
                        <Text className="nx-mx-2.5 nx-mb-2 nx-mt-6 nx-select-none nx-border-b nx-border-black/10 nx-px-2.5 nx-pb-1.5 nx-text-xs nx-font-semibold nx-uppercase nx-text-gray-500 first:nx-mt-0 dark:nx-border-white/20 dark:nx-text-gray-300 contrast-more:nx-border-gray-600 contrast-more:nx-text-gray-900 contrast-more:dark:nx-border-gray-50 contrast-more:dark:nx-text-gray-50">
                          {title}
                        </Text>

                        <Box className="nx-block nx-scroll-m-12 nx-px-2.5 nx-py-2 nx-mb-2">
                          <List className="nx-mt-1">
                            {groupedResults[title].map(
                              ({ document, positions }, i) => (
                                <List.Item key={document.url + i}>
                                  <Link
                                    style={{ textDecoration: "none" }}
                                    href={document.url}
                                  >
                                    <Box>
                                      <HighlightedDocument
                                        hit={
                                          { document, positions } as Result & {
                                            positions: Position[];
                                          }
                                        }
                                      />
                                    </Box>
                                  </Link>
                                </List.Item>
                              )
                            )}
                          </List>
                        </Box>
                      </List.Item>
                    ))}
                  </List>
                </Box>
              </>
            )}
          </Box>
        )}
      </Box>
    </Modal>
  );
}
