module.exports = function getData(filename) {
    if (filename) {
        return require(`../../_data/styles/${filename}.json`) 
    }
}