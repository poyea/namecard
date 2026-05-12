<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <title>Sitemap — poyea.me</title>
        <style>
          body { font-family: 'DM Sans', system-ui, sans-serif; max-width: 880px; margin: 40px auto; padding: 0 20px; color: #222; }
          h1 { font-weight: 400; letter-spacing: -0.02em; }
          .meta { color: #888; font-size: 13px; margin-bottom: 24px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 10px 12px; text-align: left; border-bottom: 1px solid #eee; font-size: 14px; }
          th { background: #fafafa; font-weight: 500; }
          a { color: #2c5fcc; text-decoration: none; }
          a:hover { text-decoration: underline; }
          tr:hover { background: #fafafa; }
        </style>
      </head>
      <body>
        <h1>Sitemap</h1>
        <p class="meta">
          <xsl:value-of select="count(sm:urlset/sm:url)"/> URL(s)
        </p>
        <table>
          <thead>
            <tr><th>URL</th><th>Last Modified</th><th>Change Frequency</th><th>Priority</th></tr>
          </thead>
          <tbody>
            <xsl:for-each select="sm:urlset/sm:url">
              <tr>
                <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                <td><xsl:value-of select="sm:lastmod"/></td>
                <td><xsl:value-of select="sm:changefreq"/></td>
                <td><xsl:value-of select="sm:priority"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
