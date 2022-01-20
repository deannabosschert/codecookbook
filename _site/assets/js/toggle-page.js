export default function togglePage(pageID) {
    console.log(pageID)
    selectElement(`#${pageID}`).addEventListener('click', event => {
        removeAllClasses('.categoryPage', 'pageActive')
        addClass(`${pageID}-page`, 'pageActive')
        window.scrollTo(0, 0)

        // resetDropdowns('.c-side-bar input')
        // selectElement(`${pageID}-page`).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    })
}

function selectElement(selector) {
    return document.querySelector(`${selector}`)
}

// function resetDropdowns(selector) {
//     document.querySelectorAll(`${selector}`).forEach(element => {
//         element.checked = false
//     })
// }

function removeAllClasses(selector, classname) {
    document.querySelectorAll(`${selector}`).forEach(element => {
        element.classList.remove(`${classname}`)
    })
}

function addClass(selector, classname) {
    document.getElementById(`${selector}`).classList.add(`${classname}`)
}