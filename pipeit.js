'use strict'

const fs = require('fs')

fs.createReadStream('site/content/apagepath/a-page.txt')
.pipe(fs.createWriteStream('build/apagepath/a-page.txt'))
