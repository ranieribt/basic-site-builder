'use strict'

const page = require('../page')

const index = {}

index.content =
`<h1>${page.title}</h1>
<p>Homepage content</p>`

module.exports = page.create(index)
