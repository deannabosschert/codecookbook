const generateVariableNames = require('./filters/generate-variable-names.js')
const sanitizeString = require('./filters/sanitize-string.js')
const htmlElementsArray = require('../../_data/styles/html-elements.js')

// const toScssVariables = require("./filters/to-scss-variables")


module.exports = async function mapToScss(type, output, data) {
    if (output == 'list') {
        return generateVariableNames(data)   
    } else if (output == 'variables') {
        return toScssVariables(type, data)
    } else if (output == 'selectors') {
        return toScssSelectors(data)
    } else {
        console.log('error in map-to-scss-data: output not found')
        return 'error'
    }
}

// map array of objects to list of ready-to-use scss variables
function toScssVariables(type, data) {
    let scss = ''
    let scssArray = []
    data.forEach(item => {
        for (let key in item) {
            let selector = sanitizeString(key)
            let properties = item[key]

            scss += `$${selector}: ${properties[type]};\n`
            scssArray.push(`{"$${selector}":"${properties[type]};"}`)
        }
    })

    let scssData = {
        scss: scss,
        scssArray: scssArray
    }
    return scssData
}

// map array of objects to list of assigned properties to heading in scss
async function toScssSelectors(data) {
    let scss = ''
    let scssArray = []
    let array1 = data.array
    let array2 = data.arrayTwee

    array1.forEach(item => {
        for (let key in item) {
            let selector = sanitizeString(key)
            let properties = item[key]

            if (htmlElementsArray.includes(selector) == true) { // if it's an html element
                scss += `${selector} ${properties} \n`
            } else {
                scss += `.${selector} ${properties} \n` // add class-prefix
            }
        }
    })

    array2.forEach(item => {
        for (let key in item) {
            let selector = sanitizeString(key)
            let properties = item[key]

            if (htmlElementsArray.includes(selector) == true) { // if it's an html element
                scssArray.push(`${properties}`)
            } else {
                scssArray.push(`${properties}`) // add class-prefix
            }
        }
    })
    console.log(scssArray)
    let scssData = {
        scss: scss,
        scssArray: scssArray
    }
    return scssData
}


