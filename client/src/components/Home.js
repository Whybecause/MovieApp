import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Home = () => {
    const { register, handleSubmit } = useForm();
    const [ movies, setMovies ] = useState([]);
    const [ moviesLength, setMoviesLength ] = useState([]);
    const [ title, setTitle ] = useState([]);
    const [ message, setMessage ] = useState('');
    const [ error, setError ] = useState('');

    const findMovie = async (data, e) => {
        const result = await axios.post("/api/movie", data )
        try {
            if (!result.data.movies) {
                setMessage(result.data.message);
                e.target.reset();
            }
            e.target.reset();
            setMovies(result.data.movies);
            setMoviesLength(result.data.movies.length)
        }
        catch (error) {
            setError(result.data.error);
            e.target.reset();
        }
    }

  



    return (
        <Container className="">
            <Form onSubmit={handleSubmit(findMovie)} >
                <Form.Group className="text-center">
                    <Form.Control 
                        type="text" 
                        name="movie" 
                        placeholder = "Search a Movie"
                        ref={register({ required: true })}
                        />
                </Form.Group>
                <Button className="" type="submit">Submit</Button>
            </Form>
            <Row>
                {moviesLength ? (
                    <p>{moviesLength}</p>
                ) : ( 
                    <p></p>
                )}
            </Row>
            <Row>
                {movies ? (
                    movies.map( (movie) => (
                        <Col lg={4} xs={6} className="card text-center" key={movie.id}>
                            <h3>{movie.title}</h3> 
                            <p>{movie.release_date} | {movie.original_language} | {movie.popularity} </p> 
                            <p>{movie.overview}</p> 
                            <p>{movie.length}</p>

                        </Col>
                    ))
                    ) : ( 
                        <div>{message}</div>
                )}
            </Row>

            

            
                
        </Container>
    )
}

export default Home;