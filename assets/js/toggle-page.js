export default function togglePage(pageID) {
 document.getElementById(`${pageID}`).addEventListener('click', event => {
    let allePages = document.querySelectorAll('.categoryPage')
    allePages.forEach(page => {
        page.classList.remove('pageActive')
    })
    document.getElementById(`${pageID}-page`).classList.add('pageActive')
    window.scrollTo(0, 0);
})
}