import rss, { pagesGlobToRssItems } from "@astrojs/rss";

let blogs = await pagesGlobToRssItems(import.meta.glob("./blogs/*.md"));

export const get = () =>
  rss({
    title: "Nnisarg's Blogs",
    description: "The adventures of a self-taught student developer",
    site: "https://nnisarg.in",
    items: blogs.map((blog) => ({
      link: blog.link,
      title: blog.title,
      pubDate: blog.pubDate,
    })),
    stylesheet: "/rss/styles.xsl",
  });
