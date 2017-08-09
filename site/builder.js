'use strict'

const fs = require('fs')
const layout = require('./content/_layout')
const index = require('./content/index')
const { log } = console

log(layout(index))
