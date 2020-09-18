import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MovieCard from './MovieCard';

import axios from "axios";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    // GET POPULAR MOVIES BY DEFAULT on HOME
    async function getPopularMovies() {
        await axios.get("/api/popular")
            .then((response) => {
                setPopularMovies(response.data.results);
                setLoading(false);
                console.log(response.data.results);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e);
            })
    }

    useEffect(() => {
        getPopularMovies();
    }, []);



    return (
        <Container>
            {/* POPULAR MOVIES */}
            <h3 className="text-center c-pad">Popular Movies</h3>
            <section className="card-container">
                {loading ? (
                    <div className="spinner-svg"></div>
                ) : (
                        popularMovies.map((popular) => (
                            <div className="text-center c-card" key={popular.id} >
                                <MovieCard
                                    release_date={popular.release_date}
                                    original_language={popular.original_language}
                                    popularity={popular.popularity}
                                    overview={popular.overview}
                                    poster_path={popular.poster_path}
                                    id={popular.id}
                                />

                            </div>
                        ))
                    )}
            </section>
        </Container>

    )
}

export default Home;