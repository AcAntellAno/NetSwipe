const Movies = ({movies, Title, imdbID}) => {
    return ( 
        <div>
            <h2>{Title}</h2>
            {movies.map((movie) => (
                <h2 key={movie.imdbID}>{movie.Title}</h2>
            ))}
        </div>
     );
}
 
export default Movies;