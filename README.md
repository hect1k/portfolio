# Launchpad - A Minimal Astro Starter

Launchpad is a **fast**, **minimal**, and **SEO-friendly** [Astro](https://astro.build/) starter template designed to streamline your web development process. It comes with pre-configured settings, reusable components, and best practices for performance and accessibility.

![Launchpad Poster](https://launchpad.nnisarg.in/poster.jpg)

## 🚀 Features

- ⚡ **Lightning Fast** – Powered by [Astro](https://astro.build/) for optimal performance
- 📄 **Prebuilt Pages** – Home, About, and other essential pages
- 🎨 **[TailwindCSS](https://tailwindcss.com/) Ready** – Pre-configured for styling
- 🌍 **SEO Optimized** – Meta tags, Open Graph, and Twitter Card setup
- 🔗 **Canonical URLs** – Pre-configured for better indexing
- 🖼️ **Image Optimization** – Astro’s built-in image handling
- 🔧 **Modular Components** – Easily reusable UI elements

## 📦 Installation

To get started with Launchpad, run the following command:

```sh
pnpm create astro@latest --template hect1k/launchpad
```

## 🛠️ Usage

Run the development server:

```sh
pnpm dev
```

Build for production:

```sh
pnpm build
```

Preview the production build:

```sh
pnpm preview
```

## 📂 Project Structure

```
launchpad/
│── src/
│   ├── components/  # Reusable UI components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Default pages
│   ├── styles/      # Global styles
│   ├── utils.ts     # Global vars/funcs
│── public/          # Static assets
│── astro.config.mjs # Astro configuration
│── package.json     # Dependencies
```

## 🔧 Configuration

### **SEO Metadata**
Modify `metaData` in `src/utils.ts`:

```js
export const metaData = {
  title: "Launchpad | A minimal Astro Starter by Nnisarg Gada",
  description: "Launchpad is a fast, minimal, and SEO-friendly Astro starter template designed for modern web projects.",
  image: "https://launchpad.nnisarg.in/poster.jpg",
  author: "Nnisarg Gada",
};
```

## 📜 License

This project is licensed under the GNU General Public License v3 - see the [LICENSE](LICENSE.md) file for details.

## 💡 Author

Created by **[Nnisarg Gada](https://nnisarg.in)**. Feel free to reach via [contact@nnisarg.in](mailto:contact@nnisarg.in)!

---

🚀 **Start building with Launchpad today!**

