import { Authors } from "./Authors.js"

export const BeyBlog = () => {
    return `
        <h1>This is Bey's Blog</h1>

        <article class="authors">
            <h2>Authors</h2>
            ${ Authors() }
        </article>
        <article class="articles">
            <h2>Articles</h2>
        </article>
        <article class="categories">
            <h2>Categories</h2>
        </article>
    `
}
