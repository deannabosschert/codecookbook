const jsonToScss = require('./json-to-scss.js')
const writePages = require('./write-pages.js')


executeAllScripts()
function executeAllScripts() {
    jsonToScss()
    writePages()
}