export default function hbTogglePage(input, pageID) {
    const inputElement = selectElement(`.${pageID}-subpage-${input}`)
    const subPage = selectElement(`#${pageID}-subpage-${input}`)

  
    inputElement.addEventListener('click', event => {
        removeAllClasses('.categoryPage', 'pageActive')
        addClass(`${pageID}-page`, 'pageActive')
        document.getElementById("menu-btn").checked = false
        subPage.scrollIntoView();
    })
}

function selectElement(selector) {
    return document.querySelector(`${selector}`)
}


function removeAllClasses(selector, classname) {
    document.querySelectorAll(`${selector}`).forEach(element => {
        element.classList.remove(`${classname}`)
    })
}

function addClass(selector, classname) {
    document.getElementById(`${selector}`).classList.add(`${classname}`)
}
