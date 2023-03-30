// Styles
import './App.css'
import './custom.css'

// Custom hooks
import useMovies from './hooks/useMovies'

// Custom components
import { Movies } from './components/movies'

function App() {

  const { getMoviesDebounce, movies, error } = useMovies()

  const handleSumbit = (event) => {
    event.preventDefault()
    getMoviesDebounce(new FormData(event.target).get('movie'))
  }
  
  const handleInput = (event) => {
    getMoviesDebounce(event.target.value)
  }

  return (
    <>
      <header className='header'>
        <h1>Movie Searcher</h1>
        <div>
          <form className='header__form' onSubmit={handleSumbit}>
            <div>
              <label htmlFor='searchInput'>Movie</label>
              <input name='movie' onInput={handleInput} id='searchInput' placeholder='Batman, superman, etc' />
            </div>
            <button>Search</button>
          </form>
          <span>{error}</span>
        </div>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
