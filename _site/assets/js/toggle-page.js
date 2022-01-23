export default function togglePage(pageID) {
    selectElement(`#${pageID}`).addEventListener('click', event => {
        console.log(pageID)
        removeAllClasses('.categoryPage', 'pageActive')
        addClass(`${pageID}-page`, 'pageActive')
        window.scrollTo(0, 0)

        resetDropdowns(pageID)
        // selectElement(`${pageID}-page`).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    })
}

function selectElement(selector) {
    return document.querySelector(`${selector}`)
}

function selectAllElements(selector) {
    return document.querySelectorAll(`${selector}`)
}

function resetDropdowns(pageID) {
    hideAll(".optionsToggled")
    fontWeightNormal(".toggleHeading")
    selectElement(`.${pageID}-options`).style.display = "block"
    selectElement(`.${pageID}-heading`).style.fontWeight = "bold"

}

function removeAllClasses(selector, classname) {
    selectAllElements(selector).forEach(element => {
        element.classList.remove(`${classname}`)
    })
}

function addClass(selector, classname) {
    document.getElementById(`${selector}`).classList.add(`${classname}`)
}

function hideAll(selector) {
    selectAllElements(selector).forEach(element => {
        element.style.display = "none"
    })
}

// font weight to normal
function fontWeightNormal(selector){
    selectAllElements(`${selector}`).forEach(element => {
        element.style.fontWeight = "normal"
    })
}