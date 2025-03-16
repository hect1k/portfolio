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
  Email: "contact@nnisarg.in",
  Resume: "https://nnisarg.in/resume.pdf",
  GitHub: "https://github.com/nnisarggada",
  LinkedIn: "https://www.linkedin.com/in/nnisarggada",
  YouTube: "https://www.youtube.com/@nnisarggada",
  X: "https://x.com/gadannisarg",
  Dev: "https://dev.to/nnisarggada",
};

export const projects = [
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
    title: "MB Mundada Group",
    description: "Website for an Indian textile company",
    categories: ["webdev", "astro", "tailwindcss", "client-work"],
    image: "MBGroup.jpg",
    url: "https://mbgroup.nnisarg.in",
  },
  {
    title: "Palvi Healthcare",
    description: "Website for a healthcare clinic",
    categories: ["webdev", "astro", "tailwindcss", "client-work"],
    image: "Palvi.jpg",
    url: "https://palvi.nnisarg.in",
  },
  {
    title: "MUNDRA",
    description:
      "Simplifies MUN delegate management with a FastAPI-powered backend",
    categories: ["python", "fastapi", "backend", "open-source", "self-host"],
    image: "MUNDRA.jpg",
    url: "https://mundra.nnisarg.in/redoc",
    repo: "https://github.com/nnisarggada/mundra",
    blog: "building-mundra",
  },
  {
    title: "stabl",
    description: "A simple open-source load balancer",
    categories: ["go", "devops", "open-source", "self-host"],
    image: "stabl.jpg",
    repo: "https://github.com/nnisarggada/stabl",
  },
  {
    title: "CPIG",
    description: "Command-line tool to generate color palettes from images.",
    categories: ["c", "command-line", "open-source", "image-processing"],
    image: "CPIG.jpg",
    repo: "https://github.com/nnisarggada/cpig",
    blog: "my-first-aur-package",
  },
  {
    title: "PACMAN",
    description:
      "Web-based contact management app designed for simplicity and privacy.",
    categories: ["webdev", "go", "self-host", "open-source", "privacy"],
    image: "PACMAN.jpg",
    repo: "https://github.com/nnisarggada/pacman",
    blog: "i-created-pacman",
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
    title: "ZenLink",
    description: "A simple open-source URL shortener",
    categories: ["webdev", "open-source", "self-host", "flask", "tailwindcss"],
    image: "ZenLink.png",
    url: "https://short.nnisarg.in",
    repo: "https://github.com/nnisarggada/zenlink",
    blog: "urls-should-be-simple",
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
    title: "NyChess",
    description: "A simple chess game and AI coded in Python",
    categories: ["python", "pygame", "ai-ml"],
    image: "NyChess.png",
    repo: "https://github.com/nnisarggada/nychess",
  },
  {
    title: "CubeRun3D",
    description: "A simple hyper-casual mobile game",
    categories: ["gamedev", "c-sharp", "mobile", "unity"],
    image: "CubeRun3D.png",
    repo: "https://github.com/nnisarggada/cuberun3d",
  },
  {
    title: "OnePlayerPong",
    description: "A unique twist on the classic pong game",
    categories: ["gamedev", "c-sharp", "mobile", "unity"],
    image: "OnePlayerPong.png",
    repo: "https://github.com/nnisarggada/oneplayerpong",
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
  image: "https://nnisarg.in/images/og_image.jpg",
};
