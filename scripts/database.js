const database = {
    authors: [
        {
            name: "Tyler",
            bio: "I make things, but sometimes I create",
            id: 1
        },
        {
            name: "Aja",
            bio: "Queen Bey's biggest, and hardest working, fan",
            id: 2
        },
        {
            name: "Theo",
            bio: "I've got Bey's back",
            id: 3
        }
    ],
    articles: [],
    categories: []
}

export const getAuthors = () => {
    const copyOfAuthors = [...database.authors]
    return copyOfAuthors
}

const getArticles = () => {
    const copyOfArticles = [...database.articles]
    return copyOfArticles
}

const getCategories = () => {
    const copyOfCategories = [...database.categories]
    return copyOfCategories
}
