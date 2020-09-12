require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const TMDB_API_KEY = process.env.TMDB_API_KEY;

const moviesRoutes = require('./routes/movies.routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/api", moviesRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// GET MOVIE BY ID
// axios.get(`https://api.themoviedb.org/3/movie/76341?api_key=${TMDB_API_KEY}`)
//     .then(response => {
//         console.log(response);

//     })
//     .catch(error => {
//         console.log(error);
//     });


// SEARCH MOVIE BY NAME
// axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=Jack+Reacher`)
//     .then(response => {
//         console.log(response.data.results);

//     })
//     .catch(error => {
//         console.log(error);
//     });

    