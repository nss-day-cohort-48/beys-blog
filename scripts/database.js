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
    articles: [
        {
            id: 1,
            date_created: "2021-04-22",
            authorId: 2,
            headline: "Pollen is the enemy",
            body: "Non voluptas delectus earum voluptatem tempore culpa suscipit. Numquam nesciunt sint nemo velit sint tenetur voluptatem ipsum. Eligendi repellendus non exercitationem error unde incidunt corrupti et.",
            categoryId: 1
        },
        {
            id: 2,
            date_created: "2021-04-19",
            authorId: 1,
            headline: "Creating the awesome",
            body: "Ea ut ut dolorem numquam quo quia asperiores. Voluptas sunt ducimus consequuntur fugit. Voluptas quaerat est est velit non cupiditate aut molestiae. Aut ad ut enim assumenda expedita sit maiores. Aut enim quod sunt aut non et cum sit.",
            categoryId: 2
        }
    ],
    categories: [
        {
            id: 1,
            name: "Personal"
        },
        {
            id: 2,
            name: "Work"
        },
        {
            id: 3,
            name: "Music"
        }
    ]
}

export const getAuthors = () => {
    const copyOfAuthors = [...database.authors]
    return copyOfAuthors
}

export const getArticles = () => {
    const copyOfArticles = [...database.articles]
    return copyOfArticles
}

export const getCategories = () => {
    const copyOfCategories = [...database.categories]
    return copyOfCategories
}
