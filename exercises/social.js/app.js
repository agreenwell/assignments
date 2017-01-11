var movieGoer = {
    name: "Aaron",
    age: 28,
    mostRecentlyWatched: {
        title: "Oceans 11",
        rating: "PG-13",
        yearReleased: 2001,
        rated: function () {
            return "Two Thumbs Up";
        }
    },
    movieGoerFriends: [
        {
            name: "Rachel",
            age: 26,
            mostRecentlyWatched: {
                title: "Bridesmaids",
                rating: "R",
                yearReleased: 2011,
                rated: function () {
                    return "Best Movie Ever";
                }
            }
        },
        {
            name: "Kody",
            age: 23,
            mostRecentlyWatched: {
                title: "The Grinch",
                rating: "PG",
                yearReleased: 2000,
                rated: function () {
                    return "It's Okay";
                }
            }
        },

        {
            name: "Lyndsie",
            age: 27,
            mostRecentlyWatched: {
                title: "Bad Moms",
                rating: "R",
                yearReleased: 2016,
                rated: function () {
                    return "I Loved It";
                }
            }
        },
    ]
}
console.log("Aaron said", movieGoer.mostRecentlyWatched.rated());
console.log("Rachel said", movieGoer.movieGoerFriends[0].mostRecentlyWatched.rated());
console.log("Kody said", movieGoer.movieGoerFriends[1].mostRecentlyWatched.rated());
console.log("Lyndsie said", movieGoer.movieGoerFriends[2].mostRecentlyWatched.rated());