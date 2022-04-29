export type Project = {
  title: string,
  slug: string,
  excerpt: string,
  content: { html: string },
  thumbnail: {
    url: string,
    width: number,
    height: number,
    mimeType: string
  },
  urls: string[]
}