export default async function githubAPI(containerID, api, repo, tag, state) {
    const endpoint = "https://api.github.com"
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
    let items = mapData(ghData, repo)
    let itemCards = makeHTML(items)
    if (items.health_percentage) {
        renderObject(containerID, itemCards)
    } else {
        return renderData(containerID, itemCards)
    }
}

function mapData(data, repo) {
    if (data.health_percentage) {
        return { // metrics
            title: repo,
            description: data.description,
            health_percentage: data.health_percentage,
            documentation: data.documentation,
            license: data.files.license,
            readme: data.files.readme.html_url
        }
    } else {
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
    // else {
    //     console.log('onbekend type')
    // }
}

function makeHTML(data) {
    if (data.health_percentage) {
        console.log(data)
        let card = `
                <article class="github-embed-card">
                    <div class="github-embed-card-header">
                        <h4>${data.title}</h4>
                        <p>${data.health_percentage}% complete</p>
                    </div>
                    <div class="card-body">
                        <p>${data.description}</p>
            `
        if (data.license) {
            card += `<p>${data.license.name}</p>`
        }
        card += `
                        <a rel="noreferrer" href="${data.documentation}" target="_blank">link naar documentation</a>
                        <a rel="noreferrer" href="${data.readme}" target="_blank">link naar readme</a>
                    </div>
                </article>
        `
        return card
    } else {
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
                        <a rel="noreferrer" href="${item.url}" target="_blank">link naar issue #${item.number}</a>
                    </div>
                </article>
                `
                return card
            } else if (item.color && item.name) { // labels
                let card = `
                    <article class="github-embed-card" style="border:5px solid #${item.color}">
                        <div class="github-embed-card-header">
                            <h4>${item.name}</h4>
                            <p>label color: <span style="color: #${item.color}">#${item.color}</span></p>
                        </div>
                        <div class="card-body">
                            <b><p>Used for:</p></b>
                            <p>${item.description}</p>
                            <a rel="noreferrer" href="${item.url}" target="_blank">link naar label #${item.id}</a>
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
                            <a rel="noreferrer" href="${item.url}" target="_blank">link naar milestone #${item.number}</a>
                        </div>
                    </article>
              `
                return card
            } else {
                let card = `
                    <article class="github-embed-card">
                        <div>class="github-embed-card-header">
                            <h4>${item.title}</h4>
    `
                if (item.created_at) {
                    card += `<p>created: ${item.created_at}</p>`
                }
                card += `</div><div class="card-body">`
                if (item.body) {
                    card += `<p>${item.body}</p>`
                }
                if (item.url) {
                    card += `<a rel="noreferrer" href="${item.url}" target="_blank" >link naar milestone #${item.number}</a>`
                }
                card += `</div></article>`
                return card
            }
        })
    }
}

function renderData(containerID, data) {
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
                        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
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

function renderObject(containerID, data) {
    let githubCard = selectElement(`#${containerID}`)
    githubCard.innerHTML = data
}

function selectElement(selector) {
    return document.querySelector(`${selector}`)
}

function fetchData(apiLink) {
    return fetch(apiLink)
        .then(res => res.json())
        .then(data => data)
}