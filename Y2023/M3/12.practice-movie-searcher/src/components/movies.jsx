// Custom components
import Movie from './movie'

// Styles
import styles from './movies.module.css'

export function Movies ({ movies }) {
    return (
        <div>
            <header>
                <h2>Results</h2>
            </header>
            <main className={styles.main}>
                {movies.length != 0 
                    ?
                    movies.map(movie => <Movie key={movie.id} title={movie.title} year={movie.year} poster={movie.poster} /> )
                    :
                    <div>No movies found</div>
                }
            </main>
        </div>
    )
}