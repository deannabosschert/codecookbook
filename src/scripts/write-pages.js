// icarus flew too close to the sun and now has to write spaghetti code to generate all these pages quickly
// don't forget to remove page from this flow once written (although disabled altogether for now)
const fs = require('fs')
const getData = require('./lib/get-data.js')
module.exports = function writePages() {
    lekkerLoopen(getData('navigation')) // fetch data from sidebar
}

function lekkerLoopen(data) {
    let sidebar = data.sidebar
    for (let category in sidebar) { // 'design', parent
        let categoryData = sidebar[category]
        for (let page in categoryData) {
            let pageData = categoryData[page]
            for (let subpage in pageData) { // 'ontwerp'. h1
                let pageContent = {
                    h1: subpage,
                    content: []
                }
                let subpageData = pageData[subpage]
                subpageData.forEach(function (item) {
                    let contentContent = []
                    for (let key in item) { // 'variabelen'  h2
                        let contentList = item[key]
                        contentContent.push({
                            h2: key,
                            content: contentList
                        })
                        pageContent.content.push(contentContent)
                    }
                })
                makeHTML(category, pageContent)
            }
        }
    }
}

function makeHTML(parent, data) {
    // const lm = require('lorem-memesum')
    // let sentenceWords = lm.sentence.randomSentence()
    let html = ''
    let pageName = data.h1
    data.content.forEach(function (item) {
        let section = ''
        let h2 = item[0].h2
        let articles = item[0].content
        section += `<section id="${parent}-${pageName}-subpage-${h2}">`
        section += `<h2>${h2}</h2>`
        articles.forEach(function (h3) {
            section += `<article>`
            section += `<h3 id="${parent}-${pageName}-subpage-${h2}-${h3}">${h3}</h3>`
            // section += `<p>${sentenceWords}</p>`
            section += `</article>`
        })
        section += `</section>`
        html += section
    })
    writePages(parent, pageName, html, false)
}

function writePages(parent, page, html, toGenerate) {
    if (page == 'index' || page == 'bestanden' || page == 'ontwerp' || page == 'variabelen' || page == 'checklists') {
        return
    } else if (toGenerate == false){
        return
    } else {
        let filepath = `src/pages/${parent}/${page}.html`
        fs.writeFile(filepath, html, (err) => {
            if (err) throw err
            console.log(`The html-page for ${parent}/${page} has been generated from data and saved!`)
        })
    }
}