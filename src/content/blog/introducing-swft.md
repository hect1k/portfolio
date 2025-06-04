---
title: "Introducing SWFT - Simple Web-based File Transfer! 📁✨"
description: "SWFT is a lightweight and intuitive web-based file sharing service that simplifies the process of sharing files with others."
tags: python, tailwindcss, open-source, productivity
pubDate: 2023-09-08T20:25:00+05:30
image: "/images/blog/swft-ui.jpg"
draft: false
---

In today's digital age, file sharing has become an integral part of our daily routines. Whether it's sharing documents for work, sending photos to friends and family, or collaborating on projects, having a reliable and user-friendly file sharing solution is crucial. That's where SWFT - Simple Web-based File Transfer - shines, and the best part? It's open source!

![SWFT](https://nnisarg.in/images/blog/swft-ui.jpg)

## The SWFT Advantage

[SWFT](https://github.com/hect1k/swft) is a lightweight and intuitive web-based file sharing service that simplifies the process of sharing files with others. With its impressive set of features, it's poised to become your go-to file sharing solution. Let's take a closer look at what sets SWFT apart:

## Seamless File Uploads and Shareable Links

SWFT makes uploading files a breeze. Whether it's a single document or a collection of photos, you can quickly and easily upload your files to the platform. Once uploaded, SWFT generates shareable links that you can send to your recipients. It's a straightforward process that eliminates the need for complex setups or software installations.

## Customizable Links for Personalized Sharing

One of SWFT's standout features is its ability to customize shareable links. Instead of sharing long and cryptic URLs, you can assign user-defined names to your links. This personal touch makes sharing files more professional and accessible.

## Time-Limited File Sharing

Privacy and security are paramount when sharing files online. SWFT allows you to set a specified time period for file retention. After this duration, your files are automatically deleted. This feature ensures that your shared files have a limited lifespan, adding an extra layer of security and privacy to your file sharing.

## Support for Command-Line Users

SWFT caters to all types of users, including those who prefer command-line tools like curl or wget. This versatility means that tech-savvy individuals can seamlessly integrate SWFT into their workflow. Here's an example command using curl to upload a file and customize your shareable link:

```bash
curl -X POST -F "file=@path/to/your/file" -F "link=my-custom-link" -F "time=1800" https://share.nnisarg.in/upload
```

Simply replace `path/to/your/file` with the actual path to your file, `my-custom-link` with your preferred link name and `1800` with the desired time period in seconds. This command allows you to harness the power of SWFT directly from the command line, making file sharing a breeze for tech-savvy users.

## How to Get Started with SWFT

Getting started with SWFT is as easy as 1-2-3:

1. Visit the [SWFT website](https://share.nnisarg.in).
2. Upload your files and customize your shareable link and delete time if desired.
3. Share the link with your intended recipients.

It's that simple! SWFT streamlines the file sharing process, making it accessible to users of all levels of tech proficiency.

## Get Involved on GitHub

Ready to get involved with SWFT? Visit our GitHub repository at [SWFT on GitHub](https://github.com/hect1k/swft). Here, you can:

- Fork the project: Create your own copy of SWFT and start making changes.

- Report issues: If you encounter a bug or have a feature request, let us know by creating an issue on GitHub.

- Contribute code: If you're a developer, you can contribute directly to the project by submitting pull requests.

- Join the community: Connect with other SWFT users and developers to share ideas and collaborate.

## Join the SWFT Community Today

Whether you're a casual user or a seasoned developer, SWFT welcomes you to join our open source community. Together, we can create a file sharing solution that meets the needs of users worldwide. Visit our GitHub repository, explore the code, and start sharing files effortlessly with SWFT today! Your files, your way, with SWFT!
