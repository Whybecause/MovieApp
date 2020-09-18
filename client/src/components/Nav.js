import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Form } from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';
import { Redirect } from 'react-router-dom';

import axios from "axios";

const Nav = () => {
    // Form to search a movie :
    const { register, handleSubmit } = useForm();
    const [movies, setMovies] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // FIND MOVIE
    const findMovie = async (data, e) => {
        const result = await axios.post("/api/movie", data)
        try {
            if (!result.data.movies) {
                setMessage(result.data.message);
                e.target.reset();
            }
            e.target.reset();
            console.log(result.data.movies);
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
            {/* SEARCH MOVIE FORM */}
            <Form onSubmit={handleSubmit(findMovie)} className="p-top-3 d-flex" >
                <Form.Control
                    type="text"
                    name="movie"
                    placeholder="Search a Movie"
                    ref={register({ required: true })}
                />
                {/* <Link to ="/search"> */}
                <button type="submit">Go
                </button>
                {/* </Link> */}
            </Form>

            {/* NAV BUTTONS */}
            <div className="c-nav">
                <Link to="/">
                    <button >Popular</button>
                </Link>
                <Link to="/top">
                    <button>Top Rated</button>

                </Link>
            </div>

            {/* TRANSFER DATA FROM FORM TO Search Component */}
            {movies !== undefined && movies.length >= 1 &&
                <Redirect to={{
                    pathname: "/search",
                    state: { movies: movies }
                }} />
            }
            {!movies &&
                <Redirect to={{
                    pathname: "/search",
                    state: { message: message, error: error }
                }} />
            }
        </Container>

    )
}

export default Nav;