
module.exports = async function removeDuplicates(array) {
    return array.filter((item, pos) => {
        return array.indexOf(item) == pos
    })
}

// ..set will work too though