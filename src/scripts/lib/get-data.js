module.exports = function getData(filepath) {
    if (filepath) {
        return require(`../../_data/${filepath}.json`) 
    }
}