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
