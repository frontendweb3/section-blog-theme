export function Next_URL(URL: string) {
  if (process.env.NODE_ENV === "production") {
    if (process.env.vercel_url) {
      return process.env.vercel_url;
    } else {
      return URL;
    }
  } else {
    return "http://localhost:3000";
  }
}
