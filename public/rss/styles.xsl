<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>📣 RSS Feed for Nnisarg's Blogs | Nnisarg Gada</title>
        <style>
          body {
            font-family: Inter, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #171717;
            box-sizing: border-box;
            overflow-x: hidden;
          }

          header {
            background-color: #00000050;
            color: white;
            text-align: center;
            padding: 24px;
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
            padding: 0;
          }

          li {
            border: 1px solid #3d3d3d;
            background-color: #ffffff20;
            background-opacity: 0.2;
            border-radius: 5px;
            margin: 10px;
            display: flex;
            flex-direction: column;
          }

          .deets {
            padding: 24px;
            color: white;
          }

          h2 a {
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
            background-color: #818cf8;
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
              width: 800px;
            }

            ul {
              max-width: 800px;
            }

            li {
              flex-direction: row;
              height: fit-content;
            }

            img {
              width: 25%;
              height: auto;
              aspect-ratio: 1/1;
              object-fit: cover;
              border-radius: 5px 0 0 5px;
            }

            .deets {
              height: 100%;
              flex: 1;
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
            <li>
              <xsl:if test="image">
                <img src="{image/@src}" alt="Item Image" />
              </xsl:if>
              <div class="deets">
                <h2><a href="{link}" target="_blank"><xsl:value-of select="title" /></a></h2>
                <h3><xsl:value-of select="description" /></h3>
                <div class="tags">
                  <xsl:for-each select="category">
                    <div class="tag">
                      <xsl:text>#</xsl:text>
                      <xsl:value-of select="." />
                    </div>
                  </xsl:for-each>
                </div>
                <p>
                  <xsl:variable name="pubDate" select="pubDate" />
                  <xsl:value-of select="substring($pubDate, 6, 12)" />
                </p>
              </div>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>

