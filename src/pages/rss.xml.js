import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection("blogs");

  const validPosts = blog.filter((post) => {
    return post.data.draft !== true;
  });

  validPosts.sort((a, b) => {
    const pubDateA = new Date(a.data.pubDate);
    const pubDateB = new Date(b.data.pubDate);

    return pubDateB - pubDateA;
  });

  const rssFeed = rss({
    title: "Nnisarg’s Blogs",
    description: "The adventures of a self-taught student developer :P",
    site: context.site,
    items: validPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blogs/${post.slug}/`,
      customData:
        (post.data.image
          ? `<image src="https://nnisarg.in${post.data.image}"}/>`
          : "") +
        (post.data.tags
          ? post.data.tags
              .split(", ")
              .map((tag) => `<category>${tag}</category>`)
              .join("")
          : ""),
      content: parser.render(post.body),
      ...post.data,
    })),
    stylesheet: "/rss/styles.xsl",
  });
  return rssFeed;
}
