import { getAuthor } from "./database.js"


export const Authors = () => {
    const htmlRepAuthors = ""
    const authors = getAuthors()

    for (const author of authors) {
        htmlRepAuthors = `
            <div class="author">
                <h4 class="author__name">${author.name}</h4>
                <p class="author__bio">${author.bio}</p>
            </div>
        `
    }
}