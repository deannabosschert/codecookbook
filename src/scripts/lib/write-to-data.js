const fs = require('fs')
module.exports = function writeData(data, categories) {
    if (data && categories) {
        makeCategoryFile(categories)
        makeDataFile(data)
    }
}

function makeCategoryFile(categories) {
    let categoryData = JSON.stringify(categories)
    let categoryFile = ''
    categoryFile += 'let categories = '
    categoryFile += categoryData
    categoryFile += '\n'
    categoryFile += 'export { categories }'
    categoryFile += '\n'
    let filepath = `assets/js/lib/ganttCategories.js`
    writeFile(filepath, categoryFile)
}

function makeDataFile(data) {
    let cleanData = JSON.stringify(data)
    let dataFile = ''
    dataFile += 'let cleanData = '
    dataFile += cleanData
    dataFile += '\n'
    dataFile += 'export { cleanData }'

    let filepath = `assets/js/lib/ganttData.js`
    writeFile(filepath, dataFile)
}

function writeFile(filepath, data) {
    fs.writeFile(filepath, data, (err) => {
        if (err) throw err
        console.log('The gantt file has been generated from data and saved!')
    })
}