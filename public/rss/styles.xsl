<?xml version="1.0" encoding="utf-8"?>rss
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RSS Feed for Nnisarg's Blog Posts | Nnisarg Gada</title>
        <style>
          :root {
            --text: #0f0f0f;
            --background: #e3e3e3;
            --primary: #5c68eb;
            --accent: #f97415;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --text: #efefef;
              --background: #1c1c1c;
              --primary: #6b75e6;
              --accent: #f97415;
            }
          }

          body {
            font-family: Inter, sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--background);
            color: var(--text);
            box-sizing: border-box;
            overflow-x: hidden;
          }

          *::-webkit-scrollbar {
            width: 5px;
            height: 5px;
            scrollbar-width: thin;
          }

          *::-webkit-scrollbar-thumb {
            background-color: var(--primary);
            border-radius: 5px;
          }

          *::-webkit-scrollbar-track {
            background-color: var(--background);
            border-radius: 3px;
          }

          * {
            scrollbar-color: var(--primary) var(--background);
          }

          *::selection {
            background-color: var(--primary);
            color: white;
          }

          header {
            background-color: var(--background);
            color: var(--text);
            text-align: center;
            padding: 24px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          header div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 16px;
          }

          header p {
            margin: 0;
          }

          h1 {
            font-size: 24px;
            margin: 0;
          }

          p {
            font-size: 16px;
          }

          ul {
            list-style-type: none;
            padding: 1rem;
          }

          li {
            background: var(--background);
            color: var(--text);
            box-shadow: 0 0 0 1px var(--text);
            border-radius: 5px;
            margin: 20px;
            display: flex;
            flex-direction: column;
          }

          .deets {
            padding: 12px 24px;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          ul a {
            color: white;
            text-decoration: none;
          }

          h3 {
            font-weight: normal;
          }

          img {
            max-width: 100%;
            height: auto;
            border-radius: 5px 5px 0 0;
          }

          .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            width: 100%;
          }

          .tag {
            background-color: var(--primary);
            color: white;
            padding: 4px 8px;
            border-radius: 5px;
            font-weight: bold;
          }

          /* Responsive Styles */
          @media screen and (min-width: 768px) {
            body {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            header {
              width: 100dvw;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            header div {
              flex-direction: row;
              justify-content: space-between;
              width: 1200px;
            }

            ul {
              max-width: 1000px;
            }

            li {
              flex-direction: row;
              height: fit-content;
            }

            img {
              width: 33.33%;
              height: auto;
              aspect-ratio: 1/1;
              object-fit: cover;
              border-radius: 5px 0 0 5px;
            }

            .deets {
              width: 100%;
            }
          }
        </style>
      </head>
      <body>
        <header>
          <div>
            <h1><xsl:value-of select="/rss/channel/title" /></h1>
            <p><xsl:value-of select="/rss/channel/description" /></p>
          </div>
        </header>
        <ul>
          <xsl:for-each select="/rss/channel/item">
            <xsl:variable name="link" select="link" />
            <a href="{link}" target="_blank">
            <li>
              <xsl:if test="image">
                <img src="{image/@src}" alt="Item Image" />
              </xsl:if>
              <div class="deets">
                <div>
                <h2><xsl:value-of select="title" /></h2>
                <h3><xsl:value-of select="description" /></h3>
                  </div>
                <div class="tags">
                  <xsl:for-each select="category">
                    <div class="tag">
                      <xsl:text>#</xsl:text>
                      <xsl:value-of select="." />
                    </div>
                  </xsl:for-each>
                </div>
                <p>
                  Written on
                  <xsl:variable name="pubDate" select="pubDate" />
                  <xsl:value-of select="substring($pubDate, 6, 12)" />
                </p>
              </div>
            </li>
            </a>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>

