export function Next_URL(URL: string| undefined) {
  
  if (process.env.NODE_ENV === "production" && URL !== undefined) {
    
    if (process.env.vercel_url) {
      return process.env.vercel_url;
    } else {
      return URL;
    }

  } else {
    return "http://localhost:3000";
  }
}
