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

const rukon = new Movie({
    title: "Rukon",
    year: 1990,
    score: 9.5,
    rating: "PG-13"
})

rukon.save()