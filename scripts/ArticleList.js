import { getArticles } from "./database.js"


export const Articles = () => {
    const allArticles = getArticles()
    let fullArticles = ""

    for (const article of allArticles) {
        fullArticles += `
            <div class="article">
                <div class="article__headline">${ article.headline }</div>
            </div>
        `
    }

    return fullArticles // this will be a string of ALL HTML
}