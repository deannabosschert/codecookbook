const fs = require('fs')
module.exports = function writeScss(type, scss) {
    if (type && scss) {
        fs.writeFile(`assets/css/settings/_settings.${type}.scss`, scss, (err) => {
            if (err) throw err
            console.log('The scss file has been generated from data and saved!')
        })
    }
}