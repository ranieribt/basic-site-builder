'use strict'

module.exports = page =>
`<!DOCTYPE html>
<html lang="${page.lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>${page.title}</title>
    <meta name="description" content="${page.description}">
    <meta name="author" content="${page.author}">
  </head>
  <body>
    ${page.content}
  </body>
</html>`
