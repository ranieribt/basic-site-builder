'use strict'

module.exports = page =>
`<!doctype html>
<html lang="${page.lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${page.title}</title>
    <meta name="description" content="${page.description}">
    <meta name="author" content="${page.author}">
    <!--
      TODO stylesheets
      TODO icon
      TODO canonical
      TODO feed
      TODO social media
      TODO search engine
      TODO scripts
    -->
  </head>
  <body>
    ${page.content}
  </body>
</html>`
