function MoviesCard(props){
    return(
        <div className="movies-card">
            <img src={props.img} className="movie-img"></img>
            <p className="movie-name">{props.name}</p>
            <p className="movie-year">{props.year}</p>
        </div>
    );
}

export default MoviesCard;