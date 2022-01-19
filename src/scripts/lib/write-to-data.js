const fs = require('fs')
module.exports = function writeData(data, categories) {
    if (data && categories) {
        makeFile(data, categories)
    }
}

function makeFile(data, categories) {
    let categoryFile = ''
    categoryFile += 'module.exports = function getCategories() {\n'
    categoryFile += 'let categoryData = "'
    categoryFile += categories.toString()
    categoryFile += '"'
    categoryFile += '\n'
    categoryFile += 'let categories = Array.from(new Set(categoryData))'
    categoryFile += '\n'
    categoryFile += 'return categories'
    categoryFile += '}\n'
    console.log(getCategories())



    // let filepath = `assets/js/lib/ganttData.js`
    // writeFile(filepath, data)


    // let filepath2 = `assets/js/lib/ganttCategories.js`
    // writeFile(filepath2, categories)


}

function writeFile(filepath, data) {
    fs.writeFile(filepath, data, (err) => {
        if (err) throw err
        console.log('The file has been generated from data and saved!')
    })
}

function getCategories() {
    let categoryData = "Meeting/presentatie,Klantcontact/meeting,Administratie,Intern overleg,?ux?,Design,Content,Onderzoek,Reviewen,Feedback verwerken,Security,?dev?,Development,Bugfix,Refactor/optimalisatie"
    let categories = Array.from(new Set(categoryData))
    console.log(categories)
    return categories
}