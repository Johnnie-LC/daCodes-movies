import { useEffect, useState } from 'react'
import { type Filter, type Movie } from '../types'

export const useMoviesByFilter = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [filter, setFilter] = useState<Filter>('now_playing')
  const [page, setPage] = useState(1)

  const getMoviesByFilter = async (filter: string, page: number) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
      }
    }

    await fetch(`${import.meta.env.VITE_API_URL}/movie/${filter}?language=en-US&page=${page}`, options)
      .then(async response => await response.json())
      .then((data) => { setMovies(data.results) })
      .catch(err => { console.error(err) })
  }

  useEffect(() => {
    // Obtener las películas más recientes
    void getMoviesByFilter(filter, page)
  }, [filter, page])

  return {
    movies,
    setMovies,
    filter,
    setFilter,
    page,
    setPage
  }
}
