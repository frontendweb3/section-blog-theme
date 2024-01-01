export function Next_URL(Site: string | undefined): string {
  if (process.env.NODE_ENV === "development") {
    return "/";
  }

  if (process.env.NODE_ENV === "production" && Site) {
    return Site;
  } else {
    throw new Error("Please add your production URL in theme.config.tsx file.");
  }
}
