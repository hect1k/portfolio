import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection("blogs");

  return rss({
    title: "Buzz’s Blog",
    description: "A humble Astronaut’s guide to the stars",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      link: `/blogs/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
      customData: post.data.image
        ? `<image src="https://nnisarg.in${post.data.image}"}/>`
        : undefined,
    })),
    stylesheet: "/rss/styles.xsl",
  });
}
