const axios = require('axios');

exports.getMovie = async (req, res) => {
    // SEARCH MOVIE BY NAME
    // POST REQUEST FROM FORM TO GET THE NAME FROM THE INPUT AND GET REQUEST TO TMDB API
    const movie = await req.body.movie;
    try {
        const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${movie}`)
        const movies = await result.data.results
        if (!movies.length) {
            return res.send({ message: 'No Movie Founded'});
        }
        return res.send({movies : movies});
    }
    catch(e) {
        return res.json({error: 'Something went wrong...'})
    };
    }

exports.sortMovie = async (req, res) => {
    const movie = await req.body.movie;
    try {
        const result = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=string&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2020`)
        const sortedMovies = await result.data
        return res.send(sortedMovies);
    } catch(e) {
        console.log(e);
    }
}

exports.popularMovies = async (req, res) => {
    try {
        const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`)
        const popularMovies = result.data;
        return res.send(popularMovies);
    } catch(e) {
        console.log(e);
    }
}
exports.topRatedMovies = async (req, res) => {
    try {
        const result = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`)
        const topRatedMovies = result.data;
        
        let allMovieVideo= [];
        for (let i=0; i<topRatedMovies.results.length; i++) {
           const movieVideo = await axios.get(`https://api.themoviedb.org/3/movie/${topRatedMovies.results[i].id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`)
           allMovieVideo = movieVideo.data.results;
           console.log(allMovieVideo);
        }
        return res.send(topRatedMovies);
    } catch(e) {
        console.log(e);
    }
}