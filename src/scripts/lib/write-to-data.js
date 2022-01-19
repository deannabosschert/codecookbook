const fs = require('fs')
module.exports = function writeData(data, categories) {
    if (data && categories) {
       makeFile(data, 'cleanData')
       makeFile(categories, 'categories')
    }
}

function makeFile (data, name) {
    let stringData = JSON.stringify(data)
    let file = ''
    file += 'let '
    file += name
    file += ' = '
    file += stringData
    file += '\n'
    file += 'export { '
    file += name
    file += ' }'
    file += '\n'
    let filepath = `assets/js/charts/lib/gantt-${name}.js`
    writeFile(filepath, file)
}

function writeFile(filepath, data) {
    fs.writeFile(filepath, data, (err) => {
        if (err) throw err
        console.log('The gantt data file has been generated from data and saved!')
    })
}