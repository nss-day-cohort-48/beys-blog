import { getCategories } from "./database.js"


export const Categories = () => {
    const categories = getCategories()
    let allCategoriesHTML = "<ul>"

    for (const cat of categories) {
        allCategoriesHTML += `
            <li>${cat.name}</li>
        `
    }

    allCategoriesHTML += "</ul>"

    return allCategoriesHTML
}
