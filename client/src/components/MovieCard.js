import React, { useRef, useState, useEffect} from "react";

function MovieCard(props) {
    const [hoverRef, isHovered] = useHover();

    // Hook
    function useHover() {
        const [value, setValue] = useState(false);
      
        const ref = useRef(null);
      
        const handleMouseOver = () => setValue(true);
        const handleMouseOut = () => setValue(false);
      
        useEffect(
          () => {
            const node = ref.current;
            if (node) {
              node.addEventListener('mouseover', handleMouseOver);
              node.addEventListener('mouseout', handleMouseOut);
      
              return () => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
              };
            }
          },
          [ref.current] // Recall only if ref changes
        );
      
        return [ref, value];
      }
    return (
        <>
        <div ref={hoverRef}>
            {isHovered ? (
                <p>{props.overview}</p>
            ) : ( 
                <>
                <img alt="movie" className="movie-img" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} />
                <h3>{props.title}</h3>
                <p className="p-discret"><span role="img" aria-label="heart">💖</span>{props.popularity} | {props.release_date} | {props.original_language}</p>
                <button id={props.id} onClick={props.handleDopdownClick}>Synopsis</button>
                </>
            )}
        </div>
        </>
    )
}

export default MovieCard;