import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MovieCard from './MovieCard';

import axios from "axios";

const TopRatedMovies = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getTopRatedMovies() {
        await axios.get("/api/toprated")
            .then((response) => {
                setTopRatedMovies(response.data.results);
                setLoading(false);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e);
            })
    }

    useEffect(() => {
        getTopRatedMovies();
    }, []);

    return (
        <Container>
            {/* TOP RATED MOVIES */}


            <h3 className="text-center c-pad">Top Rated Movies</h3>
            <section className="card-container">
            {loading ? (
                    <div className="spinner-svg"></div>
            ) : (
                        topRatedMovies.map((top) => (
                        <div className="text-center c-card" key={top.id}>
                            <MovieCard
                                release_date={top.release_date}
                                original_language={top.original_language}
                                popularity={top.popularity}
                                overview={top.overview}
                                poster_path={top.poster_path}
                                id={top.id}
                            />
                        </div>
                    ))
                    )}
                
                    </section>
        </Container>
    )
}

export default TopRatedMovies;