---
title: "I created PACMAN - not what you think 👀👀"
description: "PACMAN is a free, open-source, web-based contact management app designed for simplicity and privacy."
tags: go, golang, open-source, privacy
pubDate: 2024-12-07T00:00:00+05:30
image: "/images/blog/pacman.jpg"
draft: false
---

When it comes to managing your contacts, privacy is often an afterthought. That’s why I created **PACMAN**: **Private Alternative for Contact Management And Networking**. PACMAN is an open-source, web-based application that gives you full control over your contact data. With features like contact creation, editing, and export to VCF format, PACMAN is designed for individuals and organizations who value simplicity and privacy above all else.

![PACMAN](https://nnisarg.in/images/blog/pacman.jpg)

## Why Choose PACMAN?

PACMAN is built with a **privacy-first philosophy**, meaning your contact data stays with you. Unlike other solutions that store your information in the cloud, PACMAN ensures you’re always in control.

Here’s why PACMAN stands out:

- **Free and Open Source**: Yours to tweak and modify as you see fit.
- **Web-Based**: Access PACMAN securely from any browser on your network.
- **VCF Export**: Export your contacts to the universally compatible `.vcf` format.
- **Basic Authentication**: Protect access to your contact data with built-in Basic Auth.
- **Lightweight and Simple**: Focused on essential features without the bloat.

## Features

- **Add, Edit, and Delete Contacts**: A clean interface makes managing contacts intuitive and efficient.
- **Search Contacts**: Quickly find any contact by name, phone, or email.
- **Export to VCF**: Share or back up your contacts with ease.
- **Secure Access**: Browser-based Basic Authentication ensures only you can view your contacts.

## Setting Up PACMAN

Ready to start managing your contacts securely? Follow these steps to self-host PACMAN on your server or local machine.

### Prerequisites

- [Go (Golang)](https://golang.org/dl/) installed on your system.

### Installation

1. Clone the Repository:

   ```bash
   git clone https://github.com/nnisarggada/pacman
   cd pacman
   ```

2. Build and Run the Application:

   ```bash
   go run main.go
   ```

   By default, PACMAN will run on `http://localhost:8080`.

## Customizing PACMAN

PACMAN is designed to be configurable with minimal effort. Here’s what you can modify in `main.go`:

```go
const (
    port     = 8080                       // Port to run the app on
    username = "your_username"            // Basic Auth username
    password = "your_password"            // Basic Auth password
    dbFile   = "database/contacts.db"     // Path to SQLite database file
    vcfFile  = "contacts.vcf"             // Default VCF export file
)
```

Once configured, simply restart the application for changes to take effect.

## Using PACMAN

- **Add Contacts**: Fill out a simple form to add new contacts to your database.
- **Edit or Delete Contacts**: Modify details or remove outdated entries in just a few clicks.
- **Export to VCF**: Export your contact list to a `.vcf` file for easy sharing or backup.
- **Search Contacts**: Use the built-in search functionality to find specific contacts instantly.

## What’s Next for PACMAN?

PACMAN is continually evolving, with exciting features on the way:

- **Bulk Import from VCF**: Easily migrate existing contacts into PACMAN.
- **Group Management**: Organize contacts into groups for better organization.
- **Enhanced Authentication**: Explore additional security measures beyond Basic Auth.

## Conclusion

If you’re looking for a simple, secure, and self-hosted solution for managing your contacts, **PACMAN** is the perfect fit. Whether for personal use or small businesses, PACMAN lets you take control of your data while keeping things lightweight and user-friendly.

Ready to take the leap? Check out the [PACMAN repository](https://github.com/nnisarggada/pacman) on GitHub and get started today!
