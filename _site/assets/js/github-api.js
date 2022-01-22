export default function githubAPI(repo, tag) {
    console.log(repo)
    console.log(tag)
   
const endpoint = "https://api.github.com"
const account = "/deannabosschert"
// const repo = '/Matcher'
// const tag = '/issues'
const limit = "30"
const apiLink = `${endpoint}/repos${account}${repo}${tag}?per_page=${limit}`
console.log(apiLink)


return fetch(apiLink)
  .then(res => res.json())
  .then(ghData => {
      console.log(ghData)
      return ghData
  })
}
