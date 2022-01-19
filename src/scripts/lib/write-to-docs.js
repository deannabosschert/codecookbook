const fs = require('fs')
module.exports = function writeDocs(type, data) {
    if (type && data.scssArray) {
        makeHTML(type, data.scssArray)   
    }
}

function makeHTML(type, array) {
    let table = ''
    table += `<table class="variable-table">`
    table += `<tr><th class="tag">variable</th><th class="tag">value</th></tr>`
    let variableArray = []

   console.log(array)
    array.sort().forEach(function (item) {
        let itemObject = JSON.parse(item)  // turn item into object

        for (let variable in itemObject) {
            let tableRow = '<tr>'
            tableRow += `<td>${variable}: </td>`
            tableRow += `<td>${itemObject[variable]}</td>`
            tableRow += '</tr>'
            table += tableRow

            variableArray.push(`"${variable}": "${itemObject[variable]}"`)
        }
    })
     table += `</table>`
        let filepath = `src/_data/pages/design/variables/${type}.html`
        writeFile(filepath, table)   

        let data = {}
        data = variableArray
        data = `{${data.join(',')}}`

        let filepath2 = `src/_data/pages/design/variables/${type}.json`
        writeFile(filepath2, data)
}

function writeFile(filepath, data) {
    fs.writeFile(filepath, data, (err) => {
        if (err) throw err
        console.log('The file has been generated from data and saved!')
    })
}