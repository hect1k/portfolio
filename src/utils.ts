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

export const projects = [
  {
    title: "SWFT",
    description: "A simple temporary file sharing solution",
    categories: ["web", "open-source", "self-host", "nextjs", "tailwindcss"],
    url: "https://share.nnisarg.in",
    repo: "https://github.com/nnisarggada/swft",
  },
  {
    title: "PACMAN",
    description: "An open-source contact management system",
    categories: ["web", "open-source", "self-host", "nextjs", "tailwindcss"],
    url: "https://pacman.nnisarg.in",
    repo: "https://github.com/nnisarggada/pacman",
  },
  {
    title: "Cyno5ure",
    description: "An e-commerce website built for a clothing store",
    categories: ["web", "client-work", "shopify", "nextjs", "tailwindcss"],
    url: "https://cyno5ure.nnisarg.in",
  },
  {
    title: "NyChess",
    description: "A simple chess game and AI coded in Python",
    categories: ["python", "ai-ml"],
    image: "NyChess.png",
    repo: "https://github.com/nnisarggada/nychess",
  },
  {
    title: "TwoDu",
    description: "A simple cross-platform To-Do Manager",
    categories: ["web", "flutter", "firebase"],
    url: "https://twodu.nnisarg.in",
    repo: "https://github.com/nnisarggada/twodu",
  },
];
