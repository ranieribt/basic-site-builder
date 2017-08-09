'use strict'

const _page = require('./_page')
const index = {}

index.content =
`<h1>${_page.title}</h1>
<p>Homepage content</p>`

module.exports = Object.assign(_page, index)
