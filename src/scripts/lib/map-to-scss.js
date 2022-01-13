const generateVariableNames = require('./filters/generate-variable-names.js')
const sanitizeString = require('./filters/sanitize-string.js')
// const toScssVariables = require("./filters/to-scss-variables")
const htmlElementsArray = ["a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "bgsound",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "isindex",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "listing",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "nobr",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "plaintext",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "xmp"
]

module.exports = async function mapToScss(type, output, data) {
    if (output == 'list') {
        return generateVariableNames(data)   
    } else if (output == 'variables') {
        return toScssVariables(type, data)
    } else if (output == 'selectors') {
        return toScssSelectors(data)
    } else {
        console.log('error in map-to-scss-data: output not found')
        return 'error'
    }
}

// map array of objects to list of ready-to-use scss variables
function toScssVariables(type, data) {
    let scss = ''
    data.forEach(item => {
        for (let key in item) {
            let selector = sanitizeString(key)
            let properties = item[key]

            scss += `$${selector}: ${properties[type]};\n`
        }
    })
    return scss
}

// map array of objects to list of assigned properties to heading in scss
async function toScssSelectors(data) {
    let scss = ''
    data.forEach(item => {
        for (let key in item) {
            let selector = sanitizeString(key)
            let properties = item[key]

            if (htmlElementsArray.includes(selector) == true) { // if it's an html element
                scss += `${selector} ${properties} \n`
            } else {
                scss += `.${selector} ${properties} \n` // add class-prefix
            }
        }
    })
    return scss
}


