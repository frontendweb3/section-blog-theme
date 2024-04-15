import Link from "next/link";
import type { authorType } from "@/src/types";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function CardFirst({ title, description, url, tag, imageurl }: { title: string; description: string; date: string; url: string; author?: string | authorType; tag?: string | undefined; imageurl?: string; }) {
  return (
    <Card className="nx-shadow-none nx-border-none nx-space-y-4">   
      {
        imageurl? (<Image
        alt={title}
        className="nx-w-full nx-h-auto"
        height="200"
        src={imageurl}
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width="300"
      />) : ""
}
      <CardContent>
        {
          tag !== undefined ? <div className="nx-text-sm nx-uppercase nx-tracking-wide nx-text-gray-500">{tag}</div> : ""
        }
        <h3 className="nx-text-xl nx-font-semibold">{title} </h3>
        <p className="nx-text-gray-600">
          {description}
        </p>

        <Link className="nx-mt-3 nx-block" href={url}>
          <Button className="nx-px-0" variant="link">
            Read More
          </Button>
        </Link>

      </CardContent>

    </Card>
  )
}
