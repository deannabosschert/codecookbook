const sanitizeString = require('./sanitize-string.js')

// map array of objects to list of ready-to-use scss variables
module.exports = async function toScssVariables(type, data) {
    let scssDing = {}
    return mooiEnzo = data.map(async function (item) {


        let arreee = []
        for (let key in item) {
            return new Promise((resolve, reject) => {

                let scssLine = constructScss(key, item, type)
                    .then(data => {
                        arreee.push(data)
                        return arreee
                    })
                    .then(data => {
                       return data
                    })
                    .catch(error => {
                        console.log(error)
                    })


                    resolve(scssLine)
                // let alleDIngen = scssLine
                // // console.log(alleDIngen)
                // arreee += alleDIngen
                // console.log(alleDIngen)
            })
            // scssDing += scssLine + '\n'
        }


    })
}


async function constructScss(key, item, type) {
    let selector = await sanitizeString(key)
    return new Promise((resolve, reject) => {
        let properties = item[key]
        let scss = `$${selector}: ${properties[type]};`
        resolve(scss)
    })

}