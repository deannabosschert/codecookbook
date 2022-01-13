
module.exports = function sanitizeString(string) { // ugly solution for now, promise to fix later (pun intended)
    let withoutDash = replaceSpaceWithDash(string)
    let kebabCase = camelCaseToKebabCase(withoutDash)
    let convertedNames = convertOddNames(kebabCase)
    let namedElement = nameToElement(convertedNames)
    return namedElement
}

// scss variable names can't have spaces
function replaceSpaceWithDash(string) {
    return string.replace(/ /g, '-')
}

// convert to actual css properties
function camelCaseToKebabCase(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// some names are odd (might be editable in figma dev plugin?), so we need to convert them manually
function convertOddNames(string) {
    if (string == 'text-case') {
        return 'text-transform'
    } else if (string == 'paragraph-indent') {
        return 'text-indent'
    } else if (string == 'paragraph-spacing') {
        return 'word-spacing'
    } else {
        return string
    }
}

function nameToElement(string) {
    if (string.startsWith('heading') == true) {
        return `h${string.charAt(8)}`
    } else {
        return string
    }
}

// function refactorLater() {
// for refactoring later..
// module.exports = async (data) => {
//     let sanitizedString = await replaceSpaceWithDash(data) // replace spaces with dashes
//         .then(data => camelCaseToKebabCase(data)) // convert to kebab-case
//         .then(data => convertOddNames(data)) // convert odd names to actual css properties
//         .then(data => nameToElement(data)) // convert to actual html element if needed
//         .then(data => data)
//         return sanitizedString
// }

// // scss variable names can't have spaces
// async function replaceSpaceWithDash(string) {
//     return string.replace(/ /g, '-')
// }

// // convert to actual css properties
// function camelCaseToKebabCase(string) {
//     return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
// }

// // some names are odd (might be editable in figma dev plugin?), so we need to convert them manually
// function convertOddNames(string) {
//     if (string == 'text-case') {
//         return 'text-transform'
//     } else if (string == 'paragraph-indent') {
//         return 'text-indent'
//     } else if (string == 'paragraph-spacing') {
//         return 'word-spacing'
//     } else {
//         return string
//     }
// }

// function nameToElement(string) { // to be expanded with more names.. maybe
//     if (string.startsWith('heading') == true) {
//         return `h${string.charAt(8)}`
//     } else {
//         return string
//     }
// }
// }