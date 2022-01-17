const sanitizeString = require('./filters/sanitize-string.js')
const addUnit = require('./filters/add-unit.js')

module.exports = async (type, output, data) => {
    if (output == 'list') {
        return data[type]
    } else if (output == 'variables' || output == 'selectors') {
      return dataArray = await toObjectArray(type, output, data[type])
    } else {
        console.log('error in clean-data: output not found')
    }
}
// map data to array of objects
async function toObjectArray(type, output, data) {
    let array = []
    let arrayTwee = []
    if (type == 'color') { // ugly if-solution for now
        for (let key in data) {
            array.push({
                [key]: {
                    [type]: data[key].value
                }
            })
        }
        return array
    } else if (type == 'font') {
        for (let key in data) {
            let property = data[key].value
            let values = ''
            let values2 = ''
            for (let key in property) {
                let unit = await addUnit(sanitizeString(key))

                values += `${   sanitizeString(key)   }: ${property[key]}${unit};\n`
                values2 += `{"${   sanitizeString(key)   }": "${property[key]}${unit};"}, `
            }
            array.push({
                [key]: `{ ${values} }`
            })

            arrayTwee.push({
                [key]: values2
            })
        }
        let beideArrays = {
            array: array,
            arrayTwee: arrayTwee
        }
        return beideArrays
    } else {
        console.log('error: type not found')
    }
}