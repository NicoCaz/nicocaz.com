export const seoConfig = {
  defaultTitle: "Nicolás Cazorla Martínez",
  titleTemplate: "%s | Nicolás Cazorla Martínez",
  description:
    "Nicolás Cazorla Martínez — Senior Software Engineer with 6+ years building scalable fintech and web3 platforms. Full-stack across TypeScript, .NET, Python, and Solidity. Currently at Bull Market Brokers.",
  canonical: "https://nicocaz.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nicocaz.com",
    siteName: "Nicolás Cazorla Martínez",
    images: [
      {
        url: "https://nicocaz.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nicolás Cazorla Martínez — Senior Software Engineer",
      },
    ],
  },
  twitter: {
    handle: "@NicoCaz_",
    site: "@NicoCaz_",
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
      href: "/nc.svg",
      type: "image/svg+xml",
    },
  ],
};
