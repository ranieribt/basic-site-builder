'use strict'

// const {log} = console
const template = require('../templates/page')
const defaultPage = require('../content/_default')

// and a render function
function render(page) {
  if (!page) {
    throw new Error('no page data provided')
  }

  var _page = Object.assign(defaultPage, page)
  return template(_page)
}

module.exports = render