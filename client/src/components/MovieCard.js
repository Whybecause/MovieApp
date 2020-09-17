import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function MovieCard(props) {

    return (
        <>
            {props.value == true && props.targetId == props.id ? (
                <div className="overview-container">
                    <p className="p-overview">
                    {props.overview}
                    </p>
                </div>
            ) : (
                null
            )}
            <img alt="movie" className="movie-img" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} />
            <h3>{props.title}</h3>
            <p className="p-discret"><span role="img" aria-label="heart">💖</span>{props.popularity} | {props.release_date} | {props.original_language}</p>
            <button id={props.id} onClick={props.handleDopdownClick}>Synopsis</button>
        </>
    )
}

export default MovieCard;