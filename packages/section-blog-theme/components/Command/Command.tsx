import * as React from "react"
import { File, SearchIcon } from 'lucide-react';
import {
    CommandDialog,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useFetch } from '@/utility/useFetch'
import Link from "next/link";

export function SearchCommandDialog() {
    const [open, setOpen] = React.useState(false)
    const { basePath, locale = "en-US" } = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const fetchItem = `${basePath}/_next/static/chunks/nextra-data-${locale}.json`

    const { data, error } = useFetch(fetchItem)

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
                            <SearchIcon className="h-5 w-5" />
                        </Button>
                    </TooltipTrigger>

                    <TooltipContent>
                        <p>Press ⌘ + k</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />


                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>

                    {
                        data && Object.entries(data).map(([key, value]) => {
                            if (key.includes("tag" || key.includes("tags"))) {
                                return null
                            }
                            return (
                                <CommandItem className="p-2 m-2" key={key + value.title} value={value.title}>
                                    <File className="mr-2 h-4 w-4" />
                                    <Link href={key}>{value.title}</Link>
                                </CommandItem>
                            )
                        })
                    }

                    <CommandSeparator />
                </CommandList>
            </CommandDialog>
        </>
    )
}
