import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Container, Form } from "react-bootstrap";

import MovieCard from './MovieCard';

const Home = () => {
    const { register, handleSubmit } = useForm();
    const [ movies, setMovies ] = useState([]);
    const [ message, setMessage ] = useState('');
    const [ error, setError ] = useState('');

    const findMovie = async (data, e) => {
        const result = await axios.post("http://localhost:8080/api/movie", data )
        try {
            if (!result.data.movies) {
                setMessage(result.data.message);
                e.target.reset();
            }
            e.target.reset();
            const allmovies = result.data.movies
            setMovies(allmovies);
        }
        catch (error) {
            setError(result.data.error);
            e.target.reset();
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(findMovie)} className="p-top-3 d-flex" >
                    <Form.Control 
                        type="text" 
                        name="movie" 
                        placeholder = "Search a Movie"
                        ref={register({ required: true })}
                        />
                <button type="submit">Go</button>
            </Form>
            <div className="text-center">
                {movies && (
                    <p>{movies.length} results</p>
                )}
            </div>
            <section className="card-container">
                {movies ? (
                    movies.map( (movie) => (
                        <div className="text-center c-card" key={movie.id}>
                            <MovieCard 
                                title={movie.title}
                                release_date={movie.release_date}
                                original_language={movie.original_language}
                                popularity={movie.popularity}
                                overview={movie.overview}
                                poster_path={movie.poster_path}
                            /> 
                        </div>
                    ))
                    ) : ( 
                        <p>{message} {error}</p>
                )}
            </section> 
        </Container>
    )
}

export default Home;