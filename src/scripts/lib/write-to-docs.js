const fs = require('fs')
module.exports = function writeDocs(type, data) {
    if (type && data.scssArray) {
        makeHTML(type, data.scssArray)   
    }
}

function makeHTML(type, array) {
    let table = ''
    table += `<table class="variable-table">`
    table += `<tr><th>variable</th><th>value</th></tr>`
    let variables = '<tr>'
    let values = '<tr>'

//    console.log(array)
    array.forEach(function (item) {
        let itemObject = JSON.parse(item)  // turn item into object

        for (let variable in itemObject) {
            
            variables += `<td>${variable}</td>`
            values += `<td>${itemObject[variable]}</td>`
        }     
    })
    variables += '</tr>'
    values += '</tr>'
    table += variables
    table += values
     table += `</table>`
        let filepath = `src/_data/pages/design/variables/${type}.html`
        writeFile(filepath, table)   
}

function writeFile(filepath, data) {
    fs.writeFile(filepath, data, (err) => {
        if (err) throw err
        console.log('The file has been generated from data and saved!')
    })
}