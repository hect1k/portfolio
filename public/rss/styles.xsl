<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RSS Feed</title>
        <style>
          /* Global Styles */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }

          header {
            background-color: #0077cc;
            color: white;
            text-align: center;
            padding: 20px;
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
            border: 1px solid #ddd;
            padding: 20px;
            margin: 10px;
            background-color: #fff;
          }

          h2 a {
            color: #0077cc;
            text-decoration: none;
          }

          h2 a:hover {
            text-decoration: underline;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          p {
            color: #888;
          }

          /* Responsive Styles */
          @media screen and (max-width: 768px) {
            li {
              padding: 10px;
            }
          }
        </style>
      </head>
      <body>
        <header>
          <h1><xsl:value-of select="/rss/channel/title" /></h1>
          <p><xsl:value-of select="/rss/channel/description" /></p>
        </header>
        <ul>
          <xsl:for-each select="/rss/channel/item">
            <li>
              <h2><a href="{link}" target="_blank"><xsl:value-of select="title" /></a></h2>
              <xsl:if test="image">
                <img src="{image/@src}" alt="Item Image" />
              </xsl:if>
              <p>Published: <xsl:value-of select="pubDate" /></p>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>

