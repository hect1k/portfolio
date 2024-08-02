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

export const socialLinks = {
  GitHub: "https://github.com/nnisarggada",
  LinkedIn: "https://www.linkedin.com/in/nnisarggada/",
  X: "https://x.com/gadannisarg",
  Dev: "https://dev.to/nnisarggada",
};

export const projects = [
  {
    title: "MB Mundada Group",
    description: "Website for an Indian Textile Company",
    categories: ["webdev", "astro", "tailwindcss", "client-work"],
    image: "MBGroup.jpg",
    url: "https://MBGroup.nnisarg.in",
  },
  {
    title: "EzHLS",
    description: "A simple open-source HLS Stream generator built with FastAPI",
    categories: [
      "webdev",
      "open-source",
      "self-host",
      "fastapi",
      "tailwindcss",
    ],
    image: "EzHLS.jpg",
    url: "https://hls.nnisarg.in",
    repo: "https://github.com/nnisarggada/ezhls",
    blog: "magic-behind-video-streaming",
  },
  {
    title: "MAARG India",
    description:
      "PWA for an NGO that helps India's underprivileged youth with career guidance",
    categories: ["webdev", "pwa", "astro", "tailwindcss", "client-work"],
    image: "Maarg.jpg",
    url: "https://maargindia.org",
  },
  {
    title: "Trainchess",
    description: "A website for a chess coaching company",
    categories: ["webdev", "astro", "tailwindcss", "client-work"],
    image: "Trainchess.jpg",
    url: "https://trainchess.nnisarg.in",
  },
  {
    title: "The Dwij Times",
    description: "A simple website for an album with 3D perspective effects",
    categories: ["webdev", "astro", "tailwindcss", "client-work"],
    image: "TheDwijTimes.png",
    url: "https://dwij.nnisarg.in",
  },
  {
    title: "Debate-a-thon",
    description: "A website for a hacakathon that I hosted in my college",
    categories: ["webdev", "flask", "astro", "tailwindcss", "hackathon"],
    image: "DAT.png",
    url: "https://dat.nnisarg.in",
  },
  {
    title: "ZenLink",
    description: "A simple open-source URL shortener",
    categories: ["webdev", "open-source", "self-host", "flask", "tailwindcss"],
    image: "ZenLink.png",
    url: "https://short.nnisarg.in",
    repo: "https://github.com/nnisarggada/zenlink",
    blog: "urls-should-be-simple",
  },
  {
    title: "SWFT",
    description: "A simple temporary file sharing solution",
    categories: ["webdev", "open-source", "self-host", "flask", "tailwindcss"],
    image: "SWFT.png",
    url: "https://share.nnisarg.in",
    repo: "https://github.com/nnisarggada/swft",
    blog: "introducing-swft",
  },
  {
    title: "PACMAN",
    description: "An open-source contact management system",
    categories: ["webdev", "open-source", "self-host", "nextjs", "tailwindcss"],
    image: "PACMAN.png",
    url: "https://pacman.nnisarg.in",
    repo: "https://github.com/nnisarggada/pacman",
    blog: "i-created-pacman",
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
];

export const uniqueCategories: string[] = [];

projects.forEach((project: any) => {
  project.categories.forEach((category: string) => {
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category);
    }
  });
});

export const metaData = {
  title: "Nnisarg Gada | Developer, Tech Enthusiast, Problem Solver",
  description:
    "Nnisarg's portfolio website showcasing coding projects and tech adventures as a developer.",
  keywords:
    "Nnisarg, portfolio, coding projects, tech adventures, developer, web development, programming, software projects, developer portfolio, coding journey, technology showcase, web developer, programming adventures, tech enthusiast",
  image: "https://nnisarg.in/images/profile-pic.png",
};
