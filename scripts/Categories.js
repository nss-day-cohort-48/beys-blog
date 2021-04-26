import { getCategories } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("category")) {
            window.alert(clickEvent.target.id)
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
