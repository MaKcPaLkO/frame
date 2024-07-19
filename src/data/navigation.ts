const navigation = {
    list: [
        {
            title: "Фільми",
            sublist: [
                {
                    caption: "Популярні",
                    url: "movie"
                },
                {
                    caption: "Зараз у кіно",
                    url: "movie/"
                },
                {
                    caption: "Очікувані",
                    url: "movie/"
                },
                {
                    caption: "Рейтингові",
                    url: "movie/"
                },
            ]
        },
        {
            title: "Серіали",
            sublist: [
                {
                    caption: "Популярні",
                    url: "tv"
                },
                {
                    caption: "Сьогодні в ефірі",
                    url: "tv/airing-today"
                },
                {
                    caption: "Зараз на ТБ",
                    url: "tv/on-the-air"
                },
                {
                    caption: "Рейтингові",
                    url: "tv/top-rated"
                },
            ]
        },
        {
            title: "Персони",
            sublist: [
                {
                    caption: "Популярні",
                    url: "person"
                }
            ]
        },
        {
            title: "Ще",
            sublist: [
                {
                    caption: "Обговорення",
                    url: "discuss"
                },
                {
                    caption: "Таблиця лідерів",
                    url: "leaderboard"
                },
                {
                    caption: "Підтримка",
                    url: "talk"
                },
                {
                    caption: "API",
                    url: "api"
                },
            ]
        },
    ]
}

export default navigation;
