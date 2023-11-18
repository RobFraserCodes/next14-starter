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

export type Frequency = {
  value: string;
  label: string;
  priceSuffix: string;
}

export type Tier = {
  name: string;
  id: string;
  href: string;
  price: {
    monthly: string;
    annually: string;
  };
  description: string;
  features: string[];
  mostPopular: boolean;
}
