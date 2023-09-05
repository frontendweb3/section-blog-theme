// export const Next_URL :string =(URL:string)=> process.env.NODE_ENV === "production"?  process.env.vercel_url? process.env.vercel_url : URL : "http://localhost:3000"

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
