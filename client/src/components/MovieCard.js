import React, { useState } from "react";

function MovieCard(props) {


    return (
        <>
            <img alt="movie" className="movie-img" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}/>
            <h3>{props.title}</h3> 
            <p className="p-discret"><span role="img" aria-label="heart">💖</span>{props.popularity} | {props.release_date} | {props.original_language}</p>          
        </>
    )
}

export default MovieCard;