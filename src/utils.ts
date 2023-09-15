export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export function formatBlogPosts(
  posts,
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
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
    );

  if (typeof limit === "number") return filteredPosts.slice(0, limit);
  return filteredPosts;
}
