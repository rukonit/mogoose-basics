const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(
() => {
    console.log("Connection Open");
}
)
.catch(
    (err)=>{
        console.log(err);
    }
)


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)

// const rukon = new Movie({
//     title: "Rukon",
//     year: 1990,
//     score: 9.5,
//     rating: "PG-13"
// })

// Movie.insertMany(
//     [{
//         title: "The Lion King",
//         year: 2000,
//         score: 5.5,
//         rating: "PG-13"
//     },
//     {
//         title: "Forrest Gump",
//         year: 1995,
//         score: 8.5,
//         rating: "R"
//     },
//     {
//         title: "Iron Man",
//         year: 2000,
//         score: 8.5,
//         rating: "PG-13"
//     },
//     {
//         title: "Zombi",
//         year: 2015,
//         score: 5.5,
//         rating: "PG-13"
//     }]


// )