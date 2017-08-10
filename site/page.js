/**
 * Default page.
 */
'use strict'

var page = {
  lang: 'en',
  title: 'Sitendeavor',
  description: 'A basic NPM setup to build a website',
  author: 'Ranieri Teixeira',
  content: ''
}

page.create = customPage => Object.assign(page, customPage)

module.exports = page
