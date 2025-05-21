export const seoConfig = {
  defaultTitle: "Nicolás Cazorla Martínez",
  titleTemplate: "%s | Nicolás Cazorla Martínez",
  description:
    "Personal portfolio and blog of Nicolás Cazorla Martínez, a software engineer passionate about web development and technology.",
  canonical: "https://nicocaz.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nicocaz.com",
    siteName: "Nicolás Cazorla Martínez",
    images: [
      {
        url: "https://nicocaz.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nicolás Cazorla Martínez",
      },
    ],
  },
  twitter: {
    handle: "@nicocazorla",
    site: "@nicocazorla",
    cardType: "summary_large_image" as const,
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "theme-color",
      content: "#ffffff",
      media: "(prefers-color-scheme: light)",
    },
    {
      name: "theme-color",
      content: "#000000",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
};
