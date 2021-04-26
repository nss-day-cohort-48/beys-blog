import { getArticles, getAuthors } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("article")) {
            const [, articleId] = clickEvent.target.id.split("--")
            const articleIdNumber = parseInt(articleId)   // 4  <-- article id

            const authors = getAuthors()  // [{},{},{}] <-- authors
            const articles = getArticles()

            const foundArticle = articles.find(
                (article) => {
                    return article.id === articleIdNumber
                }
            )

            const foundAuthor = authors.find(
                (author) => {
                    return author.id === foundArticle.authorId
                }
            )

            window.alert(`This article was published by ${foundAuthor.name}`)

            // for (const article of articles) {
            //     if (article.id === articleIdNumber) {
            //         const articleAuthorId = article.authorId   // 2 <-- author id

            //         for (const author of authors) {
            //             if (author.id === articleAuthorId) {
            //                 window.alert(`This article was published by ${author.name}`)
            //             }
            //         }
            //     }
            // }
        }
    }
)

export const Articles = () => {
    const allArticles = getArticles()
    let fullArticles = ""

    for (const article of allArticles) {
        fullArticles += `
            <div class="article">
                <div class="article__headline" id="article--${article.id}">${article.headline}</div>
            </div>
        `
    }

    return fullArticles // this will be a string of ALL HTML
}