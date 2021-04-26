import { getArticles, getAuthors } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("author")) {
            const [, authorId] = clickEvent.target.id.split("--")   // [ "author", "2" ]
            const authorIdNumber = parseInt(authorId)  // 2

            let counter = 0
            const articles = getArticles()

            for (const article of articles) {
                if (article.authorId === authorIdNumber) {
                    counter++
                }
            }


            window.alert(`${clickEvent.target.textContent} published ${counter} articles`)
        }
    }
)

export const Authors = () => {
    let htmlRepAuthors = ""
    const authors = getAuthors()

    for (const author of authors) {
        htmlRepAuthors += `
            <div class="author">
                <h4 class="author__name" id="author--${author.id}">${author.name}</h4>
                <p class="author__bio">${author.bio}</p>
            </div>
        `
    }

    return htmlRepAuthors
}