import typography from "@tailwindcss/typography";

export default {
  darkMode: "media",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "#6b75e6",
          dark: "#818cf8",
        },
        background: {
          light: "#efefef",
          dark: "#1c1c1c",
        },
        text: {
          light: "#1c1c1c",
          dark: "#efefef",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text.light"),
            a: {
              color: theme("colors.accent.DEFAULT"),
              "&:hover": {
                color: "#5a63d5",
              },
            },
            strong: {
              color: theme("colors.accent.DEFAULT"),
            },
            em: {
              color: "#ffffff",
            },
            code: {
              color: "#ffffff",
              backgroundColor: "#2f2f2f",
              padding: "2px",
              borderRadius: "4px",
            },
            img: {
              maxWidth: "36rem",
              width: "100%",
              height: "auto",
              margin: "0 auto",
            },
            pre: {
              backgroundColor: "#131313",
              padding: "1rem",
              borderRadius: "6px",
            },
            '[class~="dark"] &': {
              color: theme("colors.text.dark"),
              a: {
                color: theme("colors.accent.dark"),
                "&:hover": {
                  color: "#cad5ff",
                },
              },
              strong: {
                color: theme("colors.accent.dark"),
              },
              em: {
                color: "#ffffff",
              },
              code: {
                color: "#ffffff",
                backgroundColor: "#2f2f2f",
                padding: "2px",
                borderRadius: "4px",
              },
              img: {
                maxWidth: "36rem",
                width: "100%",
                height: "auto",
                margin: "0 auto",
              },
              pre: {
                backgroundColor: "#131313",
                padding: "1rem",
                borderRadius: "6px",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
