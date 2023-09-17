export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export function calculateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(words / wordsPerMinute);

  return readingTimeMinutes;
}

export function formatBlogPosts(
  posts: any[],
  {
    filterDrafts = true,
    filterFuture = true,
    sortByDate = true,
    limit = undefined,
  } = {},
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.frontmatter;

    if (filterDrafts && draft) return acc;
    if (filterFuture && new Date(date) > new Date()) return acc;

    acc.push(post);

    return acc;
  }, []);

  if (sortByDate)
    filteredPosts.sort(
      (a: any, b: any) =>
        new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
    );

  if (typeof limit === "number") return filteredPosts.slice(0, limit);
  return filteredPosts;
}
