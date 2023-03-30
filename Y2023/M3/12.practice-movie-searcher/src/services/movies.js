// Adapters
import formatMovies from '../adapters/ports/ClientMoviePort'

const searchMovies = async (searchParam) => {
    try {
        const results = await fetch(`https://www.omdbapi.com/?apikey=74b3808a&s=${searchParam}`)

        const json = await results.json()

        if (json.Error) throw new Error('movie not found')

        return formatMovies(json.Search)
    } catch (error) {
        throw new Error(error)
    }
}

export default searchMovies
