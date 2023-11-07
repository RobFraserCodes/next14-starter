export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    keywords: array
    author: array
    links: {
      twitter: string
      github: string
    }
  }

export type Navigation = {
    title: string
    path: string
}