import { E as getContext, D as pop, A as push, F as store_get, G as unsubscribe_stores } from "../../chunks/utils.js";
import "clsx";
import "../../chunks/client.js";
import { p as personalInfo, M as MetaTags } from "../../chunks/MetaTags.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Layout($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
const seoConfig = {
  titleTemplate: "%s | Nicolás Cazorla Martínez",
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
        alt: "Nicolás Cazorla Martínez"
      }
    ]
  },
  twitter: {
    handle: "@nicocazorla",
    site: "@nicocazorla",
    cardType: "summary_large_image"
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    },
    {
      name: "theme-color",
      content: "#ffffff",
      media: "(prefers-color-scheme: light)"
    },
    {
      name: "theme-color",
      content: "#000000",
      media: "(prefers-color-scheme: dark)"
    }
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico"
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180"
    }
  ]
};
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let title, description;
  title = store_get($$store_subs ??= {}, "$page", page).data.title ? `${store_get($$store_subs ??= {}, "$page", page).data.title} | ${personalInfo.name}` : `${personalInfo.name} - ${personalInfo.title}`;
  description = store_get($$store_subs ??= {}, "$page", page).data.description || personalInfo.shortBio;
  MetaTags($$payload, {
    title,
    titleTemplate: seoConfig.titleTemplate,
    description,
    canonical: `${seoConfig.canonical}${store_get($$store_subs ??= {}, "$page", page).url.pathname}`,
    openGraph: {
      ...seoConfig.openGraph,
      title,
      description,
      url: store_get($$store_subs ??= {}, "$page", page).url.href,
      siteName: personalInfo.name
    },
    twitter: { ...seoConfig.twitter, title, description },
    additionalMetaTags: seoConfig.additionalMetaTags,
    additionalLinkTags: seoConfig.additionalLinkTags
  });
  $$payload.out += `<!----> `;
  Layout($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
