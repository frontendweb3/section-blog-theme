import * as React from "react";
import { CommandIcon, TextIcon } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandGroup,
} from "@/components/ui/command";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useFetch } from "usehooks-ts";
import Link from "next/link";
import type { SearchData } from "@/src/types";
import { useCommandState } from "cmdk";

export function SearchCommandDialog() {
  const [open, setOpen] = React.useState(false);
  const { basePath, locale = "en-US" } = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const fetchItem = `${basePath}/_next/static/chunks/nextra-data-${locale}.json`;

  const { data, error } = useFetch<SearchData>(fetchItem);

  const SubCommandItem = (props) => {
    const search = useCommandState((state) => state.search);

    if (!search) return null;

    return <CommandItem {...props} />;
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              aria-label="Search article"
              variant="secondary"
              size={"icon"}
              onClick={() => setOpen(!open)}
            >
              <CommandIcon className="h-5 w-5" />
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            <p>Press ⌘ + k</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={" Search here..."} />

        <CommandList>
          <CommandEmpty> No results found.</CommandEmpty>
          {data &&
            Object.entries(data).map(([key, value]) => {
              if (key.includes("tag" || key.includes("tags"))) {
                return null;
              }

              if (value.data) {
                return (
                  <SubCommandItem
                    className="border-l-2 ml-3  my-2 "
                    key={key + value.title}
                    value={value.title}
                  >
                    <div className="flex w-fill flex-row items-center justify-around">
                      <TextIcon className="h-5 w-5 mr-2" />

                      <Link className="block text-sm" href={key}>
                        {value.title}
                      </Link>
                    </div>
                  </SubCommandItem>
                );
              }
            })}
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
