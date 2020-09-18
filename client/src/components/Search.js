import React from "react";
import MovieCard from './MovieCard';

import { Container } from "react-bootstrap";

const Search = ({ location }) => {
    const { movies } = location.state;
    const { message } = location.state;
    const { error } = location.state;

    return (

        <Container>
            <button>filtre</button>
            {/* NUMBER OF MOVIE FOUNDED WHEN SEARCH*/}
            {movies ? (
                <div className="text-center c-pad">
                    <h3>{movies.length} results </h3>
                </div>
            ) : (
                    null
                )}
            <section className="card-container">
                {movies ? (
                    movies.map((movie) => (
                        <div className="text-center c-card" key={movie.id}>
                            <MovieCard
                                title={movie.title}
                                release_date={movie.release_date}
                                original_language={movie.original_language}
                                popularity={movie.popularity}
                                overview={movie.overview}
                                poster_path={movie.poster_path}
                                id={movie.id}
                            />
                        </div>

                    ))
                ) : (
                        <p className="alert alert-danger">{message} {error}</p>
                    )}
            </section>
        </Container>
    )
}

export default Search;