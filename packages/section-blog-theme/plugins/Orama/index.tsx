import type { SearchResultWithHighlight } from "@orama/plugin-match-highlight";
import { searchWithHighlight } from "@orama/plugin-match-highlight";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { createOramaIndex, groupDocumentsBy } from "./utils/index";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { SearchIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export type OramaSearchProps = {
  limitResults: number;
  boost: {
    title: number;
    description: number;
    content: number;
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
  const { limitResults, boost } = props;
  const [, setIndexing] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResultWithHighlight>();
  const [groupedResults, setGroupedResults] = useState({});
  const [hasFocus, setHasFocus] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const { basePath, locale = "en-US", asPath } = useRouter();

  const inputRef = useRef(null);

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

  // command
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e?.key === "j" && (e?.metaKey || e?.ctrlKey)) {
        e?.preventDefault();
        setOpen((open) => !open);
      }
    };

    document?.addEventListener("keydown", down);
    return () => document?.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}> 
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>

            <DialogTrigger asChild>
              <Button
                aria-label="Search article"
                variant="secondary"
                size={"icon"}
              >
                <SearchIcon className="h-5 w-5" />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>

          <TooltipContent>
              <p>Press ⌘ + J</p>
          </TooltipContent>

        </Tooltip>
      </TooltipProvider>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="my-1 mx-3 text-center">Search</DialogTitle>
          <div>
            <Input
              onChange={(e) => setSearchTerm(e.target?.value)}
              value={searchTerm}
              id="search"
              placeholder="Type Here ..."
              className="col-span-3"
            />
          </div>
        </DialogHeader>

        {searchTerm && results && (
          <div>
            {results.count === 0 && <h1>No results found.</h1>}

            {results.count > 0 && (
              <>
                <ul className="max-w-xs flex flex-col">
                  {Object.keys(groupedResults).map((title) => {
                    return groupedResults[title].map(({ document }, i) => {
                      return (
                        <Link key={document.url + i} href={document.url}>
                          <li className="items-center gap-x-2 py-3 px-4 text-sm font-medium odd:bg-gray-100 bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:odd:bg-slate-800 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <h2>{document.title}</h2>
                            <p>{document.content}</p>
                          </li>
                        </Link>
                      );
                    });
                  })}
                </ul>
              </>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
