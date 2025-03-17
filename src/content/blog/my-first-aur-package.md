---
title: "Publishing My First AUR Package: CPIG"
description: "From Code to AUR: How I Got My Code onto Arch’s Servers"
tags: arch-linux, linux, open-source, c
pubDate: 2024-12-31T00:00:00+05:30
image: "/images/blog/cpig.jpg"
draft: false
---

Today, I’m excited to share that I’ve published my **first package** to the **Arch User Repository (AUR)**! 🎉 The package is **CPIG - Color Palette Inference Generator**, a simple C-based tool that generates color palettes from images using the **K-means clustering algorithm**. It’s been a rewarding experience, and I’d love to walk you through the process of creating and publishing a package to the AUR.

![CPIG Banner](https://nnisarg.in/images/blog/cpig.jpg)

## What is CPIG?

CPIG is a small, lightweight tool that allows you to extract dominant colors from an image and generate a color palette. It’s designed for **designers**, **developers**, or anyone who needs a color palette from an image, whether it’s for a website, a project, or inspiration.

The tool uses the **K-means clustering algorithm** to analyze the image and find the most prominent colors, which are then outputted in **hexadecimal format**. You can easily adjust the number of colors to extract and even save the palette to a text file.

## Why Publish to the AUR?

As an [**Arch Linux**](https://archlinux.org/) user, I’ve always admired the [**AUR**](https://aur.archlinux.org/) (Arch User Repository) for its flexibility and community-driven nature. The AUR allows developers to share their open-source projects with the Arch community, and I saw it as the perfect platform for CPIG.

Publishing a package to the AUR not only allows other users to easily install and use your software but also gives back to the open-source community. As this was my first time packaging software for the AUR, I decided to take the plunge and learn about the process, packaging standards, and best practices. Here’s how I did it!

## The Process of Publishing CPIG to the AUR

### Step 1: Packaging the Project

The first step in publishing to the AUR was **packaging** my project. This involves creating a [**PKGBUILD**](https://github.com/nnisarggada/cpig/blob/master/PKGBUILD) file, which is a script that defines how the package is built, installed, and maintained on Arch Linux.

For CPIG, the PKGBUILD script included the project’s dependencies, such as the [**STB Image**](https://github.com/nothings/stb/blob/master/stb_image.h) library for loading images, and instructions for building the program using **GCC** (GNU Compiler Collection). Once the PKGBUILD was ready, I tested it locally to ensure everything was working as expected.

### Step 2: Testing the Package

Before submitting the package, I made sure it was working as intended by testing the build process. I used `makepkg` to create a local package and verified that the generated binary was functional. I also checked the installation process, ensuring that CPIG installed cleanly and could be run from the terminal.

### Step 3: Creating the AUR Submission

Once I was happy with the package, I created an **AUR account** and submitted the package. The submission process involved uploading the **PKGBUILD** file, the source code, and any additional files needed to build the package.

After filling out all the details, I submitted the package for review. A few hours later, my package was approved and listed on the AUR! 🎉

### Step 4: Maintaining the Package

After the package was live, I started keeping an eye on it. This includes ensuring compatibility with future versions of Arch Linux, fixing any reported issues, and adding features or updates as needed. It’s also important to keep the documentation up-to-date so users can easily install and use the package.

## Why CPIG is Useful

I created CPIG because I found that many tools for generating color palettes from images were either too complex or didn’t give me enough control. CPIG is designed to be simple, lightweight, and customizable, making it perfect for anyone who needs to generate a color palette without all the extra bloat.

Here’s what makes CPIG stand out:

- **K-means clustering** for color extraction
- Customizable number of colors
- Hexadecimal color output
- Lightweight and simple design

## Installing CPIG from the AUR

Installing CPIG on your Arch Linux system is simple. Once the package is available on the AUR, you can install it using an AUR helper like `yay` or `paru`. Here’s the command:

```bash
yay -S cpig-git
```

Or, if you prefer to build it manually:

```bash
git clone https://aur.archlinux.org/cpig-git.git /tmp/cpig
cd /tmp/cpig
makepkg -si
```

Once installed, you can use CPIG directly from the terminal:

```bash
cpig input.jpg
```

## What’s Next for CPIG?

While CPIG is fully functional, I have some exciting plans for future updates:

- **Optimize the color extraction algorithm** for better speed and accuracy.
- **Support more image formats** (e.g., TIFF, GIF).
- **Enhance the output options** (e.g., JSON, CSV, or image previews of the palette).
- **Improve error handling** and user interface for smoother user experience.

I’m looking forward to continuing the development of CPIG and adding more features over time.

## Conclusion

Publishing my first package to the AUR was a fulfilling and educational experience. It taught me a lot about packaging, the AUR submission process, and how to maintain open-source projects. If you’re an Arch Linux user, I hope you find CPIG useful for your projects. And if you’re new to packaging, I encourage you to give it a try—there’s no better way to learn than by diving in!

If you'd like to contribute to the project, check out the [**CPIG repository**](https://github.com/nnisarggada/cpig) on GitHub. Whether it's improving the code, adding new features, or simply reporting issues, contributions are always welcome. Open-source projects thrive on community involvement, and I look forward to collaborating with others to make CPIG even better.

Check out CPIG on the [AUR](https://aur.archlinux.org/packages/cpig-git) and [GitHub](https://github.com/nnisarggada/cpig). Let me know if you have any feedback or suggestions. Here's to more open-source contributions! 🚀
