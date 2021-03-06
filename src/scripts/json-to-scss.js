// note: tried to put this in .eleventy.js for immediate reload, but it didn't work and it's not really necessary unless the json file itself is updated
const fs = require('fs')
const getData = require('./lib/get-data.js')
const cleanData = require('./lib/clean-data.js')
const mapToScss = require('./lib/map-to-scss.js')
const writeScss = require('./lib/write-to-scss.js')
const writeDocs = require('./lib/write-to-docs.js')

module.exports = function jsonToScss() {
    toScss('color', 'variables', getData('styles/design-tokens')) // fetch data from design-tokens.json, which is generated by figma
    toScss('font', 'selectors', getData('styles/design-tokens'))
    // showAllDataTokens('font', 'all', data)  // TODO for later (see functions at end of file)
    
    let myVariables = getData('styles/variables') //  fetch data from file i've samengesteld myself for now
    for (let key in myVariables) {
        toScss(key, 'list', myVariables) // generate scss-file for each variable in variables.json
    }
}

async function toScss(type, output, jsonData) {
    try {
        return cleanedData = await cleanData(type, output, jsonData)
            .then(data => mapToScss(type, output, data))
            .then(data => writeScss(type, data))
            .then(data => writeDocs(type, data))
    } catch (error) {
        console.log(error)
    }
}

// function toDoLater() {
    // TODO FOR LATER
    // note: beware of using type or output correctly..
    // function showAllDataTokens(type, output, data) {
    //     let dataArray = toObjectArray(output, data[type])
    //     let scss = generateVariables(dataArray)
    //     //  writeFile(type, scss)
    // }

    // map data to array of objects
    // function toObjectArrayData(output, data) {
    //     if (output == 'typography') {
    //         let oneProperty = ''
    //         let onePropertyArray = []
    //         for (let key in data) {
    //             let property = data[key]
    //             for (let key in property) {
    //                 // if (key == 'fontSize') { // example; to be replaced with a loop later
    //                 //     oneProperty = `${sanitizeString(key)}`
    //                 //     onePropertyArray.push(`${property[key].value}${addUnit(sanitizeString(key))}`)
    //                 // }
    //                 oneProperty = `${sanitizeString(key)}`
    //                 onePropertyArray.push(`${property[key].value}${addUnit(sanitizeString(key))}`)
    //             }
    //         }
    //         array.push({
    //             [oneProperty]: onePropertyArray
    //         })
    //         return array
    //     }
    // }

    // function generateVariables(data) {
    //     // probleem hierbij is dat alles continu overschreven wordt --> leuk om later nog eens naar te kijken maar atm niet relevant voor dit project
    //     let listWithAll = ''
    //     let dinges = data.map(item => {
    //         Object.keys(item).map(key => {
    //             console.log(key)
    //             console.log(item[key])
    //         })
    //         for (let key in item) {
    //             listWithAll += `$${key}: ${item[key]};\n`
    //         }
    //     })
    //     data.forEach(variable => {
    //         let listWithNames = ''
    //         let theKey = ''
    //         let bonusKey = ''
    //         let listOfValues = []
    //         theKey = Object.keys(variable)[0]
    //         for (let key in variable) {
    //             bonusKey = key
    //             listOfValues.push(variable[key])
    //         }
    //         //    listOfValues.flat().sort().forEach(value => {
    //         //         listWithNames+= `$font-size-large: ${value}; \n`
    //         //         return value
    //         //     })
    //         let cleanList = listOfValues.flat().sort()
    //         let uniqueList = removeDuplicates(cleanList) // remove duplicates from cleanList
    //         // for loop with index
    //         for (let i = 0; i < uniqueList.length; i++) {
    //             listWithNames += `$${bonusKey}-${varablePres[i]}: ${uniqueList[i]}; \n`
    //         }
    //         listWithAll += listWithNames
    //     })
    //     return listWithAll
    // }
// }