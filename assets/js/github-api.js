export default async function githubAPI(containerID, repo, tag, state) {
    const endpoint = "https://api.github.com"
    const api = "/repos"
    const account = "/deannabosschert"
    const limit = "30"
    if (state == "") {
        state = ''
    } else {
        state = `?&state=${state}`
    }
    const apiLink = `${endpoint}${api}${account}${repo}${tag}${state}`
    console.log(apiLink)
    let ghData = await fetchData(apiLink)
    let items = mapData(ghData)
    let itemCards = makeHTML(items)
    // console.log(itemCards)
    return renderData(containerID, itemCards)
}

function mapData(data) {
    return data.map(item => {
        if (item.user && item.body) {
            return { //issues
                title: item.title,
                body: item.body,
                number: item.number,
                state: item.state,
                created_at: item.created_at,
                url: item.html_url,
                user: item.user.login
            }
        } else if (item.color && item.name) { //labels
            return {
                name: item.name,
                description: item.description,
                color: item.color,
                id: item.id,
                url: item.url
            }
        } else {
            return { //milestones
                title: item.title,
                description: item.description,
                number: item.number,
                state: item.state,
                closed_issues: item.closed_issues,
                open_issues: item.open_issues,
                created_at: item.created_at,
                due: item.due_on,
                url: item.html_url
            }
        }
    })
}

function makeHTML(data) {


    return data.map(item => {
        let url = item.url
        if (item.user && item.body) { // issues
            let card = `
        <article class="github-embed-card">
           <div class="github-embed-card-header">
               <h4>${item.title}</h4>
               <p>door: ${item.user}</p>
           </div>
            <div class="card-body">
            <p>${item.created_at}</p>  
               <p>${item.body}</p>
               <a href="${item.url}" target="_blank" >link naar issue #${item.number}</a>
           </div>
   </article>
   `

            return card
        } else if (item.color && item.name) { // labels
            let card = `
        <article class="github-embed-card">
           <div class="github-embed-card-header">
               <h4>${item.name}</h4>
               <p>${item.color}</p>  
           </div>
            <div class="card-body">
               <p>${item.description}</p>
               <a href="${item.url}" target="_blank" >link naar label #${item.id}</a>
           </div>
   </article>
   `
            return card
        } else if (url.includes('milestone')) { // milestones
            let card = `
        <article class="github-embed-card">
           <div class="github-embed-card-header">
               <h4>${item.title}</h4>
           </div>
            <div class="card-body">
                <p>${item.description}</p>
                <p>due on: ${item.due}</p>  
               <p>created: ${item.created_at}</p>  
               <p>open issues: ${item.open_issues}</p>
                <p>closed issues: ${item.closed_issues}</p>
               <a href="${item.url}" target="_blank" >link naar milestone #${item.number}</a>
           </div>
   </article>
   `
            return card
        } else {
            let card = `
        <article class="github-embed-card">
        <div class="github-embed-card-header">
        <h4>${item.title}</h4>
    `
    if (item.created_at) {
        card += `<p>created: ${item.created_at}</p>`
    } 
     card += `</div><div class="card-body">`
    if (item.body) {
        card += `<p>${item.body}</p>`

    } if (item.url) {
      card += `<a href="${item.url}" target="_blank" >link naar milestone #${item.number}</a>`
    }

    card += `</div></article>`
    return card

        }

    })
}

function renderData(containerID, data) {
    console.log(containerID)
    let githubCard = selectElement(`#${containerID}`)
    data.map(item => {
        githubCard.innerHTML += item
    })
    let cardstyling = `
    <style>
    .github-embed-card {
        border: 1px solid #e1e4e8;
        border-radius: 4px;
        padding: 1rem;
        margin-bottom: 1rem;
        background-color: #fafbfc;
        max-width: 100%;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
        }
        .github-embed-card-header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 0.5rem;
        }
    .github-embed-card h4 {
        color: #67c8f2ff;
    }
    .github-embed-card p {
        max-width: fit-content 
    } 
        </style>
        `
    githubCard.innerHTML += cardstyling
}

function selectElement(selector) {
    return document.querySelector(`${selector}`)
}

function fetchData(apiLink) {
    return fetch(apiLink)
        .then(res => res.json())
        .then(data => data)
}