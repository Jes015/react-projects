export default function formatMovieContrat(movies) {
    return movies.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    })
    )
}