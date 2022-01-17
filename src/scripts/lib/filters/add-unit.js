
module.exports = async function addUnit(property) {
    if (property == 'font-size' || property == 'line-height' || property == 'letter-spacing' || property == 'word-spacing') {
        return 'px'
    } else if (property == 'width' || property == 'height' || property == 'mobile' || property == 'desktop') {
        return 'px'
    } else {
        return ''
    }
}