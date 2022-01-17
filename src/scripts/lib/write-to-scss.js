const fs = require('fs')
module.exports = function writeScss(type, scss) {
    if (scss.scss) {
        let filepath = `assets/css/settings/_settings.${type}.scss`
        writeFile(filepath, scss.scss)
    }
    else if (type && scss) {
       let filepath = `assets/css/settings/_settings.${type}.scss`
       writeFile(filepath, scss)
    }
    return scss
}

function writeFile(filepath, data) {
    fs.writeFile(filepath, data, (err) => {
        if (err) throw err
        console.log('The file has been generated from data and saved!')
    })
}