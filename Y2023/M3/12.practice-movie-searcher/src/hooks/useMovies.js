// React
import { useRef } from 'react'
import { useState } from 'react'

// Services
import searchMovies from '../services/movies'

// Custom hooks
import debounce from 'just-debounce-it'

export default function useMovies () {
    console.log('render')
    const [movies, setMovies] = useState([])
    const [error, setError] = useState('')
    const lastSearch = useRef(null)
    const lastError = useRef(null)

    const setErrorTime = (error) => {
        if(lastError.current == error) return
        lastError.current = error
        setError(error)
        const timeout = setTimeout(() => {
            setError('')
            lastError.current = null
            clearTimeout(timeout)
        }, 4000)
    }

    const getMovies = async (searchParam) => {

        if(lastSearch.current == searchParam) { setErrorTime('Results here 0.o'); return }
        if(!searchParam) {setErrorTime('Type movie name'); return }

        lastSearch.current = searchParam
        try{
            const results = await searchMovies(searchParam)
            setMovies(results)
        } catch(error) {
            throw new Error(error)
        }
    }

    const getMoviesDebounce = debounce(searchParam => getMovies(searchParam), 500)

    return { getMoviesDebounce, movies, error }
}