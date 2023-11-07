
export function Next_URL(Site: string | undefined): string {

  let getPort = process.env.PORT || 3000

  let getDomain = `http://localhost:${getPort}`

  if (process.env.NODE_ENV === 'development' || getPort) {
    return getDomain + "/"
  } else {
    if (Site) {
      return Site
    } else {
      return getDomain + "/"
    }
  }
}