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
    categories: ["webdev", "open-source", "self-host", "nextjs", "tailwindcss"],
    image: "SWFT.png",
    url: "https://share.nnisarg.in",
    repo: "https://github.com/nnisarggada/swft",
  },
  {
    title: "PACMAN",
    description: "An open-source contact management system",
    categories: ["webdev", "open-source", "self-host", "nextjs", "tailwindcss"],
    image: "PACMAN.png",
    url: "https://pacman.nnisarg.in",
    repo: "https://github.com/nnisarggada/pacman",
  },
  {
    title: "Cyno5ure",
    description: "An e-commerce website built for a clothing store",
    categories: ["webdev", "client-work", "shopify", "nextjs", "tailwindcss"],
    image: "Cyno5ure.png",
    url: "https://cyno5ure.nnisarg.in",
  },
  {
    title: "NyChess",
    description: "A simple chess game and AI coded in Python",
    categories: ["python", "pygame", "ai-ml"],
    image: "NyChess.png",
    repo: "https://github.com/nnisarggada/nychess",
  },
  {
    title: "TwoDu",
    description: "A simple cross-platform To-Do Manager",
    categories: ["webdev", "flutter", "dart", "firebase"],
    image: "TwoDu.png",
    url: "https://twodu.nnisarg.in",
    repo: "https://github.com/nnisarggada/twodu",
  },
  {
    title: "CubeRun3D",
    description: "A simple hyper-casual mobile game",
    categories: ["gamedev", "c-sharp", "mobile", "unity"],
    image: "CubeRun3D.png",
    repo: "https://github.com/nnisarggada/cuberun3d",
    url: "https://play.google.com/store/apps/details?id=com.nnisarg.CubeRun3D&pli=1",
  },
  {
    title: "OnePlayerPong",
    description: "A unique twist on the classic pong game",
    categories: ["gamedev", "c-sharp", "mobile", "unity"],
    image: "OnePlayerPong.png",
    repo: "https://github.com/nnisarggada/oneplayerpong",
    url: "https://play.google.com/store/apps/details?id=com.nnisarg.OnePlayerPong&pli=1",
  },
  {
    title: "Artistic Humans",
    description: "Website for a theater company",
    categories: ["webdev", "client-work", "html", "css"],
    image: "ArtisticHumans.png",
    repo: "https://github.com/nnisarggada/artistichumans",
    url: "https://artistichumans.nnisarg.in",
  },
  {
    title: "missionICU",
    description: "Website for a NGO improving rural healthcare in India",
    categories: ["webdev", "client-work", "react", "tailwindcss"],
    image: "missionICU.png",
    repo: "https://github.com/nnisarggada/missionicu",
    url: "https://missionicu.nnisarg.in",
  },
  {
    title: "Bhoomika",
    description: "Website for a play about mental health",
    categories: ["webdev", "client-work", "react", "tailwindcss"],
    image: "Bhoomika.png",
    repo: "https://github.com/nnisarggada/bhoomika",
    url: "https://bhoomika.nnisarg.in",
  },
  {
    title: "Wait A Millet!",
    description: "Website for a play about Millets",
    categories: ["webdev", "client-work", "html", "tailwindcss"],
    image: "Millet.png",
    repo: "https://github.com/nnisarggada/millets",
    url: "https://millet.nnisarg.in",
  },
];

export const uniqueCategories: string[] = [];

projects.forEach((project: any) => {
  project.categories.forEach((category: string) => {
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category);
    }
  });
});
