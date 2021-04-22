import { getArticles } from "./database.js"


export const Articles = () => {
    const allArticles = getArticles()
    let fullArticles = ""

    for (const article of allArticles) {
        fullArticles += `
            <div class="article">
                <h3 class="article__headline">${ article.headline }</h3>
            </div>
        `
    }

    return fullArticles // this will be a string of ALL HTML
}