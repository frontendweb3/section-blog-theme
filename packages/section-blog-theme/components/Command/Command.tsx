import * as React from "react";
import { CommandIcon, TextIcon } from "lucide-react";
import { CommandDialog, CommandEmpty, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
            <Button aria-label="Search article" variant={"ghost"} size={"icon"} onClick={() => setOpen(!open)}>
              <CommandIcon className="nx-h-5 nx-w-5" />
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            <p>Press ⌘ + k</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={"Search here..."} />

        <CommandList className="mx-2">
          {data &&
            Object.entries(data).map(([key, value]) => {
              if (key.includes("tag" || key.includes("tags"))) {
                return null;
              }

              if (value.data) {
                return (
                  <SubCommandItem
                     className="nx-ml-3 nx-my-2"
                     key={key + value.title}
                     value={value.title}
                  >
                    <div onClick={()=>setOpen(false)} className="nx-flex nx-w-fill nx-flex-row nx-items-center nx-justify-around">
                      <TextIcon className="nx-h-5 nx-w-5 nx-mr-2" />
                      <Link className="nx-block nx-text-sm" href={key}>
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
