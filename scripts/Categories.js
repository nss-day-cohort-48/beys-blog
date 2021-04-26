import { getArticles, getCategories } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("category")) {
            const [, categoryId] = clickEvent.target.id.split("--")
            const categoryIdNumber = parseInt(categoryId)  // 2

            const articles = getArticles()
            const articleMatches = []


            const matchingArticlesArray = articles.filter(
                (article) => {
                    return article.categoryId === categoryIdNumber
                }
            )

            const articleHeadlines = matchingArticlesArray.map(
                (articleObject) => {
                    return articleObject.headline
                }
            )

            // for (const article of articles) {
            //     if (article.categoryId === categoryIdNumber) {
            //         articleMatches.push(article.headline)
            //     }
            // }


            window.alert(`${ articleHeadlines.join("\n 🧜🏽‍♀🧜🏽‍♀🧜🏽‍♀🧜🏽‍♀🧜🏽‍♀🧜🏽‍♀🧜🏽‍♀ \n") }`)
        }
    }
)

export const Categories = () => {
    const categories = getCategories()
    let allCategoriesHTML = ""

    for (const cat of categories) {
        allCategoriesHTML += `
            <div id="category--${cat.id}">${cat.name}</div>
        `
    }

    return allCategoriesHTML
}
