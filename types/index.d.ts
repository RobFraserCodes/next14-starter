export type SiteConfig = {
    name: string
    brand: string
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