import { Q as fallback, Z as head, T as bind_props, D as pop, A as push, I as escape_html, M as attr, N as stringify, K as ensure_array_like, S as spread_attributes } from "./utils.js";
const personalInfo = {
  name: "Nicolás Cazorla Martínez",
  title: "Software Engineer",
  shortBio: "Software Engineer specializing in Python, TypeScript and Product design",
  longBio: "I'm a Software Engineer with a strong foundation in computer science and a passion for building scalable, efficient systems. Currently pursuing my Computer Science Engineering degree at Universidad Nacional de Mar del Plata, I combine academic knowledge with practical experience in the software industry.",
  social: {
    github: "https://github.com/NicoCaz",
    linkedin: "https://linkedin.com/in/cazorlamartineznicolas",
    twitter: "https://x.com/NicoCaz_"
  }
};
function MetaTags($$payload, $$props) {
  push();
  let updatedTitle;
  let title = fallback($$props["title"], "");
  let titleTemplate = fallback($$props["titleTemplate"], "");
  let robots = fallback($$props["robots"], "index,follow");
  let additionalRobotsProps = fallback($$props["additionalRobotsProps"], () => void 0, true);
  let description = fallback($$props["description"], () => void 0, true);
  let mobileAlternate = fallback($$props["mobileAlternate"], () => void 0, true);
  let languageAlternates = fallback($$props["languageAlternates"], () => void 0, true);
  let twitter = fallback($$props["twitter"], () => void 0, true);
  let facebook = fallback($$props["facebook"], () => void 0, true);
  let openGraph = fallback($$props["openGraph"], () => void 0, true);
  let canonical = fallback($$props["canonical"], () => void 0, true);
  let keywords = fallback($$props["keywords"], () => void 0, true);
  let additionalMetaTags = fallback($$props["additionalMetaTags"], () => void 0, true);
  let additionalLinkTags = fallback($$props["additionalLinkTags"], () => void 0, true);
  let robotsParams = "";
  if (additionalRobotsProps) {
    const {
      nosnippet,
      maxSnippet,
      maxImagePreview,
      maxVideoPreview,
      noarchive,
      noimageindex,
      notranslate,
      unavailableAfter
    } = additionalRobotsProps;
    robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
  }
  updatedTitle = titleTemplate ? title ? titleTemplate.replace(/%s/g, title) : title : title;
  if (!robots && additionalRobotsProps) {
    console.warn("additionalRobotsProps cannot be used when robots is set to false");
  }
  head($$payload, ($$payload2) => {
    $$payload2.out += `<!---->`;
    {
      if (updatedTitle) {
        $$payload2.out += "<!--[-->";
        $$payload2.title = `<title>${escape_html(updatedTitle)}</title>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!----> `;
    if (robots !== false) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="robots"${attr("content", `${stringify(robots)}${stringify(robotsParams)}`)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (description) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="description"${attr("content", description)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (canonical) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="canonical"${attr("href", canonical)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (keywords?.length) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="keywords"${attr("content", keywords.join(", "))}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (mobileAlternate) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="alternate"${attr("media", mobileAlternate.media)}${attr("href", mobileAlternate.href)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (languageAlternates && languageAlternates.length > 0) {
      $$payload2.out += "<!--[-->";
      const each_array = ensure_array_like(languageAlternates);
      $$payload2.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let languageAlternate = each_array[$$index];
        $$payload2.out += `<link rel="alternate"${attr("hreflang", languageAlternate.hrefLang)}${attr("href", languageAlternate.href)}>`;
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (twitter) {
      $$payload2.out += "<!--[-->";
      if (twitter.cardType) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:card"${attr("content", twitter.cardType)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.site) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:site"${attr("content", twitter.site)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.handle) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:creator"${attr("content", twitter.handle)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:title"${attr("content", twitter.title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:description"${attr("content", twitter.description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.image) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image"${attr("content", twitter.image)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.imageAlt) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image:alt"${attr("content", twitter.imageAlt)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (facebook) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="fb:app_id"${attr("content", facebook.appId)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (openGraph) {
      $$payload2.out += "<!--[-->";
      if (openGraph.url || canonical) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:url"${attr("content", openGraph.url || canonical)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.type) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:type"${attr("content", openGraph.type.toLowerCase())}> `;
        if (openGraph.type.toLowerCase() === "profile" && openGraph.profile) {
          $$payload2.out += "<!--[-->";
          if (openGraph.profile.firstName) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="profile:first_name"${attr("content", openGraph.profile.firstName)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.profile.lastName) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="profile:last_name"${attr("content", openGraph.profile.lastName)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.profile.username) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="profile:username"${attr("content", openGraph.profile.username)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.profile.gender) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="profile:gender"${attr("content", openGraph.profile.gender)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        } else if (openGraph.type.toLowerCase() === "book" && openGraph.book) {
          $$payload2.out += "<!--[1-->";
          if (openGraph.book.authors && openGraph.book.authors.length) {
            $$payload2.out += "<!--[-->";
            const each_array_1 = ensure_array_like(openGraph.book.authors);
            $$payload2.out += `<!--[-->`;
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let author = each_array_1[$$index_1];
              $$payload2.out += `<meta property="book:author"${attr("content", author)}>`;
            }
            $$payload2.out += `<!--]-->`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.book.isbn) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="book:isbn"${attr("content", openGraph.book.isbn)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.book.releaseDate) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="book:release_date"${attr("content", openGraph.book.releaseDate)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.book.tags && openGraph.book.tags.length) {
            $$payload2.out += "<!--[-->";
            const each_array_2 = ensure_array_like(openGraph.book.tags);
            $$payload2.out += `<!--[-->`;
            for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
              let tag = each_array_2[$$index_2];
              $$payload2.out += `<meta property="book:tag"${attr("content", tag)}>`;
            }
            $$payload2.out += `<!--]-->`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        } else if (openGraph.type.toLowerCase() === "article" && openGraph.article) {
          $$payload2.out += "<!--[2-->";
          if (openGraph.article.publishedTime) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="article:published_time"${attr("content", openGraph.article.publishedTime)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.article.modifiedTime) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="article:modified_time"${attr("content", openGraph.article.modifiedTime)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.article.expirationTime) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="article:expiration_time"${attr("content", openGraph.article.expirationTime)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.article.authors && openGraph.article.authors.length) {
            $$payload2.out += "<!--[-->";
            const each_array_3 = ensure_array_like(openGraph.article.authors);
            $$payload2.out += `<!--[-->`;
            for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
              let author = each_array_3[$$index_3];
              $$payload2.out += `<meta property="article:author"${attr("content", author)}>`;
            }
            $$payload2.out += `<!--]-->`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.article.section) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="article:section"${attr("content", openGraph.article.section)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.article.tags && openGraph.article.tags.length) {
            $$payload2.out += "<!--[-->";
            const each_array_4 = ensure_array_like(openGraph.article.tags);
            $$payload2.out += `<!--[-->`;
            for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
              let tag = each_array_4[$$index_4];
              $$payload2.out += `<meta property="article:tag"${attr("content", tag)}>`;
            }
            $$payload2.out += `<!--]-->`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        } else if (openGraph.type.toLowerCase() === "video.movie" || openGraph.type.toLowerCase() === "video.episode" || openGraph.type.toLowerCase() === "video.tv_show" || openGraph.type.toLowerCase() === "video.other" && openGraph.video) {
          $$payload2.out += "<!--[3-->";
          if (openGraph.video?.actors && openGraph.video.actors.length) {
            $$payload2.out += "<!--[-->";
            const each_array_5 = ensure_array_like(openGraph.video.actors);
            $$payload2.out += `<!--[-->`;
            for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
              let actor = each_array_5[$$index_5];
              if (actor.profile) {
                $$payload2.out += "<!--[-->";
                $$payload2.out += `<meta property="video:actor"${attr("content", actor.profile)}>`;
              } else {
                $$payload2.out += "<!--[!-->";
              }
              $$payload2.out += `<!--]--> `;
              if (actor.role) {
                $$payload2.out += "<!--[-->";
                $$payload2.out += `<meta property="video:actor:role"${attr("content", actor.role)}>`;
              } else {
                $$payload2.out += "<!--[!-->";
              }
              $$payload2.out += `<!--]-->`;
            }
            $$payload2.out += `<!--]-->`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.video?.directors && openGraph.video.directors.length) {
            $$payload2.out += "<!--[-->";
            const each_array_6 = ensure_array_like(openGraph.video.directors);
            $$payload2.out += `<!--[-->`;
            for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
              let director = each_array_6[$$index_6];
              $$payload2.out += `<meta property="video:director"${attr("content", director)}>`;
            }
            $$payload2.out += `<!--]-->`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.video?.writers && openGraph.video.writers.length) {
            $$payload2.out += "<!--[-->";
            const each_array_7 = ensure_array_like(openGraph.video.writers);
            $$payload2.out += `<!--[-->`;
            for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
              let writer = each_array_7[$$index_7];
              $$payload2.out += `<meta property="video:writer"${attr("content", writer)}>`;
            }
            $$payload2.out += `<!--]-->`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.video?.duration) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="video:duration"${attr("content", openGraph.video.duration.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.video?.releaseDate) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="video:release_date"${attr("content", openGraph.video.releaseDate)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.video?.tags && openGraph.video.tags.length) {
            $$payload2.out += "<!--[-->";
            const each_array_8 = ensure_array_like(openGraph.video.tags);
            $$payload2.out += `<!--[-->`;
            for (let $$index_8 = 0, $$length = each_array_8.length; $$index_8 < $$length; $$index_8++) {
              let tag = each_array_8[$$index_8];
              $$payload2.out += `<meta property="video:tag"${attr("content", tag)}>`;
            }
            $$payload2.out += `<!--]-->`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.video?.series) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="video:series"${attr("content", openGraph.video.series)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.title || updatedTitle) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:title"${attr("content", openGraph.title || updatedTitle)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.description || description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:description"${attr("content", openGraph.description || description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.images && openGraph.images.length) {
        $$payload2.out += "<!--[-->";
        const each_array_9 = ensure_array_like(openGraph.images);
        $$payload2.out += `<!--[-->`;
        for (let $$index_9 = 0, $$length = each_array_9.length; $$index_9 < $$length; $$index_9++) {
          let image = each_array_9[$$index_9];
          $$payload2.out += `<meta property="og:image"${attr("content", image.url)}> `;
          if (image.alt) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:image:alt"${attr("content", image.alt)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (image.width) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:image:width"${attr("content", image.width.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (image.height) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:image:height"${attr("content", image.height.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (image.secureUrl) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:image:secure_url"${attr("content", image.secureUrl.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (image.type) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:image:type"${attr("content", image.type.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.videos && openGraph.videos.length) {
        $$payload2.out += "<!--[-->";
        const each_array_10 = ensure_array_like(openGraph.videos);
        $$payload2.out += `<!--[-->`;
        for (let $$index_10 = 0, $$length = each_array_10.length; $$index_10 < $$length; $$index_10++) {
          let video = each_array_10[$$index_10];
          $$payload2.out += `<meta property="og:video"${attr("content", video.url)}> `;
          if (video.width) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:video:width"${attr("content", video.width.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (video.height) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:video:height"${attr("content", video.height.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (video.secureUrl) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:video:secure_url"${attr("content", video.secureUrl.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (video.type) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:video:type"${attr("content", video.type.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.audio && openGraph.audio.length) {
        $$payload2.out += "<!--[-->";
        const each_array_11 = ensure_array_like(openGraph.audio);
        $$payload2.out += `<!--[-->`;
        for (let $$index_11 = 0, $$length = each_array_11.length; $$index_11 < $$length; $$index_11++) {
          let audio = each_array_11[$$index_11];
          $$payload2.out += `<meta property="og:audio"${attr("content", audio.url)}> `;
          if (audio.secureUrl) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:audio:secure_url"${attr("content", audio.secureUrl.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (audio.type) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:audio:type"${attr("content", audio.type.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.locale) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:locale"${attr("content", openGraph.locale)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.siteName) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:site_name"${attr("content", openGraph.siteName)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (additionalMetaTags && Array.isArray(additionalMetaTags)) {
      $$payload2.out += "<!--[-->";
      const each_array_12 = ensure_array_like(additionalMetaTags);
      $$payload2.out += `<!--[-->`;
      for (let $$index_12 = 0, $$length = each_array_12.length; $$index_12 < $$length; $$index_12++) {
        let tag = each_array_12[$$index_12];
        $$payload2.out += `<meta${spread_attributes({ ...tag })}>`;
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (additionalLinkTags?.length) {
      $$payload2.out += "<!--[-->";
      const each_array_13 = ensure_array_like(additionalLinkTags);
      $$payload2.out += `<!--[-->`;
      for (let $$index_13 = 0, $$length = each_array_13.length; $$index_13 < $$length; $$index_13++) {
        let tag = each_array_13[$$index_13];
        $$payload2.out += `<link${spread_attributes({ ...tag })} onload="this.__e=event" onerror="this.__e=event">`;
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  bind_props($$props, {
    title,
    titleTemplate,
    robots,
    additionalRobotsProps,
    description,
    mobileAlternate,
    languageAlternates,
    twitter,
    facebook,
    openGraph,
    canonical,
    keywords,
    additionalMetaTags,
    additionalLinkTags
  });
  pop();
}
export {
  MetaTags as M,
  personalInfo as p
};
