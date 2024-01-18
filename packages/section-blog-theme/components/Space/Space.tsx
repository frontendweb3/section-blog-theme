import { spaceType } from "@/src/types";

export function Space({ h }: { h: spaceType }) {
  if (h === "xs") {
    return <div className="nx-h-16 nx-h-max-16  nx-w-full"></div>;
  }

  if (h === "sm") {
    return <div className="nx-h-20 nx-h-max-20  nx-w-full"></div>;
  }

  if (h === "md") {
    return <div className="nx-h-24 nx-h-max-24  nx-w-full"></div>;
  }

  if (h === "lg") {
    return <div className="nx-h-28 nx-h-max-28  nx-w-full"></div>;
  }

  if (h === "xl") {
    return <div className="nx-h-32 nx-h-max-32  nx-w-full"></div>;
  }
  if (h === "2xl") {
    return <div className="nx-h-40 nx-h-max-40  nx-w-full"></div>;
  } else {
    return <div className="nx-h-12 nx-h-max-12  nx-w-full"></div>;
  }
}
